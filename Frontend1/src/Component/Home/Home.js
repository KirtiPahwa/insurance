import React from "react";
import { Link } from "react-router-dom";
import "../css/style.css";
import "../css/animate.css";
import logo from "../images/logo-icon.png";
import mainPic from "../images/mainPic.jpg";
import logoFooter from "../images/logo-footer.png";
import Navbar from "../Navbar/Navbar";
const Home = () => {
    return (
        <>
            <div id="site-content">
               <Navbar/>

                <main className="content" style={{margin: "20px"}}>
                    <div className="container" style={{display: "flex", flexDirection: "row-reverse"}}>
                        <img src={mainPic} height="400px"
                        alt="" />
                        <div className="slide-caption">
                            <h2 className="slide-title"
							style={{color: "#152559", fontSize: "50px", fontWeight: "bold"}}
							>
                               Angel Insurance
                            </h2>
                            <small className="slide-subtitle"
							style={{color: "#01a6d4", fontSize: "30px", fontWeight: "bold"}}
							>
								
                              Best Insurance company
                            </small>
                            <div className="slide-summary">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Necessitatibus, illum
                                    laborum odit est quibusdam, molestias
                                    quaerat qui, eveniet voluptate debitis,
                                    earum dolorem. Fuga maxime fugit excepturi,
                                    saepe fugiat quisquam quia!
                                </p>
                            </div>
                            <Link to="/" className="button">
                                Read More
                            </Link>
                        </div>
                    </div>

                    <div className="fullwidth-block feature-section">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="feature wow fadeInUp">
                                        <div className="feature-title">
                                            <i className="icon-customer-service"></i>
                                            <h2 className="title">
                                                Health Service
                                            </h2>
                                            <small className="subtitle">
                                                Nulla eros odio dolor
                                            </small>
                                        </div>
                                        <div className="feature-summary">
                                            <p>
                                                Chocolate caramels unerdwear.com
                                                lemon drops. Powder chupa chups
                                                pastry macaroon wafer chocolate
                                                cake sweet roll croissant jelly
                                            </p>
                                        </div>
                                        <Link
                                            to="/policy/health"
                                            className="button"
                                        >
                                            More info
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div
                                        className="feature wow fadeInUp"
                                        data-wow-delay=".2s"
                                    >
                                        <div className="feature-title">
                                            <i className="icon-server-lock"></i>
                                            <h2 className="title">
                                                Home Services
                                            </h2>
                                            <small className="subtitle">
                                                Nulla eros odio dolor
                                            </small>
                                        </div>
                                        <div className="feature-summary">
                                            <p>
                                                Chocolate caramels unerdwear.com
                                                lemon drops. Powder chupa chups
                                                pastry macaroon wafer chocolate
                                                cake sweet roll croissant jelly
                                            </p>
                                        </div>
                                        <Link
                                            to="/policy/home"
                                            className="button"
                                        >
                                            More info
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div
                                        className="feature wow fadeInUp"
                                        data-wow-delay=".4s"
                                    >
                                        <div className="feature-title">
                                            <i className="icon-bar-chart-up"></i>
                                            <h2 className="title">
                                                Vehicle Services
                                            </h2>
                                            <small className="subtitle">
                                                Nulla eros odio dolor
                                            </small>
                                        </div>
                                        <div className="feature-summary">
                                            <p>
                                                Chocolate caramels unerdwear.com
                                                lemon drops. Powder chupa chups
                                                pastry macaroon wafer chocolate
                                                cake sweet roll croissant jelly
                                            </p>
                                        </div>
                                        <Link
                                            to="/policy/vehicle"
                                            className="button"
                                        >
                                            More info
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="fullwidth-block pricing-section">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-3 col-xs-6 col-us">
                                    <div
                                        className="pricing-table wow fadeInLeft"
                                        data-wow-delay=".2s"
                                    >
                                        <div className="pricing-title">
                                            <h2 className="pricing-type">
                                                Basic
                                            </h2>
                                            <small>For small bussiness</small>
                                        </div>
                                        <div className="price-tag">
                                            <strong>$9.99</strong>
                                            <small>/Per month</small>
                                        </div>
                                        <p className="pricing-desc">
                                            Curabitur facilisis consectetur leo
                                            in venenatis mauris nisl
                                        </p>
                                        <ul className="list-fa">
                                            <li>
                                                <i className="fa fa-check"></i>{" "}
                                                Quad core
                                            </li>
                                            <li>
                                                <i className="fa fa-check"></i>{" "}
                                                50 GB ram
                                            </li>
                                            <li>
                                                <i className="fa fa-check"></i>{" "}
                                                50 GB disc space
                                            </li>
                                            <li>
                                                <i className="fa fa-check"></i>{" "}
                                                10 email accounts
                                            </li>
                                            <li>
                                                <i className="fa fa-check"></i>{" "}
                                                Support 24/h
                                            </li>
                                            <li>
                                                <i className="fa fa-check"></i>{" "}
                                                Admin panel
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-3 col-xs-6 col-us">
                                    <div className="pricing-table wow fadeInLeft">
                                        <div className="pricing-title">
                                            <h2 className="pricing-type">
                                                Standard
                                            </h2>
                                            <small>For medium bussiness</small>
                                        </div>
                                        <div className="price-tag">
                                            <strong>$59.99</strong>
                                            <small>/Per month</small>
                                        </div>
                                        <p className="pricing-desc">
                                            Etiam interdum nulla eros odio
                                            scelerisque magna
                                        </p>
                                        <ul className="list-fa">
                                            <li>
                                                <i className="fa fa-check"></i>{" "}
                                                Quad core
                                            </li>
                                            <li>
                                                <i className="fa fa-check"></i>{" "}
                                                50 GB ram
                                            </li>
                                            <li>
                                                <i className="fa fa-check"></i>{" "}
                                                100 GB disc space
                                            </li>
                                            <li>
                                                <i className="fa fa-check"></i>{" "}
                                                50 email accounts
                                            </li>
                                            <li>
                                                <i className="fa fa-check"></i>{" "}
                                                Support 24/h
                                            </li>
                                            <li>
                                                <i className="fa fa-check"></i>{" "}
                                                Admin panel
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-3 col-xs-6 col-us">
                                    <div className="pricing-table wow fadeInRight">
                                        <div className="pricing-title">
                                            <h2 className="pricing-type">
                                                Advanced
                                            </h2>
                                            <small>For large bussiness</small>
                                        </div>
                                        <div className="price-tag">
                                            <strong>$99.99</strong>
                                            <small>/Per month</small>
                                        </div>
                                        <p className="pricing-desc">
                                            Curabitur facilisis consectetur leo
                                            in venenatis mauris nisl
                                        </p>
                                        <ul className="list-fa">
                                            <li>
                                                <i className="fa fa-check"></i>{" "}
                                                Quad core
                                            </li>
                                            <li>
                                                <i className="fa fa-check"></i>{" "}
                                                50 GB ram
                                            </li>
                                            <li>
                                                <i className="fa fa-check"></i>{" "}
                                                250 GB disc space
                                            </li>
                                            <li>
                                                <i className="fa fa-check"></i>{" "}
                                                100 email accounts
                                            </li>
                                            <li>
                                                <i className="fa fa-check"></i>{" "}
                                                Support 24/h
                                            </li>
                                            <li>
                                                <i className="fa fa-check"></i>{" "}
                                                Admin panel
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-3 col-xs-6 col-us">
                                    <div
                                        className="pricing-table wow fadeInRight"
                                        data-wow-delay=".2s"
                                    >
                                        <div className="pricing-title">
                                            <h2 className="pricing-type">
                                                Professional
                                            </h2>
                                            <small>
                                                For corporate bussiness
                                            </small>
                                        </div>
                                        <div className="price-tag">
                                            <strong>$299.99</strong>
                                            <small>/Per month</small>
                                        </div>
                                        <p className="pricing-desc">
                                            Curabitur facilisis consectetur leo
                                            in venenatis mauris nisl
                                        </p>
                                        <ul className="list-fa">
                                            <li>
                                                <i className="fa fa-check"></i>{" "}
                                                Quad core
                                            </li>
                                            <li>
                                                <i className="fa fa-check"></i>{" "}
                                                50 GB ram
                                            </li>
                                            <li>
                                                <i className="fa fa-check"></i>{" "}
                                                500 GB disc space
                                            </li>
                                            <li>
                                                <i className="fa fa-check"></i>{" "}
                                                100 email accounts
                                            </li>
                                            <li>
                                                <i className="fa fa-check"></i>{" "}
                                                Support 24/h
                                            </li>
                                            <li>
                                                <i className="fa fa-check"></i>{" "}
                                                Admin panel
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="fullwidth-block about-section">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 wow fadeInUp">
                                    <h2>Safe &amp; high-speed hosting</h2>
                                    <p className="leading">
                                        Pallentesque nibh pharetra urna
                                        elementum viverra elit duis faucibus
                                        augue tempor eleifend
                                    </p>
                                    <p>
                                        Tiramisu cotton candy caramels cake
                                        biscuit jelly-o chupa chups chocolate.
                                        Tootsie roll lollipop topping. Macaroon
                                        ice cream cookie powder dessert
                                        gingerbread oat cake. Pudding cake
                                        powder icing tart sugar plum sesame
                                        snaps.
                                    </p>
                                    <p>
                                        Fruitcake tootsie roll candy. Sweet roll
                                        toffee donut. Chocolate cake gummi bears
                                        fruitcake cookie biscuit cotton candy
                                        marshmallow.
                                    </p>
                                    <p>
                                        Liquorice macaroon marshmallow macaroon
                                        cheesecake sweet soufflé. Cheesecake
                                        cookie dessert jelly-o. Fruitcake tart
                                        topping.
                                    </p>
                                </div>

                                <div className="col-md-6">
                                    <h2 className="wow fadeInRight">
                                        What can you expect?
                                    </h2>
                                    <hr className="separator" />
                                    <ul className="feature-list">
                                        <li className="wow fadeInRight">
                                            <i className="icon-money-globe"></i>
                                            <h3>
                                                Aliquam nibh quam iaculis tempis
                                            </h3>
                                            <p>
                                                Candy powder. Carrot cake ice
                                                cream toffee bonbon. Donut
                                                marzipan chupa chups cookie tart
                                                dessert fruitcake brownie.{" "}
                                            </p>
                                        </li>
                                        <li className="wow fadeInRight">
                                            <i className="icon-server-lock"></i>
                                            <h3>
                                                Aliquam nibh quam iaculis tempis
                                            </h3>
                                            <p>
                                                Candy powder. Carrot cake ice
                                                cream toffee bonbon. Donut
                                                marzipan chupa chups cookie tart
                                                dessert fruitcake brownie.{" "}
                                            </p>
                                        </li>
                                        <li className="wow fadeInRight">
                                            <i className="icon-person-time"></i>
                                            <h3>
                                                Aliquam nibh quam iaculis tempis
                                            </h3>
                                            <p>
                                                Candy powder. Carrot cake ice
                                                cream toffee bonbon. Donut
                                                marzipan chupa chups cookie tart
                                                dessert fruitcake brownie.{" "}
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>

                <footer className="site-footer wow fadeInUp">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className=" branding">
                                   
                                    <h1 className="site-title">
                                        <Link to="#">
                                            Angel <span>Insurance</span>
                                        </Link>
                                    </h1>
                                    <h2 className="site-description">
                                        Tagline goes here
                                    </h2>
                                </div>

                                <p className="copy">
                                    Copyright 2023 Company name. designed by
                                    Themezy. All rights reserved
                                </p>
                            </div>

                            <div className="col-md-6 align-right">
                                <nav className="footer-navigation">
                                    <Link to="#">About us</Link>
                                    <Link to="#">Services</Link>
                                    <Link to="#">Contact</Link>
                                </nav>

                                
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
};

export default Home;
