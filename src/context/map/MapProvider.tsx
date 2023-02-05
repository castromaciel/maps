import {
  AnySourceData,
  LngLatBounds, Map, Marker, Popup
} from 'mapbox-gl'
import {
  FC, ReactNode, useCallback, useContext, useEffect, useMemo, useReducer
} from 'react'
import { directionsApi } from '../../apis'
import { DirectionsResponse } from '../../interfaces/directions'
import { PlacesContext } from '../places/PlacesContext'
import { formatDistanceToKms, formatSecToMinutes, generateNewMarkers } from './helpers'
import { MapContext } from './MapContext'
import { mapReducer } from './mapReducer'

export interface MapState {
  isMapReady: boolean
  map?: Map

  markers: Marker[]
}

interface IMapProvider {
  children: ReactNode | ReactNode[]
}

const INITIAL_STATE: MapState = {
  isMapReady: false,
  map: undefined,
  markers: []
}

export const MapProvider: FC<IMapProvider> = ({ children }) => {
  const [state, dispatch] = useReducer(mapReducer, INITIAL_STATE)
  const { places } = useContext(PlacesContext)

  useEffect(() => {
    state.markers.forEach((marker) => { marker.remove() })
    const newMarkers: Marker[] = generateNewMarkers({ places, state })
    dispatch({ type: 'setMarkers', payload: newMarkers })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [places])

  const setMap = (map: Map) => {
    const myLocationPopup = new Popup()
      .setHTML(`
        <h4>You are here</h4>
        <p>Somewhere in the world...</p>
      `)

    new Marker()
      .setLngLat(map.getCenter())
      .setPopup(myLocationPopup)
      .addTo(map)

    dispatch({ type: 'setMap', payload: map })
  }

  interface GetRouteBetweenPointsProps {
    start: [number, number]
    end: [number, number]
  }
  
  const getRouteBetweenPoints = useCallback(async ({
    end, start
  }: GetRouteBetweenPointsProps) => {
    const response = await directionsApi.get<DirectionsResponse>(`/${start.join(',')};${end.join(',')}`)

    if (response.data.code === 'NoRoute') {
      alert(response.data.message)
      return
    } 

    const { distance, duration, geometry } = response.data.routes[0]
    const { coordinates: coords } = geometry

    // TODO: show distance and duration at Dialog
    const distanceInKms = formatDistanceToKms(distance)
    const minutes = formatSecToMinutes(duration)

    const bounds = new LngLatBounds(
      start,
      start
    )

    for (const coord of coords) {
      const newCoord: [number, number] = [coord[0], coord[1]]
      bounds.extend(newCoord)
    }

    state.map?.fitBounds(bounds, {
      padding: 200
    })

    // !Polyline

    const sourceData: AnySourceData = {
      type: 'geojson',
      data: { 
        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature',
            properties: {},
            geometry: {
              type: 'LineString',
              coordinates: coords
            }
          }
        ]
      }
    }

    if (state.map?.getLayer('RouteString')) {
      state.map?.removeLayer('RouteString')
      state.map?.removeSource('RouteString')
    }

    state.map?.addSource('RouteString', sourceData)
    state.map?.addLayer({
      id: 'RouteString',
      type: 'line',
      source: 'RouteString',
      layout: {
        'line-cap': 'round',
        'line-join': 'round'
      },
      paint: {
        'line-color': 'black',
        'line-width': 3
      }
    })
  }, [state.map])

  const value = useMemo(() => ({
    ...state, setMap, getRouteBetweenPoints
  }), [getRouteBetweenPoints, state])
  
  return (
    <MapContext.Provider value={value}>
      { children }
    </MapContext.Provider>
  )
}
