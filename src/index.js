import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';


// import {createStore} from 'redux';
// import reducers from './redux/reducers/index';
import { Provider } from 'react-redux';
import store from "./redux/Store";


// const store = createStore(
//   reducers,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  
//   );




ReactDOM.render(
  <Router> 
<React.StrictMode> 
  
    <Provider store={store} > 
  
    <App />
  
  
   </Provider>
   </React.StrictMode>
   </Router>,
  document.getElementById('root')
);
