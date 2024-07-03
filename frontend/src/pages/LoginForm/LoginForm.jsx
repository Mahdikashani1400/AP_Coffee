import React, { useContext } from 'react'
import Login from '../../components/Login/Login'
import { AppContext } from '../../Contexts/AppContext';
import SignIn from '../../components/SignIn/SignIn';
import { Link } from 'react-router-dom';

export default function LoginForm() {
    const contextData = useContext(AppContext);

    return (
        <>
            <div className="flex justify-center py-6 text-xl text-white sticky top-0 left-0 bg-zinc-800"><Link to={"/"}>بازگشت به صفحه اصلی</Link></div>
            {contextData.signIn ? <SignIn /> : <Login />}


        </>
    )
}
