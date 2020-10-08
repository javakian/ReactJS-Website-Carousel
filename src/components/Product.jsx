import React from 'react';
import Button from 'react-bootstrap/Button';

class Product extends React.Component {
  constructor() {
    super()
    this.state = {
      product: []
    }
  }

 
 componentDidMount() {
  let productId = window.location.href.split('/')[window.location.href.split('/').length-1]

   fetch(`http://localhost:3000/items/${productId}`)
   .then(resp => resp.json())
   .then(productObj => {
     this.setState({
       product: productObj
     })
   })
 }

 handleAddtoCart = (addProduct) => {
  fetch("http://localhost:3000/cart_items", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: "application/json"
    },
    body: JSON.stringify({
      cart_id: 1,
      item_id: addProduct.id
    })
  }).then(resp => resp.json())
  .then(newCartObj => {
    let notif = document.querySelector('.success')
    notif.innerText = "Success! Added to Cart."
  })
 }

 render() {
  return (
    <div className="App">
       <br /><br />
      <h2>Shop</h2>
    
      <div 
        className="card details">
		<img src={this.state.product.images !== undefined ? this.state.product.images[0]['url'] : "hey" } alt="" />
		<h5>{this.state.product.title}</h5>
		<small>${this.state.product.price}.00</small>

      <Button className="success"
              onClick={() => this.handleAddtoCart(this.state.product)}>Add to Cart</Button>
            </div>


    </div>
  );
}
}

export default Product;
