import React, { Fragment } from 'react';
import { withRouter } from 'react-router';
import TopNav from '../Navs/TopNav';
import Header from './../Common/Header';
import Footer from './../Footer/Footer';
import LoadingBar from 'react-redux-loading-bar';

const MainLayoute = (props) => {
    const {pathname}=props.location;
    return ( 
        <Fragment>
            <div>
            <LoadingBar style={{ backgroundColor: "lime", height: "5px" }}/>
            {pathname === "/" ? <Header/> : <TopNav/>}
            
            {props.children}
            <Footer/>

            </div>
        </Fragment>
     );
}
 
export default withRouter(MainLayoute);