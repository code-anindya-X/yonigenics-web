import React from 'react'
import img from "../../images/Yonigenics landing page bg.jpg";
import ele from "../../images/Untitled-2.png";
import './Background.css';
const Background = () => {
  return (
    <div>
      <img src={img} className="bg-img" alt="bg" />
      <div className="element">
        <img src={ele}  className='girl' alt="ele"/>
      </div>
      
    </div>
  )
}

export default Background
