 import axios from "axios";
// base url
 const BASE_URL = "https://youtube138.p.rapidapi.com";

// api headers
const options = {
    params: { hl: 'en', gl: 'US'},
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_YOUTUBE_API_KEY,
        'X-RapidAPI-Host': BASE_URL
    }
};

// method to fetch data from rapid api
export const fetchDataFromApi = async (url) => {
    const {data} = await axios.get(`${BASE_URL}/${url}`, options)
    return data
}






