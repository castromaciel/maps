import { FC } from 'react'
import { Feature } from '../../interfaces/places'

const SearchResultsItem: FC<{place: Feature}> = ({ place }) => (
  <li key={place.id} className="list-group-item list-group-item-action">
    <h6>{place.text}</h6>
    <p className="text-muted" style={{ fontSize: 12 }}>{place.place_name}</p>
    <button type="button" className="btn btn-outline-dark">
      Direcciones
    </button>
  </li>
)

export default SearchResultsItem
