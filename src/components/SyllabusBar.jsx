import React from 'react'
import ProgressBar from "@ramonak/react-progress-bar";


function Progress({ value, color}) {
    return (
      <ProgressBar
            completed={value}
            bgColor={color}
        isLabelVisible={false}
        width="200px"
        height="10px"
        animateOnRender={true}
      />
    );
  }
const SyllabusBar = () => {
  return (
    <div className="syllabus_section">
    <h3>Syllabus wise Analysis</h3>

    <div className="course">
      <p>HTML Tools, Forms, History</p>
      <div className="progress">
        <Progress value={80} color="#438af6" />
        <p style={{ color: "#438af6" }}>80%</p>
      </div>
    </div>
    <div className="course">
      <p>Tags & References in HTML</p>
      <div className="progress">
        <Progress value={60} color="#ff9142" />
        <p style={{ color: "#ff9142" }}>60%</p>
      </div>
    </div>
    <div className="course">
      <p>Tables & CSS Basics</p>
      <div className="progress">
        <Progress value={24} color="#fb5e5e" />
        <p style={{ color: "#fb5e5e" }}>24%</p>
      </div>
    </div>
    <div className="course">
      <p>Tables & CSS Basics</p>
      <div className="progress">
        <Progress value={96} color="#2ec971" />
        <p style={{ color: "#2ec971" }}>96%</p>
      </div>
    </div>
  </div>
);
}
  


export default SyllabusBar