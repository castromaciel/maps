import { useContext, useState } from 'react'
import { PlacesContext } from '../../context'
import { SearchResultsItem, SkeletonPlaces } from '../index'

const SearchResults = () => {
  const { places, isLoadingPlaces } = useContext(PlacesContext)
  const [activeId, setActiveId] = useState('')

  const params = {
    activeId,
    setActiveId
  }

  if (isLoadingPlaces) return <SkeletonPlaces length={3} />

  if (places.length === 0) return <div />

  return (
    <ul className="list-group mt-3">
      {
        places.map((place) => (<SearchResultsItem key={place.id} place={place} {...params} />))
      }
    </ul>
  )
}

export default SearchResults
