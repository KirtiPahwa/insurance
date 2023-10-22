import React from 'react'

const Cart = () => {
    const handleClaim=()=>
    {
        window.location.reload(false);
        localStorage.setItem("Claimed","true");
        localStorage.removeItem("health");
        localStorage.removeItem("home");
        localStorage.removeItem("vehicle");


    }
  return (
    <>
    <h1>Your cart</h1>
        {localStorage.getItem("home")!=null?<h1>home</h1>:<h1>Empty</h1>}
        
        {localStorage.getItem("health")!=null?<h1>health</h1>:<h1>Empty</h1>}
        {localStorage.getItem("vehicle")!=null?<h1>vehicle</h1>:<h1>Empty</h1>}
<button type='submit' onClick={handleClaim}>Claim</button>
  
    </>
  )
}

export default Cart