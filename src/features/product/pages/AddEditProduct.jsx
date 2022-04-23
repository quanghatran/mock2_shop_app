import { Box } from "@mui/material";
import React from "react";
import ProductForm from "../components/ProductForm";

export default function AddEditProduct() {
	const initialValues = {
		name: "",
	};

	const handleProductFormSubmit = (formValues) => {
		console.log(formValues);
	};
	return (
		<Box>
			<ProductForm
				initialValues={initialValues}
				onSubmit={handleProductFormSubmit}
			/>
		</Box>
	);
}
