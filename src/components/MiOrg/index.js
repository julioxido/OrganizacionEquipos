// import React, { useState } from "react";
import "./MiOrg.css";

const MiOrg = ({ cambiarMostrar }) => {
	return (
		<section className="orgsection">
			<h3 className="title">Mi Organizacion</h3>
			<img src="/img/add.png" alt="miOrg" onClick={cambiarMostrar} />
		</section>
	);
};

export default MiOrg;
