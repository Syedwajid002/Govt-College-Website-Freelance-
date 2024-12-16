import React from 'react'
import Language from '../components/Departments/Language';
import Dot from '../components/Departments/Dot';

const Languages = () => {
  return (
    <div>
        <h1 className='text-2xl text-center mt-10 text-blue-500 font-bold'>Department of English</h1>
        <Language/>
        <Dot/>
    </div>
  )
}

export default Languages;