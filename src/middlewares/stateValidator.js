import tv4 from 'tv4';
import stateSchema from './stateSchema';

// middleware to validate redux store.  After an action completes, it does validation.
export default ( {dispatch, getState}) => next => action => {
    next(action);

    if (!tv4.validate(getState(), stateSchema)) {
        console.warn(`Invalid state detected after ${action.type}`);
    };
}