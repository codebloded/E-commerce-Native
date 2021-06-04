import { Formik, useFormikContext } from 'formik'
import React from 'react'
import { View, Text } from 'react-native'
import AppFormFeild from './AppFormFeild'

export default function AppFrom({ intitialValues, onSubmit, validateSchema, children }) {
    return (
        <Formik
            initialValues={intitialValues}
            onSubmit={onSubmit}
            validationSchema={validateSchema}
        >
            {() => (
                <>
                    { children}
                </>
            )}

        </Formik>
    )
}
