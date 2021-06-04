import React from 'react'
import { View, Text } from 'react-native'
import { useFormikContext } from "formik"
import AppTextInput from './AppTextInput';
import ErrorMessage from './ErrorMessage';

export default function AppFormFeild({ name, width = "100%", ...otherProps }) {
    const { handleChange, setFieldTouched, touched, errors } = useFormikContext();
    return (
        <>
            <AppTextInput

                onBlur={() => setFieldTouched(name)}
                onChangeText={handleChange(name)}
                width={width}
                {...otherProps}

            />
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </>

    )
}
