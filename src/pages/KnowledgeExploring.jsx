import React, { useState } from "react";
import image from "./image.png";
import img2 from "./images/image copy.png";
import img3 from "./images/image copy 2.png";
import img4 from "./images/image copy 3.png";
import img5 from "./images/image copy 4.png";
import img6 from "./images/image copy 5.png";
import iit1 from "./images/K_E/ARCHITECTURE-OF-IIT-KANPUR.jpg";
import iit2 from "./images/K_E/IIT kanpur gate.avif";
import iit3 from "./images/K_E/IIT-Kanpur event.jpg";
import iit4 from "./images/K_E/IIt-Kanpur.jpg";

const KnowledgeExploring = () => {

  const [students, setStudents] = useState([
    {
      name: 'M.Lavanya',
      yearGroup: 'III Bsc.MSDS',
      mentor: 'Mr. Danish',
      courseName: 'Full Stack Web Developer',
      duration: '26 June 2023 To 15 July 2023',
    },
    {
      name: 'M.Navya',
      yearGroup: 'III Bsc.MSDS',
      mentor: 'Mr. Danish',
      courseName: 'Full Stack Web Developer',
      duration: '26 June 2023 To 15 July 2023',
    },
    {
      name: 'V.Geetha',
      yearGroup: 'III Bsc.MSDS',
      mentor: 'Mr. Jeetendar',
      courseName: 'Python For Data Science',
      duration: '26 June 2023 To 15 July 2023',
    },
    {
      name: 'B.Tejaswini',
      yearGroup: 'III B.COM (BA)',
      mentor: 'Mr. Amith, Mr. Sandeep and Mr. Rahul Gupta',
      courseName: 'Cyber Security',
      duration: '28 June 2023 to 15 July 2023',
    },
    {
      name: 'M. Stuthi Keerthana',
      yearGroup: 'III B.COM (BA)',
      mentor: 'Mr. Amith, Mr. Sandeep and Mr. Rahul Gupta',
      courseName: 'Cyber Security',
      duration: '28 June 2023 to 15 July 2023',
    },
    {
      name: 'G. Swathi',
      yearGroup: 'III B.COM (BA)',
      mentor: 'Mr. Amith, Mr. Sandeep and Mr. Rahul Gupta',
      courseName: 'Cyber Security',
      duration: '28 June 2023 to 15 July 2023',
    },
    {
      name: 'V.Keerthi',
      yearGroup: 'III B.COM (BA)',
      mentor: 'Mr. Amith, Mr. Sandeep and Mr. Rahul Gupta',
      courseName: 'Cyber Security',
      duration: '28 June 2023 to 15 July 2023',
    },
    {
      name: 'S.Manisha',
      yearGroup: 'III B.COM (BA)',
      mentor: 'Mr. Amith, Mr. Sandeep and Mr. Rahul Gupta',
      courseName: 'Cyber Security',
      duration: '28 June 2023 to 15 July 2023',
    },
    {
      name: 'V.Soujanya',
      yearGroup: 'III B.COM (BA)',
      mentor: 'Mr. Amith, Mr. Sandeep and Mr. Rahul Gupta',
      courseName: 'Cyber Security',
      duration: '28 June 2023 to 15 July 2023',
    },
    {
      name: 'K.Shilpa',
      yearGroup: 'III B.COM (BA)',
      mentor: 'Mr. Amith, Mr. Sandeep and Mr. Rahul Gupta',
      courseName: 'Cyber Security',
      duration: '28 June 2023 to 15 July 2023',
    },
    {
      name: 'G. Eshwaramma',
      yearGroup: 'III B.COM (BA)',
      mentor: 'Mr. Amith, Mr. Sandeep and Mr. Rahul Gupta',
      courseName: 'Cyber Security',
      duration: '28 June 2023 to 15 July 2023',
    },
    {
      name: 'G. Harini',
      yearGroup: 'III B.COM (BA)',
      mentor: 'Mr. Amith, Mr. Sandeep and Mr. Rahul Gupta',
      courseName: 'Cyber Security',
      duration: '28 June 2023 to 15 July 2023',
    },
    {
      name: 'G. Sravani',
      yearGroup: 'III B.COM (BA)',
      mentor: 'Mr. Amith, Mr. Sandeep and Mr. Rahul Gupta',
      courseName: 'Cyber Security',
      duration: '28 June 2023 to 15 July 2023',
    },
    {
      name: 'M. Anusha',
      yearGroup: 'III B.COM (BA)',
      mentor: 'Mr. Amith, Mr. Sandeep and Mr. Rahul Gupta',
      courseName: 'Cyber Security',
      duration: '28 June 2023 to 15 July 2023',
    },
  ]);

  const [students2, setStudents2] = useState([
    {
      name: 'Bala Varalaxmi',
      yearGroup: 'III MPC',
      institute: 'IISC Banglore',
      mentor: 'Dr.E.D Jemmis',
      subject: 'Chemistry',
      title: 'Understanding differences between C2H6 and B2H6',
      duration: '2 Months (25 June 2023 To 30 Aug 2023)',
    },
    {
      name: 'Kandli Bhoomika',
      yearGroup: 'III Bsc.BZC',
      institute: 'Madras Christian College Chennai',
      mentor: 'Dr. G. Gnanashekaran',
      subject: 'Botany',
      title: 'Diversity of Inflorescence, corolla types and their adaptive strategies for pollination in the plants of tropical dry evergreen forest india',
      duration: '2 Months (30 June 2023 To 31 Aug 2023)',
    },
  ]);

  const [students3, setStudents3] = useState([
    {
      name: 'Ediga Indhu',
      yearGroup: 'III BBC',
      institute: 'Indian Association for the Cultivation Sciences',
      mentor: 'Dr. Ani Indita Das',
      subject: 'Chemistry',
      title: 'Polymers',
      duration: 'July 19th to Sep 19th, 2024',
    },
    {
      name: 'Kadiyam Laliky',
      yearGroup: 'III Bsc.BZC',
      institute: 'CIMAP College, Bengaluru',
      mentor: 'Dr. A. Dinesh',
      subject: 'Botany',
      title: 'Single Cell Protein',
      duration: 'July 19th to Sep 19th, 2024',
    },
    {
      name: 'Pembarthi Suchitra',
      yearGroup: 'III Bsc.MPC',
      institute: 'IIT Pallakad, Kerala',
      mentor: 'Dr. Padmesh',
      subject: 'Chemistry',
      title: 'Molecular Orbital Theory',
      duration: 'July 19th to Sep 19th, 2024',
    },
  ]);

  return (
    <div className="flex flex-col gap-5 md:w-1/2 mx-auto">
      <h1 className="text-xl md:text-3xl text-center mt-10">
        Knowledge Exploring
      </h1>
      <img src={image} alt="strtup" className="md:w-full mx-auto mt-4" />
      <h1 className="text-xl font-bold mt-5">◘ Startup Mahakumbh</h1>
      <h1>
        We are the students from all streams( i.e., BA, B.com and B.Sc of
        MJPTBCWRDC wargal), feeling lucky to be selected to visit the startup
        mahakumbh programme at New Delhi . This is a wonderful opportunity for
        us to explore ourself and learn many things about startups and culture
        of northern India.
      </h1>
      {/* <h1 className="font-bold">Day-1: 18-03-2024</h1>
            <p>We started our journey at 5:00 am from our college to Kacheguda railway station by taxi. As it was the first time for all of us to travel in a three tier compartment, we were so excited. We listed out our seat numbers from PNR numbers. We took a train, Karnataka Sampath Kranthi to Hazrath Nizamuddin. On travelling we interacted with other college students who too are headed to startup mahakumbh and we learned about the Railofy app in which we ordered food. It was a bit hard to digest north Indian food but we were more excited to reach the capital city of India.</p>
            <img src={img1} alt="strtup" className='md:w-full mx-auto mt-4' />
            <h1 className="font-bold">Day-2: 19-03-2024</h1>
            <p>  We reached Hazrath Nizamuddin station at 8:00am. We took a local train to reach New Delhi. After reaching New Delhi we met TASK team members . They directed us to Hotel Jindal International where they provided us accomodation. In the evening we attended a light show at RedFort. We learnt that the  Red Fort has been a symbol of power since the reign of Shah Jahan, has witnessed the change in Indian history to British rule, and was the place where Indian independence was first celebrated, and is still celebrated today. Then we visited Digambar Jain Lal Mandir which is the oldest Jain mandir in the capital. At the end of the Day we had street food.</p>
            <img src={img2} alt="strtup" className='mx-auto mt-4' />
            <h1 className="font-bold">Day-3: 20-03-2024</h1>
            <img src={img3} alt="strtup" className='mx-auto mt-4' />
            <p>TASK team provided us breakfast and transport to reach Bharat Mandapam. We reached Pragathi maidan by 8:00 am. There was a huge crowd and it took a lot of time to get our entry passes.We finally entered into Bharat Mandapam. The view was mesmerising inside with systematic management of halls. We observed different university students, CEO’s of different companies and company officials.We entered into the auditorium where a meeting with country delegates was held.
                In the meeting prime minister Modi ji said that India is the world's third largest startup ecosystem with the youth leading the way. Startup Mahakumbh programme was the part of Viksit Bharat to make India a developed country by 2047.
                With the central theme ’Bharat Innovates’ the event will also feature mentorship clinics, pitch competitions, and a multi-track conference featuring leadership talks, panel discussions, workshops, and a host of exciting activities for startups as well as future entrepreneurs. The event is being jointly organised with collaborative efforts of Assocham, Nasscom, Bootstrap Incubation and Advisory Foundation, TiE and Indian Venture and Alternate Capital Association (IVCA).
                The organising committee for the inaugural edition was led by Prashanth Prakash, partner at Accel;  Sanjeev Bikhchandani, founder and chairman of Info Edge; Archana Jahagirdar, founder and partner at Rukam Capital; Sanjay Nayar, founder of Sorin Investment Fund, with support from government agencies and nodal bodies such as MeitY Startup Hub, GeM and the DPIIT.
                In the afternoon we had lunch in hall 1 provided by TASK. Then we entered hall 5 for the startup exhibition. Where there are 2000+ start up samples exhibited in a huge hall. We met so many innovators and investers. We learnt about many startups and their mottos like: </p>
            <h1><span className='font-bold text-xl'>EXOBOT</span>: To serve the needs of the physically challenged people they invented a robotic hand which fits indeed people. </h1>
            <h1><span className='font-bold text-xl'>SAMRT-IVITY</span>: DIY toy, to make up a growing  child in a creative way and to improve them in imagination highway .</h1>
            <h1><span className="text-xl font-bold">GEN ROBOTICS</span>: They are on a mission to change Manholes to Roboholes along with transforming the sanitation workers into robot operators through mission Robohole. </h1>
            <h1><span className='text-xl font-bold'>ECO-SOUL</span>: Made from plants, Made for all. They prepare Tissue papers, Cutlery sets, Dinner sets, Chopping boards, wipes, straws etc. with only plant products. They are recyclable and biodegradable.</h1>
            <h1><span className='text-xl font-bold'>NAW-GATI</span>:Revolutionising the way India Fuels! It is India's largest fuel discovery app . It shows the nearest fuel stations to us and it gives more accurate information than google chrome.</h1>
            <h1><span className='text-xl font-bold'>IMAGIX AI</span> : ImagiX AI is a medical imaging platform that acts as a catalyst for transformative change in healthcare delivery by AI driven precision.The main role of their startup is to make every corner of india free diagnostic with mobile phones available.</h1>
            <h1><span className='text-xl font-bold'>WOFHRO</span>: It is the job recruiting app according to employees interest and their skills. It is just a 10 months old startup and they are recruiting only experienced people. They are on their way to spread their wings and offer job opportunities for freshers too!.</h1>
            <h1><span className='text-xl font-bold'>GO GARBAGE</span> : This is a wonderful start up where they collect all the available waste from garbage like plastic covers, waste papers and all and they make different kinds of bags, door mats, decorative items. where they reused non degradable waste.</h1>
            <div className='grid grid-cols-3 gap-3'>
                <img src={img4} alt="strtup" className='mx-auto mt-4 aspect-square rounded-md' />
                <img src={img5} alt="strtup" className='mx-auto mt-4 aspect-square rounded-md' />
                <img src={img6} alt="strtup" className='mx-auto mt-4 aspect-square rounded-md' />
            </div>
            <h1 className="font-bold">Day-4: 21-03-2024</h1>
            <p>We are so enthusiastic to visit various places on this day. For this, we woke up early in the morning,after having breakfast we visited Lotus Temple. It is built in the shape of a half open lotus. It is a place of worship for the Baha'i faith; it emphasises unity and equality among people and believes in teaching the importance of all religions. It welcomes people from all religions to worship there without any restriction. We entered the prayer hall by 10:00 am and there was a prayer for 12 minutes which was peaceful. The prayer was by 3 types of religions such as Hindu, Christian, Muslim. </p>
            <img src={img7} alt="strtup" className='mx-auto mt-4' />
            <p>It is a truly remarkable landmark that  captivates the hearts of us
                After having lunch, we also visited Iskcon Temple, a Vaishnav temple of Lord Krishna. It consists of a Huge Hindus Holy Book Bhagavad Gita which weighs 800 kgs and has 670 pages.
                The temple is noted for its architectural splendour and invites devotees from far and wide. Its interior walls have been adorned with works of Russian artists that represent scenes from the lives of Lord Krishna, Goddess Radha, Lord Rama and Goddess Sita.The main attraction of the temple is its prayer hall and museum.</p>
            <div className='grid grid-cols-2 gap-3'>
                <img src={img8} alt="strtup" className='mx-auto mt-4 aspect-auto rounded-md' />
                <img src={img9} alt="strtup" className='mx-auto mt-4 aspect-auto rounded-md' />
            </div>
            <p>We finally visited Jantar mantar.The primary purpose of the observatory was to compile astronomical tables, and to predict the times and movements of the sun, moon and planets.Some of these purposes nowadays would be classified as astronomy. It was a wonderful experience to travel around New Delhi and visit many places. We are also exposed to different cultures and food of delhi.</p>
            <img src={img10} alt="strtup" className='mx-auto mt-4' />
            <h1 className='font-bold'>Day-5: 22-03-2024</h1>
            <p>We had a train at 5:20 am at Hazrath Nizamuddin railway station . We started from NewDelhi at 3:00 am in a bus provided by the TASK team . It was very hard for us to identify our platform and seat numbers in that big station. After we settled in our respective seats we checked our luggages and spent the whole day on the train chit chatting about our memories and experiences and had a lot of fun.  </p>
            <h1 className='font-bold'>Day-6: 23-03-2024 The final Day</h1>
            <p>We returned to Kacheguda at 9:30 am and had a breath of telangana. We boarded a bus to JBS and had a delicious masala dosa near the bus stop. From there we again had a bus near our college. By the time we reached near to college our Nikitha madam arranged an auto for us to the college. Finally we returned safely and met our Principal sir and discussed the trip. We enjoyed a lot with our friends and Vijayeshwari madam.</p>
            <h1 className="font-bold">  Conclusion:</h1>
            <p>"Startup Mahakumbh" served as a testament to the vibrancy and ingenuity of the startup ecosystem, highlighting the potential for innovation to drive positive change and economic growth. The event provided a platform for startups to showcase their ideas, connect with stakeholders, and catalyse opportunities for collaboration and investment.Startup Mahakumbh emerged as a premier platform for celebrating innovation, entrepreneurship, and collaboration in India. The event's success can be attributed to the collective efforts of various organisations and the active participation of stakeholders from across the country. Moving forward, initiatives like Startup Mahakumbh are poised to play a pivotal role in fueling India's startup revolution and driving sustainable economic growth.
            We also learnt Hindi, the national language. We have a lot of experience with google maps, heavy traffic, metro in delhi……</p>
            <div className="font-bold">Acknowledgements:</div>
            <p>We extend our appreciation to the organisers, participants, sponsors, and attendees who contributed to the success of "Start-Up mahakumbh 2024."  We are grateful to our secretary sir B.Saidulu sir and G.Bhaskar rao sir for allowing us to visit this startup programme. Special thanks to TASK for inviting us and for providing Travelling and accommodation facilities. We are also thankful to Dr .Nikitha madam for the guidance. Special thanks to Vijayeshwari madam for accompanying us and explaining us about startup exhibitions.
            Thanks for everything . We hope to have many more trips like this!</p>
            <div className="font-bold">References:</div>
            <p>With reference to brochures we collected in the start up exhibition, By the notes we collected from the speech we heard in start-up exhibition, the knowledge we gained in the total field trip of start-up mahakumbh we concluded this report. </p> */}
      <div className="grid md:grid-cols-5 grid-cols-1 gap-3 place-items-center">
        <img src={img2} alt="" className="w-auto h-44 rounded-md" />
        <img
          src={img3}
          alt=""
          className="w-auto h-44 object-cover rounded-md"
        />
        <img src={img4} alt="" className="w-80 h-44 object-cover rounded-md" />
        <img src={img5} alt="" className="w-80 h-44 object-cover rounded-md" />
        <img src={img6} alt="" className="w-80 object-cover h-44 rounded-md" />
      </div>
      <div>
        <h1 className="text-xl font-bold mt-5">◘ Training In IIT Kanpur</h1>
        <div className="grid md:grid-cols-2 gap-3 mt-7">
          <img
            src={iit1}
            alt=""
            className="object-cover rounded-md h-full w-full"
          />
          <img
            src={iit2}
            alt=""
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <div className="grid grid-cols-2 gap-3 mt-3">
          <img
            src={iit3}
            alt=""
            className="w-full h-full object-cover rounded-md"
          />
          <img
            src={iit4}
            alt=""
            className="w-full h-full object-cover rounded-md"
          />
        </div>
      </div>
      <div>
        <h1 className="text-xl font-bold mt-5">
          ◘ Summer Fellowship Program at IIT Kanpur in the Academic Year
          2023-2024
        </h1>
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-5">
          <table class="w-full text-sm rtl:text-right text-gray-500 dark:text-gray-400 text-center">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Name of the Student
                </th>
                <th scope="col" class="px-6 py-3">
                  Year & Group
                </th>
                <th scope="col" class="px-6 py-3">
                  IIT Kanpur Mentor
                </th>
                <th scope="col" class="px-6 py-3">
                  Course Name
                </th>
                <th scope="col" class="px-6 py-3">
                  Duration
                </th>
              </tr>
            </thead>
            <tbody>
              {
                students.map(stu => {
                  return (
                    <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                      <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {stu.name}
                      </th>
                      <td class="px-6 py-4">
                        {stu.yearGroup}
                      </td>
                      <td class="px-6 py-4">
                        {stu.mentor}
                      </td>
                      <td class="px-6 py-4">
                        {stu.courseName}
                      </td>
                      <td class="px-6 py-4">
                        {stu.duration}
                      </td>
                    </tr>
                  );
                })
              }
            </tbody>
          </table>
        </div>
      </div>
      <div>
        <h1 className="text-xl font-bold mt-5">
          ◘ Summer Fellowship Programs in the Academic Year 2023-2024
        </h1>
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-5">
          <table class="w-full text-sm rtl:text-right text-gray-500 dark:text-gray-400 text-center">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Name of the Student
                </th>
                <th scope="col" class="px-6 py-3">
                  Year & Group
                </th>
                <th scope="col" class="px-6 py-3">
                  IIT Kanpur Mentor
                </th>
                <th scope="col" class="px-6 py-3">
                  Course Name
                </th>
                <th scope="col" class="px-6 py-3">
                  Duration
                </th>
              </tr>
            </thead>
            <tbody>
              {
                students2.map(stu => {
                  return (
                    <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                      <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {stu.name}
                      </th>
                      <td class="px-6 py-4">
                        {stu.yearGroup}
                      </td>
                      <td class="px-6 py-4">
                        {stu.mentor}
                      </td>
                      <td class="px-6 py-4">
                        {stu.courseName}
                      </td>
                      <td class="px-6 py-4">
                        {stu.duration}
                      </td>
                    </tr>
                  );
                })
              }
            </tbody>
          </table>
        </div>
      </div>
      <div>
        <h1 className="text-xl font-bold mt-5">
          ◘ Summer Fellowship Programs in the Academic Year 2024-2025
        </h1>
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-5">
          <table class="w-full text-sm rtl:text-right text-gray-500 dark:text-gray-400 text-center">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Name of the Student
                </th>
                <th scope="col" class="px-6 py-3">
                  Year & Group
                </th>
                <th scope="col" class="px-6 py-3">
                  IIT Kanpur Mentor
                </th>
                <th scope="col" class="px-6 py-3">
                  Course Name
                </th>
                <th scope="col" class="px-6 py-3">
                  Duration
                </th>
              </tr>
            </thead>
            <tbody>
              {
                students3.map(stu => {
                  return (
                    <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                      <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {stu.name}
                      </th>
                      <td class="px-6 py-4">
                        {stu.yearGroup}
                      </td>
                      <td class="px-6 py-4">
                        {stu.mentor}
                      </td>
                      <td class="px-6 py-4">
                        {stu.courseName}
                      </td>
                      <td class="px-6 py-4">
                        {stu.duration}
                      </td>
                    </tr>
                  );
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default KnowledgeExploring;
