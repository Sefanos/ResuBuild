import React from 'react';

export default function StickyBar({LoadData , ClearData}) {

  return (
    <div className="sticky top-0 z-10 px-6 sm:max-w-md transition-all duration-300 ease-in-out">
        <div className={`flex justify-between bg-white md:mx-0 shadow rounded-3xl sm:p-10 `}>
            <div onClick={ClearData} className="">
                <svg className="h-8 w-8 text-black"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round" strokeLinejoin="round">  <polyline points="3 6 5 6 21 6" />  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /></svg>
                <p>Clear</p>
            </div>
            <div className="">
                <p className="text-xl font-bold bg-gradient-to-r from-red-500 to-purple-600 text-transparent bg-clip-text">
                Curriculum vitae
                </p>
            </div>
            <div onClick={LoadData} className="">
                <svg className="h-8 w-8 text-black"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M14 3v4a1 1 0 0 0 1 1h4" />  <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />  <line x1="12" y1="11" x2="12" y2="17" />  <polyline points="9 14 12 17 15 14" /></svg>
                <p>Load</p>           
            </div>
        </div>
    </div>
  
  )
}
