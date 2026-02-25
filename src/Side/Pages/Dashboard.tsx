
import { useEffect, useState } from "react";
import { CreateContentModal } from "../../components/CreateContentModal";
import { Mainlogo } from "../../components/logo";
import { MainContainer, TopMainBar } from "../../components/MainBarcomponents";
import { SideBarAttribute } from "../../components/Sidebarcomponents";
import { VideoIcon } from "../../icons/video";
import { Xlogo } from "../../icons/Xlogo";
import { useContent } from "../../hooks/useContent";


export const DashBoard = () => {

    const [modalOpen , setmodalOpen] = useState(false) ;
    const {content , fetchdata } = useContent(); //react hook to fetch the content from backend 

    useEffect(()=>{fetchdata();} ,[modalOpen]) //refetches the content while closing the content 


    return <div className="flex ">
        <div className="w-64 h-screen bg-primary border-r fixed  flex flex-col shadow-[2px_0_15px_rgba(0,0,0,0.1)]">
            <div className="mt-2 ml-2"><Mainlogo size="lg"/></div>
            <div className="flex flex-col my-10 mx-5">
                <SideBarAttribute text="Twitter" logo={<Xlogo size="lg"/>} onClick={()=>{}}/>
                <SideBarAttribute text="Youtube" logo={<VideoIcon  size="lg"/>} onClick={()=>{}}/>
            </div>
        </div>

         <div className="w-64"></div> {/* since we fixed the sidebar so it is removed from the normal layout flow. That’s why your main content overlaps and you had to push it manually, but now we have added some space with this div*/}



        {/* MAIN CONTENT */}
        <div className="flex-1 h-screen bg-primary2"> 

        <CreateContentModal open={modalOpen} onClose={()=>{setmodalOpen(false)}} />

        <div className="flex flex-col">
            <div className="mt-7">
            <TopMainBar onOpen={()=>{setmodalOpen(true)}}/>
            </div>
            
            <div className="flex ml-4 gap-4 mt-5 flex-wrap">

            {content.map(({title , type , link})=>
            <div>
                <MainContainer 
                size="md" 
                title={title} 
                type={type} 
                date = {new Date()} 
                link={link}/>
            </div>
            )}
            </div>

        </div>
        </div>
    </div>
}