import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { context } from './context';
import { errorMessage, successMessage } from './../../utils/message';
import SimpleReactValidator from 'simple-react-validator';
import { loginUser, registerUser } from '../../services/userService';
import { addUser } from '../../redux/actions/user';
import { decodeToken } from '../../utils/decodeToken';
import { withRouter } from 'react-router';
import { hideLoading, showLoading } from 'react-redux-loading-bar';


const UserContext = ({children,history}) => {

    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [policy, setPolicy] = useState();
    const [showNav, setShowNav] = useState();
    

    const [,forceUpdate] = useState();
    const dispatch = useDispatch();

    const validator =useRef(new SimpleReactValidator({
        messages:{
            required:"پرکردن این فیلد الزامی است",
            min:"مقدار وارد شده نباید کمتر از 5 کاراکتر باشد",
            email:"ایمیل وارد شده صحیح نمیباشد"
        },
        element:message=><div style={{color:"red",textAlign:"right"}}>{message}</div>
    }));

    const resetState=()=>{
        setFullname("");
        setEmail("");
        setPassword("");
    }

    const handleLogin=async event=>{
        event.preventDefault();
        const user = {email , password};
        dispatch(showLoading());
        console.log(user);
        try{
            const {data,status}=await loginUser(user);
            if(status===200){
                successMessage("ورود موفقیت امیز بود");
                
                localStorage.setItem("token",data.token);
                dispatch(addUser(decodeToken(data.token).payload.user));
                history.replace("/")
                dispatch(hideLoading())
            }
            resetState();
        }catch(ex){
            errorMessage("مشکلی پیش امده");
        }
     }

     const handleRegister=async e=>{
        e.preventDefault();
        const user={fullname,email,password};
        dispatch(showLoading());
        
        console.log(user);
        try{
            if(validator.current.allValid()){
                const {status}=await registerUser(user);
                if(status===201){
                        successMessage("کاربر با موفقیت ساخته شد");
                        history.replace("/login")
                    } 
                    dispatch(hideLoading());
                    resetState();
                }else{
                    forceUpdate(1);
                }
        }catch(ex){
            errorMessage("مشکلی از سمت سرور پیش امده است");
            dispatch(hideLoading());
            console.log(ex);
        }

            
        
        
    }

    return ( 
        <context.Provider value={{
            fullname,
            setFullname,
            email,
            setEmail,
            password,
            setPassword,
            policy,
            setPolicy,
            showNav,
            setShowNav,
            validator,
            handleLogin,
            handleRegister,
        }}>
            {children}
        </context.Provider>
     );
}
 
export default withRouter(UserContext);
