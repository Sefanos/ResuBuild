import React, { useState } from 'react';
import ExprienceForm from './ExprienceForm';

export default function Education({exprienceData ,addExprience ,changeExprience ,delExprience }) 
  
  {
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
            <svg className="h-8 w-8 text-black"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <circle cx="12" cy="8" r="7" />  <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" /></svg>
            <span className="text-lg font-semibold">Exprience</span>
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
             <ExprienceForm 
              exprienceData={exprienceData} 
              addExprience={addExprience}
              changeExprience={changeExprience}
              delExprience={delExprience}
             />

          </div>
        </div>
      </div>
    </>
  );
}
