import React from "react";
import "./ListaOpciones.css";

const ListaOpciones = ({ valor, actualizarEquipo, equipos }) => {
	// const equipos = [
	// 	"Programacion",
	// 	"Front End",
	// 	"Back End",
	// 	"Data Science",
	// 	"DevOps",
	// 	"UX y Desing",
	// 	"Movil",
	// 	"Innovacion y Gestion",
	// ];
	const manejarCambio = (e) => {
		actualizarEquipo(e.target.value);
	};
	return (
		<div className="lista-opciones">
			<label>Equipos</label>
			<select value={valor} onChange={manejarCambio}>
				<option value="" disabled defaultValue="" hidden>
					Seleccionar Equipo
				</option>
				{equipos.map((equipo, i) => (
					<option key={i} value={equipo}>
						{equipo}
					</option>
				))}
			</select>
		</div>
	);
};

export default ListaOpciones;
