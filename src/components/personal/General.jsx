import React, { useState } from 'react'

export default function General({userData, setUserData}){

    return (
<>

  <div className="relative px-6 py-3 sm:max-w-md">
    <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
      <div className="max-w-md mx-auto">
        <div className="flex items-center space-x-5">
          <div className="h-10 w-10 bg-yellow-200 rounded-full flex flex-shrink-0 justify-center items-center text-yellow-500 text-2xl font-mono">P</div>
          <div className="block font-semibold text-xl self-start text-gray-700">
            <h2 className="leading-relaxed">Personal Details</h2>
          </div>
        </div>
        <div className="divide-y divide-gray-200">
          <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
            <div className="flex flex-col">
              <label className="leading-loose">Full Name</label>
              <input type="text" onChange={(e) => {setUserData(prevUserData => ({ ...prevUserData, name: e.target.value }))}} className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Full Name" />
            </div>
            <div className="flex flex-col">
              <label className="leading-loose">Email</label>
              <input type="email" onChange={(e) => {setUserData(prevUserData => ({ ...prevUserData, email: e.target.value }))}}className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Email" />
            </div>
              <div className="flex flex-col">
                <label className="leading-loose">Phone Number</label>
                <div className="relative focus-within:text-gray-600 text-gray-400">
                  <input type="tel" onChange={(e) => {setUserData(prevUserData => ({ ...prevUserData, tel: e.target.value }))}} className="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="+212 666 666 666" />
                  <div className="absolute left-3 top-2">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 1C6.48 1 2 5.48 2 11s4.48 10 10 10 10-4.48 10-10S17.52 1 12 1zm0 2a8 8 0 018 8 8 8 0 01-8 8 8 8 0 01-8-8 8 8 0 018-8zm-1 2h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1V6a1 1 0 011-1z"/>
                  </svg>
                  </div>
                </div>
              </div>
            <div className="flex flex-col">
              <label className="leading-loose">Address</label>
              <input type="text" onChange={(e) => {setUserData(prevUserData => ({ ...prevUserData, address: e.target.value }))}} className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Optional" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</>
    )
  }

