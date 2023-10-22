import React from "react";
import { Link } from "react-router-dom";
import "../css/style.css";
import "../css/animate.css";
import logo from "../images/logo-icon.png";
import animation1 from "../dummy/server.jpg";
import logoFooter from "../images/logo-footer.png";
const Home = () => {
    return (
        <>
            <div id="site-content">
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
                                Call Us: (800) 49123441
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
                                <img
                                    src={logo}
                                    alt="Site title"
                                    className="logo-icon"
                                    style={{ margin: "10px" }}
                                />
                                <h1 className="site-title">
                                    Company <span>Name</span>
                                </h1>
                                <h2 className="site-description">
                                    Tagline goes here
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
                                        <Link to="news.html">News</Link>
                                    </li>
                                    <li className="menu-item">
                                        <Link to="about-us.html">About Us</Link>
                                    </li>
                                    <li className="menu-item">
                                        <Link to="services.html">Services</Link>
                                    </li>
                                    <li className="menu-item">
                                        <Link to="contact.html">Contact</Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </header>

                <main className="content" style={{margin: "20px"}}>
                    {/* <div className="slider">
                        <ul className="slides">
                            <li>
                                <div className="container">
                                    <img src={animation1} alt="" />
                                    <div className="slide-caption">
                                        <h2 className="slide-title">
                                            Duis aute reprehenderit
                                        </h2>
                                        <small className="slide-subtitle">
                                            Nemo enom ipsam voluptatem voluptas
                                        </small>
                                        <div className="slide-summary">
                                            <p>
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipisicing elit.
                                                Necessitatibus, illum laborum
                                                odit est quibusdam, molestias
                                                quaerat qui, eveniet voluptate
                                                debitis, earum dolorem. Fuga
                                                maxime fugit excepturi, saepe
                                                fugiat quisquam quia!
                                            </p>
                                        </div>
                                        <Link to="" className="button">
                                            Read More
                                        </Link>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="container">
                                    <img src={animation1} alt="" />
                                    <div className="slide-caption">
                                        <h2 className="slide-title">
                                            Rerehenderit aute duis consetetur
                                        </h2>
                                        <small className="slide-subtitle">
                                            Ipsam voluptas nemo enim
                                        </small>
                                        <div className="slide-summary">
                                            <p>
                                                Perspiciatis quo, aspernatur
                                                similique? Cumque quidem ipsa
                                                et. Nobis officia error nam
                                                veritatis culpa ut ullam maxime
                                                in ad hic, earum repudiandae?
                                            </p>
                                        </div>
                                        <Link to="" className="button">
                                            Read More
                                        </Link>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="container">
                                    <img src={animation1} alt="" />
                                    <div className="slide-caption">
                                        <h2 className="slide-title">
                                            Aliqquam nibh quam iaculis
                                        </h2>
                                        <small className="slide-subtitle">
                                            Augue dui fringilla ipsum hendrerit
                                            felis accumsan
                                        </small>
                                        <div className="slide-summary">
                                            <p>
                                                Sapiente porro, laudantium
                                                consectetur doloremque.
                                                Explicabo, esse, expedita. Animi
                                                dolorum aliquid nihil
                                                necessitatibus itaque quis
                                                architecto, fuga rerum.
                                            </p>
                                        </div>
                                        <Link to="" className="button">
                                            Read More
                                        </Link>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div> */}
                    <div className="container" style={{display: "flex", flexDirection: "row-reverse"}}>
                        <img src={animation1} alt="" />
                        <div className="slide-caption">
                            <h2 className="slide-title"
							style={{color: "#152559", fontSize: "50px", fontWeight: "bold"}}
							>
                                Duis aute reprehenderit
                            </h2>
                            <small className="slide-subtitle"
							style={{color: "#01a6d4", fontSize: "30px", fontWeight: "bold"}}
							>
                                Nemo enom ipsam voluptatem voluptas
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
                            <Link to="" className="button">
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
                                                Customer Services
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
                                                Customer Services
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
                                                Customer Services
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
                                    <img
                                        src={logoFooter}
                                        alt="Site title"
                                        className="logo-icon"
                                    />
                                    <h1 className="site-title">
                                        <Link to="#">
                                            Company <span>Name</span>
                                        </Link>
                                    </h1>
                                    <h2 className="site-description">
                                        Tagline goes here
                                    </h2>
                                </div>

                                <p className="copy">
                                    Copyright 2014 Company name. designed by
                                    Themezy. All rights reserved
                                </p>
                            </div>

                            <div className="col-md-6 align-right">
                                <nav className="footer-navigation">
                                    <Link to="#">News</Link>
                                    <Link to="#">About us</Link>
                                    <Link to="#">Services</Link>
                                    <Link to="#">Contact</Link>
                                </nav>

                                <div className="social-links">
                                    <Link to="#" className="facebook">
                                        <i className="fa fa-facebook"></i>
                                    </Link>
                                    <Link to="#" className="twitter">
                                        <i className="fa fa-twitter"></i>
                                    </Link>
                                    <Link to="#" className="google-plus">
                                        <i className="fa fa-google-plus"></i>
                                    </Link>
                                    <Link to="#" className="pinterest">
                                        <i className="fa fa-pinterest"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
};

export default Home;
