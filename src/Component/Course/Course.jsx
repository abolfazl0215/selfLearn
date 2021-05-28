import React from 'react';
import { Link } from 'react-router-dom';

const Course = ({courses}) => {
    return ( 
        <div className="mt-5">
            <h2 className="col-md-12 text-center">محبوب ترین دوره ها</h2>
            <h5 className="col-md-12 text-center text-decoration-none">
                <Link style={{textDecoration:"none"}} to="/archive">مشاهده همه دوره ها</Link>
            </h5>
                <div className="course">
                    {courses.map(course=>(
                    <div key={course._id} className="col-lg-3 col-md-4 col-sm-6 col-xs-12 mt-4 term-col">
                            <article>
                                <Link to={`/course/${course._id}`} className="img-layer">
                                    <img src={`https://toplearnapi.ghorbany.dev/${course.imageUrl}`} alt="تصویر دوره مرتبط" />
                                </Link>
                                <h2>
                                    <Link to={`/course/${course._id}`}> {course.title} </Link>
                                </h2>
                                <span> رایگان </span>
                                <i>1:52:32</i>
                            </article>
                    </div>

                    ))}
                    
                </div>
        </div>
     );
}
 
export default Course;

