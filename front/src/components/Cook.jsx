// Example using js-cookie in a React component
import React, { useEffect } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
const Cook = () => {
    const navigate = useNavigate()
 // Set a cookie
 useEffect(() => {
   Cookies.set("user_token", {"nom":"jenny","prenom":"rakoto",}, { expires: 7, path: "/" });
 }, []);

 // Get a cookie
 const userToken = Cookies.get("user_token");

 // Delete a cookie
 const logout = () => {
   Cookies.remove("user_token");
   // Additional logout logic...
 };

 return (
   <div>
     <p>User Token: {userToken}</p>
     <button onClick={logout}>Logout</button>
     <button onClick={()=>{navigate("/")}}>Logout</button>
   </div>
 );
};

export default Cook;