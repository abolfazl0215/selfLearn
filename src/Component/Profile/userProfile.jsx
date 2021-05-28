import React from 'react';
import { useSelector } from 'react-redux';
import { isEmpty } from 'lodash';
import { Redirect } from 'react-router';
import { Helmet } from 'react-helmet';

const UserProfile=()=> {

    const user = useSelector(state => state.user);

    if(isEmpty(user)) return <Redirect to="/" />

    return ( 
        <div>
            <Helmet>
                <title>حساب کاربری</title>
            </Helmet>
            <div className="dashboard">
                <div className="box-right">
                    <div className="p-3">میزکار</div>
                    <div className="p-3">خروج از حساب کاربری</div>
                </div>
                <div className="box-left">
                    <h2 className="header p-3">
                        داشبورد
                    </h2>
                    <h4 className=" p-3 text-success">
                        اطلاعات کاربری
                    </h4>
                    <ul className="list-unstyled p-3">
                        <li className="p-2">نام و نام خانوادگی : {user.fullname}</li>
                        <li className="p-2">ایمیل : {user.email}</li>
                        <li className="p-2">تاریخ عضویت :3/5/1398</li>
                        <li className="p-2">شماره تماس :09120000000 </li>
                    </ul>
                </div>
            </div>
        </div>
     );
}
 
export default UserProfile;
