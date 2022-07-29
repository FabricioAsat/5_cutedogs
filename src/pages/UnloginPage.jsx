import React from "react";

export const UnloginPage = () => {
	return (
		<div className="flex flex-col items-center pt-6 px-4">
			<h2 className="lowBigSize font-bold text-center">
				Bienvenido a <b className="text-sky-500 font-bold">Cute Dogs</b>
			</h2>
			<small className="lowShortSize italic font-medium">
				Inicia sesión para ver perritos bonitos.
			</small>
			<span className="w-full mt-10 text-center">
				<h3 className="mediumSize font-bold">
					Qué es <b className="text-sky-500 font-bold">Cute Dogs</b>?
				</h3>
				<p className="lowShortSize italic font-medium">
					<b className="text-sky-500 font-bold">Cute Dogs</b> es una aplicación para ver perritos.
					El objetivo principal de ella es aprender a utilizar Auth0, hacer un Login/Logout y
					trabajar con diferentes funcionalidades de la librería, más no presentar una aplicación
					agradable al usuario.
				</p>
			</span>
		</div>
	);
};
