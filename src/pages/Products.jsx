import React from 'react';
import ProductContainer from '../components/ProductContainer';


class Products extends React.Component {

  constructor() {
		super()
		this.state = {
			products: []
		}
	}

  componentDidMount() {
		const url = "http://localhost:3000/items";
		fetch(url)
		.then(resp => resp.json())
		.then(productsObj => {
			this.setState({
				products: productsObj
			})
			console.log(this.state.products)
		})
	}

  render(){

    console.log(this.props.handleProduct)
  return (
    <div className="App">
      <br /><br />
      <h2>Shop</h2>
      
        <ProductContainer 
        products={this.state.products}
        handleProduct={this.props.handleProduct}
         />

    </div>
  );
}
}

export default Products;
