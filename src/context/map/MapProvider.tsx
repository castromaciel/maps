import { Map, Marker, Popup } from 'mapbox-gl'
import {
  FC, ReactNode, useContext, useEffect, useMemo, useReducer
} from 'react'
import { PlacesContext } from '../places/PlacesContext'
import { generateNewMarkers } from './helpers'
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

  const value = useMemo(() => ({ ...state, setMap }), [state])
  
  return (
    <MapContext.Provider value={value}>
      { children }
    </MapContext.Provider>
  )
}
