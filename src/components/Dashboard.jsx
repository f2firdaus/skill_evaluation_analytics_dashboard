import React, { useState } from 'react'
import Sidebar from './Sidebar'
import Content from './Content'
import SyllabusBar from './SyllabusBar'
import QuestionAnalysis from './QuestionAnalysis'


const Dashboard = () => {
  const [values, setValues] = useState({
        rank: 12890,
        percentile: 37,
        answer:7
    })
  return (

      <div className='container'>
          <Sidebar />
      <Content values={values} setValues={setValues} />
      <div className="analysis">
      <SyllabusBar percentile={values.percentile} average={72} />
        <QuestionAnalysis answers ={values.answer} />
       
      </div>
      
    </div>
  )
}

export default Dashboard