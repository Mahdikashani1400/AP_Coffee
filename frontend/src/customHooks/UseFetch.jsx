import React from 'react'

export default async function UseFetch({ pathKey, method, type = "json", data = null, token = null }) {
    let result = null
    let status = null
    await fetch(`http://localhost:8000/inventory/${pathKey}/`, {
        method: method,
        headers: {
            'Content-Type': type === "json" && 'application/json',
            'Authorization': token && `Token ${token}`,
        },
        body: data && JSON.stringify(data)
    })
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
