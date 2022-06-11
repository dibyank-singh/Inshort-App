import axios  from "axios";
const url=`http://localhost:5000`
export const  getapidata=async()=>{
 
    try{
   
       return await axios.get(`${url}/newsdetails`)

    }catch(err){
        console.log("error while fetching getapidata", err);

    }


}

