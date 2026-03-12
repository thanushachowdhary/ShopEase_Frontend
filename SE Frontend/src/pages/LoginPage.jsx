import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Login.css";

function Login(){
const navigate = useNavigate();
const [email,setEmail] = useState("");
const [password,setPassword] = useState("");
const handleLogin = () => {
if(email && password){
localStorage.setItem("isLoggedIn","true");
navigate("/");
}else{
alert("Please enter email and password");
}
};
return(
<div className="login-page">
<div className="login-card">
<h2>Welcome Back 👋</h2>
<p>Login to your ShopEase account</p>
<input type="email"placeholder="Enter Email"value={email}onChange={(e)=>setEmail(e.target.value)}/>
<input type="password"placeholder="Enter Password"value={password}onChange={(e)=>setPassword(e.target.value)}/>
<button className="login-btn" onClick={handleLogin}>Login</button>
<p className="register-text">
Don't have an account? <Link to="/register">Register</Link>
</p>
</div>
</div>
);
}
export default Login;