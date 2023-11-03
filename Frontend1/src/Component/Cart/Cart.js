import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  const [policies, setPolicies] = useState([]);
  const [cart, setCart] = useState([]);
  const [reload, setReload] = useState();
//   const [order,setOrder]=useState();
  const [orders,setOrders]=useState([]);


  const fetchPolicies = async () => {
    try {
      const response = await fetch(
        "http://localhost:4000/api/policy/policy/all"
      );
      const json = await response.json();
      setPolicies(json);
      var car = localStorage.getItem("cart");
      if (car) {
        JSON.parse(car);
      }
      console.log(car);
      var res = policies.filter((e) => {
        return car.includes(e.policyType) == true;
      });
      setCart(res);
      setReload("kirti");
      console.log("d");
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(async () => {
    fetchPolicies();
  }, [reload]);

  const handleClaim = async () => {
    cart.map((e,i)=>{

    })
    const formData = {
      userId: localStorage.getItem("user"),
      policy: cart
    };
    const response = await fetch(
      "http://localhost:4000/api/orders/order/create",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );
    const json = await response.json();

    localStorage.setItem("Claimed", "true");
    localStorage.removeItem("health");
    localStorage.removeItem("home");
    localStorage.removeItem("vehicle");
  };
  return (
    <>
      <div
        className="container"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <h1
          style={{
            fontSize: "40px",
            color: "black",
            fontWeight: "800",
            textAlign: "center",
          }}
        >
          Your cart
        </h1>
        {cart && cart.length != 0 ? (
          cart.map((item, index) => (
            <div className="col-md-4" key={index}>
              <div className="feature wow fadeInUp">
                <div className="feature-title">
                  <i className="icon-customer-service"></i>
                  <h2 className="title">{item.policyName}</h2>
                  <small className="subtitle">Nulla eros odio dolor</small>
                </div>
                <div className="feature-summary">
                  <p>{item.policyDescription}</p>
                </div>
                <Link to={"/policy/" + item.policyType} className="button">
                  More info
                </Link>
              </div>
            </div>
          ))
        ) : (
          <h1>Loading.....</h1>
        )}

        <button type="submit" onClick={handleClaim}>
          Claim
        </button>
      </div>
    </>
  );
};

export default Cart;
