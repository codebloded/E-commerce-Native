import React from 'react'
import { View, Text } from 'react-native'
import { useFormikContext } from "formik"
import AppTextInput from './AppTextInput';
import ErrorMessage from './ErrorMessage';

export default function AppFormFeild({ name, ...otherProps }) {
    const { handleChange, setFieldTouched, touched, errors } = useFormikContext();
    return (
        <>
            <AppTextInput

                onBlur={() => setFieldTouched(name)}
                onChangeText={handleChange(name)}
                {...otherProps}

            />
            <ErrorMessage visible={touched[name]} error={errors[name]} />
        </>

    )
}
