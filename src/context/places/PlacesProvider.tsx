import {
  FC, ReactNode, useEffect, useReducer
} from 'react'
import { getUserLocation } from '../../helpers'
import { PlacesContext } from './PlacesContext'
import { placesReducer } from './placesReducer'

export interface PlacesState {
  isLoading: boolean
  userLocation?: [number, number]
}

interface IPlacesProvider {
  children: ReactNode | ReactNode[]
}

const INITIAL_STATE: PlacesState = {
  isLoading: true,
  userLocation: undefined
}

export const PlacesProvider: FC<IPlacesProvider> = ({ children }) => {
  const [state, dispatch] = useReducer(placesReducer, INITIAL_STATE)

  useEffect(() => {
    getUserLocation()
      .then((coords) => dispatch({ type: 'setUserLocation', payload: coords }))
  }, [])  

  return (
    <PlacesContext.Provider value={state}>
      { children }
    </PlacesContext.Provider>
  ) 
}
