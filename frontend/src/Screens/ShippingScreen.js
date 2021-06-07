import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { saveShipping } from "../actions/cartActions";
import CheckoutSteps from "../components/CheckoutSteps";

function ShippingScreen(props) {
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalcode, setPostalCode] = useState("");
  const [country, setCountry] = useState("");

  const dispatch = useDispatch();
  
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShipping(address, city, postalcode, country));
    props.history.push('payment');
  };

  return (
    <div>
      <CheckoutSteps step1 step2></CheckoutSteps>
      <div className="form">
      <form onSubmit={submitHandler}>
        <ul className="form-container">
          <li>
            <h2>Shipping</h2>
          </li>
          
          <li>
            <label htmlFor="address">Address</label>
            <input
              type="text"
              name="address"
              id="address"
              onChange={(e) => setAddress(e.target.value)}
            ></input>
          </li>
          <li>
            <label htmlFor="city">City</label>
            <input
              type="text"
              name="city"
              id="city"
              onChange={(e) => setCity(e.target.value)}
            ></input>
          </li>
          <li>
            <label htmlFor="postalcode">Postal code</label>
            <input
              type="text"
              name="postalcode"
              id="postalcode"
              onChange={(e) => setPostalCode(e.target.value)}
            ></input>
          </li>
          <li>
            <label htmlFor="country">Country</label>
            <input
              type="text"
              name="country"
              id="country"
              onChange={(e) => setCountry(e.target.value)}
            ></input>
          </li>
          <li>
            <button type="submit" className="button primary">
              Continue
            </button>
          </li>  
        </ul>
      </form>
    </div>
    </div>
    
  );
}

export default ShippingScreen;
