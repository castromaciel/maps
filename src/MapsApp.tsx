import { PlacesProvider } from './context'
import { Home } from './screens'

const MapsApp = () => (
  <PlacesProvider>
    <Home />
  </PlacesProvider>
)

export default MapsApp
