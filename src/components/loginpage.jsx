import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const userDetails = {username:"priyanka",password:"1234"}

// function Login() {
//   // State to store form data
  // const [formData, setData] = useState({username: "priya", password: "1234" });

  function Login() {
      // State to store form data
      const [formData, setData] = useState({username: "", password: "" });
      const navigate = useNavigate() //it is used to navigate
    
     

  const handleChange = (event) => {
    const id = event.target.id;
    const value = event.target.value;
    // console.log(id, value);
    setData({ ...formData, [id]: value });
  };

  function submitData(event) {
    event.preventDefault();
    //console.log(formData); // Log the formData to see the object
    if(formData.username === userDetails.username && formData.password === userDetails.password){
      navigate("/")
    }
  
  else{
    alert("data it not found")
  }
}

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center", // Centers horizontally
          textAlign: "center",
          backgroundColor: "black",
          height: "100vh", // Take full viewport height
          width: "100%",
          margin: "0",
        }}
      >
        <h1 style={{ color: "white", marginBottom: "20px" }}>Login Page</h1>

        <form
          action=""
          style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
          onSubmit={submitData}
        >
          <label htmlFor="username" style={{ color: "white", marginBottom: "5px" }}>
            Username
          </label>
          <input
            id="username"
            type="text"
            placeholder="Enter your username"
            style={{
              marginBottom: "20px",
              padding: "10px",
              borderRadius: "8px",
              width: "250px",
              border: "1px solid #ccc",
            }}
            onChange={handleChange}
          />

          <label htmlFor="password" style={{ color: "white", marginBottom: "5px" }}>
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            style={{
              marginBottom: "20px",
              padding: "10px",
              borderRadius: "8px",
              width: "250px",
              border: "1px solid #ccc",
            }}
            onChange={handleChange}
          />

          <button
            type="submit"
            style={{
              backgroundColor: "black",
              color: "white",
              borderRadius: "8px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              padding: "12px 20px",
              border: "none",
              cursor: "pointer",
              width: "250px",
              fontSize: "16px",
            }}
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
}

export default Login;
