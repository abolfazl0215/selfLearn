import React, { useContext } from 'react';
import { Link} from 'react-router-dom';
import { context } from '../context/context';
import { Helmet } from 'react-helmet';



const Login = () => {

    const loginContext=useContext(context);

    const {email,setEmail,password,setPassword,validator,handleLogin} = loginContext;

    return ( 
        <div>
            <Helmet>
                <title>ورود</title>
            </Helmet>
            <div className="container-form-register form-group">
                
                <h2>ورود به سایت</h2>
                <form className="form-register" onSubmit={e=>handleLogin(e)}>
                        <input 
                            className="form-control" 
                            type="text" 
                            name="email"
                            placeholder="ایمیل"

                            value={email}
                            onChange={e=>{
                                setEmail(e.target.value);
                                validator.current.showMessageFor("email")
                            }}
                        />
                        {validator.current.message("email",email,"required|email")}
                        <input 
                            className="form-control"
                            name="password" 
                            type="password" 
                            placeholder="رمز ورود" 
                            value={password}
                            onChange={e=>{
                                setPassword(e.target.value);
                                validator.current.showMessageFor("password")
                            }}
                        />
                        {validator.current.message("password",password,"required|min:5")}
                            <label>
                                <input type="checkbox" name="" />{" "}
                                مرا به خاطر بسپار{" "}
                            </label>
                        <div className="link">
                            <a href="#"> رمز عبور خود را فراموش کرده ام !</a><br/>
                            <Link to="#">عضویت در سایت</Link>
                        </div>
                        <div className="submit">
                        <input type="submit" className="btn btn-info" value="ورود به سایت" />
                        </div>
                </form>
            </div>

        </div>
     );
}
 
export default Login;