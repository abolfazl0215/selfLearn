import { createContext } from "react";

export const context=createContext({
    fullname: "",
    setFullname: ()=>{},
    email: "",
    setEmail: ()=>{},
    password: "",
    setPassword: ()=>{},
    policy: "",
    setPolicy: ()=>{},
    showNav: null,
    setShowNav: ()=>{},
    validator:null,
    handleLogin: ()=>{},
    handleRegister: ()=>{}
});