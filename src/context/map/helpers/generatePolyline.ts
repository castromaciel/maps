import { AnySourceData } from 'mapbox-gl'
import { MapState } from '../MapProvider'

export const generatePolyline = (coords: number [][], state: MapState) => {
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
}
