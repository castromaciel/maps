import { Map } from 'mapbox-gl'
import { createContext } from 'react'
import { DialogState } from './MapProvider'

interface GetRouteBetweenPointsProps {
  start: [number, number]
  end: [number, number]
}
export interface MapContextProps {
  isMapReady: boolean
  map?: Map

  setMap: (map: Map) => void
  getRouteBetweenPoints: ({ end, start }: GetRouteBetweenPointsProps) => Promise<void>
  dialogState: DialogState
}

export const MapContext = createContext({} as MapContextProps)
