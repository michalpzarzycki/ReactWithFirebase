import React, { useState } from 'react';

const Login = () => {
const [login, setLogin] = useState(true);
    return(
        <div>
<h2>{login ? "Login" : "Create Account"}</h2>
<form>
    {!login && <input type="text" placeholder="Your name" autoComplete="off"/>}
    <input type="email" placeholder="Your email" autoComplete="off"/>
    <input type="password" placeholder="Your password" />
    <div>
        <button type="submit">SUBMIT</button>
        <button type="button" onClick={()=>setLogin(prevState=>!prevState)}>
    {login ? "need to create an account" : "already have an account?"}
        </button>
    </div>
</form>
        </div>
    )
}

export default Login