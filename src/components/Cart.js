import React, { useState } from "react";

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
    React.useEffect( () => {
        setCartItems(JSON.parse(localStorage.getItem('CartItems')))       
        }, []
    )

    const handleCheckout = () => {
        let total= 0;
        cartItems.map((item) => {
            total = total + item.productPrice
        })
        localStorage.setItem("OrderDetails",JSON.stringify(total))
        localStorage.setItem("CheckoutCartItems",JSON.stringify(cartItems));
    }
    return <div>
        <div>
      {cartItems.map((item) => {
        return (
          <div
            style={{
              height: 50,
              marginLeft: 16,
              marginRight: 16,
              marginTop: 8,
              marginBottom: 8,
              display: 'flex',
              flexDirection: "row",
              backgroundColor: "cyan",
              borderRadius: 10,
              
              alignItems: "center",
              paddingLeft: 16,
            }}
            key={item.id}
          >
            <div>
              <div>Product Name: {item.productName}</div>
              <div>Product Price: {item.productPrice}</div>
            </div>
          </div>
        );
      })}
      <div style={{marginLeft: 16, justifyContent: 'center', alignItems: 'center'}}>
          <button style={{height: 40, borderRadius: 10, backgroundColor: '#a1d4e3'}} onClick={() => handleCheckout()}>Checkout</button>
      </div>
    </div>
    </div>
}

export default Cart