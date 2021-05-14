import "./App.css";
import React, {useState} from "react";
import { Cat} from "./Cat.js";

const App = () => {
  const [basketName, setBasketName] = useState([]);
  const [basketPrice, setBasketPrice] = useState([]);
  const [basketPressed, setBasketPressed] = useState(false);
  class Cats {
    constructor(name, price) {
      this.name = name;
      this.price = price;
    }
  }
  let cat1 = new Cats("Toby", Math.floor(Math.random() * 1000));
  let cat2 = new Cats("Snuffles", Math.floor(Math.random() * 1000));
  let cat3 = new Cats("Snowball II", Math.floor(Math.random() * 1000));
  let cat4 = new Cats("Enid", Math.floor(Math.random() * 1000));
  let cat5 = new Cats("Jake", Math.floor(Math.random() * 1000));
  let cat6 = new Cats("Mouse Detroyer 3000", Math.floor(Math.random() * 1000));
  let cat7 = new Cats("Geoff", Math.floor(Math.random() * 1000));
  let cat8 = new Cats("Paul", Math.floor(Math.random() * 1000));
  let cat9 = new Cats("UWU", Math.floor(Math.random() * 1000));
  
  const dropdownFunction = () => {
    if (basketPressed === true) {
      return (
        <div className="dropdown-content">
          <h1>Your Basket</h1>
          <div className="lists">
          <p>{listCatNames()}</p>
          <p>{listCatPrices()}</p>
        </div>
          <p>Total price: £{calculateTotal()}</p>
        </div>
      )
    }
  }
  
  const listCatNames = () => {
    let i;
    for (i in basketName) {
      let basketListName = basketName.map((basketName) =>
      <li>{basketName}: </li>
      );

      return(<ul>{basketListName}</ul>);
    }
  }

  const listCatPrices = () => {
    let i;
    for (i in basketPrice) {
      let basketListPrice = basketPrice.map((basketPrice) => 
      <li>£{basketPrice}</li>
      );
      return(<ul>{basketListPrice}</ul>);
    }
  }
  

  const calculateTotal = () => {
    let x = 0;
    let total = 0;
    let i;
    for (i in basketPrice) {
      total = x + basketPrice[i];
      x = total;
    }
    return total;
  };

  const handleOnClick1 = () => {
    setBasketName([...basketName, cat1.name]);
    setBasketPrice([...basketPrice, cat1.price]);
  };

  const handleOnClick2 = () => {
    setBasketName([...basketName, cat2.name]);
    setBasketPrice([...basketPrice, cat2.price]);
  };

  const handleOnClick3 = () => {
    setBasketName([...basketName, cat3.name]);
    setBasketPrice([...basketPrice, cat3.price]);
  };
  const handleOnClick4 = () => {
    setBasketName([...basketName, cat4.name]);
    setBasketPrice([...basketPrice, cat4.price]);
  };
  const handleOnClick5 = () => {
    setBasketName([...basketName, cat5.name]);
    setBasketPrice([...basketPrice, cat5.price]);
  };
  const handleOnClick6 = () => {
    setBasketName([...basketName, cat6.name]);
    setBasketPrice([...basketPrice, cat6.price]);
  };
  const handleOnClick7 = () => {
    setBasketName([...basketName, cat7.name]);
    setBasketPrice([...basketPrice, cat7.price]);
  };
  const handleOnClick8 = () => {
    setBasketName([...basketName, cat8.name]);
    setBasketPrice([...basketPrice, cat8.price]);
  };
  const handleOnClick9 = () => {
    setBasketName([...basketName, cat9.name]);
    setBasketPrice([...basketPrice, cat9.price]);
  };


  return (
    <div className="App">
      <div className="header">
        <h1>Cats4Lyfe</h1>
        <p className="subHead">
          Your one stop shop for collecting Cats. They're all purrrrrrfect.
        </p>
        <div className="dropdown">
          <button onClick={() => setBasketPressed(!basketPressed)}>
            Basket
          </button>
          {dropdownFunction()}

        </div>

      </div>
      <div className="container">
        <div className="catPage">
          <h3>{cat1.name}</h3>
          <Cat />
          <p>£{cat1.price}</p>
          <button onClick={handleOnClick1}>Add to Basket</button>
        </div>
        <div className="catPage">
          <h3>{cat2.name}</h3>
          <Cat />
          <p>£{cat2.price}</p>
          <button onClick={handleOnClick2}>Add to Basket</button>
        </div>
        <div className="catPage">
          <h3>{cat3.name}</h3>
          <Cat />
          <p>£{cat3.price}</p>
          <button onClick={handleOnClick3}>Add to Basket</button>
        </div>
        <div className="catPage">
          <h3>{cat4.name}</h3>
          <Cat />
          <p>£{cat4.price}</p>
          <button onClick={handleOnClick4}>Add to Basket</button>
        </div>
        <div className="catPage">
          <h3>{cat5.name}</h3>
          <Cat />
          <p>£{cat5.price}</p>
          <button onClick={handleOnClick5}>Add to Basket</button>
        </div>
        <div className="catPage">
          <h3>{cat6.name}</h3>
          <Cat />
          <p>£{cat6.price}</p>
          <button onClick={handleOnClick6}>Add to Basket</button>
        </div>
        <div className="catPage">
          <h3>{cat7.name}</h3>
          <Cat />
          <p>£{cat7.price}</p>
          <button onClick={handleOnClick7}>Add to Basket</button>
        </div>
        <div className="catPage">
          <h3>{cat8.name}</h3>
          <Cat />
          <p>£{cat8.price}</p>
          <button onClick={handleOnClick8}>Add to Basket</button>
        </div>
        <div className="catPage">
          <h3>{cat9.name}</h3>
          <Cat />
          <p>£{cat9.price}</p>
          <button onClick={handleOnClick9}>Add to Basket</button> 
        </div>
      </div>
    </div>
  );
};

export default App;
