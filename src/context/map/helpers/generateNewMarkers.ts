import { Marker, Popup } from 'mapbox-gl'
import { Feature } from '../../../interfaces/places'
import { MapState } from '../MapProvider'

interface GenerateMarkerProps {
  // newMarkers: Marker[]
  places: Feature[]
  state: MapState
}

export const generateNewMarkers = ({
  places, state
}: GenerateMarkerProps): Marker[] => places.map((place) => {
  const [lng, lat] = place.center
  const popup = new Popup()
    .setHTML(`
      <h6>${place.text}</h6>
      <p>${place.place_name}</p>`)

  return new Marker()
    .setPopup(popup)
    .setLngLat([lng, lat])
    .addTo(state.map!)
})
