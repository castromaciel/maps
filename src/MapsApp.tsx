import { MapProvider, PlacesProvider } from './context'
import { Home } from './screens'

const MapsApp = () => (
  <PlacesProvider>
    <MapProvider>
      <Home />
    </MapProvider>
  </PlacesProvider>
)

export default MapsApp
