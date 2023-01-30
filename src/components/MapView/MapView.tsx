import { Map } from 'mapbox-gl'
import { useContext, useLayoutEffect, useRef } from 'react'
import { MapContext, PlacesContext } from '../../context'
import Loading from '../Loading/Loading'
import styles from './MapView.module.scss'

const MapView = () => {
  const { isLoading, userLocation } = useContext(PlacesContext)
  const { setMap } = useContext(MapContext)
  const mapContainer = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    if (!isLoading) {
      const map = new Map({
        container: mapContainer.current!,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: userLocation,
        zoom: 14
      })
      setMap(map)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading])

  if (isLoading) return <Loading />

  return (
    <div
      ref={mapContainer}
      className={`${styles.mapContainer}`}
    />
  ) 
}

export default MapView
