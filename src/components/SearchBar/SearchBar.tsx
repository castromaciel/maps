import { ChangeEvent, useRef } from 'react'
import styles from './SearchBar.module.scss'

const SearchBar = () => {
  const debounceRef = useRef<NodeJS.Timeout>()
  
  const onQueryChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (debounceRef.current) clearTimeout(debounceRef.current)
    
    debounceRef.current = setTimeout(() => {
      console.log('debounce value', event.target.value)
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
