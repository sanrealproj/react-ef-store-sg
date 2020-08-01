import axios from 'axios'
import { API_URL, JPA_API_URL } from '../../Constants'

class ProductServiceApi {

    retrieveAllProducts(name) {
        //console.log('executed service')
        return axios.get(`${JPA_API_URL}/users/${name}/Products`);
    }

    retrieveProduct(name, id) {
        //console.log('executed service')
        return axios.get(`${JPA_API_URL}/users/${name}/Products/${id}`);
    }

    deleteProduct(name, id) {
        //console.log('executed service')
        return axios.delete(`${JPA_API_URL}/users/${name}/Products/${id}`);
    }

    updateProduct(name, id, Product) {
        //console.log('executed service')
        return axios.put(`${JPA_API_URL}/users/${name}/Products/${id}`, Product);
    }

    createProduct(name, Product) {
        //console.log('executed service')
        return axios.post(`${JPA_API_URL}/users/${name}/Products/`, Product);
    }

}

export default new ProductServiceApi()