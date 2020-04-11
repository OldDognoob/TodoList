import React from 'react';
import ReactDOM from 'react-dom';
import {combineReducers,createStore} from 'redux';
import {Provider} from 'react-redux'
import {formReducer, todoReducer} from './state/reducer';
import './index.css';
import App from './App';

//STEP 1 Design the state needed for the app
const initialState={
  formValues:{
   todoList:[],
   task:"",
  },
  todos: [
    {
      id:3829875789,
      item:'Learn about reducers',
      completed:false
    },
    {
      id:234234234,
      item:'Learn about redux',
      completed:false
    },
  ]
}

//STEP 4 Use combine reducers to make a monster reducer
const combineReducer = combineReducers({
  formValues:formReducer,
  todos: todoReducer,
})
//STEP 5 Use create store to make a redux store
const store = createStore(
  combineReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()
)


ReactDOM.render(
  // STEP 6 Wrap the application with a provider from react-redux
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


