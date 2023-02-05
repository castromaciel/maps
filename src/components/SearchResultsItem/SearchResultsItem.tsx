/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import {
  Dispatch, FC, SetStateAction, useContext
} from 'react'
import { MapContext } from '../../context'
import { Feature } from '../../interfaces/places'
import styles from './SearchResultsItem.module.scss'

interface Props {
  place: Feature
  activeId: string
  setActiveId: Dispatch<SetStateAction<string>>
}

const SearchResultsItem: FC<Props> = ({ place, activeId, setActiveId }) => {
  const { map } = useContext(MapContext)

  const onPlaceClicked = (selectedPlace: Feature) => {
    const [lng, lat] = selectedPlace.center
    map?.flyTo({
      zoom: 14,
      center: [lng, lat]
    })
    setActiveId(place.id)
  }

  return (
    <li
      key={place.id}
      className={`${activeId === place.id ? styles.active : ''} list-group-item ${styles.pointer}`}
      onClick={() => onPlaceClicked(place)}
    >
      <h6>{place.text}</h6>
      <p style={{ fontSize: 12 }}>{place.place_name}</p>
      <button
        type="button"
        className={`${activeId === place.id ? 'btn-outline-light' : 'btn-outline-dark'} btn `}
      >
        Direcciones
      </button>
    </li>
  ) 
}

export default SearchResultsItem
