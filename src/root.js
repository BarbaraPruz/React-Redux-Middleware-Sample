import React from 'react';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import async from 'middlewares/async';
import stateValidator from 'middlewares/stateValidator';
import reducers from 'reducers';  // defaults to index.js (from reducers folder)

// initialState required for tests with setup that needs to specify redux state
export default ( {children, initialState={}}) => {
    const store = createStore(
        reducers,
        initialState,
        applyMiddleware(async,stateValidator)
    );

    return (
        <Provider store={store} >
            {children}
        </Provider> 
    );
};