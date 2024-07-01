import React from 'react'
import Swal from 'sweetalert2';

export default function ShowToast(title, icon, callback) {
    Swal
        .fire({
            position: "center",
            icon,
            title,
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
        })
        .then(async (result) => {
            callback ? callback() : ''
        });
}
