import React, { useState } from 'react';
import FirebaseContext from '../../firebase/context';

const ForgotPassword = () => {
    const { firebase } = React.useContext(FirebaseContext);
const [resetPasswordEmail, setResetPasswordEmail] = useState("");

async function handleResetPassword() {
    try{
await firebase.resetPassword(resetPasswordEmail)
    } catch(err) {
   console.log(err)
    }
}
    return(
       <div>
           <input 
           type="email"
           placeholder="Podaj maila"
           onChange={(event)=>{setResetPasswordEmail(event.target.value)}}
           />
           <button onClick={handleResetPassword}>Resetuj haslo</button>
       </div>
    )
}

export default ForgotPassword