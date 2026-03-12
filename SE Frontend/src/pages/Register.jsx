import React from "react";
import "../styles/Register.css";
import { Link, useNavigate } from "react-router-dom";

function Register() {
const navigate = useNavigate();
const handleRegister = (e) => {
e.preventDefault();   
localStorage.setItem("userRegistered","true");
navigate("/");
};
return (
<div className="register-page">
<div className="register-box">
<h2 className="register-title">Create Account</h2>
<form className="register-form" onSubmit={handleRegister}>
<input type="text"className="register-input"placeholder="Enter your name"required/>
<input type="email"className="register-input"placeholder="Enter your email"required/>
<input type="password"className="register-input"placeholder="Enter your password"required/>
<select className="register-select">
<option value="">Select Role</option>
<option value="customer">Customer</option>
<option value="seller">Seller</option>
<option value="admin">Admin</option>
</select>
<p className="login-footer">
Already have an account? <Link to="/login">Login</Link>
</p>
<button className="register-btn" type="submit">Register</button>
</form>
</div>
</div>
);
}
export default Register;