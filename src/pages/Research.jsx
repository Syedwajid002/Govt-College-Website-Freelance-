import React, { useState } from 'react'

const Research = () => {

    const [data, setData] = useState([
        "Dept. of Telugu has attended Telugu Literary Congress organized by Osmania University.",
        "Dept. of chemistry have Attended International conference at C-MET, Cherlapally on 8-10th March 2024,National conference at OU, on 1st July 2023, National Seminar at Kanha Shanthi vanam, organised by social welfare college on 24-25th feb 2023 and national seminar at OU, organised by Telangana social welfare college on 26-27th April 2024.",
        "Dept. of Botony Attended International Conference  at OU on “Advances in Plant Sciences for Sustainable Future” (ICAPSSF- 2024) on 7th - 9th of February 2024",
        "Dept. of Political science attended Faculty Orientation in Political Science Discipline (three- day work shop 19th to 21st January 2023) at dept of Political Science OU, attended  three day International Conference on Higher Education and Sustainable Development (23rd March to 25th March 2023) at OU and attended  A Two Day National Seminar  on Research Methodology -Challenges  and Solutions (24th and25th January 2024)",
        "Dept. of Economics attended seminar on -impact of Rural development programmes in India 20and 21st,January 2023 organized by Government Degree College, Marredpally and attended work shop on Faculty Facilitation work shop from 21to23 2023 December organised by Pallavi Engineering college ,Bandlaguda",
        "Dr.Nikitha has published a Research paper on “Contextually Propagated Term Weight based Approach for Author Profiling: Gender, Age and Language Variety Prediction” in Journal of Electrical Systems indexed by UGC Care and Scopus and has organized a special session on Advances in Remote Sensing and Medical Applications(ARSAMA) as a Technical Programme Committee during INDIACom-2023, International Conference on “Computing for Sustainable Global Development, organized by BVICAM, New Delhi.",
        "She has been working under NPTEL Swayam Courses in translating the files of the Course “The Joy of Computing using Python” offered by IIT Ropar in Telugu Language and  has guided III MSDS student Keerthi in publishing a Research paper on “Sentiment Analysis on Mahalaxmi Free Bus Scheme ” in National Seminar on Evaluation of Welfare Schemes in Telangana State, B.R. Ambedkar Open University, Feb 11-12 2024.",
        "Dr. Nikitha has guided III MSDS students Mahalaxmi and Nikitha in publishing  a Research paper on “Prediction of Cardiovascular disease using Machine Learning Algorithms” in International Conference on Advances in Computational Intelligence (ICACI), Springer, Dec 15-16 2023 and  has reviewed research papers of the International Conference on Advances in Computational Intelligence (ICACI-2023), Springer.",
        "Ms. K. Bhagyalaxmi has published a paper on “Dynamical behavior of obligatory and cheater mutualistic species under white noise” in journal of Partial Differential equations in Applied Mathematics.",
        "Dr. V.Radha published a paper on Preparation, characterization and photocatalytic studies of cation (Ag+) and anion (N3-) doped K2Zn(PO3)4 in Materials Science: Materials in Electronics (JMSE) 2024",
        "Dr. V.Venkateshwara Rao has published a paper on “Role of Rythu Vedika scheme in crop diversification-An exploratory study” presented at 7th Telangana Economic Conference held in the month of Feb 2023.",
        "Mr. Puli Govinda Rao, Vice Principal, MJPTBCWRDC Wargal has written a book on “Vedic Science- Contributions of Indian Intellectuals to the Science”",
        "Dr.S. Radharani, DL in Computer Science has been awarded Doctorate from the Department of Computer Science & Engineering, Osmania University under the Guidance of Professor Dr.V.B. Narasimha on the topic “A Novel Framework of Hybrid cloud security with data dynamics” and has published two papers in Scopus Indexed Journals.",
        "Dr.K.Nikitha, DL  in  Computer Science is guiding PhD. scholars from Department of Informatics from Osmania university and she published  “A SURVEY ON EVOLUTION OF AUTHOR PROFILING“ in SCOPUS  INDEXED Journal of Xi’an  University of Architecture & Technology, Impact factor of 3.7 and published “XILINX DESIGN AND IMPLEMENTATION “ in Neuroquantology Journal and also contributed in NP TEL SWAYAM translation offered by IIT Kharagpur in the course “Computational Thinking”.",
        "B.Soniveena DL in Botany, K.Varalaxmi DL in Maths, K.bhagyalaxmi DL in Maths, AK.Chandana DL in Political Science, G.Bhagyalaxmi DL in Economics, M.Usha DL in Biochemistry are pursuing Ph.D from various Universities.",
        "Dr. Shahana Nazneen has been awarded the certificate by International Journal of Research  and Analytical Reviews  in Recognition of the publication of the paper entitled  “AN ENQUIRY INTO THE  POTRAYAL OF WOMEN IN DRAMAS OF GIRISH  KARNAD AND MAHESH DATTANI”.",
        "K.Bhagyalakshmi from Dept of Maths has presented a paper titled “Effect of Nanoparticles on Zoo plankton and phytoplankton in functional responses” in International Conference on Dynamical Systems and Numerical Methods.",
        "G. Bhagyalaxmi from Dept of Economics has Published Sustenance of organic farming in India in International Journal of Scientific Development  and Research",
        "DLs of our institution Dr.K.Suchitra, Dr.V.Radha, Dr.P.Janaki, K.Varalakshmi, T.Jayalaxmi, AK.Chandana, T.S.Rajani and G.Bhagyalaxmi have participated in State and National Seminars and Online short term courses in this academic year 2022-23."
    ]);

    return (
        <div>
            <h1 className='text-center text-2xl mt-10'>Research & Publications</h1>
            <ul>
                {
                    data.map(dta=>{
                        return(
                            <div className='flex flex-row items-center gap-3'>
                                <span>⁍</span>
                                <li className='p-3 border rounded-lg mt-2 w-full'>{dta}</li>
                            </div>
                        );
                    })
                }
            </ul>
        </div>
    )
}

export default Research;