import React from 'react'

import ImageInputList from './ImageInputList'
import ErrorMessage from './ErrorMessage'
import { useFormikContext } from 'formik'

export default function AppImagePikcer({ name }) {
    const { setFieldValue, touched, errors, values } = useFormikContext()
    const imageUris = values[name];
    const handleRemove = uri => {
        setFieldValue(name, imageUris.filter(imageUri => {
            return imageUri !== uri;
        }));
    }
    const handleAdd = (uri) => {
        setFieldValue(name, [...imageUris, uri]);
    }
    return (
        <>
            <ImageInputList
                imageUris={imageUris}
                removeImage={handleRemove}
                onAddImage={handleAdd}
            />
            <ErrorMessage visible={touched[name]} error={errors[name]} />
        </>
    )
}

