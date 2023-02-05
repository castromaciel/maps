import { useContext } from 'react'
import {
  Loading, LocationButton, MapView, SearchBar
} from '../components'
import { PlacesContext } from '../context'

const Home = () => {
  const { isLoading } = useContext(PlacesContext)
  
  if (isLoading) return <Loading />

  return (
    <div>
      <MapView />
      <SearchBar />
      <LocationButton />
    </div>
  ) 
}

export default Home
