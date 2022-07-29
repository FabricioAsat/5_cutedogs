import React from "react";
import { useFetch } from "../hooks/useFetch";

const LoginPage = () => {
	const { data, isPending, error, moreImages } = useFetch(import.meta.env.VITE_API_URL);

	if (error)
		return (
			<div className="flex flex-col justify-start items-center my-8 text-center">
				<h2 className="lowBigSize text-red-500">Error</h2>
				<p>
					Consulte a <b className="text-sky-500 font-bold shortSize">fabricioasat00@gmail.com</b> e
					informe lo sucedido.
				</p>
			</div>
		);

	if (isPending)
		return (
			<div className="flex flex-col justify-start items-center my-8 text-center">
				<h2 className="mediumSize">Cargando...</h2>
			</div>
		);

	return (
		<div className="">
			<button
				className="text-sky-500 font-bold mediumSize m-auto w-full mt-10"
				onClick={() => moreImages()}>
				Ver más fotos
			</button>

			<div className="grid grid-cols-gridCards justify-items-center items-center gap-6 py-10 px-4">
				{data.message.map((img, index) => (
					<Card img={img} key={index} />
				))}
			</div>
		</div>
	);
};

function Card({ img }) {
	return (
		<div className="w-48 h-52 bg-black/10">
			<img src={img} alt="Perrito" className="object-cover h-full w-full" />
		</div>
	);
}

export { LoginPage };
