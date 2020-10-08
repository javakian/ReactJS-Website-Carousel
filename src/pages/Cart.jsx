import React from 'react';
import Button from 'react-bootstrap/Button';

import 'bootstrap/dist/css/bootstrap.min.css';

class Cart extends React.Component {

    constructor() {
        super()
        this.state = {
            myCart: [],
            myJoiners: []
        }
    }

    // create a helper method that identifies this cart's specific joiners
    // method 1: create a new component just for the joiner instaces (cartItems)
    // in the state, create an array of that cart's joiner instances
    // pass this down as props to the new joiner component

    // example:
    // cart.id = 1

    fetchJoiner = () => {
        fetch("http://localhost:3000/cart_items")
        .then(resp => resp.json())
        .then(joinersObj => {
            this.setState({ 
                myJoiners: joinersObj }) 
         })
    }

    // if (cart.id === this.state.cart) {
    //     this.props.joiners.map((joiner) => {
    //         newArray.push(joiner.cart_id === cart.id)
    //     })
    // }

    // delete function

    // fetch("URL/joiner.id")
    // .then(r => r.json())
    // .then("remove that joiner from the frontend")

    componentDidMount() {

        fetch('http://localhost:3000/carts/1/')
        .then(resp => resp.json())
        .then(cartObj => {
            this.setState({
                myCart: cartObj
            })
        })

        fetch("http://localhost:3000/cart_items")
        .then(resp => resp.json())
        .then(joinersObj => {
            this.setState({ 
                myJoiners: joinersObj }) 
         })


    }

    handleRemoveItem = (id) => {
        let removeOnDom = document.getElementById(`${id}`)
        let removeButton = document.getElementById(`chngCheckout`)
        this.state.myJoiners.map(joiner => {
            if (joiner.item.id === id) {
                fetch(`http://localhost:3000/cart_items/${joiner.id}`, {
                    method: 'DELETE'
                })
                .then(resp => resp.json())
                .then(newArray => {
                   removeOnDom.remove()
                   removeButton.innerHTML = "Cart is empty!"
                })
            }
        })
    }

       



  render() {
      let counter = 0
  return (
    <div className="myCartFormat">
        <br /><br />
        <h5>Your Cart</h5><br />
        


            { this.state.myCart.items !== undefined ? this.state.myCart.items.map((arrayInCart) => {
                return (
                    
                        <table id={arrayInCart.id} className="cart" key={arrayInCart.id}>
                            <thead>
                        <tr>
                    <th>Item #</th>
                    <th>Product</th>
                    <th>Price</th>
                    <th> </th>
                    </tr></thead>
                    <tbody>
                <tr>
                    <td>{counter += 1}</td>
                    <td> {arrayInCart.title} </td>
                    <td> ${arrayInCart.price}.00 </td>
                    <td> <Button onClick={() => this.handleRemoveItem(arrayInCart.id)}>Remove Item</Button> </td>
                </tr></tbody>
                </table>
                     )
            }) :
            "Cart is loading..." }

                
                    { Array.isArray(this.state.myCart.items) && this.state.myCart.items.length ? <center><Button id="chngCheckout">Checkout</Button></center> : <center><Button>Cart is empty!</Button></center> 
                   }

    </div>
  );
}
}

export default Cart;