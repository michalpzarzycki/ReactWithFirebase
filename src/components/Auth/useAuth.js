import React, { useState, useEffect } from 'react';
import firebase from '../../firebase/firebase'
import firebaseConfig from '../../firebase/config';

function useAuth() {
const [authUser, setAuthUser] = useState(null)
useEffect(()=>{
   const unsubscibe = firebase.auth.onAuthStateChanged(user => {
        if(user) {
           setAuthUser(user)
        } else {
            setAuthUser(null)
        }
    })
    return () => unsubscibe()
}, [])
return authUser
}

export default useAuth