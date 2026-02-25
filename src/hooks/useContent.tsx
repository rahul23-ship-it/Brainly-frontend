import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";

export function useContent() {
    const [content , setcontent ] = useState([]) ;

    async function fetchdata() {
       const response =  await axios.get(`${BACKEND_URL}/api/v1/content` , {
            headers:{
                "authorization": localStorage.getItem("token")
            }
        })
        setcontent(response.data.content)
    }
    useEffect(()=>{
        fetchdata();

        let interval = setInterval(()=>{fetchdata();},10*1000)

        return () => {
            clearInterval(interval);
        }
    },[])

    return {content,fetchdata}
}