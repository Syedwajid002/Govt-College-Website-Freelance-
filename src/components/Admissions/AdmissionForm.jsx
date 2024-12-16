import React from 'react'
const AdmissionForm = () => {

const steps = [
  {
    title: 'Step 1',
    description:
      'Visit our website',
  },
  {
    title: 'Step 2',
    description:
      "Create an account on the university's application portal and complete the online application form.'.",
  },
  {
    title: 'Step 3',
    description:
      'Submit your application and any additional materials by the deadline.',
  },
];

return (
  <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
    <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
      <div>
        <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
          ADMISSIONS
        </p>
      </div>
      <h2
        className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-blue-700 sm:text-4xl md:mx-auto"
        data-aos="fade-up"
      >
        {/* <span className="relative inline-block">
          <svg
            viewBox="0 0 52 24"
            fill="currentColor"
            className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
          >
            <defs>
              <pattern
                id="f51618fb-0edb-4bcb-b35a-ffc770941286"
                x="0"
                y="0"
                width=".135"
                height=".30"
              >
                <circle cx="1" cy="1" r=".7" />
              </pattern>
            </defs>
            <rect
              fill="url(#f51618fb-0edb-4bcb-b35a-ffc770941286)"
              width="52"
              height="24"
            />
          </svg>
          <span className="relative">Admission</span>
        </span>{' '} */}
        Process
      </h2>
      <p className="text-base text-gray-700 md:text-lg" data-aos="fade-up">
      Our institution is committed to providing a world-class education that prepares students for success in their chosen fields.
      <br></br>
      <a
                href="https://docs.google.com/document/d/10voOhlTGl5xRAWwUCoSnJ5MLReVUPeoB/edit?usp=sharing&ouid=109890624875551947528&rtpof=true&sd=true"
                className= " m-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center"
                download
              >
                Download Form
                <svg
                  className="w-4 h-4 ml-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
      </p>
    </div>

    <div className="grid gap-8 row-gap-0 lg:grid-cols-3">
      {steps.map((step, index) => (
        <div
          key={index}
          className="relative text-center"
          data-aos="fade-up"
          data-aos-delay={index * 200}
        >
          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-20 sm:h-20">
            <svg
              className="w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16"
              stroke="currentColor"
              viewBox="0 0 52 52"
            >
              <polygon
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              />
            </svg>
          </div>
          <h6 className="mb-2 text-2xl font-extrabold">{step.title}</h6>
          <p className="max-w-md mb-3 text-sm text-gray-900 sm:mx-auto">
            {step.description}
          </p>
          <a
            href="/"
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
          >
            Learn more
          </a>
          <div className="top-0 right-0 flex items-center justify-center h-24 lg:-mr-8 lg:absolute">
          
          </div>
        </div>
      ))}
    </div>
  </div>
);
};


export default AdmissionForm
