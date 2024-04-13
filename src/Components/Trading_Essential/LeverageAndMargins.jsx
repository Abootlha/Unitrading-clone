import React from 'react'
import './heading.css'
import Mcqs from './MCQs/LeverageAndMarginQuiz.jsx'
function LeverageAndMargins() {
  return (
    <>
    
    <div className='text'>
    <h1 className='heading'>Leverage and Margin</h1>
</div>

<div className="video-container"> {/* Apply the CSS class */}
  <video controls width="90%">
    <source src=" https://wtcuniversity8712.s3.eu-west-1.amazonaws.com/lessons/leverage-and-margin-h4npDDKt64k/EN.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</div>

<Mcqs/>
    
    </>
  )
}

export default LeverageAndMargins