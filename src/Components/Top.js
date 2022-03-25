import React from "react";
import { NavLink } from "react-router-dom";
const Top = () => {
  return (
    <div>
      <div className="art">
        <div className="arts">The</div>
        <span className="arti">siren</span>
      </div>
      <div className="ban1">
          <div><NavLink to="/Honey" style={({ isActive }) => { return {color: isActive ? "red" : "Black",textDecoration: "none",} }}> Home </NavLink></div>    
          <div><NavLink to="/Bollywood" style={({ isActive }) => { return {color: isActive ? "red" : "Black",textDecoration: "none",} }}> movies </NavLink></div>
          <div><NavLink to="/Growth" style={({ isActive }) => { return {color: isActive ? "red" : "Black",textDecoration: "none",} }}> Gadgets </NavLink></div>    
          <div><NavLink to="/Info" style={({ isActive }) => { return {color: isActive ? "red" : "Black",textDecoration: "none",} }}> TechJobs </NavLink></div>
          <div><NavLink to="/Place" style={({ isActive }) => { return {color: isActive ? "red" : "Black",textDecoration: "none",} }}> places to visit </NavLink></div>    
          <div><NavLink to="/about" style={({ isActive }) => { return {color: isActive ? "red" : "Black",textDecoration: "none",} }}> About Us </NavLink></div>
      </div>
      <hr />
    </div>
  );
};

export default Top;