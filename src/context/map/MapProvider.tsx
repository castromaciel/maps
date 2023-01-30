import { Map, Marker, Popup } from 'mapbox-gl'
import {
  FC, ReactNode, useMemo, useReducer
} from 'react'
import { MapContext } from './MapContext'
import { mapReducer } from './mapReducer'

export interface MapState {
  isMapReady: boolean
  map?: Map

}

interface IMapProvider {
  children: ReactNode | ReactNode[]
}

const INITIAL_STATE: MapState = {
  isMapReady: false,
  map: undefined
}

export const MapProvider: FC<IMapProvider> = ({ children }) => {
  const [state, dispatch] = useReducer(mapReducer, INITIAL_STATE)

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
