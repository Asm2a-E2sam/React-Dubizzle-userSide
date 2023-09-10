import axios from "axios";

const axiosInstanceProducts= axios.create({
baseURL:'http://localhost:5555',
})

export default axiosInstanceProducts;