import { createStore, combineReducers } from 'redux';

import postsReducer from './postsReducer';
import usersReducer from './usersReducer';

let rootReducer = combineReducers({
  posts: postsReducer,
  users: usersReducer,
});

export type RootReducerType = ReturnType<typeof rootReducer>;

let store = createStore(rootReducer);

export default store;
