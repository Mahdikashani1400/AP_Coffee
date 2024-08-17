import React from 'react'

export default async function UseFetch({ pathKey, method, type = "json", data = null, token = null }) {
    const mainHost = "https://coffee-shop-django.liara.run/inventory"

    let result = null
    let status = null
    let contentTypeObj = type === "json" ? { 'Content-Type': 'application/json' } : {}
    let tokenObj = token ? {
        'Authorization': `Token ${token}`,
    } : {}
    let dataObj = data ? {
        body: JSON.stringify(data)

    } : {}
    // console.log(dataObj);
    // console.log(tokenObj);
    console.log(
        {

            ...dataObj
        }
    );
    await fetch(`${mainHost}/${pathKey}/`, {
        method: method,
        headers: {
            ...contentTypeObj,
            ...tokenObj,
        },
        body: JSON.stringify(data)


    })
        // await fetch(`${mainHost}/${pathKey}/`, {
        //     method: method,
        //     headers: {
        //         ...contentTypeObj,
        //         ...tokenObj,
        //     },
        //     ...dataObj
        // })
        .then(response => {
            status = response.status
            return response.json()
        })
        .then(data => {
            result = data
        })
        .catch(error => {
            result = error
        });
    return [status, result]

}
