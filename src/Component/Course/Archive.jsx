import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { paginate } from './../../utils/paginate';
import Course from './Course';
import Pagination from './../Common/Pagination';
import { Helmet } from 'react-helmet';


const Archive = () => {
    const [perPage] = useState(4);
    const [currentPage, setCurrentPage] = useState(1);

    const courses = useSelector(state => state.courses)

    const handlePageChange=page=>{
        setCurrentPage(page);
    }

    const archiveCourses=paginate(courses,currentPage,perPage)

    return ( 
        <div className="archive">
            <Helmet>
                <title>تمامی دوره ها</title>
            </Helmet>
            <div className="box-top col-xs-12 col-sm-12 container p-3 mt-5">
                <div className="row">
                    <div className="col-sm-6">
                        <h3>دوره های برنامه نویسی وب</h3>
                    </div>
                    
                    <div className="col-sm-6 text-end">
                        <span className="">123 دوره</span>
                    </div>
                    <div className="col-sm-6">
                        <input type="search" placeholder="موضوع مورد نظر ..." className="form-control"/>
                    </div>
                    <div className="col-sm-6">


                            <select className="form-control">
                                <option> مرتب سازی </option>
                                <option> قیمت </option>
                                <option> مدرت زمان دوره </option>
                                <option> تاریخ انتشار </option>
                            </select>

                    </div>
                </div>
            </div>
            <Course courses={archiveCourses}/>
            <Pagination
            totalCourse={courses.length}
            currentPage={currentPage}
            perPage={perPage}
            onPageChange={handlePageChange}
            />
        </div>
     );
}
 
export default Archive;
