import React, { useContext } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { getItemLocale, mainHost } from "../data";
import { AppContext } from "../Contexts/AppContext";
import ShowToast from "../ShowToast";

function useProducts(page = null) {

    const queryClient = useQueryClient()
    return useQuery(
        ["Products"],
        () => {
            console.log("Fetch !!");
            // throw new Error("Internal Server Error | 500");
            if (!page) {
                return fetch(`${mainHost}/products/`, {
                    method: "GET",
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }).then((res) => res.json())
            } else {
                return fetch(`${mainHost}/products/?limit=5&?page=${page}`, {
                    method: "GET",
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }).then((res) => res.json())
            }
            // .then(data => {
            //     console.log(data);
            // });
        },
        {
            // cacheTime: 5000,
            // staleTime: 4000, => یعنی توی این 4 ثانیه اگر مثلا تب عوض کنی، رکوئستی ب بک ارسال نمیشه اما بعد از 4 ثانیه دیتا های ما کهنه محسوب میشن و با نغییر تب یا کامپوننت، مجددا دیتا ها فچ میشن.
            // refetchOnMount: true,
            keepPreviousData: true,
            //   refetchOnWindowFocus: false,
            // refetchInterval: 3000,
            // refetchIntervalInBackground: true,
            // select: (data) => {
            //     return data.map((product) => ({
            //         ...product,
            //         price: product.price.toLocaleString('fa-IR'),
            //     }));
            // },

            // keepPreviousData:true,
            onSuccess: (data) => {
                // queryClient.invalidateQueries()

            },
            onError: (err) => {

            },
            // initialData: () => {
            //     const products = queryClient.getQueryData(["Products"])
            //     const product = products?.find(pro=>pro.id===+id)
            //     return product

            // }
        },

    );
}
function UsePostProduct() {
    const mainHost = "https://coffee-shop-django.liara.run/inventory"

    const token = getItemLocale("token")

    const queryClient = useQueryClient()
    // const contextData = useContext(AppContext);

    return useMutation(async (formData) => {
        return fetch(`${mainHost}/products/`, {
            // method: 'GET',
            method: 'POST',
            headers: {
                'Authorization': `Token ${token}`,
            },
            body: formData,
        })
            .then(response => {
                if (response.status === 201) {

                    ShowToast('محصول مورد نظر با موفقیت اضافه شد', "success")
                }
                else {
                    ShowToast('لطفا اطلاعات خواسته شده را به درستی وارد کنید', "error")

                }
                return response.json()
            })
    }, {
        onSuccess: () => {
            queryClient.invalidateQueries(["Products"])


        }
    })
}
function UseDeleteProduct() {
    const token = getItemLocale("token")
    const mainHost = "https://coffee-shop-django.liara.run/inventory"
    const queryClient = useQueryClient()

    return useMutation(async (id) => {
        return fetch(`${mainHost}/products/${id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Token ${token}`,
            },
        })

    }, {
        onSuccess: () => {
            queryClient.invalidateQueries(["Products"])

            ShowToast('محصول مورد نظر با موفقیت حذف شد', "success")
        }
    })
}


export { UsePostProduct, UseDeleteProduct }

export default useProducts;
