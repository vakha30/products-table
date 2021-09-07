import React from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Switch, Route } from "react-router-dom";
import { serialize } from "object-to-formdata";

import { addToCart } from "./redux/actions/cart";

import Table from "./components/Table";

import "./App.css";
import Sidebar from "./components/Sidebar";

function App() {
  const dispatch = useDispatch();
  const [products, setProducts] = React.useState([]);

  const {
    items: cartProducts,
    totalCount,
    totalPrice,
  } = useSelector((data) => data.cart);

  React.useEffect(() => {
    fetch("https://datainlife.ru/junior_task/get_products.php")
      .then((resp) => resp.json())
      .then((data) => setProducts(data));
  }, []);

  const onSelectProduct = (selectProduct) => {
    dispatch(addToCart(selectProduct));
  };

  const handleClick = () => {
    let product = { product: {} };
    Object.keys(cartProducts).forEach((item) => {
      product.product[item] = cartProducts[item].count;
    });

    const formData = serialize(product);

    axios({
      url: "https://datainlife.ru/junior_task/add_basket.php",
      method: "POST",
      data: formData,
      headers: {
        Accept: "application/json",
        "Content-Type": "multipart/form-data",
      },
    }).then(({ data }) => console.log(data));
  };

  return (
    <div className="App">
      <div className="container">
        <Sidebar products={products} />
        <Switch>
          <Route path="/products-table" exact>
            <Table products={products} onSelectProduct={onSelectProduct} />
          </Route>
          <Route path="/products-table/:id" exact>
            <Table products={products} onSelectProduct={onSelectProduct} />
          </Route>
        </Switch>
      </div>

      <footer className="footer">
        <div>
          Общая сумма за товары: <span>{totalPrice}</span>
        </div>
        <div>
          Общее колличество: <span>{totalCount}</span>
        </div>
        <button onClick={handleClick}>Добавить в корзину</button>
      </footer>
    </div>
  );
}

export default App;

// https://datainlife.ru/junior_task/get_products.php

// https://datainlife.ru/junior_task/add_basket.php
