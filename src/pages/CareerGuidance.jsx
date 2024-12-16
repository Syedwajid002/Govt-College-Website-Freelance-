import React from 'react'
import img1 from '../assets/careerguidance/1.png';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CareerGuidance = () => {

    const data = [
        { img: require('../assets/careerguidance/1.png'), title: "Dr.S.Radharani,Dr.K.Nikitha, Mrs.K.Bhagyalaxmi, Ms. Hemalatha participated in 3 day Faculty development Program on “Digital Marketing” in Infosys during Dec 13-15, 2023  " },
        { img: require('../assets/careerguidance/2.png'), title: "Under collaborative activity with TASK,10 final year students were sent to Startup Mahakumbh held at New Delhi from March 18-20,2024." },
        { img: require('../assets/careerguidance/3.png'), title: "Conducted e-waste Management Awareness Program in association with TASK on 27-01-2024 for 151 students." },
        { img: require('../assets/careerguidance/4.png'), title: " Conducted One week Mahindra Pride Training Programs to final year students during 03-01-2024 to 08-01-2024(140 students) " },
        { img: require('../assets/careerguidance/5.png'), title: "Conducted One week Mahindra Pride Training Programs to final year students during 03-10-2023 to 08-10-2023(66 students). " },
        { img: require('../assets/careerguidance/6.png'), title: "12 weeks Employability skills training program inaugural in MJPTBCWRDC, Wargal, chief guest Mr. Chinta Subramanyam, Director, Cognizant Technology Solutions" },
        { img: require('../assets/careerguidance/7.png'), title: "Inspire and Ignite foundation one day program on 31-01-2024 on fear breaking and self development in students." },
        { img: require('../assets/careerguidance/8.1.png'), title: "Skill development program on 21/12/2023 by Mrs. G. Bhagyalaxmi, Dr. K.Nikitha nd Ms. Hemelatha to all the final year students" },
        { img: require('../assets/careerguidance/8.2.png'), title: "" },
        { img: require('../assets/careerguidance/9.png'), title: " 6 day online training program from 4 Dec to 9 Dec, 2023 on Business analytics in collaboration with TASK " },
        { img: require('../assets/careerguidance/10.png'), title: "39 final year students participated in the Industrial Visit to Infosys Pocharam campus on 8-10-2023." },
        { img: require('../assets/careerguidance/11.png'), title: "Mrs.G.Bhagya lakshmi, Lecturer in Economics department has attended FDP on facilitation skills from 21st December top 23rd December 2023 by Infosys through TASK" },
        { img: require('../assets/careerguidance/12.png'), title: "76 students from final years attended Infosys BPM online training program through TASK during 16 Oct -31 Oct 2023" },
        { img: require('../assets/careerguidance/13.png'), title: "Conducted placement drive by EMRI health services on 26-6-2023" },
        { img: require('../assets/careerguidance/14.png'), title: "Conducted placement drive by Yasodha hospitals on 27-6-2023 trained by EThames, " },
        { img: require('../assets/careerguidance/15.png'), title: "Conducted placement drive by Meghavi Wellness on 28-6-2023 in association with EThames" },
        { img: require('../assets/careerguidance/16.png'), title: "One week Online training and placement drive by Cognizant and Google on 15-09-2023." },
        { img: require('../assets/careerguidance/17.png'), title: " Mock Interviews and Graduation Day Ceremony in association with Cognizant Technology Solutions on May 25th, 2024." },
        { img: require('../assets/careerguidance/17.1.png'), title: "" },
        { img: require('../assets/careerguidance/18.png'), title: " Parents awareness meet on placements by Cognizant team was held on 8-June 2024." }
    ];

    return (
        <div className='p-4'>
            <h1 className='text-2xl font-bold text-blue-700 py-5 text-center'>Placement Training Activities</h1>
            {/* {
                data.map((dta, index) => {
                    return (
                        <div key={index}>
                            <h1 className='text-center text-xl'>{dta.title}</h1>
                            <img src={dta.img} alt="i" className='my-10 rounded-xl object-cover md:w-1/3 h-auto mx-auto' />
                        </div>
                    );
                })
            } */}
            <Carousel showArrows={true}>
                {
                    data.map((dta, index) => {
                        return (
                            <div key={index}>
                                <h1 className='text-center text-xl'>{dta.title}</h1>
                                <img src={dta.img} alt="i" className='my-10 rounded-xl object-cover md:w-1/3 h-auto mx-auto' />
                            </div>
                        );
                    })
                }
            </Carousel>
        </div>
    )
}

export default CareerGuidance;