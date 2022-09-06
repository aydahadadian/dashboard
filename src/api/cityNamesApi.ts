import  axios  from "axios";


const apiKey=process.env.REACT_APP_RAPIDAPI_KEY as string;
const baseUrl=`https://wft-geo-db.p.rapidapi.com/v1/geo/cities`;


export const getCityNamesData = async (name : string | undefined) => {

    try{
        const {data:{data}} = await axios.get(baseUrl,{
            
            params: {namePrefix: name},
            headers: {
            'X-RapidAPI-Key': apiKey,
            'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
            }

        })


       return data;
    }

    catch(error){
       console.log(error)
    }
}