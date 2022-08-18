import React from 'react'
import axios from 'axios';
function  deleteProduct(idProduct) {
    const reqDelete = axios({
        method: 'DELETE',
        url : `/api/products/${idProduct}`
    })
    .then(res => console.log(res))
}
export default deleteProduct
