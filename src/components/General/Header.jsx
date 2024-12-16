import React from 'react';
import mjplogo from './mjplogo.png';
import telanganalogo from './telanganalogo.png';
import collegepic from './top.jpg';
import Mode from './Mode';

const Header = () => {
    const collegeName = "MAHATMA JYOTHIBA PHULE TELANGANA BACKWARD CLASSES WELFARE RESIDENTIAL DEGREE COLLEGE FOR WOMEN";
    const location = "Wargal, Siddipet";

    return (
        <header className="relative bg-zinc-800 py-4 sm:py-6 overflow-hidden">
            {/* <div className="container mx-auto px-4 relative z-10">
                <div className="flex items-center justify-between lg:flex-row flex-col">
                    <div className="flex items-center lg:flex-row flex-col">
                        <img 
                            src={telanganalogo} 
                            alt="Telangana Logo" 
                            className="lg:h-48 mr-4 h-20" 
                        />
                        <div className="flex flex-col justify-center gap-3"> 
                            <h1 className="font-bold text-base md:text-xl text-center text-white mt-4">{collegeName}</h1>
                            <h1 className="font-bold my-2 lg:mt-0 text-sm text-white lg:text-xl text-center mt-3">{location}</h1> 
                        </div>
                    </div>
                    <div className="flex items-center ml-auto flex-col justify-center w-full">
                        <div className="flex flex-col items-center"> 
                            <img 
                                src={mjplogo} 
                                alt="MJP Logo" 
                                className="h-20 lg:h-48 w-auto object-contain rounded-full my-3"
                            />
                            <div className="text-white text-lg font-semibold mt-2">
                                <span className="font-bold">LEARN TO LEAD</span>
                            </div>
                        </div>
                        <div className="bg-gradient-to-r from-zinc-700 to-zinc-900 text-white lg:p-4 p-2 rounded-lg flex items-center ml-4">
                            <div className="lg:text-lg text-sm font-semibold tracking-wider mr-2">SITE VISITS:</div>
                            <a href="https://www.cutercounter.com/" target="_blank" className="mr-2">
                                <img src="https://www.cutercounter.com/hits.php?id=hrxpnfpq&nd=7&style=72" border="0" alt="visitor counter" />
                            </a>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className='z-20 relative p-4 flex flex-col md:flex-row items-center text-white justify-between md:pr-10'>
                <div className='flex'>
                    <img
                        src={telanganalogo}
                        alt="Telangana Logo"
                        className="lg:h-32 mr-4 h-20"
                    />
                    <div className='md:w-1/2'>
                        <h1 className='font-bold md:text-3xl text-sm'>MAHATMA JYOTHIBA PHULE TELANGANA BACKWARD CLASSES WELFARE RESIDENTIAL DEGREE COLLEGE FOR WOMEN</h1>
                        <h1 className='text-left text-base mt-3'>{location}</h1>
                    </div>
                </div>
                <div className="bg-gradient-to-r from-zinc-700 to-zinc-900 text-white lg:p-2 p-2 rounded-lg flex items-center ml-4 mt-10 md:mt-0 md:absolute right-0 -top-5">
                    <div className="text-lg font-semibold tracking-wider mr-2">SITE VISITS:</div>
                    <a href="https://www.cutercounter.com/" target="_blank" className="mr-2">
                        <img src="https://www.cutercounter.com/hits.php?id=hrxpnfpq&nd=7&style=72" border="0" alt="visitor counter" />
                    </a>
                </div>
                <div className='relative z-10 mt-10 md:mt-7'>
                    <div className="flex flex-col items-center">
                        <img
                            src={mjplogo}
                            alt="MJP Logo"
                            className="lg:h-32 mr-4 h-20 rounded-full md:w-44"
                        />
                        <div className="text-white text-sm font-semibold mt-2 bg-zinc-800 p-1 rounded-md">
                            <span className="font-bold text-xs">LEARN TO LEAD</span>
                        </div>
                    </div>
                </div>
            </div>
            <img src={collegepic} alt="College" className="absolute inset-0 w-full h-full object-cover blur opacity-50" />
            {/* <Mode /> */}
        </header>
    );
};

export default Header;
