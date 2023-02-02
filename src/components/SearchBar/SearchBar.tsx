import { ChangeEvent, useContext, useRef } from 'react'
import { PlacesContext } from '../../context'
import styles from './SearchBar.module.scss'

const SearchBar = () => {
  const { searchPlacesByQuery } = useContext(PlacesContext)

  const debounceRef = useRef<NodeJS.Timeout>()
  
  const onQueryChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (debounceRef.current) clearTimeout(debounceRef.current)
    
    debounceRef.current = setTimeout(() => {
      searchPlacesByQuery(event.target.value)
    }, 1000)
  }

  return (
    <div className={`${styles.searchContainer}`}>
      <input
        type="text"
        className="form-control" 
        placeholder="Buscar lugar"
        onChange={onQueryChange}
      />
    </div>
  )
}

export default SearchBar
