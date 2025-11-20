// import { FormErrorMessage, Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import { Input } from 'antd';
import { Controller } from 'react-hook-form';

const FormInput = ({
	control,
	required = false,
	name,
	inputProps = {},
	disabled = false,
	inputLeftElement,
	inputRightElement,
	defaultValue = '',
	placeholder = '',
	autoFocus = false,
	validation,
	...props
}) => {
	return (
		<Controller
			name={name}
			control={control}
			defaultValue={defaultValue}
            rules={{ required: true }}
			render={({ field: { onChange, value }, fieldState: { error } }) => (
				<>
					<Input
							value={value}
							onChange={onChange}
							{...props}
							placeholder={placeholder}
							{...inputProps}
							required={required}
							height="40px"
						/>

			
					<span>{error?.message}</span>
				</>
			)}
		/>
	);
};

export default FormInput;
