import React from 'react';

const BSummary = () => {
    return (
        <div className='text-center px-12'>
            <h1 className='text-3xl font-bold text-blue-400 mt-15'>Our Business Summary</h1>
            <div className='mt-5 stat'>
                <div className="stats shadow bg-gradient-to-r from-cyan-500 to-blue-500 text-white border-0">
                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        </div>
                        <div className="stat-title">PRODUCTS</div>
                        <div className="stat-value">12K+</div>
                        <div className="stat-desc"> till today</div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
                        </div>
                        <div className="stat-title">OUR COUNTRY</div>
                        <div className="stat-value">200</div>
                        <div className="stat-desc">↗︎ 20 (22%)</div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
                        </div>
                        <div className="stat-title uppercase">New Registers</div>
                        <div className="stat-value">540</div>
                        <div className="stat-desc">↘︎ 90 (04%)</div>
                    </div>
                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>

                        </div>
                        <div className="stat-title">OUR SELLER</div>
                        <div className="stat-value">5400+</div>
                        <div className="stat-desc">↗︎ 90 (12%)</div>
                    </div>

                </div>
            </div>
            </div>
    );
};

export default BSummary;