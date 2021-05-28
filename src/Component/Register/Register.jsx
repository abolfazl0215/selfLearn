import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { context } from './../context/context';
import { LoadingBar } from 'react-redux-loading-bar';
import { Helmet } from 'react-helmet';


const Register = () => {
    

    const registerContext = useContext(context);

    const {
        fullname,
        setFullname,
        email,
        setEmail,
        password,
        setPassword,
        policy,
        setPolicy,
        handleRegister,
        validator
    } = registerContext;

    return ( 
        <div>
            <LoadingBar style={{ backgroundColor: "lime", height: "5px" }}/>

            <Helmet>
                <title>ثبت نام</title>
            </Helmet>
        
            <div className="container-form-register form-group">
                <h2>عضویت در سایت</h2>
                <form className="form-register" onSubmit={e => handleRegister(e)}>
                        <input 
                            className="form-control"
                            name="fullname"
                            type="text" 
                            placeholder="نام و نام خانوادگی"
                            value={fullname}
                            onChange={e=>{
                                setFullname(e.target.value);
                                validator.current.showMessageFor("fullname");
                                }
                            }
                        />
                        {validator.current.message("fullname",fullname,"required|min:5")}
                        <input 
                            className="form-control" 
                            name="email"
                            type="text" 
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
                                <input 
                                type="checkbox" 
                                name="policy" 
                                onChange={e => {
                                    setPolicy(e.currentTarget.checked);
                                    validator.current.showMessageFor("policy");
                                }} />
                                 قوانین و
                                    مقررات سایت را میپذیرم{" "}
                            </label>
                            {validator.current.message("policy",policy,"required")}
                        <div className="link">
                            <a href="#">قوانین و مقررات سایت!</a><br/>
                            <Link to="/login">ورود به سایت</Link>
                        </div>
                        <div className="submit">
                            <input type="submit" className="btn btn-info" value="ثبت نام" />
                        </div>
                </form>
            </div>

        </div>
     );
}
 
export default Register;