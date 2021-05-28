import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import img_logo from '../../Container/image/8.png';
import {isEmpty} from 'lodash'
import NavRight from '../Navs/NavRight';

const Header = () => {

    const [show,setShow]=useState(false);
    
    const handleShow=()=>{
        setShow(!show);
        
        if(show){
            const x=document.getElementById("showNav");
            x.classList.add("navRightShow");
        }
        console.log(show);
    }


    const user = useSelector(state => state.user);

    
    return ( 
        
        <div className="navbar-header nav pt-3 pb-1">
            <NavRight closeNav={handleShow} showNav={show}/>
           
            <ul className="col-md-6 list-unstyled list-inline text-white">
                <li className="mr-5 mx-3 cp">صفحه اصلی</li>
                <li  className="mx-3 cp">درباره ما</li>
                <li  className="mx-3 cp">تماس باما</li>
            </ul>
            <div className="col-6 icon-menu text-white"><h4 onClick={handleShow}>|||</h4></div>
            <div className="col-6 text-end text-white">
                <div >
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
            <div className="imgLogo container col-md-12">
                <img width='100' src={img_logo} alt="" />
            </div>
            <div className="caption text-center text-white">
                <h2> با اساتید مجرب و کارآزموده در خودآموز سلف لرن</h2>
                <h3> آموزش ببینید ، تجربه کسب کنید و وارد بازار کار شوید </h3>
                <h4> با کمترین هزینه خودت یاد بگیر </h4>
            </div>
            <div className="input mt-4">
                <input type="text" placeholder="چی میخوای یاد بگیری ؟" className="form-control mx-auto"/>
            </div>
            
        </div>
     );
}
 
export default Header;