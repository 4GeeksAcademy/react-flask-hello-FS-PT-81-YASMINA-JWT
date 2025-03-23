import React, { useContext, useEffect } from "react"
import {Formulario } from "../components/Formulario.jsx";

export const Home = () => {

	const { store, actions } = useContext(Context);



	return (
		<div className="text-center mt-5">
			<h1 className="display">Registro</h1>
			<Formulario type={'registro'} />
			<h2 className="lead">Inicio</h2>
			<Formulario type={'inicio'} />
		</div>
	);
}; 