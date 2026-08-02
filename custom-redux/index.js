// Mini Redux Implementation

/**
 * Creates a Redux store that holds the state tree.
 * @param {Function} reducer A function that returns the next state tree.
 * @param {any} preloadedState The initial state.
 * @param {Function} enhancer Optional function to enhance the store.
 * @returns {Object} A Redux store.
 */
function createStore(reducer, preloadedState, enhancer) {
  // Handle optional arguments
  if (typeof preloadedState === "function" && typeof enhancer === "undefined") {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  // Apply enhancer if provided
  if (typeof enhancer === "function") {
    return enhancer(createStore)(reducer, preloadedState);
  }

  // Initialize state
  let currentState = preloadedState;
  let currentReducer = reducer;
  let listeners = [];
  let isDispatching = false;

  /**
   * Gets the current state tree.
   * @returns {any} The current state tree.
   */
  function getState() {
    if (isDispatching) {
      throw new Error("Cannot call getState() while reducers are executing");
    }
    return currentState;
  }

  /**
   * Dispatches an action to change the state.
   * @param {Object} action A plain object representing a change.
   * @returns {Object} The action that was dispatched.
   */
  function dispatch(action) {
    if (!action || typeof action !== "object") {
      throw new Error("Actions must be plain objects");
    }

    if (typeof action.type === "undefined") {
      throw new Error("Actions must have a type property");
    }

    if (isDispatching) {
      throw new Error("Reducers may not dispatch actions");
    }

    try {
      isDispatching = true;
      // Call the reducer to get the next state
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    // Notify all subscribers
    listeners.forEach((listener) => listener());

    return action;
  }

  /**
   * Adds a listener to be called after every dispatch.
   * @param {Function} listener A callback to be invoked on state change.
   * @returns {Function} A function to remove this listener.
   */
  function subscribe(listener) {
    if (typeof listener !== "function") {
      throw new Error("Listener must be a function");
    }

    if (isDispatching) {
      throw new Error("Cannot subscribe while dispatchers are executing");
    }

    listeners.push(listener);

    // Return unsubscribe function
    return function unsubscribe() {
      if (isDispatching) {
        throw new Error("Cannot unsubscribe while dispatchers are executing");
      }

      const index = listeners.indexOf(listener);
      listeners.splice(index, 1);
    };
  }

  /**
   * Replaces the current reducer function.
   * @param {Function} nextReducer The new reducer function.
   */
  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== "function") {
      throw new Error("Expected the nextReducer to be a function");
    }

    currentReducer = nextReducer;
    // Dispatch an action to initialize the new reducer
    dispatch({ type: "@@redux/INIT" });
  }

  // Initialize the store by dispatching a dummy action
  dispatch({ type: "@@redux/INIT" });

  return {
    getState,
    dispatch,
    subscribe,
    replaceReducer,
  };
}

/**
 * Combines multiple reducers into a single reducing function.
 * @param {Object} reducers An object of reducer functions.
 * @returns {Function} A reducer function.
 */
function combineReducers(reducers) {
  // Get the final shape of the state
  const reducerKeys = Object.keys(reducers);

  // Return a root reducer function
  return function combination(state = {}, action) {
    let hasChanged = false;
    const nextState = {};

    for (let i = 0; i < reducerKeys.length; i++) {
      const key = reducerKeys[i];
      const reducer = reducers[key];
      const previousStateForKey = state[key];
      const nextStateForKey = reducer(previousStateForKey, action);

      nextState[key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }

    return hasChanged ? nextState : state;
  };
}

/**
 * Creates a middleware that helps with async actions.
 */
function applyMiddleware(...middlewares) {
  return (createStore) => (reducer, preloadedState) => {
    const store = createStore(reducer, preloadedState);
    let dispatch = store.dispatch;

    const middlewareAPI = {
      getState: store.getState,
      dispatch: (action) => dispatch(action),
    };

    const chain = middlewares.map((middleware) => middleware(middlewareAPI));
    dispatch = chain.reduce(
      (a, b) =>
        (...args) =>
          a(b(...args))
    )(dispatch);

    return {
      ...store,
      dispatch,
    };
  };
}

// Export the Redux API
const Redux = {
  createStore,
  combineReducers,
  applyMiddleware,
};

// Example usage of the custom Redux implementation
// Define action types
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const ADD_TODO = "ADD_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";

// Action creators
function increment() {
  return { type: INCREMENT };
}

function decrement() {
  return { type: DECREMENT };
}

function addTodo(text) {
  return {
    type: ADD_TODO,
    payload: { text, id: Date.now() },
  };
}

function toggleTodo(id) {
  return {
    type: TOGGLE_TODO,
    payload: { id },
  };
}

// Reducers
function counterReducer(state = 0, action) {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
}

function todosReducer(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.payload.id,
          text: action.payload.text,
          completed: false,
        },
      ];
    case TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === action.payload.id ? { ...todo, completed: !todo.completed } : todo
      );
    default:
      return state;
  }
}

// Combine reducers
const rootReducer = combineReducers({
  counter: counterReducer,
  todos: todosReducer,
});

// Create a logger middleware
const logger = (store) => (next) => (action) => {
  console.log("dispatching", action);
  const result = next(action);
  console.log("next state", store.getState());
  return result;
};

// Apply middleware
const enhancer = applyMiddleware(logger);

// Create the store
const store = createStore(rootReducer, enhancer);

// Subscribe to changes
const unsubscribe = store.subscribe(() => {
  console.log("State updated:", store.getState());
});

// Dispatch actions
console.log("Initial state:", store.getState());

store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());

store.dispatch(addTodo("Learn Redux"));
store.dispatch(addTodo("Build something"));
store.dispatch(toggleTodo(store.getState().todos[0].id));

// Stop listening to state updates
unsubscribe();

// Final state
console.log("Final state:", store.getState());
