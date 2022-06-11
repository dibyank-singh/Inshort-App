import newsdata from "../Validate.js"

export const  newsrouter=async(req , res)=>{

    try{
     
     const data= await newsdata.find({})
     res.status(200).json(data)

    }catch(err){
         res.status(500).json(err)
        console.log("error while at res ", err)
    }


}
