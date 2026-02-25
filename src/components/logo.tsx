import { BrainLOgo } from "../icons/BrainLogo"

interface LogoProps {
    size : "sm" | "md" | "lg"
}

const SizeLogo = {
    "sm" : "w-24" ,
    "md" : "w-32" ,
    "lg" : "w-40"
}

export const Mainlogo = (props:LogoProps) => {
    return <div className={ `${SizeLogo[props.size]} flex justify-start items-center`}>
        <div className="text-secondaryButtontextcolor">
            <BrainLOgo/>
        </div>
        <div className="text-lg font-bold font-sans mx-2">
            Second Brain
        </div>
    </div>
}