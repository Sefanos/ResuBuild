import React, { useState } from 'react';
import EducationForm from './EducationForm';


export default function Education({ educationData, setEducationData ,addEducation ,changeEducation,delEducation }) {
  const [isCollapsed, setIsCollapsed] = useState(true);
 
  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };



  return (
    <>
      <div className="relative px-6 py-3 sm:max-w-md">
        <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
          <button
            className="flex items-center justify-between w-full focus:outline-none"
            onClick={toggleCollapse}
          >
            <svg className="h-8 w-8 text-Black"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <rect x="3" y="7" width="18" height="13" rx="2" />  <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" />  <line x1="12" y1="12" x2="12" y2="12.01" />  <path d="M3 13a20 20 0 0 0 18 0" /></svg><span className="text-lg font-semibold">Education</span>
            <svg
              className={`w-5 h-5 transform transition-transform duration-200 ${
                isCollapsed ? '' : 'rotate-180'
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
          <div
            className={`overflow-hidden transition-max-height duration-300 ${
              isCollapsed ? 'h-0' : 'h-auto'
            }`}
          >
             <EducationForm 
             educationData={educationData} 
             setEducationData={setEducationData} 
             addEducation={addEducation} 
             changeEducation={changeEducation} 
             delEducation={delEducation}
             />

          </div>
        </div>
      </div>
    </>
  );
}
