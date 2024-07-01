import React, { useContext } from 'react'
import { AppContext } from '../../Contexts/AppContext';
import UseFetch from '../../customHooks/UseFetch';
import ShowToast from '../../ShowToast';
import { Navigate } from 'react-router-dom';

export default function SignIn() {

    const contextData = useContext(AppContext);
    const changePage = () => {
        contextData.setSignIn(prevState => !prevState)
    }
    const signInHandler = async (e) => {

        e.preventDefault()
        e.stopPropagation();

        const info = {
            pathKey: "register", method: "POST", type: "json", data: {
                role: "USER",
                username: 'hesam',
                email: 'hesam@example.com',
                password: "hesam123456",
                full_name: 'hesam ahmadi',
                phone_number: '09366888418',


                // add other fields
            }
        }

        const [status, userInfo] = await UseFetch(info)
        console.log(status);
        if (status === 201) {
            ShowToast("ثبت نام با موفقیت انجام شد", "success", () => {
                contextData.setUserInfo(userInfo.user)
                localStorage.setItem('token', userInfo.token)


            });

        } else if (status === 401) {
            console.log(userInfo);
            ShowToast("نام کاربری یا ایمیل تکراری است", "error");
        } else if (status === 400) {
            ShowToast("لطفا تمامی فیلد های لازم را پر کنید", "error");
        }
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

                    <div className="component_container">

                        <div className='login__form-container'>
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
                                        <input type="text" id="firstName" className="" placeholder="علی حسنی" />
                                    </div>
                                    <div className="input__container">
                                        <label htmlFor="userName" className="">
                                            نام کاربری
                                        </label>
                                        <input
                                            type="text"
                                            id="userName"
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
                                            className=""
                                            placeholder="ali1234"
                                        />
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
