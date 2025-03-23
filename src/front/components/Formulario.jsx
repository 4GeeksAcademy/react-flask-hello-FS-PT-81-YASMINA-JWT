import React from "react";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import '../../styles/formularioRegistro.css'



export const Formulario = ({type}) => {
    const { store, actions, } = useContext(Context);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log("submit", formData, 'type-->', type)
        setFormData({ email: '', password: ''});
        type=='login'?actions.login(formData):actions.registro(formData)
        
     }
    return (
        <form onSubmit={handleSubmit}>
            <input type="email" onChange={handleChange} name="email" placeholder="Email" value={formData.email}/>
            <input type="password" onChange={handleChange} name="password" placeholder="Password" value={formData.password}/>
            <input type="submit" />
        </form>
  
    );
};