import React from 'react';
import useFormValidation from '../Auth/useFormValidation';
import validateCreate from '../Auth/validateCreate'
import FirebaseContext from '../../firebase/context';
const INITIAL_STATE = {
    description:"",
    url:""
}
const CreateLink = (props) => {
    const { firebase, user }  = React.useContext(FirebaseContext)
const { handleSubmit, handleChange, values, errors } = useFormValidation(INITIAL_STATE, validateCreate, handleCreateLink)
console.log("USER:", user)
function handleCreateLink() {
if(!user) {
    props.history.push('/login')
} else {
    const { url, description } = values;
    const newLink = {
        url, 
        description,
        postedBy: {
            id: user.uid,
            name: user.displayName
        },
        votes: [],
        comments: [],
        created: Date.now()
    }
    firebase.db.collection('links').add(newLink);
    props.history.push('/')
}

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
            {console.log(errors)}
            {errors.description && <p>ERROR: {errors.description}</p>}
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