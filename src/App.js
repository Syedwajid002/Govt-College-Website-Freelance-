import React, { useState, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { FaBars } from 'react-icons/fa'; // Importing sidebar icon
import Header from './components/General/Header';
import Navbar from './components/General/Navbar';
import Sidebar from './components/General/Sidebar';
import ScrollToTop from './pages/ScrollToTop';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import MessageParser from "./components/chatbot/MessageParser";
import ActionProvider from "./components/chatbot/ActionProvider";
import config from './components/chatbot/config';
import './App.css'
import { IoCloseSharp, IoNotifications } from "react-icons/io5";
import Gov_Body from './components/About/Gov_Body';
import Principles from './components/About/Principles';
import Admission from './pages/Admission';
import Academics from './pages/Academics';
import Mou from './components/StudentCorner/Mou';
import { Secretary } from './components/About/Secretary';
import { Benefits } from './pages/Benefits';
import JobOpportunities from './pages/JobOpportunities';
import CareerGuidance from './pages/CareerGuidance';
import Research from './pages/Research';
import Administration from './pages/Administration';
import Recruitments from './pages/Recruitments';
import KnowledgeExploring from './pages/KnowledgeExploring';
import Exams from './pages/Examination';
import Languages from './pages/Languages';
import Science from './pages/Science';
import Arts from './pages/Arts';
import Commerce from './pages/Commerce';
import Principal from './pages/Principal';
import VicePrincipal from './pages/Viceprincipal';
import Best from './components/StudentCorner/Best';
import Programs from './pages/Programs';
import Computer from './pages/Computer';
import Nss from './pages/Nss';
import Admin from './pages/Admin';
import ScrollingNotification from './components/Home/ScrollingNotification';
import Notifications from './pages/Notifications';
import Eresources from './pages/Eresources';

const HomeLazy = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Departments = lazy(() => import('./pages/Departments'));
const Placements = lazy(() => import('./pages/Placements'));

export default function App() {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    document.getElementById("sidebar").style.marginLeft = 0;
  }

  return (
    <div className="App overflow-hidden">
      <Router>
        <div className="flex flex-col h-full">
          <Header/>
          <ScrollingNotification/>
          <Sidebar />
          <div className='p-2'>
            <FaBars onClick={toggleSidebar} className="text-2xl cursor-pointer block md:hidden text-black" />
          </div>
          <div className="content flex-grow">
            <Navbar />
            <Suspense fallback={null}>
              <Routes>
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="/home" element={<HomeLazy />} />
                <Route path="/about" element={<About />} />
                <Route path="/departments" element={<Departments />} />
                <Route path="/placements" element={<Placements />} />
                <Route path="/govbody" element={<Gov_Body/>}/>
                <Route path="/principals" element={<Principles/>}/>
                <Route path="/admission" element={<Admission/>}/>
                <Route path="/academics" element={<Academics/>}/>
                <Route path="/mou" element={<Mou/>}/>
                <Route path="/secretary" element={<Secretary/>}/>
                <Route path="/placements" element={<Placements/>}/>
                <Route path="/administration" element={<Administration/>}/>
                <Route path="/benefits" element={<Benefits/>}/>
                <Route path="/JobOpportunities" element={<JobOpportunities/>}/>
                <Route path="/careerGuidance" element={<CareerGuidance/>}/>
                <Route path="/research" element={<Research/>}/>
                <Route path="/recruitments" element={<Recruitments/>}/>
                <Route path="/knowledge_exploring" element={<KnowledgeExploring/>}/>
                <Route path='/examination' element={<Exams/>}/>
                <Route path="/languages" element={<Languages/>}/>
                <Route path="/science" element={<Science/>}/>
                <Route path="/arts" element={<Arts/>}/>
                <Route path="/commerce" element={<Commerce/>}/>
                <Route path="/principal" element={<Principal/>}/>
                <Route path="/viceprincipal" element={<VicePrincipal/>}/>
                <Route path="/best" element={<Best/>}/>
                <Route path='/programs&Events' element={<Programs/>}/>
                <Route path='/Computer' element={<Computer/>}/>
                <Route path='/Nss' element={<Nss/>}/>
                <Route path='/Admin' element={<Admin/>}/>
                <Route path='/Notifications' element={<Notifications/>}/>
                <Route path='/e-resources' element={<Eresources/>}/>

              </Routes>
            </Suspense>
            <div className='fixed bottom-0 right-0 hidden z-20' id="botcon">
              <div className='flex flex-row justify-end pr-3'>
                <IoCloseSharp size={30} onClick={()=>{
                  document.getElementById("botcon").style.display = "none";
                  document.getElementById("botBTn").style.display = "block";
                }} color="black"/>
              </div>
              <Chatbot
                config={config}
                messageParser={MessageParser}
                actionProvider={ActionProvider}
              />
            </div>
            <ScrollToTop/>
          </div>
        </div>
      </Router>
    </div>
  );
}
