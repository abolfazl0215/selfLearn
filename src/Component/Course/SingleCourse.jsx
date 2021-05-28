import React, { useEffect } from 'react'
import { useSelector,useDispatch  } from 'react-redux';
import { getSingleCourse } from '../../redux/actions/Course';

const SingleCourse = ({match}) => {

    const course = useSelector(state => state.course);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getSingleCourse(match.params.id));
    },[])

    return ( 
        <div className="p-5 SingleCourse">
            <div className="header p-4">
                {course.title}
            </div>
            <div className="box-main">
            <div className="box-right p-3">
                <div className="container-fluid p-3">
                    <div className="btn btn-success d-block text-center"> 
                         قیمت این دوره : {course.price}
                    </div>
                </div>
                <div className="container-fluid text-center mt-3">
                    <h3>اطلاعات این دوره</h3><hr/>
                    <div>قیمت : {course.price}</div>
                </div>
            </div>
            <div className="box-left p-3">
                <img style={{width:"100%"}} src={`https://toplearnapi.ghorbany.dev/${course.imageUrl}`} alt="تصویر دوره مرتبط"/>
                <div className="p-4">
                    {course.info}
                </div>
            </div>
            </div>
            
        </div>
     );
}
 
export default SingleCourse;