import React from "react";
import hexToRgba from "hex-to-rgba";
import "./Equipos.css";
import Colaborador from "../colaboradores";

const Equipo = (props) => {
	const { colorPrimario, colorSecundario, titulo, id } = props.datos;
	const { colaboradores, eliminarColaborador, actualizarColor, like } = props;
	// antes la tenia asi y me daba undefined
	// const Equipo = ({
	// 	especialidad,
	// 	color1,
	// 	color2,
	// 	colaboradores,
	// 	eliminarColaborador,
	// 	actualizarColor,
	// 	id,
	// }) => {
	// const { idS } = id;
	// console.log("soy el ID desde equipo", id);
	// const { especialidad, color1, color2, colaboradores } = props;
	// const { datos } = props;
	// console.log(datos);
	// console.log(colaboradores.length);

	const obj = {
		backgroundColor: hexToRgba(colorPrimario, 0.6),
	};
	const estiloTitulo = { borderColor: colorPrimario };
	return (
		<>
			{colaboradores.length > 0 && (
				<section className="equipo" style={obj}>
					<input
						className="inputColor"
						type="color"
						value={colorSecundario}
						onChange={(e) => {
							actualizarColor(e.target.value, id);
						}}
					/>
					<h3 style={estiloTitulo}>{titulo}</h3>
					<div className="colaboradores">
						{colaboradores.map((colaborador, i) => (
							<Colaborador
								datos={colaborador}
								key={i}
								colorPrimario={colorPrimario}
								eliminarColaborador={eliminarColaborador}
								like={like}
							/>
						))}
					</div>
				</section>
			)}
		</>
	);
};

export default Equipo;
