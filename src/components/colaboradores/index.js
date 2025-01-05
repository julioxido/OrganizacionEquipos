import React from "react";
import "./Colaboradores.css";
import { IoIosCloseCircle, IoIosHeart } from "react-icons/io";
import { CiHeart } from "react-icons/ci";

const Colaborador = ({ datos, colorPrimario, eliminarColaborador, like }) => {
	const { foto, nombre, puesto, id, fav } = datos;

	return (
		<div className="colaborador" id={id}>
			<IoIosCloseCircle
				className="btn"
				onClick={() => eliminarColaborador(id)}
			/>
			<div className="encabezado" style={{ background: colorPrimario }}>
				<img src={foto} alt={nombre} />
			</div>
			<div className="info">
				<h4>{nombre}</h4>
				<h5>{puesto}</h5>
				{fav ? (
					<IoIosHeart color="red" onClick={() => like(id)} />
				) : (
					<CiHeart onClick={() => like(id)} />
				)}
			</div>
		</div>
	);
};

export default Colaborador;
