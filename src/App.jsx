import { UnloginPage } from "./pages/UnloginPage";
import { LoginPage } from "./pages/LoginPage";
import { useAuth0 } from "@auth0/auth0-react";
import { Layout } from "./components/Layout";

function App() {
	const { isAuthenticated } = useAuth0();

	return (
		<Container>
			<Layout>{isAuthenticated ? <LoginPage /> : <UnloginPage />}</Layout>
		</Container>
	);
}

function Container({ children }) {
	return <div className="w-full h-full min-h-screen max-w-7xl mx-auto">{children}</div>;
}

export default App;
