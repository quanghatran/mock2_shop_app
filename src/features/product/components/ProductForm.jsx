import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button, CircularProgress } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { LabelInputField } from "../../../components/FormFields";

const schema = yup.object().shape({
	name: yup.string().required(),
});

export default function ProductForm({ initialValues, onSubmit }) {
	const {
		control,
		handleSubmit,
		formState: { isSubmitting },
	} = useForm({
		defaultValues: initialValues,
		resolver: yupResolver(schema),
	});

	const handleFormSubmit = (formValues) => {
		// console.log(formValues);
		onSubmit(formValues);
	};
	return (
		<Box mt={4} ml={4}>
			<form onSubmit={handleSubmit(handleFormSubmit)}>
				{/* form field */}

				<LabelInputField
					name='name'
					variant='standard'
					control={control}
					label='Full Name'
				/>

				<Box mt={3}>
					<Button
						type='submit'
						variant='contained'
						color='primary'
						disabled={isSubmitting}>
						{isSubmitting && <CircularProgress color='primary' size={16} />}
						Save
					</Button>
				</Box>
			</form>
		</Box>
	);
}
