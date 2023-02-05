import {
  FC, ReactNode, useCallback, useEffect, useMemo, useReducer
} from 'react'
import { searchApi } from '../../apis'
import { getUserLocation } from '../../helpers'
import { Feature, PlacesResponse } from '../../interfaces/places'
import { PlacesContext } from './PlacesContext'
import { placesReducer } from './placesReducer'

export interface PlacesState {
  isLoading: boolean
  userLocation?: [number, number]
  isLoadingPlaces: boolean
  places: Feature []
}

interface IPlacesProvider {
  children: ReactNode | ReactNode[]
}

const INITIAL_STATE: PlacesState = {
  isLoading: true,
  userLocation: undefined,
  isLoadingPlaces: false,
  places: []
}

export const PlacesProvider: FC<IPlacesProvider> = ({ children }) => {
  const [state, dispatch] = useReducer(placesReducer, INITIAL_STATE)

  useEffect(() => {
    getUserLocation()
      .then((coords) => dispatch({ type: 'setUserLocation', payload: coords }))
  }, [])

  const searchPlacesByQuery = useCallback(async (query: string):Promise<Feature[]> => {
    if (query.length === 0) {
      dispatch({ type: 'setPlaces', payload: [] })
      return [] 
    }
    if (!state.userLocation) throw new Error('Ther is no user location')

    dispatch({ type: 'setLoadingPlaces' })
    
    const response = await searchApi.get<PlacesResponse>(`/${query}.json`, {
      params: {
        proximity: state.userLocation.join(',')
      }
    })
    
    dispatch({ type: 'setPlaces', payload: response.data.features })
    return response.data.features
  }, [state.userLocation])

  const value = useMemo(() => ({
    ...state, searchPlacesByQuery
  }), [searchPlacesByQuery, state])

  return (
    <PlacesContext.Provider value={value}>
      { children }
    </PlacesContext.Provider>
  ) 
}
