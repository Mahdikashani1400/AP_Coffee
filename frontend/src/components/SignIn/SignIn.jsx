import React, { useContext, useState } from 'react'
import { AppContext } from '../../Contexts/AppContext';
import UseFetch from '../../customHooks/UseFetch';
import ShowToast from '../../ShowToast';
import { Navigate } from 'react-router-dom';
import UseSignIn from '../../customHooks/UseSignIn';

export default function SignIn() {

    const [firstNameVal, setFirstName] = useState("")
    const [userNameVal, setUserName] = useState("")
    const [emailVal, setEmail] = useState("")
    const [passwordVal, setPassword] = useState("")
    const [personTypeVal, setPersonType] = useState("USER")


    const contextData = useContext(AppContext);
    const changePage = () => {
        contextData.setSignIn(prevState => !prevState)
    }

    const { mutate: signInUser } = UseSignIn()

    const changeInputHandler = (e) => {
        if (e.target.name === "firstName") {
            setFirstName(prevState => e.target.value)
        } else
            if (e.target.name === "userName") {
                setUserName(prevState => e.target.value)
            } else
                if (e.target.name === "email") {
                    setEmail(prevState => e.target.value)
                } else
                    if (e.target.name === "password") {
                        setPassword(prevState => e.target.value)
                    } else
                        if (e.target.name === "personType") {
                            setPersonType(prevState => e.target.value)
                        }
    }


    const signInHandler = async (e) => {

        e.preventDefault()
        e.stopPropagation();

        const info = {

            role: personTypeVal,
            username: userNameVal,
            email: emailVal,
            password: passwordVal,
            full_name: firstNameVal,
            phone_number: '09366888418',

        }


        signInUser(info)

    }
    return (
        <>

            {
                contextData.userInfo ? (
                    <>
                        {
                            contextData.userInfo.role === "USER" ? <Navigate to={"/"} /> : <Navigate to={"/homeC"} />
                        }
                    </>
                ) : (

                    <div className="component_container ">

                        <div className='login__form-container mt-20'>
                            <form action="">
                                <div className="text-white font-semibold mb-6 w-fit text-center">

                                    <h3 className="mt-3 lg:text-4xl text-2xl text-center">
                                        صفحه ثبت نام
                                    </h3>
                                </div>
                                <div className="mb-10">
                                    <div className="input__container">
                                        <label htmlFor="firstName" className="">
                                            نام و نام خانوادگی
                                        </label>
                                        <input type="text" id="firstName" onChange={changeInputHandler} name='firstName' className="" placeholder="علی حسنی" />
                                    </div>
                                    <div className="input__container">
                                        <label htmlFor="userName" className="">
                                            نام کاربری
                                        </label>
                                        <input
                                            type="text"
                                            id="userName"
                                            onChange={changeInputHandler} name='userName'
                                            className=""
                                            placeholder="Ali_hasani"
                                        />
                                    </div>
                                    <div className="input__container">
                                        <label htmlFor="email" className="">
                                            ایمیل
                                        </label>
                                        <input
                                            type="text"
                                            id="email"
                                            onChange={changeInputHandler} name='email'
                                            className=""
                                            placeholder="ali@gmail.com"
                                        />
                                    </div>
                                    <div className="input__container">
                                        <label htmlFor="password" className="">
                                            رمز عبور
                                        </label>
                                        <input
                                            type="text"
                                            id="password"
                                            onChange={changeInputHandler} name='password'
                                            className=""
                                            placeholder="ali1234"
                                        />
                                    </div>
                                    <div className="input__container">
                                        <label htmlFor="personType" className="">
                                            به عنوان
                                        </label>
                                        <select onChange={changeInputHandler} name='personType' id="personType">
                                            <option value="USER">کاربر</option>
                                            <option value="ADMIN">ادمین</option>
                                        </select>
                                    </div>
                                </div>
                                <button className="bg-blue-950 py-3 mb-8 w-full rounded-[10px] text-white transition-all hover:bg-blue-950/85" onClick={signInHandler}>
                                    ثبت نام
                                </button>

                                <div className="">
                                    <div className="text-center text-white text-md cursor-pointer" onClick={changePage}>
                                        یا ورود
                                    </div>

                                </div>
                            </form>
                        </div>
                    </div>
                )
            }

        </>
    )
}
