import React from 'react'
import { View, Text } from 'react-native'
import { useFormikContext } from "formik"
import AppButton from "./AppButton"

import AppTextInput from './AppTextInput'

export default function SubmitButton({ title }) {
    const { handleSubmit } = useFormikContext();
    return (
        <AppButton title={title} color="secondary" onPress={handleSubmit} />
    )
}
