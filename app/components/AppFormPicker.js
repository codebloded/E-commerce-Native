import { useFormikContext } from 'formik'
import React from 'react'
import { View, Text } from 'react-native'
import AppPicker from './AppPicker'
import ErrorMessage from './ErrorMessage'

export default function AppFormPicker({ items, name, placeholder, numberOfColumn, PickerItemComponent, width }) {
    const { setFieldValue, values, errors, touched } = useFormikContext()
    return (
        <>
            <AppPicker
                items={items}
                placeholder={placeholder}
                numberOfColumn={numberOfColumn}
                PickerItemComponent={PickerItemComponent}
                onSelectItem={(item) => setFieldValue(item)}
                selectedItem={values[name]}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    )
}
