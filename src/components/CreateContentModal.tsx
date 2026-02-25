
import { useRef, useState } from "react"
import { CrossIcon } from "../icons/Xicon"
import { Button } from "./Buttons"
import { InputBox } from "./InputBox";
import axios from "axios";
import { BACKEND_URL } from "../config";



type ContentType = "youtube" | "twitter";


export const CreateContentModal = ({open ,onClose}: {open:boolean , onClose:()=>void}) =>{

    const titleRef = useRef<HTMLInputElement>(null);
    const linkRef = useRef<HTMLInputElement>(null);
    const [type,settype] = useState<ContentType>("youtube");

    async function addcontent () {
        const title = titleRef.current?.value ;
        const link =  linkRef.current?.value ;

        await axios.post(`${BACKEND_URL}/api/v1/content` ,{
            title ,
            link ,
            type
        },{
            headers:{
                authorization: localStorage.getItem("token")
            }
        }
        )
        alert("Content Created") ;
        onClose(); // closes the dom once post is succeeded 
    }
    
    return  <div>
        {open? <div className="w-screen h-screen bg-black/50 fixed top-0 left-0 flex justify-center items-center">
            <div className="flex flex-col justify-center ">
                <span className="bg-white opacity-100 p-4 rounded-md">
                    <div className="flex justify-end cursor-pointer mb-2" onClick={onClose}>
                        <CrossIcon size="md"/>
                    </div>
                    <div className=" flex flex-col gap-3">
                        <InputBox placeHolder ={"Title"} ref={titleRef}/>
                        <InputBox placeHolder ={"Link"} ref={linkRef}/>
                        
                        <div className="flex justify-center gap-2">
                        <Button size='sm' text="Youtube" variant={`${type === "youtube" ? "primary" : "secondary"}`} fullWidth="no" onClick={()=>settype("youtube")}/>
                        <Button size='sm' text="Twitter" variant={`${type === "twitter" ? "primary" : "secondary"}`} fullWidth="no" onClick={()=>settype("twitter")}/>    
                        </div>
                    </div>
                    <div className="flex justify-center mt-3">
                        <Button variant="primary" size="sm" text="Done" onClick={addcontent} fullWidth="yes"></Button>
                    </div>
                </span>

            </div>
        </div> : null}
    </div>
} 


