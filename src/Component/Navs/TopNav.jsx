import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {isEmpty} from 'lodash';
import { useSelector } from 'react-redux';
import NavRight from './NavRight';
 
const TopNav = () => {
    const user = useSelector(state => state.user);

    const [show,setShow]=useState(false);
    
    const handleShow=()=>{
        setShow(!show);
        
        if(show){
            const x=document.getElementById("showNav");
            x.classList.add("navRightShow");
        }
        console.log(show);
    }
    return ( 
        <div>
            <NavRight closeNav={handleShow} showNav={show}/>
            <div className="navbar-main nav pt-3 pb-1">
           
                    <div className="col-6 icon-menu"><h4 onClick={handleShow}>|||</h4></div>
                <ul className="col-6 list-unstyled list-inline">
                    <li className="mr-5 mx-3 cp">
                        <NavLink to="/" className="text-decoration-none text-black">صفحه اصلی</NavLink>
                    </li>
                    <li  className="mx-3 cp">درباره ما</li>
                    <li  className="mx-3 cp">تماس باما</li>
                </ul>
                
                <div className="col-6 text-end link-nav">
                    {!isEmpty(user) ? (
                        <div className="ml-3">
                            <NavLink to="/user-profile" className="link">{user.fullname}</NavLink>
                            {" "}{"/"}{" "}
                            <NavLink to="/logout" className="link">خروج</NavLink>
                        </div>
                    ) : (
                        <div className="ml-3">
                            <NavLink to="/login" className="link">ورود</NavLink>
                            {" "}{"/"}{" "}
                            <NavLink to="/register" className="link">عضویت</NavLink>
                        </div>
                    )}
                </div>
           </div>
        </div>
     );
}
 
export default TopNav;
