import React from 'react';
import { useParams } from 'react-router-dom';
import courses from '../Data/courses';
import '../App.css';

function CourseDetails() {
  const { id } = useParams();
  const course = courses.find((c) => c.id === parseInt(id));

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div className='course-details'>
      <h1>{course.name}</h1>
      <p>Instructor : {course.instructor}</p>
      <p>Description : {course.description}</p>
      <p>EnrollmentStatus : {course.enrollmentStatus}</p>
      <p>Duration : {course.duration}</p>
      <p>Schedule : {course.schedule}</p>
      <p>Location : {course.location}</p>
      <p>Prerequisites : {course.prerequisites}</p>
      <p>Syllabus :   {course.syllabus}</p>
      </div>
  );
}


export default CourseDetails;
