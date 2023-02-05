import { LngLatBounds } from 'mapbox-gl'
import { MapState } from '../MapProvider'

interface GenerateBoundsProps {
  coords: number[][]
  bounds: LngLatBounds
  state: MapState
}

export const generateBounds = ({
  bounds, coords, state
}: GenerateBoundsProps) => {
  coords.forEach(
    (coord) => {
      const newCoord: [number, number] = [coord[0], coord[1]]
      bounds.extend(newCoord)
    }
  )
  state.map?.fitBounds(bounds, {
    padding: 200
  })
}
