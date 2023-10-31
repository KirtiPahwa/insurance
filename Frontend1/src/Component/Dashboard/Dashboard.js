import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
const Order=({item})=>{
    return (
       <>{item}</> 
    )
}
const Dashboard = () => {
    const [formData, setFormData] = useState({
        image:"",
        policyName:"",
        policyType:"",
        policyDescription:""
    })

const handlePoliyChange=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
}

const addPolicy=async(e)=>{
    e.preventDefault();
console.log(formData)
    try{
        const respone=await fetch("http://localhost:4000/api/policy/policy/create",{
            method:"POST",
            headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(formData),
        
        })
        console.log(await respone.json());
    }catch(err){
console.log(err);
    }
}

const [orders, setOrders] = useState({});
    const fetchOrders=async()=>{
        try{
            const response = await fetch("http://localhost:4000/api/orders/policies/claims", {
              method: "GET",
            });
            const json = await response.json();
            const httpStatus = response.status; // This gives you the HTTP status code
        
            console.log(httpStatus);
            console.log(json);
            if(httpStatus>300){
                
            }else{
                setOrders(json.order)
            }
            
            
        }catch(error){
          console.log("Error is "+error)
        }
    }

    const navigate=useNavigate();
    let json=[];
    useEffect(() => {
    if(localStorage.getItem("isAdmin")==null){
        navigate("/");
    }
    fetchOrders();
    
     
    }, [])
    
  return (
    <>
    <h1>Dashboard</h1>
    <hr/>
    <h3>Add policy</h3>
    <form>
       Image: <input type='text' name='image' value={formData.image} onChange={handlePoliyChange}/>
       <br/>
       Policy Name: <input type="text" name='policyName'  value={formData.policyName} onChange={handlePoliyChange}/>
       <br/>
       Policy Type: <input type="text" name='policyType'  value={formData.policyType} onChange={handlePoliyChange}/>
       <br/>
       Policy Description: <input type="text" value={formData.policyDescription} name='policyDescription'  onChange={handlePoliyChange}/>
   <button type='submit' onClick={addPolicy}>Add Policy</button>
    </form>
    <hr/>
    <h3>Orders:</h3>
    {/* {orders.map((item) => (
        <Order item={item} index={item._id}/>
    ))} */}
    {/* {orders.forEach(item => {
        <Order item={item} index={item._id}/>
    })} */}
    {/* <table>
        <tr>
            <th>User</th><th>Status</th>
        </tr>
    {
        json.map((item,key)=>{
            <tr>
                <td></td>
                <td></td>
            </tr>
        })
    }
</table> */}

    
    </>
  )
}

export default Dashboard