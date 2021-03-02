import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counter/counterSlice'
import postsReducer from './features/posts/postsSlice'
import communitiesReducer from './features/posts/comunitiesSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    posts: postsReducer,
    communities: communitiesReducer,
  }
})