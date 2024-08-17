import React from "react";
import { useQuery } from "react-query";
import { getItemLocale, mainHost } from "../data";

function UseUsers() {

    const token = getItemLocale("token");

    return useQuery(
        "Users",
        () => {
            return fetch(`${mainHost}/users/`, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${token}`,

                },
            }).then((res) => res.json())

        },

    );
}

export default UseUsers;
