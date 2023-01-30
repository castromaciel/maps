import mapboxgl from 'mapbox-gl'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import MapsApp from './MapsApp'

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN!

if (!navigator.geolocation) {
  alert('Your browser does not support geolocation')
  throw new Error('Your browser does not support geolocation')
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>
)
