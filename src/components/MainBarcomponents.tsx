import { Button } from "./Buttons";
import { Plusicon } from "../icons/Plusicon";
import { ShareIcon } from "../icons/share";
import type { ReactElement } from "react";
import { DeleteIcon } from "../icons/Deleteicon";
import axios from "axios";
import { BACKEND_URL } from "../config";

export const TopMainBar = ({onOpen}: {onOpen: ()=>void}) =>{  // directly type casting without a interface 
    return <div className="flex justify-between w-full pl-10 pr-10">
        <div className="text-2xl font-bold" >All Notes</div>
        <div className="flex">
            <div className="mx-2"><Button fullWidth="no" startIcon={<Plusicon size='md'/>} size="md" variant='primary' text='Add Content' onClick={onOpen}/></div>
            <div className="mx-2"><Button fullWidth="no" startIcon={<ShareIcon size='md'/>} size="md" variant='secondary' text='Share Brain' 
            onClick={async()=>{
                const response = await axios.post(`${BACKEND_URL}/api/v1/brain/share` ,{
                    share: true
                },{
                    headers: {
                        authorization : localStorage.getItem("token")
                    }
                });
                const ShareUrl = `http://127.0.0.1:5173/share/${response.data.hash}` ;
                window.open(ShareUrl, "_blank");
            }}/> </div>
        </div>
    </div>
}

interface ContainerProps {
    size : "sm" | "md" | "lg" ;
    titleIcon ?: ReactElement ;
    title : string ;
    link : string ;
    type: "twitter" | "youtube" ; 
    tags ?: string[] ;
    date : Date ;
}

const ContainerSize = {
    "sm" : "w-[250px] h-[250px]" ,
    "md" : "w-[300px] h-[350px]" ,
    "lg" : "w-[400px] h-[400px]"
}


export const MainContainer =(props: ContainerProps) => {
    return <div className={`${ContainerSize[props.size]}  bg-primary rounded-md border flex flex-col shadow-md`}>
        <div className="flex justify-between m-3 ">
            <div className="flex justify-between  items-center text-md">
                {props.titleIcon}
                {props.title}
            </div>
            <div className="flex items-center  text-sidebartextcolor justify-between ">
                <div className="mx-3" ><a href={props.link} target="_blank"><ShareIcon size="md"/></a></div>
                <div onClick={()=>{}} ><DeleteIcon size="md"/></div>
            </div>
        </div>

        <div className="flex justify-center  ">

            {props.type === "youtube" && <iframe width="250" height="150" src={props.link.replace("watch" ,"embed").replace("?v=" ,"/")} title="YouTube video player" frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen 
            className="rounded-md mt-3"></iframe>}
            
            {props.type === "twitter" && <blockquote className="twitter-tweet ">
        <a href={props.link.replace("x.com" ,"twitter.com")}></a> 
        </blockquote> }

        </div>


        <div className="text-xs text-sidebartextcolor font-light flex justify-center">
            Created on {props.date.toLocaleDateString()}
        </div>
    </div>
}
