import { useAuth0 } from "@auth0/auth0-react";

export const NavBar = () => {
	const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

	return (
		<nav className="bg-primero text-fondo flex justify-between items-center h-14 md:h-16 px-2 md:px-8 ">
			<h6 className="mediumSize font-bold">Cute Dogs</h6>

			<span className="flex gap-4">
				{isAuthenticated ? (
					<button
						onClick={() => logout()}
						className="lowShortSize font-bold text-red-500 underline underline-offset-4 decoration-2 px-2 py-1">
						Salir sesión
					</button>
				) : (
					<button
						onClick={() => loginWithRedirect()}
						className="lowShortSize font-bold text-green-500 underline underline-offset-4 decoration-2 px-2 py-1">
						Iniciar sesión
					</button>
				)}
			</span>
		</nav>
	);
};
