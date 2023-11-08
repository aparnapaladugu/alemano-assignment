// import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function CourseCard({ course }) {
  return (
    <div className="course-card">
      <img src={course.image} alt={course.name} />
      <h2>{course.name}</h2>
      <p>{course.instructor}</p>
      <p>Status: {course.enrollmentStatus}</p>
      <Link to={`/course/${course.id}`}>
        <button>Details</button>
      </Link>
    </div>
  );
}

export default CourseCard;
