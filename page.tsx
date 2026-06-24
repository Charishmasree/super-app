"use client";

import { useState } from "react";

export default function Register() {

  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    mobile: "",
  });


  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };


  const handleSubmit = () => {

    if (
      !formData.name ||
      !formData.username ||
      !formData.email ||
      !formData.mobile
    ) {

      alert("Please fill all fields");
      return;

    }


    localStorage.setItem(
      "user",
      JSON.stringify(formData)
    );


    alert("Registration Successful");


    window.location.href="/categories";

  };


  return (

    <div
      style={{
        height:"100vh",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        background:"#f2f5ff"
      }}
    >


      <div
        style={{
          width:"350px",
          padding:"30px",
          background:"white",
          borderRadius:"15px",
          boxShadow:"0 5px 20px gray",
          textAlign:"center"
        }}
      >


        <h1>
          Registration
        </h1>


        <input
          style={inputStyle}
          type="text"
          name="name"
          placeholder="Enter Name"
          onChange={handleChange}
        />


        <input
          style={inputStyle}
          type="text"
          name="username"
          placeholder="Enter Username"
          onChange={handleChange}
        />


        <input
          style={inputStyle}
          type="email"
          name="email"
          placeholder="Enter Email"
          onChange={handleChange}
        />


        <input
          style={inputStyle}
          type="tel"
          name="mobile"
          placeholder="Enter Mobile Number"
          onChange={handleChange}
        />


        <button
          style={buttonStyle}
          onClick={handleSubmit}
        >
          Register
        </button>


      </div>


    </div>

  );
}



const inputStyle = {

  width:"100%",

  padding:"12px",

  margin:"10px 0",

  border:"1px solid #ccc",

  borderRadius:"8px",

  fontSize:"16px"

};



const buttonStyle = {

  width:"100%",

  padding:"12px",

  marginTop:"15px",

  background:"#2563eb",

  color:"white",

  border:"none",

  borderRadius:"8px",

  fontSize:"16px",

  cursor:"pointer"

};