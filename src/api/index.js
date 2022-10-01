import axios from "axios"; //Axios is the library which helps in Call







export const getPlacesData = async (type, sw, ne) => {
  try {
   
    const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {

      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
      },
      headers: {
        'X-RapidAPI-Key': '12155806abmshb052d554e9f2c8fp1785b4jsnbd7968cba6a8',
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
      }
    });
    return data;
  } catch (error) {
    console.log("---Error---", error)
  }
}