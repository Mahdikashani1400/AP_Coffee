import React, { useContext } from 'react'
import { AppContext } from '../../Contexts/AppContext';
import UseFetch from '../../customHooks/UseFetch';

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import ShowToast from '../../ShowToast';
import { Navigate } from 'react-router-dom';

// userInfo,
//     setUserInfo,

export default function Login() {

    const contextData = useContext(AppContext);
    const changePage = () => {
        contextData.setSignIn(prevState => !prevState)
    }

    const loginHandler = async (e) => {

        e.preventDefault()
        e.stopPropagation();
        const reqInfo = {
            pathKey: "login", method: "POST", type: "json", data: {
                identifier: "hesam",
                password: "hesam123456",
            }
        }
        const [status, userInfo] = await UseFetch(reqInfo)
        console.log(status);
        if (status === 200) {
            ShowToast("با موفقیت وارد شدید", "success", () => {
                contextData.setUserInfo(userInfo.user)
                localStorage.setItem('token', userInfo.token)


            });

        } else if (status === 401) {
            ShowToast("اطلاعات وارد شده صحیح نمیباشد", "error");

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
                                <button className="bg-blue-950 py-3 mb-8 w-full rounded-[10px] text-white transition-all hover:bg-blue-950/85" onClick={loginHandler}>
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
                )
            }
        </>
    )
}