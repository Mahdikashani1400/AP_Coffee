import React, { useContext } from 'react'
import { useMutation, useQueries, useQueryClient } from 'react-query'
import { getItemLocale, mainHost } from '../data'
import ShowToast from '../ShowToast'
import { AppContext } from '../Contexts/AppContext';



const productsFetcher = () => fetch(`${mainHost}/products/`, {
    method: "GET",
    headers: {
        'Content-Type': 'application/json',
    },
}).then((res) => res.json())

const CatsFetcher = () => fetch(`${mainHost}/categories/`, {
    method: "GET",
    headers: {
        'Content-Type': 'application/json',
    },
}).then((res) => res.json())


export default function UseData() {
    const queryClient = useQueryClient()

    return useQueries([
        {
            queryKey: "products", queryFn: productsFetcher,
            refetchIntervalInBackground: true,
            keepPreviousData: true,

        },
        { queryKey: "cats", queryFn: CatsFetcher },

    ])
}

