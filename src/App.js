import React from 'react';
import {Switch,  Route} from 'react-router-dom'
import './App.css';
import Header from './containers/Header';
import ProductDetails from './containers/ProductDetails';
import ProductList from './containers/ProductList'

function App() {
  return (
    <div className="App">
    
    
    <Header />
      <Switch>
      <Route path='/' exact component={ProductList} />
      <Route path='/product/:productId' exact component={ProductDetails}/>
      <Route >404 Not Found</Route>
      </Switch>
     
     
    </div>
  );
}

export default App;
