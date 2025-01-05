import { useState } from "react"; // incorporar los datos desde una API  // incorporar los datos desde una API
import { v4 as uuid } from "uuid";
import "./App.css";
import Formulario from "./components/formulario/Formulario";
import Header from "./components/header/Header";
import MiOrg from "./components/MiOrg";
import Equipo from "./components/equipo";
import Footer from "./components/footer";

function App() {
	const [mostrarFormulario, setMostrarFormulario] = useState(false);
	// Colaboradores de la app
	const [colaboradores, setColaboradores] = useState([
		{
			id: uuid(),
			equipo: "Front End",
			foto: "https://github.com/harlandlohora.png",
			nombre: "Harland Lohora",
			puesto: "Instructor",
			fav: true,
		},
		{
			id: uuid(),
			equipo: "Programación",
			foto: "https://github.com/genesysR-dev.png",
			nombre: "Genesys Rondón",
			puesto: "Desarrolladora de software e instructora",
			fav: "",
		},
		{
			id: uuid(),
			equipo: "UX y Diseño",
			foto: "https://github.com/JeanmarieAluraLatam.png",
			nombre: "Jeanmarie Quijada",
			puesto: "Instructora en Alura Latam",
			fav: "",
		},
		{
			id: uuid(),
			equipo: "Programación",
			foto: "https://github.com/christianpva.png",
			nombre: "Christian Velasco",
			puesto: "Head de Alura e Instructor",
			fav: "",
		},
		{
			id: uuid(),
			equipo: "Innovación y Gestión",
			foto: "https://github.com/JoseDarioGonzalezCha.png",
			nombre: "Jose Gonzalez",
			puesto: "Dev FullStack",
			fav: "",
		},
	]);
	const [equipos, setEquipos] = useState([
		{
			id: uuid(),
			titulo: "Programación",
			colorPrimario: "#57C278",
			colorSecundario: "#D9F7E9",
		},
		{
			id: uuid(),
			titulo: "Front End",
			colorPrimario: "#82CFFA",
			colorSecundario: "#E8F8FF",
		},
		{
			id: uuid(),
			titulo: "Data Science",
			colorPrimario: "#A6D157",
			colorSecundario: "#F0F8E2",
		},
		{
			id: uuid(),
			titulo: "Devops",
			colorPrimario: "#E06B69",
			colorSecundario: "#FDE7E8",
		},
		{
			id: uuid(),
			titulo: "UX y Diseño",
			colorPrimario: "#DB6EBF",
			colorSecundario: "#FAE9F5",
		},
		{
			id: uuid(),
			titulo: "Móvil",
			colorPrimario: "#FFBA05",
			colorSecundario: "#FFF5D9",
		},
		{
			id: uuid(),
			titulo: "Innovación y Gestión",
			colorPrimario: "#FF8A29",
			colorSecundario: "#FFEEDF",
		},
	]);

	// Equipos de la app
	const cambiarMostrar = () => {
		setMostrarFormulario(!mostrarFormulario);
	};

	// Registar Colaborador
	const registrarColaborador = (colaborador) => {
		// console.log("nuevo colaboraro", colaborador);
		setColaboradores([...colaboradores, colaborador]);
	};

	// Actualizar color de equipo

	const actualizarColor = (color, id) => {
		// console.log("Actualizar color", color, id);
		const equiposActualizados = equipos.map((equipo) => {
			if (equipo.id === id) {
				equipo.colorPrimario = color;
			}
			return equipo;
		});

		setEquipos(equiposActualizados);
	};

	// Eliminar Colaborador
	const eliminarColaborador = (id) => {
		// console.log("Eliminando colabor", id);
		const nuevosColaboradores = colaboradores.filter(
			(colaborador) => colaborador.id !== id
		);
		setColaboradores(nuevosColaboradores);
	};

	// Crear equipos

	const crearEquipo = (nuevoEquipo) => {
		// console.log("Creadno equipo", nuevoEquipo);
		setEquipos([...equipos, { ...nuevoEquipo, id: uuid() }]);
	};

	// Like para favoritos
	const like = (id) => {
		console.log("eres like", id);
		const colaboradorLike = colaboradores.map((colaborador) => {
			if (colaborador.id === id) {
				colaborador.fav = !colaborador.fav;
			}
			return colaborador;
		});
		setColaboradores(colaboradorLike);
	};
	return (
		<div className="App">
			<Header />
			{mostrarFormulario && (
				<Formulario
					equipos={equipos.map((equipo) => equipo.titulo)}
					registrarColaborador={registrarColaborador}
					crearEquipo={crearEquipo}
				/>
			)}
			<MiOrg cambiarMostrar={cambiarMostrar} />
			{equipos.map((equipo, i) => (
				<Equipo
					datos={equipo}
					key={equipo.id}
					colaboradores={colaboradores.filter(
						(colaborador) => colaborador.equipo === equipo.titulo
					)}
					eliminarColaborador={eliminarColaborador}
					actualizarColor={actualizarColor}
					like={like}
				/>
			))}
			<Footer />
		</div>
	);
}

export default App;
