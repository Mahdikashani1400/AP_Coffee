import React, { useContext } from 'react'
import Login from '../../components/Login/Login'
import { AppContext } from '../../Contexts/AppContext';
import SignIn from '../../components/SignIn/SignIn';

export default function LoginForm() {
    const contextData = useContext(AppContext);
    console.log(contextData.signIn);
    return (
        <>
            {contextData.signIn ? <SignIn /> : <Login />}


        </>
    )
}
