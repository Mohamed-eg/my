import React from 'react'
import Me from './supcomp/me'
import Navtop from './supcomp/nav';
import '../styles/resume.css';

const Resume = () => {
  return (
    <div className='resume'>
      <Navtop/>
      <div className='main'>
        <Me/>
      </div>
    </div>
  )
}

export default Resume
