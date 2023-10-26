import React from 'react'
import icon1 from '../assets/icon.jpg'
import icon2 from '../assets/award.jpg'
import icon3 from '../assets/icon3.jpg'
const Sidebar = () => {
  return (
      <div className='sidebar'>
          <ul className='sidebar_list'>
              <li  className='dashboard'> <img src={icon1} alt="dashboard" />  Dashboard</li>
              <li className='skill'> <img src={icon2} alt="skill test" />  Skill Test</li>
              <li className='internship'> <img src= {icon3} alt="Intenship" /> Internship</li>
          </ul>

      </div>
  )
}

export default Sidebar