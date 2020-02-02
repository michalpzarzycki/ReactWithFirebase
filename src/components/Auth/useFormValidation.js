import React, { useState } from 'react'

const useFormValidation = (initialState, validate) => {

    const [values, setValues] = useState(initialState)

    const handleChange = (event) => {
        event.persist();
        setValues(previousValues => ({
            ...previousValues,
            [event.target.name]: event.target.value
        }))
    }
    const handleSubmit = (event) => {
      event.preventDefault();
      validate(values)
      console.log({ values })
    }
 return { handleChange, handleSubmit, values }
}

export default useFormValidation;