import React from "react";
import { useQuery } from "react-query";
import { mainHost } from "../data";

function UseCat() {


    return useQuery(
        "Categories",
        () => {
            console.log("Fetch !!");
            return fetch(`${mainHost}/categories/`, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                },
            }).then((res) => res.json())

        },

    );
}

export default UseCat;
