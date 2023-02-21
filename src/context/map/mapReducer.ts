import { Map, Marker } from 'mapbox-gl'
import { DialogState, MapState } from './MapProvider'

type MapAction = 
| { type: 'setMap', payload: Map }
| { type: 'setMarkers', payload: Marker[] }
| { type: 'setDialog', payload: DialogState}

export const mapReducer = (state: MapState, action: MapAction):MapState => {
  switch (action.type) {
    case 'setMap':
      return {
        ...state,
        isMapReady: true,
        map: action.payload
      }

    case 'setMarkers':
      return {
        ...state,
        markers: action.payload
      }

    case 'setDialog':
      return {
        ...state,
        dialogState: action.payload
      }

    default:
      return state
  }
}
