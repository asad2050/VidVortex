import axios from 'axios';

const BASE_URL='https://youtube-v31.p.rapidapi.com';
const options = {
    url: BASE_URL,
    params: {
      maxResults: '50'
    },
    headers: {
      'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY,
      'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
    }
  };
//   the url is dynamic and we are going to utilize many endpoints.
//  This function allows us to find dynamic url into and get the response.

export const fetchFromAPI= async (url)=>{
 const {data}=   await axios.get(`${BASE_URL}/${url}`,options);
 return data;

}