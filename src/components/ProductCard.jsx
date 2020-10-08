import React from 'react';

class ProductCard extends React.Component {

  render() {

    console.log(this.props)


  return (

    <div 
        className="card active">
		<a href={`http://localhost:3001/products/product/${this.props.product.id}`}><img src={this.props.product.images[0]['url']} alt="" /></a>
		<h5>{this.props.product.title }</h5>
		<small>${this.props.product.price}.00</small>

        </div>

    )}
  }

export default ProductCard;