import React from 'react';
import './App.css';
import TopBar from './components/TopBar';
import Product from './components/Product';
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart'
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      product: []
    }
  }

  handleProduct = (prodObj) => {
    console.log(prodObj)
    this.setState({
      product: prodObj
    })
  }
  
  render() {
  return (
    <div className="App">
        
        <Router>
        <TopBar />
          <Route exact path="/" component={Home} />
          <Route exact path="/products" 
            render={() => <Products handleProduct={this.handleProduct} />
            } />
          <Route path="/products/product" render={() => <Product product={this.state.product} />} />
          <Route path="/cart" component={Cart} />
        </Router>
    </div>
  );
}
}

export default App;
