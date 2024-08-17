import React, { useContext } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { getItemLocale, mainHost } from "../data";
import { AppContext } from "../Contexts/AppContext";
import ShowToast from "../ShowToast";
import UseLogin from "./UseLogin";


function UseSignIn() {
    const contextData = useContext(AppContext);
    const { mutate: loginUser } = UseLogin()

    return useMutation(async (data) => {
        console.log(data);
        return fetch(`${mainHost}/register/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }).then((res) => {
            if (res.status === 201) {
                ShowToast("ثبت نام با موفقیت انجام شد", "success", async () => {

                    loginUser({
                        identifier: data.username,
                        password: data.password,
                    })
                    contextData.setSignIn(prevState => !prevState)


                });

            } else if (res.status === 401) {
                ShowToast("نام کاربری یا ایمیل تکراری است", "error");
            } else if (res.status === 400) {
                ShowToast("لطفا تمامی فیلد های لازم را پر کنید", "error");
            }
        })
    }, {

    });
}

export default UseSignIn;

