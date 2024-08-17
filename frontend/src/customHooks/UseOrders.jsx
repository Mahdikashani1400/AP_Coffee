import React from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { getItemLocale, mainHost } from "../data";

function UseOrders() {
    const token = getItemLocale("token");


    return useQuery(
        "Orders",
        () => {
            // throw new Error("Internal Server Error | 500");
            return fetch(`${mainHost}/orders/`, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${token}`,

                },
            }).then((res) => res.json())

        },

    );
}

function UsePostOrders() {
    const token = getItemLocale("token");
    const queryClient = useQueryClient();

    return useMutation(async (data) => {
        return fetch(`${mainHost}/orders/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`,
            },
            body: JSON.stringify(data),
        }).then((res) => {
            if (!res.ok) {
                throw new Error('Failed to update storage');
            }
            return res.json();
        });
    }, {
        onSuccess: () => {
            queryClient.invalidateQueries("Orders"); // Make sure the key matches exactly
        }
    });
}

export default UseOrders;
export { UsePostOrders }
