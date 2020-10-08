import React from 'react';
import ProductCard from './ProductCard'

class ProductContainer extends React.Component {
	
  render() {
  return (

	<div className="cards">

	{ this.props.products.map((product) => {
		return (
			<ProductCard 
			key={product.id}
			product={product}
			handleProduct={this.props.handleProduct}
			/>

		) 
	})
}

    </div>
    )}
  }

export default ProductContainer;
  
