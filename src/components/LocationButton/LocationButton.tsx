import { useContext } from 'react'
import { MapContext, PlacesContext } from '../../context'

const LocationButton = () => {
  const { isMapReady, map } = useContext(MapContext)
  const { userLocation } = useContext(PlacesContext)
  const handleClick = () => {
    if (!isMapReady) throw new Error('Map is not ready')
    if (!userLocation) throw new Error('There is no user location')

    map?.flyTo({
      center: userLocation,
      zoom: 14
    })
  }
  return (
    <button
      type="button"
      className="btn btn-dark"
      style={{
        position: 'fixed',
        top: 20,
        right: 20,
        zIndex: 100
      }}
      onClick={handleClick}
    >
      Mi ubicación
    </button>
  ) 
}

export default LocationButton
