import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
    const navigate=useNavigate();
    let json=[];
    useEffect(() => {
    if(localStorage.getItem("isAdmin")==null){
        navigate("/");
    }
    
     
    }, [])
    
  return (
    <>
    <h1>Dashboard</h1>
    <hr/>
    <h3>Add policy</h3>
    <hr/>
    <h3>Orders:</h3>
    <table>
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
</table>

    
    </>
  )
}

export default Dashboard