import React from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate  = useNavigate();
  const itemlist = [
    {
      id: 1,
      productName: "Toothbrush",
      productPrice: 50,
    },
    {
      id: 2,
      productName: "Hand Sanitizer",
      productPrice: 70,
    },
    {
      id: 3,
      productName: "LED Bulb",
      productPrice: 150,
    },
    {
      id: 4,
      productName: "Mirror",
      productPrice: 20,
    },
    {
      id: 5,
      productName: "Shampoo",
      productPrice: 110,
    },
  ];

  let cartItems= [];

  const handleItemClick = (item) => {
    cartItems= [...cartItems, item] 
    console.log('cartItems', cartItems)
    localStorage.removeItem("CartItems");
    localStorage.setItem("CartItems",JSON.stringify(cartItems));
  }

  return (
    <div>
      <div style={{marginLeft: 16, marginTop: 8}}>
        <button style={{borderRadius: 10, backgroundColor: 'yellow'}} onClick={() => navigate("/cart", {state:cartItems})}>
        Go to Cart
        </button>
      </div>
      {itemlist.map((item) => {
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
            <div style={{float: 'right',textAlign: 'right', marginLeft: 'auto', marginRight: 16}}>
              <button style={{display: 'inline-block', borderRadius: 8, backgroundColor: 'pink'}} onClick={() => handleItemClick(item)}>Add to Cart</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
