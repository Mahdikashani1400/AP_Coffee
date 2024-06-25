import React, { useContext } from 'react'
import { AppContext } from '../../Contexts/AppContext';

export default function Login() {
    const contextData = useContext(AppContext);
    const changePage = () => {
        contextData.setSignIn(prevState => !prevState)
    }
    return (
        <>
            <div className="component_container">

                <div className='login__form-container'>
                    <form action="">
                        <div className="text-white font-semibold mb-6 w-fit text-center">

                            <h3 className="mt-3 lg:text-4xl text-2xl transition-all text-center ">
                                صفحه ورود
                            </h3>
                        </div>
                        <div className="mb-10">
                            <div className="input__container">
                                <label htmlFor="email" className="">
                                    ایمیل / نام کاربری
                                </label>
                                <input type="text" id="email" className="" placeholder="mahdi@gmail.com" />
                            </div>
                            <div className="input__container">
                                <label htmlFor="password" className="">
                                    رمز عبور
                                </label>
                                <input
                                    type="text"
                                    id="password"
                                    className=""
                                    placeholder="mahdi123"
                                />
                            </div>
                        </div>
                        <button className="bg-blue-950 py-3 mb-8 w-full rounded-[10px] text-white transition-all hover:bg-blue-950/85">
                            ورود
                        </button>

                        <div className="">
                            <div className="text-center text-white text-md cursor-pointer" onClick={changePage}>
                                یا ثبت نام
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}