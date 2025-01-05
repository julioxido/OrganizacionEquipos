// import React, { useState } from "react";
import "./Campo.css";

const Campo = ({
	texto,
	placeholder,
	required,
	valor,
	actualizarValor,
	type = "text",
}) => {
	const manejarCambio = (e) => {
		actualizarValor(e.target.value);
	};
	return (
		<div className={`campo campo-${type}`}>
			<label>{texto}</label>
			<input
				type={type}
				placeholder={`${placeholder}...`}
				required={required}
				value={valor}
				onChange={manejarCambio}
			/>
		</div>
	);
};

export default Campo;
