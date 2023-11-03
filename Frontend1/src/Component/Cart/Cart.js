import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  

    const [policies, setPolicies] = useState([]);
    const [cart, setCart] = useState(null);

    const fetchPolicies=async()=>{

        try{
        const response=await fetch("http://localhost:4000/api/policy/policy/all");
        const json=await response.json();
        setPolicies(json);

        }catch(err){
            console.log(err);
        }
    }
    useEffect(() => {
       console.log("ded")
      fetchPolicies();
      var cart=localStorage.getItem("cart");
      if(cart){
        JSON.parse(cart);
      }
      var res=policies.filter((e)=>{
        console.log(e.policyType)
        return cart.includes(e.policyType)==true;
      });
setCart(res);
    },[])

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
                {
   (cart && cart.length!=0)?  cart.map((item,index)=>(
    <div className="col-md-4" key={index}>
    <div className="feature wow fadeInUp">
        <div className="feature-title">
            <i className="icon-customer-service"></i>
            <h2 className="title">{item.policyName}
            </h2>
                                        <small className="subtitle">
                                            Nulla eros odio dolor
                                        </small>
                                    </div>
                                    <div className="feature-summary">
                                        <p>
                                            {item.policyDescription}
                                        </p>
                                    </div>
                                    <Link
                                        to={"/policy/"+item.policyType}
                                        className="button"
                                    >
                                        More info
                                    </Link>
                                </div>
                            </div>
    )):(<h1>Loading.....</h1>)
    
   }

                <button type="submit" onClick={handleClaim}>
                    Claim
                </button>
            </div>
        </>
    );
};

export default Cart;
