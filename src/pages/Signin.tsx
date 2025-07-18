import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { useRef } from "react";
import { Backend_URl } from "../config";
import axios from "axios";



export function Signin(){
    const usernameRef = useRef<HTMLInputElement>();
        const passwordRef = useRef<HTMLInputElement>();
        const navigate = useNavigate();
    
        async function signin() {
            const username = usernameRef.current?.value;
            console.log(usernameRef.current)
            const password = passwordRef.current?.value;
            const response= await axios.post(Backend_URl + "/api/v1/signin", {
                username,
                password
            })
            const jwt = response.data.token;
            localStorage.setItem("token",jwt)   

            navigate("/dashBoard")
            
        }
    return <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
        <div className="bg-white rounded-xl border min-w-48 p-8">
            <Input reference={usernameRef} placeholder="Username" />
            <Input reference={passwordRef} placeholder="Password" />
            <div className="flex justify-center pt-4">
                <Button onClick= {signin} loading ={false} variant="primary" text="Signin" fullWidth={true} />
            </div>
        </div>
    </div>
}