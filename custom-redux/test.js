function createDataStore(initialData, enhancer) {
  let state = initialData;

  const getState = () => {
    return state;
  };

  const dispatch = (action) => {};

  return {
    getState,
    dispatch,
    subscribe,
    unsubscribe,
  };
}
