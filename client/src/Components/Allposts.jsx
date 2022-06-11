import React, { useEffect ,useState} from 'react';
import { getapidata } from "../Apidata/Api.js"
import Articles from './Articles.jsx';

const Allposts = () => {

    useEffect(() => {

        apidata();

    }, [])

    const apidata = async() => {
        const resdata =await getapidata();
        setPostdata(resdata.data)
        console.log(resdata)
    }

    const[postdata , setPostdata]=useState([])
    console.log(postdata)

    return (
     postdata.map(post=>(
         <Articles post={post} />
     ))
       
    )


};

export default Allposts;
