import { TextField } from "@mui/material";
import React from "react";
import { useController } from "react-hook-form";

export function LabelInputField({
	name,
	style,
	control,
	label,
	variant,
	...inputProps
}) {
	const {
		field: { value, onChange, onBlur, ref },
		fieldState: { invalid, error },
	} = useController({
		name,
		control,
	});

	return (
		<TextField
			style={style}
			value={value}
			onChange={onChange}
			onBlur={onBlur}
			label={label}
			inputRef={ref}
			variant={variant}
			error={invalid}
			helperText={error ? error.message : undefined}
			inputProps={inputProps}
		/>
	);
}
