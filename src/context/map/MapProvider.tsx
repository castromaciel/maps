import { Map } from 'mapbox-gl'
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
    dispatch({ type: 'setMap', payload: map })
  }

  const value = useMemo(() => ({ ...state, setMap }), [state])
  
  return (
    <MapContext.Provider value={value}>
      { children }
    </MapContext.Provider>
  )
}
