const reducer = (state = 5) => {
  return state;
};

// creating a Redux store

const store = Redux.createStore(reducer);

// use getState() to retrieve state from the store

const currentState = store.getState();

// define a Redux Action
// must have a type property
const action = {
  type: 'LOGIN',
};

// more examples

// add actionCreator as 'fazerLogin'
// actions MUST have a type property

const fazerLogin = (email) => ({
  type: 'LOGIN',
  email,
});

// to reduce anotherReducer size, we create INITIAL_STATE

const INITIAL_STATE = {
  login: false,
  email: '',
};

const anotherReducer = (anotherStore = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'LOGIN':
    return {
      ...anotherStore,
      login: !state.login, // !false === true
      email: action.email,
    };
    default:
      return anotherStore;
  }
};

const anotherStore = Redux.createStore(anotherReducer);

anotherStore.dispatch(fazerLogin('alguem@email.com'));

console.log(anotherStore.getState());
// { login: true, email: 'alguem@email.com' }
