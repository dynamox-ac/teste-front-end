import { api } from '../services/api';

export const listProduct = () => {
    return (api.get("/products").then((response) => {
        return response.data
   }).catch(error => {console.log(error)}))
}

export const addProduct = (obj) => {
    return ( api.post("/products", obj).then(() => {console.log("Adicionado!")}) )
}

export const editProduct = (id, obj) => {
    return ( api.put(`/products/${id}`, obj).then(() => {console.log("Alterado!")}) )
}

export const deleteProduct = (id) => {
    return ( api.delete(`/products/${id}`).then(() => {console.log("Deletado!")}) )
}