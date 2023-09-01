import React from 'react';

export default function Cv({userData , educationData ,exprienceData}) {
  return (

    // user information display

    <div className="w-full h-full my-4 bg-white shadow-lg">
      <header className={` rounded-lg w-full ${userData.name || userData.email || userData.tel || userData.address ? 'h-max' : 'h-36'} bg-blue-950`}>
        {userData.name && <h1 className="font-serif font-bold text-3xl text-center text-slate-50 py-5 ">{userData.name}</h1>}
          <div className='flex pb-4 justify-center'>
              {userData.email && <h1 className="font-serif px-8 py-2 text-slate-50">
                <svg className="h-6 w-6 float-left text-white"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <rect x="3" y="5" width="18" height="14" rx="2" />  <polyline points="3 7 12 13 21 7" /></svg>
                {userData.email}</h1>}
              {userData.tel && <h1 className="font-serif lining-nums px-8 py-2 text-slate-50">
                <svg className="h-6 w-6 float-left text-white"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" /></svg>
                {userData.tel}</h1>}
              {userData.address && <h1 className="font-serif py-2 px-8 text-slate-50">
                <svg className="h-5 w-6 float-left text-white"  fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                {userData.address}</h1>}
          </div>
      </header>

      {/* education data display */}

      <div className=' w-full h-max flex justify-center'>
          <div className={` mt-3 w-4/5 ${educationData ? 'h-max w-9/12' : 'h-0'} bg-blue-100`}>
          {educationData.length != 0 && <h1 className='text-blue-900 font-bold text-lg text-center'>Education</h1> }
          </div>
      </div>

      {educationData.map((education)=>(
          
          <div key={education.id}>

            <div className='w-4/5 flex mt-4 m-auto'>
              <div className=' w-48 flex flex-wrap'>
                <p className='proportional-nums font-light'>
                {education.startDate} / {education.endDate}
                <br></br>
                <span className='font-normal'>{education.location}</span>
                </p>
              </div>
              <div className='w-96'>
                <div><h1 className='font-sans font-bold '>{education.schoolTitle}</h1></div>
                <div><p className='text-start'>{education.degree}</p></div>
              </div>
            </div>

          </div>

      ))}

      {/* exprience data display */}

      <div className=' w-full h-max flex justify-center'>
          <div className={` mt-3 w-4/5 ${exprienceData ? 'h-max w-9/12' : 'h-0'} bg-blue-100`}>
          {exprienceData.length != 0 && <h1 className='text-blue-900 font-bold text-lg text-center'>Exprience</h1> }
          </div>
      </div>

      {exprienceData.map((exprience)=>(
          
          <div key={exprience.id}>

            <div className='w-4/5 flex mt-4 m-auto'>
              <div className=' w-48 flex flex-wrap'>
                <p className='proportional-nums font-light'>
                {exprience.startDate} / {exprience.endDate}
                <br></br>
                <span className='font-normal'>{exprience.location}</span>
                {/* <p className='font-normal'>{exprience.location}</p> */}
                </p>         
              </div>
              <div className='w-10/12 mb-8'>
                <div><h1 className='font-sans font-bold '>{exprience.companyName}</h1></div>
                <div><h2 className='font-mono font-medium' >{exprience.positionTitle}</h2></div>
                <div><p className='text-start'>{exprience.description}</p></div>
              </div>
            </div>

          </div>

      ))}
    </div>
  );
}

