import axios from 'axios';


export function getProduct() {
    return axios.get('http://127.0.0.1:8000/product/')
    .then(response => response.data)
}


// export function addProduct(product) {
//     return axios.post('http://127.0.0.1:8000/product/',{
//         prod_img:product.prod_img.value,
//         prod_name:product.prod_name.value,
//         prod_price:product.prod_price.value,
//         prod_desc:product.prod_desc.value
        
//     })
//     .then(response => response.data)
// }