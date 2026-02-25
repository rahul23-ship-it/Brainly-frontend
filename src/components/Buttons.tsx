import type { ReactElement } from "react";

type Variant = "primary" | "secondary"

 interface ButtonProps {
    variant: Variant ;
    size: "sm" | "md" | "lg" ;
    text: string ;
    startIcon?: ReactElement ;
    endIcon?: ReactElement ;
    onClick?: ()=>void ;
    fullWidth : "yes" | "no" ;
}

const WidthType = {
    "yes" : "w-full" ,
    "no" : ""
}

const VariantType = {
    "primary" : "bg-primaryButtoncolor text-white",
    "secondary" : "bg-secondaryButtoncolor text-secodaryButtontextcolor"
}

const sizestyles ={
    "sm" : "py-1 px-2" ,
    "md" : "py-2 px-4",
    "lg" : "py-4 px-6"
}

const defaultStyles = "rounded-md flex justify-around content-center"

export const Button = (props: ButtonProps) => {
    return <button className={`${VariantType[props.variant]} ${defaultStyles} ${sizestyles[props.size]} ${WidthType[props.fullWidth]}`} onClick={props.onClick}>
        {props.startIcon ? <div className="mx-2 mt-1">{props.startIcon}</div>: null}{props.text}{props.endIcon}</button>

}