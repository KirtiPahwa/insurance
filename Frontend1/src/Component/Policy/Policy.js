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
					<div className="container">
						<Link to="tel:80049123441">Call Us: (800) 49123441</Link>
						
						<nav className="member-navigation pull-right">
							<Link to="/register"><i className="fa fa-user"></i> Register</Link>
							<Link to="/login"><i className="fa fa-lock"></i> Login</Link>
						</nav> 
					</div> 
				</div>

				<div className="bottom-header">
					<div className="container">
						<Link to="index.html" className="branding pull-left">
							<img src={logo} alt="Site title" className="logo-icon"/>
							<h1 className="site-title">Company <span>Name</span></h1> 
							<h2 className="site-description">Tagline goes here</h2>
						</Link> 
						
						<nav className="main-navigation pull-right">
							<button type="button" className="menu-toggle"><i className="fa fa-bars"></i></button>
							<ul className="menu">
								<li className="menu-item"><Link to="news.html">News</Link></li>
								<li className="menu-item"><Link to="about-us.html">About Us</Link></li>
								<li className="menu-item"><Link to="services.html">Services</Link></li>
								<li className="menu-item"><Link to="contact.html">Contact</Link></li>
							</ul>
						</nav>
					</div>
				</div>
			</header> 
            <main>
                
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque quis, quia rerum quisquam aliquam neque, eius tenetur provident tempora ipsam veritatis voluptatem porro temporibus commodi cumque iusto quam ex quasi!
               <br/> <button type='button' onClick={addToCart}>Add to Cart</button>
            </main>
    </>
  )
}
