import Newsdata from "../Validate.js";
import {data} from "./Data.js"
const defaultdata=async()=>{

    try{
       await Newsdata.deleteMany();
       await Newsdata.insertMany(data)
       console.log(Newsdata)
       console.log("datainserted successfully ")

    }catch(err){
        console.log("error while processing the default data ", err);

    }
}

export default defaultdata;