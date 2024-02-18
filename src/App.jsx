import 'bulma/css/bulma.min.css'
import './App.css'
import { useState } from 'react'
import Course from './components/Course'

function getRandomCourse() {
  const courseArray = ["Angular", "Bootstrap", "Ccsharp", "Kompleweb"]
  return courseArray[Math.floor(Math.random() * courseArray.length)]
}

function App() {
  const [courses, setCourses] = useState([])
  const handleClick = () => {
    setCourses([...courses, getRandomCourse()])
  }
  const courseList = courses.map((course, index) => {
    return <Course key={index} courseName={course} />
  })
  return (
    <div className='App'>
      <div className="container">
        <button onClick={handleClick}>Add Random Course</button>
        <div className='courseList'>
          {courseList}
        </div>
      </div>
    </div>
  )
}

export default App
