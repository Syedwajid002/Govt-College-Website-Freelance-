import React from 'react'

const SanctionedSeat = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
    <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
      <h2
        className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-blue-700 sm:text-4xl md:mx-auto"
        data-aos="fade-up"
      >
        <span className="relative inline-block">
          <span className="relative">Sanctioned</span>
        </span>{' '}
          Eligibility Criteria
      </h2>
      <p className="text-base text-gray-700 md:text-lg" data-aos="fade-up">
        <ul className="text-base text-gray-700 md:text-lg text-justify flex flex-col gap-5" data-aos="fade-up">
          <li><span className='text-blue-600 font-bold'>⦿</span> Students appearing for Senior Intermediate Examination in that particular year, conducted by the Board of Intermediate Education of Telangana or equivalent examination are ONLY eligible to appear for the test, subject to the other conditions.</li>
          <li><span className='text-blue-600 font-bold'>⦿</span> The students should have passed the qualifying examination in the first attempt and must have secured 50% of marks on aggregate and 40% of marks in English Language. (There is a relaxation of 5% in case of SC/ST). </li>
          <li><span className='text-blue-600 font-bold'>⦿</span> BC/SC/ST/EBC/MBC/Orphan Candidates belonging to Telangana with an Annual Income of the Parents/Guardian not exceeding Rs.1,50,000/- in Rural areas and Rs.2,00,000/- in Urban Areas are eligible</li>
        </ul>
      </p>
    </div>

    <div
      className="relative w-full p-px mx-auto mb-4 overflow-hidden transition-shadow duration-300 border rounded lg:mb-8 lg:max-w-4xl group hover:shadow-xl"
      data-aos="fade-up"
    >
      <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
      <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
      <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
      <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
      <div className="relative flex flex-col items-center h-full py-10 duration-300 bg-white rounded-sm transition-color sm:items-stretch sm:flex-row">
        <div className="px-12 py-8 text-center">
          <h6 className="text-4xl font-bold text-deep-purple-accent-400 sm:text-5xl">
            400
          </h6>
          <p className="text-center md:text-base">
            No. of seats 
          </p>
        </div>
        <div className="w-56 h-1 transition duration-300 transform bg-gray-300 rounded-full group-hover:bg-deep-purple-accent-400 group-hover:scale-110 sm:h-auto sm:w-1" />
        <div className="px-12 py-8 text-center">
          <h6 className="text-4xl font-bold text-deep-purple-accent-400 sm:text-5xl">
            11
          </h6>
          <p className="text-center md:text-base">
            No. of courses offered
          </p>
        </div>
      </div>
    </div>

    <p
      className="mx-auto mb-4 text-gray-600 sm:text-center lg:max-w-2xl lg:mb-6 md:px-16"
      data-aos="fade-up"
    >
      For more reach out to us at  mjptbcwrdc.jdpur@gmail.com or visit our website www.mjptbc
    </p>
  </div>
  )
}

export default SanctionedSeat