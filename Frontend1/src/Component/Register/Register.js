import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  useEffect(() => {
    if(localStorage.getItem("user")){
      navigate("/");
      window.location.reload(false);
      ;}
  }, [])
  const navigate=useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    fname: '',
    lname: '',
    mobileNumber: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
    const response = await fetch("http://localhost:4000/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const json = await response.json();
    const {success,error}=json;
console.log(json);
    if (success==false ) {
      console.log(json.success);
      alert(json.error)
    } else {
      // localStorage.setItem("user", json.user._id);
      alert("Signed up successfully");
      navigate("/login");
    }
}catch(error){
  console.log(error);
}
  };


  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          required
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
          <input
          type="text"
          required
          name="fname"
          placeholder="First Name"
          value={formData.fname}
          onChange={handleChange}
        />
        <input
          type="text"
          name="lname"
          required
          placeholder="Last Name"
          value={formData.lname}
          onChange={handleChange}
        />
        <input
          type="number"
          name="mobileNumber"
          required
          max={9999999999}
          min={1000000000}
          placeholder="Mobile Number"
          value={formData.mobileNumber}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          required
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Register;