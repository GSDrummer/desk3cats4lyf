import React from "react";

export let basket = [];
// let total = 0;

export function Cat(props) {
  const {
    type = "",
    text = "%20",
    fontSize = "50",
    color = "white",
    filter = "",
    width = "",
    height = "",
    // price = Math.floor(Math.random() * 1000),
  } = props;

  const uniqueNum = Math.random();
  const url = `https://cataas.com/cat/${type}/says/${text}?s=${fontSize}&c=${color}&filter=${filter}&width=${width}&height=${height}&uniqueNum=${uniqueNum}`;

  // const handleBasket = () => {
  //   basket.push(`${price}`);
  // };

  return (
    <>
      <img src={url} alt="Cat" />
      {/* <p>£{price}</p> */}
      {/* <button onClick={handleBasket}>Add to Basket</button> */}
    </>
  );
}
