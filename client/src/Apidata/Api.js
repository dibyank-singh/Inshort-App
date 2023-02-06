import axios  from "axios";
const url=``

 
export const  getapidata=async()=>{
    try{
       return await axios.get(`${url}/newsdetails`)
    }catch(err){
        console.log("error while fetching getapidata", err);

    }


}

