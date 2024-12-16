import React from 'react';

const Widget = () => {
    return (
        <div className="absolute top-full right-0 mt-4 mr-4 bg-gradient-to-r from-zinc-700 to-zinc-900 text-white p-4 rounded-lg flex items-center">
            <span className="text-lg font-semibold tracking-wider mr-2">SITE VISITS:</span>
            <div className="bg-black p-2 rounded-lg">
                <a href="https://www.cutercounter.com/" target="_blank">
                    <img src="https://www.cutercounter.com/hits.php?id=hrxpnfpq&nd=7&style=72" border="0" alt="visitor counter" />
                </a>
            </div>
        </div>
    );
};

export default Widget;
