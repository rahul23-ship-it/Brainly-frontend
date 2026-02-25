import { useRef } from "react"
import { Button } from "../../components/Buttons"
import { InputBox } from "../../components/InputBox"
import { Mainlogo } from "../../components/logo"
import { BACKEND_URL } from "../../config"
import axios from "axios"
import { useNavigate } from "react-router-dom"



export const Signup = () => {
    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    async function signup() {
        const username = usernameRef.current?.value ;
        const password = passwordRef.current?.value ;
        const navigate = useNavigate();
        await axios.post(`${BACKEND_URL}/api/v1/signup` , {
           
                username,
                password
            
        })
        alert("You have signed up");
        navigate("/signin");

    }

    return <div className="h-screen w-screen bg-primary flex justify-center items-center">
        <div className="bg-primary2 rounded-md border shadow-md min-w-48 flex flex-col p-6 items-center gap-4">
            <Mainlogo size="lg"/>
            <InputBox placeHolder="Username" ref={usernameRef}/>
            <InputBox placeHolder="Password" ref={passwordRef}/>
            <Button variant="primary" size="md" text="Signup" onClick={signup} fullWidth="yes"/>
        </div>

    </div>
}


export const Signin = () => {
    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();

    async function signin() {
        const username = usernameRef.current?.value ;
        const password = passwordRef.current?.value ;
        const response = await axios.post(`${BACKEND_URL}/api/v1/signin` , {
           
                username,
                password
            
        })
        const jwt = response.data.token ;
        localStorage.setItem("token" ,jwt) ;  
        navigate("/dashboard")
    }
    return <div className="h-screen w-screen bg-primary flex justify-center items-center">
        <div className="bg-primary2 rounded-md border shadow-md min-w-48 flex flex-col p-6 items-center gap-4">
            <Mainlogo size="lg"/>
            <InputBox placeHolder="Username" ref={usernameRef}/>
            <InputBox placeHolder="Password" ref={passwordRef}/>
            <Button variant="primary" size="md" text="Signin" onClick={signin} fullWidth="yes"/>
        </div>

    </div>
}