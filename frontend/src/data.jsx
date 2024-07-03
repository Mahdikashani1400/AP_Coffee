import React from 'react'

const products = [
    {
        name: "all",
        namefa: "همه محصولات"
    },
    {
        name: "cake",
        namefa: "کیک"
    },
    {
        name: "coffee",
        namefa: "قهوه"
    },
    {
        name: "bastani",
        namefa: "بستنی"
    },
]
function setItemLocale(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
}
function getItemLocale(key) {
    return localStorage.getItem(key)
}

export default products

export { setItemLocale, getItemLocale }