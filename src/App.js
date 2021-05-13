import "./App.css";
import React from "react";
import { Cat} from "./Cat.js";

const App = () => {
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
  
  
  

  const basketName = ["Toby", "fuck you, you cunt"];
  const basketPrice = [5767676, -33];
  const listCatNames = basketName.map((cat) => <li id="basketList">{cat}</li>);
  const listCatPrices = basketPrice.map((cat) => <li id="basketList">£{cat}</li>);
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

  const handleOnClick = () => {
    basketName.push(`${cat1.name}`);
    basketPrice.push(`${cat1.price}`);
  };


  return (
    <div className="App">
      <div className="header">
        <h1>Cats4Lyfe</h1>
        <p className="subHead">
          Your one stop shop for collecting Cats. They're all purrrrrrfect.
        </p>

        <div className="dropdown">
          <button>
            Basket
          </button>
          <div className="dropdown-content">
          <h1>Your Basket</h1>
          <p>{listCatNames}</p>
          <p>{listCatPrices}</p>
          <p>Total price: {calculateTotal()}</p>
        </div>
        </div>

      </div>
      <div className="container">
        <div className="catPage">
          <h3>{cat1.name}</h3>
          <Cat />
          <p>£{cat1.price}</p>
          <button onClick={handleOnClick}>Add to Basket</button>
        </div>
        <div className="catPage">
          <h3>{cat2.name}</h3>
          <Cat />
        </div>
        <div className="catPage">
          <h3>{cat3.name}</h3>
          <Cat />
        </div>
        <div className="catPage">
          <h3>{cat4.name}</h3>
          <Cat />
        </div>
        <div className="catPage">
          <h3>{cat5.name}</h3>
          <Cat />
        </div>
        <div className="catPage">
          <h3>{cat6.name}</h3>
          <Cat />
        </div>
        <div className="catPage">
          <h3>{cat7.name}</h3>
          <Cat />
        </div>
        <div className="catPage">
          <h3>{cat8.name}</h3>
          <Cat />
        </div>
        <div className="catPage">
          <h3>{cat9.name}</h3>
          <Cat />
        </div>
      </div>
    </div>
  );
};

export default App;
