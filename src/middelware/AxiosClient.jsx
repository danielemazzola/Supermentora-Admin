import axios from "axios";

const AxiosClient =  axios.create({
    baseURL: `${import.meta.env.VITE_URL_API}/api`
})

export default AxiosClient