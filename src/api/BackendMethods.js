import { useState } from 'react'
import API from "./ApiInstance";
import { storeJsonData } from "../utils/storage";
import { useNavigate } from "react-router-dom";


const handleLogin = (username, password) => {

    const navigate = useNavigate();

    let payload = {username: username, password: password}

    API.get('/login', payload)
        .then( (response) => {
            storeJsonData("currentUser", response)
            const thisRole = response.data.role
            // role 1 : admin
            if(thisRole === 1) navigate("/admin_space")
            // role 2 : secretaire
            if(thisRole === 2) navigate("/members_space", {state:{ role: "secretaire" }})
            // role 3 : membre 
            if(thisRole === 3) navigate("/members_space", {state:{ role: "member" }})
        })
        .catch((error) => {
            alert("ERROR : ", error);
        })

}

const getAllMembers = () => {

    API.get('/members')
        .then(response => {
            const data = response.data;
            console.log(data);
            return data;
        })
        .catch(error => {
            console.error("Error:", error);
            alert("Error occurred while fetching data. See console for details.");
        });

} 

export { getAllMembers, handleLogin, }