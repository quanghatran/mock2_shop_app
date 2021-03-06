import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import { purple } from "@mui/material/colors";
import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/common/header/Header";

const User = React.lazy(() => import("./features/user"));
const Admin = React.lazy(() => import("./features/admin"));
const Auth = React.lazy(() => import("./features/auth"));
const NotFound = React.lazy(() => import("./components/common/NotFound"));

const theme = createTheme({
	palette: {
		primary: {
			main: "#34495e",
		},
		secondary: purple,
	},
	typography: {
		fontFamily: "Arial",
		fontWeightLight: 400,
		fontWeightRegular: 500,
		fontWeightMedium: 600,
		fontWeightBold: 700,
	},
});

function App() {
	return (
		<>
			<Suspense fallback={<div>Loading ...</div>}>
				<ThemeProvider theme={theme}>
					<BrowserRouter>
						<Header />
						<Routes>
							<Route path='/*' element={<User />} />
							<Route path='/admin/*' element={<Admin />} />

							<Route path='/auth/*' element={<Auth />} />

							<Route path='*' element={<NotFound />} />
						</Routes>
					</BrowserRouter>
				</ThemeProvider>
			</Suspense>
		</>
	);
}

export default App;
