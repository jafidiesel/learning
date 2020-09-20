import { createStore } from 'redux';

// importy the root reducer
import rootReducer from './reducers/index';

import comments from './data/comments';
import posts from './data/posts';

// create an object for the default data

const defaultState = {
    posts,
    comments
}

const store = createStore(rootReducer, defaultState);


export default store;