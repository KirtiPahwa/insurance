import React from 'react'
import '../css/style.css';
import { Link, useNavigate, useParams } from 'react-router-dom';
import logo from "../images/logo-icon.png";
import Navbar from '../Navbar/Navbar';


export const Policy = () => {
    const navigate=useNavigate();

    const {type}=useParams();
    console.log(type);

    const addToCart=()=>{
        if(type=='health')
        localStorage.setItem("health","yes");
    else if(type=='home')
    localStorage.setItem("home","yes");
else if(type=='vehicle')
localStorage.setItem("vehicle","yes");

navigate("/cart")

    }

  return (
    <>
  <Navbar/>
            <main style={{margin:'100px auto', width:'500px'}} >
            {type == 'home' ? (
                    <div className="col-lg-12">
                        <div
                            className="feature wow fadeInUp"
                            data-wow-delay=".4s"
                        >
                            <div className="feature-title">
                                <i className="icon-bar-chart-up"></i>
                                <h2 className="title">Customer Services</h2>
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

                {type=="health"? (
                    <div className="col-lg-12">
                        <div
                            className="feature wow fadeInUp"
                            data-wow-delay=".4s"
                        >
                            <div className="feature-title">
                                <i className="icon-bar-chart-up"></i>
                                <h2 className="title">Customer Services</h2>
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
                {type=="vehicle" ? (
                    <div className="col-lg-12">
                        <div
                            className="feature wow fadeInUp"
                            data-wow-delay=".4s"
                        >
                            <div className="feature-title">
                                <i className="icon-bar-chart-up"></i>
                                <h2 className="title">Customer Services</h2>
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

            
               <button type='button' onClick={addToCart}>Add to Cart</button>
            </main>
    </>
  )
}
