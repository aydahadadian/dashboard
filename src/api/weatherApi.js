import  axios  from "axios";


const apiKey=process.env.REACT_APP_RAPIDAPI_KEY;
const baseUrl=`https://weatherbit-v1-mashape.p.rapidapi.com/current`;


export const getWeatherData = async (lon,lat) => {

    try{
        const {data:{data}} = await axios.get(baseUrl,{
            
            params: {lon: lon, lat: lat},
            headers: {
            'X-RapidAPI-Key': apiKey,
            'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
            }

        })


       return data;
    }

    catch(error){
       console.log(error)
    }
}