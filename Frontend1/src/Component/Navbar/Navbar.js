import React from 'react'
import '../css/style.css';
import { Link, useNavigate, useParams } from 'react-router-dom';
import logo from "../images/logo-icon.png";

const Navbar = () => {
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
                                {localStorage.getItem("user")==null?( <>
                                <Link to="/register">
                                    <i className="fa fa-user"></i> Register
                                </Link>
                                <Link to="/login">
                                    <i className="fa fa-lock"></i> Login
                                </Link>
                                </>
                                ):(
                                    <button type='button' onClick={()=>{localStorage.removeItem("user");
                                    localStorage.removeItem("isAdmin");
                                window.location.reload(false)}}>Logout</button>
                                )}
                                {localStorage.getItem("isAdmin")!=null?(<>
                                    <Link to="/dashboard">
                                    <i className="fa fa-user"></i> Dashboard
                                </Link>
                                </>):(<></>)}
                               
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
                                to="/"
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
                </header></>
  )
}

export default Navbar