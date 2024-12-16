import React from 'react';
import img from './img.jpg';

export const Secretary = () => {
  return (
    <div className='container mx-auto md:p-10 p-5'>
        <h1 className='text-3xl text-blue-500'>SECRETARY</h1>
        <div className='flex md:flex-row items-center gap-10 mt-10 bg-bg rounded-lg p-4 flex-col'>
          <img src={img} className='rounded-lg md:w-1/4'/>
          <div>
              <h1 className='text-3xl font-bold text-white text-center md:text-left'>Mr. B. SAIDULU</h1>
              <h1 className='text-white mt-5'>Hon'ble Secretary Of (MJPTBCWREIS) Telangana</h1>
          </div>
        </div>
    </div>
  )
}
