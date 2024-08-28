import { configureStore } from '@reduxjs/toolkit'
import MovieReducer from './reducers/MovieSlice'
import TvReducer from './reducers/TvSlice'
import PeopleReducer from './reducers/PeopleSlice'

export const store = configureStore({
  reducer: {
    movie : MovieReducer,
    tv : TvReducer,
    people : PeopleReducer,
  },
})