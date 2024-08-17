import React from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { getItemLocale, mainHost } from "../data";

function UseStorage() {
    const token = getItemLocale("token");

    return useQuery(
        "Storage",
        () => {
            return fetch(`${mainHost}/storage/`, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${token}`,
                },
            }).then((res) => res.json());
        }
    );
}

function UsePutStorage() {
    const token = getItemLocale("token");
    const queryClient = useQueryClient();

    return useMutation(async (data) => {
        return fetch(`${mainHost}/storage/`, {
            method: 'PUT',
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
            queryClient.invalidateQueries("Storage"); // Make sure the key matches exactly
        }
    });
}

export default UseStorage;
export { UsePutStorage };
