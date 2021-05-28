import React, { useEffect } from 'react'
import { Redirect, Route, Switch } from 'react-router';
import MainLayoute from '../Component/Layouts/MainLayout';

import Login from './../Component/Login/Login';
import Logout from './../Component/Login/Logout';
import Course from './../Component/Course/Course';
import Register from './../Component/Register/Register';
import { useSelector, useDispatch } from 'react-redux';
import { paginate } from './../utils/paginate';
import Archive from '../Component/Course/Archive';
import SingleCourse from '../Component/Course/SingleCourse';
import { addUser, clearUser } from '../redux/actions/user';
import { decodeToken } from '../utils/decodeToken';
import UserProfile from '../Component/Profile/userProfile';
import UserContext from '../Component/context/userContext';
import notFound from './../Component/Common/notFound';
import { isEmpty } from 'lodash';


const SelfLearn = () => {

    const courses = useSelector(state => state.courses);
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();
    const indexCourse=paginate(courses , 1 , 8);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            const decodedToken = decodeToken(token);
            const dateNow = Date.now() / 1000;

            if (decodedToken.payload.exp < dateNow){
                localStorage.removeItem("token");
                dispatch(clearUser())
            }
            else dispatch(addUser(decodedToken.payload.user));
        }
    }, []);
    
    return ( 
        
            <MainLayoute>
                <UserContext>
                    <Switch>
                        <Route path="/register" render={()=>isEmpty(user) ? (<Register/>) : (<Redirect to="/" />) } />
                        <Route path="/login" render={()=>isEmpty(user) ? (<Login/>) : (<Redirect to="/" />) }/>
                        <Route path="/logout" render={()=>!isEmpty(user) ? (<Logout/>) : (<Redirect to="/" />) } />
                        <Route path="/user-profile" render={()=>!isEmpty(user) ? (<UserProfile/>) : (<Redirect to="/" />) }  />
                        <Route path="/course/:id" component={SingleCourse} />
                        <Route path="/archive" component={Archive} />
                        <Route exact path="/" render={()=><Course courses={indexCourse} />} />
                        <Route path="*" exact component={notFound} />
                    </Switch>
                </UserContext>
            </MainLayoute>
        
     );
}
 
export default SelfLearn;