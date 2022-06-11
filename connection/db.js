import mongoose from "mongoose"
// Making a connection between server and mongodb 
const connect = async () => {

    try {

        const url = process.env.DATABASE
        await mongoose.connect(url, { useNewUrlParser: true })
        console.log("databse successfully connected with server ")
    } catch (err) {
        console.log("this error occured while connecting this with database ", err);
    }


}

export default connect;