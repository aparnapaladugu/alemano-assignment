import React, { useState } from 'react';

function StudentDashboard({ enrolledCourses }) {
  const [completedCourses, setCompletedCourses] = useState([]);

  const markCourseAsCompleted = (courseId) => {
    setCompletedCourses((prevCompletedCourses) => [...prevCompletedCourses, courseId]);
  };

  return (
    <div>
      <h1>Student Dashboard</h1>
      {enrolledCourses.map((course) => (
        <div key={course.id} className="dashboard-course">
          <img src={course.thumbnail} alt={course.name} />
          <div>
            <h2>{course.name}</h2>
            <p>Instructor: {course.instructor}</p>
            <p>Due Date: {course.dueDate}</p>
            <div className="progress-bar">
              <div
                className="progress"
                style={{ width: `${course.progress}%` }}
              >
                {course.progress}%
              </div>
            </div>
            <button
              onClick={() => markCourseAsCompleted(course.id)}
              disabled={completedCourses.includes(course.id)}
            >
              {completedCourses.includes(course.id)
                ? 'Completed'
                : 'Mark as Completed'}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default StudentDashboard;
