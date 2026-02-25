import type { ReactElement } from "react";

interface SideBarProps {
    text : string ;
    logo : ReactElement ;
    onClick : ()=> void ;
}

export const SideBarAttribute = (props:SideBarProps) => {
    return <div className="flex justify-start items-center w-48 cursor-pointer m-3">
        <div className="mx-2">
            {props.logo}
        </div>
        <div className="text-sidebartextcolor pl-2">
            {props.text}
        </div>
    </div>
}