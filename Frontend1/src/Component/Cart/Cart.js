import React from "react";
import { Link } from "react-router-dom";
// import "./Cart.css";

const Cart = () => {
    const handleClaim = async() => {
        // window.location.reload(false);
        const formData={
            userId:localStorage.getItem("user"),
            policy:{

            }
            
        };
            const response = await fetch("http://localhost:4000/api/orders/order/create", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(formData),
            });
            const json = await response.json();
        console.log(json);
           
        localStorage.setItem("Claimed", "true");
        localStorage.removeItem("health");
        localStorage.removeItem("home");
        localStorage.removeItem("vehicle");
    };
    return (
        <>
            <div className="container" style={{display: "flex", flexDirection: "column"}}>
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
                {localStorage.getItem("home") != null ? (
                    <div className="col-lg-12">
                        <div
                            className="feature wow fadeInUp"
                            data-wow-delay=".4s"
                        >
                            <div className="feature-title">
                                <i className="icon-bar-chart-up"></i>
                                <h2 className="title">Home Services</h2>
                                <small className="subtitle">
                                    Nulla eros odio dolor
                                </small>
                            </div>
                            <div className="feature-summary">
                                <p>
                                    Chocolate caramels unerdwear.com lemon
                                    drops. Powder chupa chups pastry macaroon
                                    wafer chocolate cake sweet roll croissant
                                    jelly
                                </p>
                            </div>
                            {/* <Link to="/policy/vehicle" className="button">
                                    More info
                                </Link> */}
                        </div>
                    </div>
                ) : (
                    <h2></h2>
                )}

                {localStorage.getItem("health") != null ? (
                    <div className="col-lg-12">
                        <div
                            className="feature wow fadeInUp"
                            data-wow-delay=".4s"
                        >
                            <div className="feature-title">
                                <i className="icon-bar-chart-up"></i>
                                <h2 className="title">Health Services</h2>
                                <small className="subtitle">
                                    Nulla eros odio dolor
                                </small>
                            </div>
                            <div className="feature-summary">
                                <p>
                                    Chocolate caramels unerdwear.com lemon
                                    drops. Powder chupa chups pastry macaroon
                                    wafer chocolate cake sweet roll croissant
                                    jelly
                                </p>
                            </div>
                            {/* <Link to="/policy/vehicle" className="button">
                                More info
                            </Link> */}
                        </div>
                    </div>
                ) : (
                    <h2></h2>
                )}
                {localStorage.getItem("vehicle") != null ? (
                    <div className="col-lg-12">
                        <div
                            className="feature wow fadeInUp"
                            data-wow-delay=".4s"
                        >
                            <div className="feature-title">
                                <i className="icon-bar-chart-up"></i>
                                <h2 className="title">Vehicle Services</h2>
                                <small className="subtitle">
                                    Nulla eros odio dolor
                                </small>
                            </div>
                            <div className="feature-summary">
                                <p>
                                    Chocolate caramels unerdwear.com lemon
                                    drops. Powder chupa chups pastry macaroon
                                    wafer chocolate cake sweet roll croissant
                                    jelly
                                </p>
                            </div>
                            {/* <Link to="/policy/vehicle" className="button">
                                More info
                            </Link> */}
                        </div>
                    </div>
                ) : (
                    <h2></h2>
                )}

                <button type="submit" onClick={handleClaim}>
                    Claim
                </button>
            </div>
        </>
    );
};

export default Cart;
