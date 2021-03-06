const logger = store => next => action => {
  if(action.type) {
    console.group(action.type);
    console.info('dispatching', action);
    console.log('next state', store.getState());
    console.groupEnd();
  }
  return next(action);
};

export default logger;