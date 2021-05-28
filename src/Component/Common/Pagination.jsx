import React from 'react';
import {range} from 'lodash';

const Pagination = ({totalCourse,currentPage,perPage,onPageChange}) => {
    const pageCount=Math.ceil(totalCourse/perPage);
    if(pageCount === 1) return null;
    const pages=range(1, pageCount + 1);
    return ( 
        <div>
            
                <ul class="pagination justify-content-center mt-5">
                    {pages.map(page=>(
                        <li key={page} className={page === currentPage ? "page-item active" : "page-item"}>
                            <a className="page-link" onClick={()=>onPageChange(page)}>{page}</a>
                        </li>
                    ))}
                    

                </ul>
            
        </div>
     );
}
 
export default Pagination;