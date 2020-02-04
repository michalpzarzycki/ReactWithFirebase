import React from 'react';
import useFormValidation from '../Auth/useFormValidation';
import validateCreate from '../Auth/validateCreate'
const INITIAL_STATE = {
    description:"",
    url:""
}
const CreateLink = () => {
const { handleSubmit, handleChange, values, errors } = useFormValidation(INITIAL_STATE, validateCreate, handleCreateLink)

function handleCreateLink() {
    console.log('link created')
}
    return(
        <form onSubmit={handleSubmit}>
            <input 
            name="description"
            placeholder="A description for your link"
            autoComplete="off"
            onChange={handleChange}
            value={values.description}
            type="text"/>
            {errors.description && <p>{errors.description}</p>}
               <input 
            name="url"
            placeholder="The URL for the link"
            autoComplete="off"
            onChange={handleChange}
            value={values.url}
            type="text"/>
            {errors.url && <p>{errors.url}</p>}

            <button type="submit">Submit</button>
        </form>
    )
}

export default CreateLink