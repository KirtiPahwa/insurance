import React from 'react'
import '../css/style.css';
import { Link, useParams } from 'react-router-dom';
import logo from "../images/logo-icon.png";


export const Policy = () => {
    const {type}=useParams();
    console.log(type);

    const addToCart=()=>{
        if(type=='health')
        localStorage.setItem("health","yes");
    else if(type=='home')
    localStorage.setItem("home","yes");
else if(type=='vehicle')
localStorage.setItem("vehicle","yes");

    }

  return (
    <>
    <header className="site-header">
                    <div className="top-header">
                        <div
                            className="container"
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                            }}
                        >
                            <Link to="tel:80049123441" style={{ width: "80%" }}>
                                jashan@gmail.coms
                            </Link>

                            <nav
                                className="member-navigation pull-right"
                                style={{ width: "20%" }}
                            >
                                <Link to="/register">
                                    <i className="fa fa-user"></i> Register
                                </Link>
                                <Link to="/login">
                                    <i className="fa fa-lock"></i> Login
                                </Link>
                                <Link to="/cart">
                                    <i className="fa fa-lock"></i> Cart
                                </Link>
                            </nav>
                        </div>
                    </div>

                    <div className="bottom-header" style={{ width: "100%" }}>
                        <div
                            className="container"
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                            }}
                        >
                            <Link
                                to="index.html"
                                className="branding pull-left"
                                style={{ margin: "10px", width: "60%" }}
                            >
                               
                                <h1 className="site-title">
                                    Angel <span>Insurance</span>
                                </h1>
                                <h2 className="site-description">
                                    Best insurance policies
                                </h2>
                            </Link>

                            <nav
                                className="main-navigation pull-right"
                                style={{ width: "40%" }}
                            >
                                <button type="button" className="menu-toggle">
                                    <i className="fa fa-bars"></i>
                                </button>
                                <ul className="menu">
                                   
                                    <li className="menu-item">
                                        <Link to="/">About Us</Link>
                                    </li>
                                    <li className="menu-item">
                                        <Link to="/">Services</Link>
                                    </li>
                                    <li className="menu-item">
                                        <Link to="/">Contact</Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </header>
            <main>
                <div className="policyDiv">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque quis, quia rerum quisquam aliquam neque, eius tenetur provident tempora ipsam veritatis voluptatem porro temporibus commodi cumque iusto quam ex quasi!
                </div><br/> <button type='button' onClick={addToCart}>Add to Cart</button>
            </main>
    </>
  )
}
