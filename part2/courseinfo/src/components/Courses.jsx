import Course from "./Course";

const Courses = ({courses}) => {

    

    return (

        <>
         <ul>
            {courses.map(course => 

                <Course key={course.id} name={course.name} parts={course.parts} />
            )}
         </ul>
        </>
    )


}

export default Courses