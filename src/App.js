import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CourseList from './Components/CourseList';
import CourseDetails from './Components/CourseDetails';
import StudentDashboard from './Components/StudentDashboard';


function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<CourseList />} />
          <Route path="/course/:id" element={<CourseDetails/>} />
          <Route path="studentdashboard" element={<StudentDashboard/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

