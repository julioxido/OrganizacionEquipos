import "./Formulario.css";
import Campo from "../campo";
import ListaOpciones from "../ListaOpciones/ListaOpciones";
import Boton from "../boton";
import { useState } from "react";

const Formulario = ({ equipos, registrarColaborador, crearEquipo }) => {
	const [nombre, setNombre] = useState("");
	const [puesto, setPuesto] = useState("");
	const [foto, setFoto] = useState("");
	const [equipo, setEquipo] = useState("");
	const [titulo, setTitulo] = useState("");
	const [color, setColor] = useState("");

	const manejarEnvio = (e) => {
		e.preventDefault();

		let datosAEnviar = {
			equipo,
			nombre,
			puesto,
			foto,
		};
		console.log(datosAEnviar);
		registrarColaborador(datosAEnviar);
	};

	const manejarNuevoEquipo = (e) => {
		e.preventDefault();
		crearEquipo({ colorPrimario: color, titulo });
	};
	return (
		<section className="formulario">
			<form onSubmit={manejarEnvio}>
				<h2>Rellena el formulario para crear el colaborador</h2>

				<Campo
					valor={nombre}
					actualizarValor={setNombre}
					texto="Nombre"
					placeholder={"Ingresar Nombre"}
					required
				/>
				<Campo
					valor={puesto}
					actualizarValor={setPuesto}
					texto="Puesto"
					placeholder={"Ingresar Puesto"}
					required
				/>
				<Campo
					valor={foto}
					actualizarValor={setFoto}
					texto="Foto"
					placeholder={"Ingresar enlace de Foto"}
					required
				/>
				<ListaOpciones
					valor={equipo}
					actualizarEquipo={setEquipo}
					equipos={equipos}
				/>
				<Boton titulo="Crear colaborador" />
			</form>
			<form onSubmit={manejarNuevoEquipo}>
				<h2>Rellena el formulario para crear el equipo</h2>
				<Campo
					valor={titulo}
					actualizarValor={setTitulo}
					texto="Titulo"
					placeholder={"Ingresar Nombre"}
					required
				/>
				<Campo
					type={"color"}
					valor={color}
					actualizarValor={setColor}
					texto="Color"
					placeholder={"Ingresar el color en Exhadecimal"}
					required
				/>
				<Boton titulo="Registar Equipo" />
			</form>
		</section>
	);
};

export default Formulario;
