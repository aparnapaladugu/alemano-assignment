import React, { useState } from 'react';
import courses from '../Data/courses';
import CourseCard from './CourseCard';
import '../App.css'

function CourseList() {
  const [searchTerm, setSearchTerm] = useState('');
  const filteredCourses = courses.filter(
    (course) =>
      course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
       <div className='input'>
       <input
        className='input'
        type="text"
        placeholder="Search by course or instructor"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
       </div>

      <div className="course-list">
        {filteredCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}

export default CourseList;
