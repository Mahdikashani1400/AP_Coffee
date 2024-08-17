import React, { useContext } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { getItemLocale, mainHost } from "../data";
import { AppContext } from "../Contexts/AppContext";
import ShowToast from "../ShowToast";


function UseLogin() {
    const queryClient = useQueryClient();
    const contextData = useContext(AppContext);
    let fetchStatus = null
    let userInfo = null
    return useMutation(async (data) => {
        console.log(data);
        return fetch(`${mainHost}/login/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }).then((res) => {
            fetchStatus = res.status
            console.log(fetchStatus);

            return res.json();
        }).then(data => {
            userInfo = data
            if (fetchStatus === 200) {
                ShowToast("با موفقیت وارد شدید", "success", () => {
                    localStorage.setItem('user-info', JSON.stringify(userInfo.user))
                    localStorage.setItem('token', userInfo.token)
                    contextData.setUserInfo(userInfo.user)


                });

            } else if (fetchStatus === 401) {
                ShowToast("اطلاعات وارد شده صحیح نمیباشد", "error");

            } else if (fetchStatus === 400) {
                ShowToast("لطفا تمامی فیلد های لازم را پر کنید", "error");
            }
        });
    }, {

    });
}

export default UseLogin;

