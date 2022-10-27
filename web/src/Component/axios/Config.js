import Axios from 'axios'

const Http = Axios.create({
    baseURL: 'https://talentadigital.id:2028/Api',
    setTimeout: 60000,
    // baseURL: 'http://localhost:5000/Api/',
})
export default Http