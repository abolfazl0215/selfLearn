import React from 'react';

const NavRight = ({closeNav,showNav}) => {

    
    return ( 
        <div>
            <div id="showNav" className={showNav ? 'navRightShow' : 'navRightHide'}>
                <div className="close"><h1 className="cp" onClick={closeNav}>&times;</h1></div>
                <h1 className="text-center mt-3">سلف لرن</h1><hr/>
                <ul className="list-unstyled mt-5 mr-3 d-block">
                    <li>صفحه اصلی</li>
                    <li>درباره ما</li>
                    <li>تماس باما</li>
                </ul>
            </div>
        </div>
     );
}
 
export default NavRight;