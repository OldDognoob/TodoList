import React from 'react';
import ReactDOM from 'react-dom';
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

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


