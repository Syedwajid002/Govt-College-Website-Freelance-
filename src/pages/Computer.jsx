import React from 'react'
import { HalfPageBanner } from '../components/General/Half'
import T1 from '../assets/Computer & Events/T1.jpg'
import T2 from '../assets/Computer & Events/T2.jpg'
import T3 from '../assets/Computer & Events/T3.jpg'
import c1 from '../assets/Computer & Events/c1.jpg'
import c2 from '../assets/Computer & Events/c2.jpg'
import c3 from '../assets/Computer & Events/c3.jpg'


const Computer = () => {
  return (
    <>
    <HalfPageBanner name={"Computer Events"}/>
    <div className='T-HUB visit' id='Hub'>
                <h1 className='font-bold text-center text-2xl p-2 m-2'>T-HUB Visit</h1>
                <div className="flex flex-wrap justify-center align-middle md:justify-center space-y-4 md:space-y-0 md:space-x-8">
                    <img src={T1} alt="Image1" className="w-full md:w-1/4 transition-transform duration-300 lg:hover:scale-110"/>
                    <img src={T2} alt="Image2" className="w-full md:w-1/4 transition-transform duration-300 lg:hover:scale-110"/>
                    <img src={T3} alt="Image2" className="w-full md:w-1/4 transition-transform duration-300 lg:hover:scale-110"/>
                </div>
                <p className='text-center font-light p-2 m-2'>Our students recently had the opportunity to visit T-Hub, India's leading innovation hub. The visit provided a deep dive into the entrepreneurial ecosystem, offering insights into startup culture, innovation strategies, and technology-driven business models. The students interacted with industry experts, explored various incubator spaces, and gained valuable knowledge that will inspire their future endeavors. This visit was an enriching experience, fostering a spirit of innovation and entrepreneurship among the participants.</p>
            </div><hr />
            <div className='Cybersecurity Event' id='Cyber'>
                <h1 className='font-bold text-center text-2xl p-2 m-2'>CyberSecurity Event</h1>
                <div className="flex flex-wrap justify-center align-middle md:justify-center space-y-4 md:space-y-0 md:space-x-8">
                    <img src={c1} alt="Image1" className="w-full md:w-1/4 transition-transform duration-300 lg:hover:scale-110"/>
                    <img src={c2} alt="Image2" className="w-full md:w-1/4 transition-transform duration-300 lg:hover:scale-110"/>
                    <img src={c3} alt="Image2" className="w-full md:w-1/4 transition-transform duration-300 lg:hover:scale-110"/>
                </div>
                <p className='text-center font-light p-2 m-2'>Our college hosted a dynamic Cyber Security event, bringing together experts and enthusiasts to discuss the latest trends and challenges in the field. The event featured insightful sessions on topics such as ethical hacking, data protection, and the importance of cyber hygiene. Students had the opportunity to participate in interactive workshops and network with professionals, enhancing their understanding of cybersecurity practices. The event was a significant step in empowering our students to navigate the digital world securely.</p>
            </div><hr />
            <div className='Hackathon' id='Hackathon'>
                <h1 className='font-bold text-center text-2xl p-2 m-2'>Hackathon</h1>
                <div className="flex flex-wrap justify-center align-middle md:justify-center space-y-4 md:space-y-0 md:space-x-8">
                    <img src={c1} alt="Image1" className="w-full md:w-1/4 transition-transform duration-300 lg:hover:scale-110"/>
                    <img src={c2} alt="Image2" className="w-full md:w-1/4 transition-transform duration-300 lg:hover:scale-110"/>
                    <img src={c3} alt="Image2" className="w-full md:w-1/4 transition-transform duration-300 lg:hover:scale-110"/>
                </div>
                <p className='text-center font-light p-2 m-2'>The Department of Computer Science conducted a hackathon program on Programming in C on 3rd  April 2024 - 5th Apr 2024. Initiative was taken by III MSCs&MPCs students. 
It has five levels,1st & 2nd levels are conducted on 3rd April , 3rd & 4th levels are conducted on 4th Apr 2024 and 5th  level is conducted on 5th Apr 2024.</p>
<div className='flex flex-wrap justify-center align-middle md:justify-center space-y-4 md:space-y-0 md:space-x-8 ml-10'>
    <p className='w-36'><b>First Level:</b> Written test
No. of participants: 163 students
Selected first level: 61students
</p>
<p className='w-36'><b>Second Level:</b> Rapid quiz
No. of participants:61 students.
Selected top 49 students.

</p>
<p className='w-36'><b>third Level:</b>  Typing test
No. of participants:49
Selected top 30

</p>
<p className='w-36'><b>Fouth Level:</b>Blind fold
No. of participants: 30
Selected top 16 members.

</p>
<p className='w-36'><b>Fifth Level:</b>Coding test
No. of participants: 16=2 students*8 teams 
Selected top 2 teams= 2 students *  2 teams= 4 students
</p>
</div>
            </div><hr />
    </>
  )
}

export default Computer