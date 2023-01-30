import { useContext } from 'react'
import { PlacesContext } from '../../context'
import Loading from '../Loading/Loading'

const MapView = () => {
  const { isLoading, userLocation } = useContext(PlacesContext)

  if (isLoading) return <Loading />

  return (
    <div>
      <p>
        Latitude:
        {' '}
        {userLocation?.[0]}
        {' '}
      </p>
      <p>
        Longitude :
        {' '}
        {userLocation?.[0]}
      </p>
    </div>
  ) 
}

export default MapView
