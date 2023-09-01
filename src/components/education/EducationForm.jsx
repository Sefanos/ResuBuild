import React from 'react'

export default function EducationForm({ educationData, changeEducation ,addEducation,delEducation }) {
  return educationData.length ? 
  (
    <div className='w-full h-max'>
                {educationData.map((education ,index) => (
                  <div className='mt-10' key={education.id}>

                    <div className="block font-semibold text-xl text-center text-gray-700">
                      <h2 className="leading-relaxed">Education Details {index + 1}</h2>
                    </div>

                    <div className="flex flex-col">
                      <label className="leading-loose">School Title</label>
                      <input
                      type="text"
                      placeholder="School Title"
                      className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                      value={education.schoolTitle}
                      onChange={(e) => changeEducation(e, education.id)}
                      name="schoolTitle"
                    />  
                    </div>

                    <div className="flex flex-col">
                      <label className="leading-loose">Degree</label>
                      <input
                      type="text"
                      placeholder="Degree"
                      className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                      value={education.degree}
                      onChange={(e) => changeEducation(e, education.id)}
                      name="degree"
                    />
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="flex flex-col">
                        <label className="leading-loose">Start</label>
                        <div className="relative focus-within:text-gray-600 text-gray-400">
                          <input
                          type="date"
                          placeholder="Start Date"
                          value={education.startDate}
                          className="px-3 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                          onChange={(e) => changeEducation(e, education.id)}
                          name="startDate"
                        />
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <label className="leading-loose">End</label>
                        <div className="relative focus-within:text-gray-600 text-gray-400">
                          <input
                          type="date"
                          placeholder="End Date"
                          value={education.endDate}
                          className="px-3 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                          onChange={(e) => changeEducation(e, education.id)}
                          name="endDate"
                        />
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col">
                    <label className="leading-loose">Place</label>
                    <input
                    type="text"
                    placeholder="Location"
                    value={education.location}
                    className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                    onChange={(e) => changeEducation(e, education.id)}
                    name="location"
                  />
                  </div>
                  <div className="flex justify-center">
                    <button onClick={() => delEducation(education.id)} className="mt-4 rounded-full focus:outline-none">
                        <svg className="h-8 w-8 text-black transition ease-in-out delay-50 hover:-translate-y-1"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                    </button>
                </div>
                </div>
                ))}
                  <div className="flex justify-center">
                    <button onClick={addEducation} className="bg-blue-500 text-white rounded-full mt-4 hover:bg-sky-700 focus:outline-none">
                      <svg className="h-8 w-8 text-white transition ease-in-out delay-50 hover:-translate-y-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="16" /><line x1="8" y1="12" x2="16" y2="12" />
                      </svg>
                    </button>
                  </div>
                
              </div>
  )
  :
  (

      <div className="flex justify-center">
        <button onClick={addEducation} className="bg-blue-500 text-white rounded-full mt-4 hover:bg-sky-700 focus:outline-none">
              
          <svg className="h-8 w-8 text-white transition ease-in-out delay-50 hover:-translate-y-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="16" /><line x1="8" y1="12" x2="16" y2="12" />
          </svg>

        </button>
      </div>

  )
}
