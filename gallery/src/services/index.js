import axios from 'axios'

export default axios.create({
    baseURL: "https://api.pexels.com",
    headers: {
        Authorization: "563492ad6f917000010000015c12aa4accf34f95820a4ba8c2ac0316"
    }
})