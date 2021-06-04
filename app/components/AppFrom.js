import { Formik } from 'formik'
import React from 'react'

export default function AppFrom({ initialValues, onSubmit, validateSchema, children }) {
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validateSchema}
        >
            {() => (
                <>
                    {children}
                </>
            )}

        </Formik>
    )
}
