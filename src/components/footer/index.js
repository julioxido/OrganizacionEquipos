import React from "react";
import { FaLinkedin, FaGithubAlt } from "react-icons/fa";

import "./Footer.css";

const Footer = () => {
	return (
		<footer
			className="footer"
			style={{ backgroundImage: "url(/img/footer.png)" }}
		>
			<div className="redes">
				<a
					href="https://www.linkedin.com/in/julio-cesar-realza-rojas-/"
					className="icon"
				>
					<FaLinkedin />
				</a>
				<a href="https://github.com/julioxido/julioxido">
					<FaGithubAlt className="icon" />
				</a>
			</div>

			<strong>Desarrollado por Julio Realza</strong>
		</footer>
	);
};

export default Footer;
