import { createStore, combineReducers } from 'redux';

import postsReducer from './postsReducer';
import usersReducer from './usersReducer';
import contactsReducer from './contactsReducer';

let rootReducer = combineReducers({
  posts: postsReducer,
  users: usersReducer,
  contacts: contactsReducer,
});

export type RootReducerType = ReturnType<typeof rootReducer>;

let store = createStore(rootReducer);

export default store;
