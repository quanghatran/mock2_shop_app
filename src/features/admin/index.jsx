import React from "react";
import { Route, Routes } from "react-router-dom";
import Product from "../product";
const DashBoard = React.lazy(() => import("./pages/DashBoard"));

export default function Admin() {
	return (
		<>
			<Routes>
				<Route index element={<DashBoard />} />
				<Route path='/product/*' element={<Product />} />
			</Routes>
		</>
	);
}
