// export default function( {dispatch}) {  // note: top function passed object with multiple properties but we only care about dispatch
//     return function(next) {     // next is function => next middleware in the chain
//         return function(action) {
//         }
//     }
// }

export default ( {dispatch}) => next => action => {
    // if no payload or payload not promise, send to next middleware
    if (!action.payload || !action.payload.then) {
        return next(action);
    }

    action.payload.then( function (response) {
        const newAction = {...action, payload:response };
        dispatch(newAction);
    });
}
