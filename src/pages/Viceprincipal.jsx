import React from 'react'
import img from './vice principal.jpeg';

const VicePrincipal = () => {
    return (
        <div className='container mx-auto md:p-10 p-5'>
            <h1 className='text-3xl text-blue-500 uppercase'>Vice Principal</h1>
            <div className='flex md:flex-row items-center gap-10 mt-10 bg-bg rounded-lg p-4 flex-col'>
                <img src={img} className='rounded-lg md:w-1/4 object-cover' />
                <div>
                    <h1 className='text-3xl font-bold text-white text-center md:text-left'>Mr.P.Govinda Rao</h1>
                    <h1 className='text-white mt-5'>Vice Principal Of (MJPTBCWREIS) Telangana</h1>
                    <h1 className='text-red-500'>Message from principal</h1>
                    <p className='text-white mt-3'>I welcome you to one of the most reputed BC Welfare Degree Colleges in Telangana. MJPTBCWRDC, Wargal towers above all the other BC Welfare Degree Colleges in the State for we continually endeavor to foster excellence in Knowledge and Education.
                        The college aspires to achieve development of talent and the creation of education and allied development (Art, Craft,Music and dance) areas. The college is committed to create an exemplary learning environment and preparing outstanding academicians, scholars, scientists, bureaucrats and professionals in various fields fulfilling career as social change leaders and trail blazers. Student diversity is strength and the society consciously seeks to achieve this while helping students from various backgrounds to overcome social and economic disadvantages and encourage them to pursue higher education by providing extensive financial and other institutional support.
                        <span className='font-bold'>Wishing you a joyful learning…….</span>.
                    </p>
                </div>
            </div>
            <p className='mt-3'>Mr. P.Govinda Rao joined this college in 2018 as Vice Principal after his retirement service from APRJC, Nagarjuna Sagar. He has post graduated in Physics Department from Bangalore. His area of interest is Physics and Vedic Science. He has over 40 years of teaching experience.</p>
            {/* <h1 className='mt-3'>Email:  mjptbcwrdc.jdpur@gmail.com </h1> */}
            <h1 className="mt-3 font-bold text-xl">Functions</h1>
            <ul className='flex flex-col gap-3 list-disc'>
                <li>Discharges routine duties of Principal during absence of Principal
                </li>
                <li>Periodic checkup of teaching diaries
                </li>
                <li>Proper implementation of timetable
                </li>
                <li>Supervise work performed by Teaching faculty, office staff and all MPW workers.
                </li>
                <li>Coordinates Purchase process
                </li>
                <li>Coordinates office administration
                </li>
            </ul>
        </div>
    )
}

export default VicePrincipal;