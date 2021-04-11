export const selectStyles = {
	option: (styles: any, { data, isDisabled, isFocused, isSelected }: any) => ({
		...styles,
		backgroundColor: isDisabled
			? null
			: isSelected
				? data.color
				: isFocused
					? "#FBB6CE"
					: null,
		color: isDisabled
			? '#ccc'
			: isSelected,
		cursor: isDisabled ? 'not-allowed' : 'default',

		':active': {
			...styles[':active'],
			backgroundColor: "#ED64A6",
		},
		':hover': {
			...styles[':hover'],
			backgroundColor: "#FBB6CE",
		},
	}),

	control: (control: any) => ({
		...control,
		borderRadius: 14,
		padding: "3px 0"
	}),

	container: () => ({
		width: "100%",
	}),
}
