import { compose, createStore } from 'redux';

// importy the root reducer
import rootReducer from './reducers/index';

import comments from './data/comments';
import posts from './data/posts';

// create an object for the default data

const defaultState = {
    posts,
    comments
}

const enhancers = compose(
    window.devToolExtension ? window.devToolExtension() : f => f
);

const store = createStore(rootReducer, defaultState, enhancers);

// this enable hot reload on reducers
if(module.hot){
    module.hot.accept('./reducers/', ()=>{
        const nextRootReducer = require('./reducers/index').default;
        store.replaceReducer(nextRootReducer);
    })
}

export default store;