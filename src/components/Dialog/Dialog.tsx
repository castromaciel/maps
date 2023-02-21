import { useContext } from 'react'
import { MapContext } from '../../context'
import styles from './Dialog.module.scss'

const Dialog = () => {
  const { dialogState } = useContext(MapContext)
  
  if (!dialogState?.distance) return null

  return (
    <div className={`${styles.card}`}>
      <p>
        {dialogState.distance}
        {' '}
        km
      </p>
      <p>
        {dialogState.time}
        {' '}
        mins
      </p>
    </div>
  )
}

export default Dialog
