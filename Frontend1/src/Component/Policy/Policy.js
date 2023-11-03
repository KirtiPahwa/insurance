import React, { useEffect, useState } from 'react'
import '../css/style.css';
import { Link, useNavigate, useParams } from 'react-router-dom';
import logo from "../images/logo-icon.png";
import Navbar from '../Navbar/Navbar';


export const Policy = () => {
    const navigate=useNavigate();

    const {type}=useParams();

    const [policies, setPolicies] = useState();
    const fetchPolicies=async()=>{

        try{
        const response=await fetch("http://localhost:4000/api/policy/policy/all");
        const json=await response.json();
        let res=json.filter((e)=>{return e.policyType==type});
        console.log(res);
        setPolicies(res);

        }catch(err){
            console.log(err);
        }
    }
    useEffect(() => {
      fetchPolicies();
    }, [])
    console.log(type);

    const addToCart=()=>{
        if(localStorage.getItem("cart")){
            let cart=localStorage.getItem("cart");
            let res=JSON.parse(cart);
            res.push(type);
            localStorage.setItem("cart",JSON.stringify(res));
        }else{
            const cart=[];
            cart.push(type); 
            localStorage.setItem("cart",JSON.stringify(cart));
        }
navigate("/cart");

    }

  return (
    <>
  <Navbar/>
            <main style={{margin:'100px auto', width:'500px'}} >



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
 
               <button type='button' onClick={addToCart}>Add to Cart</button>
            </main>
    </>
  )
}
