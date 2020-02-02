import React, { useState } from 'react';
import useFormValidation from './useFormValidation'
import validateLogin from './validateLogin'
import firebase from '../../firebase/firebase'
const INITIAL_STATE = {
    name: "",
    email: "",
    password: ""
}
const Login = () => {
    const { handleChange, handleSubmit, handleBlur, errors, isSubmitting, values } = useFormValidation(INITIAL_STATE, validateLogin, authenticateUser);
    const [login, setLogin] = useState(true);

     async function authenticateUser() {
       const { name, email, password } = values;
     const response = login ? await firebase.login(email, password) : await firebase.register(name, email, password)
     console.log({response})
    } 

    return (
        <div>
            <h2>{login ? "Login" : "Create Account"}</h2>
            <form>
                {!login && <input
                    name="name"
                    type="text"
                    placeholder="Your name"
                    value={values.name}
                    onChange={handleChange}
                    autoComplete="off" />}
                <input
                    name="email"
                    type="email"
                    placeholder="Your email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    autoComplete="off" />
                    {errors.email && <p>{errors.email}</p>}
                <input
                    name="password"
                    type="password"
                    placeholder="Your password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur} />
                    {errors.password && <p>{errors.password}</p>}

                <div>
                    <button type="submit" onClick={handleSubmit}>SUBMIT</button>
                    <button type="button" onClick={() => setLogin(prevState => !prevState)}>
                        {login ? "need to create an account" : "already have an account?"}
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Login