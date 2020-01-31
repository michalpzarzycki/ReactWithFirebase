import React, { useState } from 'react';
import useFormValidation from './useFormValidation'
const INITIAL_STATE = {
    name: "",
    email: "",
    password: ""
}
const Login = () => {
    const { handleChange, handleSubmit, values } = useFormValidation(INITIAL_STATE);
    const [login, setLogin] = useState(true);

    return (
        <div>
            <h2>{login ? "Login" : "Create Account"}</h2>
            <form>
                {!login && <input name="name" type="text" placeholder="Your name" value={values.name} onChange={handleChange} autoComplete="off" />}
                <input name="email" type="email" placeholder="Your email" value={values.email} onChange={handleChange} autoComplete="off" />
                <input name="password" type="password" placeholder="Your password" value={values.password} onChange={handleChange} />
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