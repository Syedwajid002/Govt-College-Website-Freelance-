import React, { useEffect, useState } from 'react';

const Mode = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const currentTheme = localStorage.getItem('theme');

        setIsDarkMode(currentTheme === 'dark');

        if (currentTheme === 'dark') {
            document.body.classList.add('dark');
            document.body.style.backgroundColor = '#2D3748'; 
        } else {
            document.body.style.backgroundColor = '#FFFFFF'; 
        }

        const handleClick = () => {
            const newDarkMode = !isDarkMode;
            setIsDarkMode(newDarkMode);
            document.body.classList.toggle('dark', newDarkMode);
            localStorage.setItem('theme', newDarkMode ? 'dark' : 'light');


            document.body.style.backgroundColor = newDarkMode ? '#2D3748' : '#FFFFFF'; // Dark zinc for dark mode, white for light mode
        };

        const themeToggle = document.getElementById('themeToggle');
        themeToggle.addEventListener('click', handleClick);

        return () => {
            themeToggle.removeEventListener('click', handleClick);
        };
    }, [isDarkMode]);

    return (
        <div className="fixed top-4 right-5 z-50">
            <button id="themeToggle" className="p-3 bg-white dark:bg-zinc-700 rounded-full focus:outline-none focus:ring-4 focus:ring-zinc-500 dark:focus:ring-zinc-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={`w-6 h-6 ${isDarkMode ? 'dark-mode' : ''}`}>
                    {isDarkMode ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v2m0 14v2m9-9h-2M5 12H3m14.485 6.364l-1.414-1.414M6.343 6.343L4.929 7.757m12.728 0l1.414-1.414M6.343 17.657l1.414-1.414"/>
                    ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12.38a9 9 0 11-11.32-8.56A7.5 7.5 0 0021 12.38z"/>
                    )}
                </svg>
            </button>
        </div>
    );
}

export default Mode;
