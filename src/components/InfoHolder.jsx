import React, { useState } from 'react';
import General from './personal/General';
import Education from './education/Education';
import ProExp from './experience/ProExp';
import StickyBar from './StickyBar';
import uniqid from 'uniqid'
import Cv from './Cv';

export default function InfoHolder() {

    const LoadData = ()=>{
        
        const priveiwData = {
            userData :{
                name: 'Amine Zeta',
                email: 'Zamunix1@gmail.com',
                tel: '+212 6 66 666 666',
                address: 'Morocco,Marrakech',
            },
            educationData :[
                {
                    id: uniqid() ,
                    schoolTitle: 'Upm',
                    degree: 'Licence en Informatique appliquée à la Gestion',
                    startDate: '11-11-2020',
                    endDate: '11-11-2023',
                    location: 'Morocco, Marrakech',
                },
                {
                    id: uniqid() ,
                    schoolTitle: 'Suptech',
                    degree: 'Licence en Informatique appliquée à la Gestion',
                    startDate: '11-11-2020',
                    endDate: '11-11-2023',
                    location: 'Morocco, Essouira',
                },     
            ],
            exprienceData:[
                {
                    id: uniqid() ,
                    companyName: 'BcSkills',
                    positionTitle: 'Junior Web Developper',
                    startDate: '22-5-2020',
                    endDate: '12-6-2021',
                    location: 'Morocco,Safi',
                    description: 'Supported senior researchers on accessibility standards for the open web. Created and usability tested wireframes and prototypes. Produced interactive documentation for quick onboarding of new researchers.',
                },
                {
                    id: uniqid() ,
                    companyName: 'BcSkills',
                    positionTitle: 'Junior Web Developper',
                    startDate: '22-5-2020',
                    endDate: '12-6-2021',
                    location: 'Morocco,Safi',
                    description: 'Supported senior researchers on accessibility standards for the open web. Created and usability tested wireframes and prototypes. Produced interactive documentation for quick onboarding of new researchers.',
                },
                {
                    id: uniqid() ,
                    companyName: 'BcSkills',
                    positionTitle: 'Junior Web Developper',
                    startDate: '22-5-2020',
                    endDate: '12-6-2021',
                    location: 'Morocco,Safi',
                    description: 'Supported senior researchers on accessibility standards for the open web. Created and usability tested wireframes and prototypes. Produced interactive documentation for quick onboarding of new researchers.',
                },
            ]
        }
        setUserData(priveiwData.userData);
        setEducationData(priveiwData.educationData);
        setExprienceData(priveiwData.exprienceData);
    }

    const ClearData = ()=>{
        setUserData({});
        setEducationData([]);
        setExprienceData([]);
    }

    {/*  Info states */}
    const [userData, setUserData] = useState({});
      

    {/*  Education states */}

    const [educationData, setEducationData] = useState([]);

      const addEducation = () => {
        setEducationData([...educationData, {
            id: uniqid() ,
            schoolTitle: '',
            degree: '',
            startDate: '',
            endDate: '',
            location: '',
          }])
      };
      
      const changeEducation = (e, id) => {
        const { name, value } = e.target;
        setEducationData((prevEducationData) =>
          prevEducationData.map((education) =>
            education.id === id ? { ...education, [name]: value } : education
          )
        );
      };

     const delEducation = (id)=>{
        const updatedEducationData = educationData.filter(education => education.id !== id)
        setEducationData(updatedEducationData);
     }

    {/*  Exprience states */}

    const [exprienceData, setExprienceData] = useState([]);

    const addExprience = () => {
        setExprienceData([...exprienceData, {
            id: uniqid() ,
            companyName: '',
            positionTitle: '',
            startDate: '',
            endDate: '',
            location: '',
            description: '',
          }])
      };

      const changeExprience = (e, id) => {
        const { name, value } = e.target;
        setEducationData((prevExprienceData) =>
          prevExprienceData.map((exprience) =>
          exprience.id === id ? { ...exprience, [name]: value } : exprience
          )
        );
      };

     const delExprience = (id)=>{
        const updatedExprienceData = exprienceData.filter(exprience => exprience.id !== id)
        setExprienceData(updatedExprienceData);
     }
    

  return (
    <div className="bg-gray-100 flex p-4 max-sm:flex-wrap">
      <div className="relative w-5/6 pr-4">

        <StickyBar LoadData={LoadData} ClearData={ClearData} />

        <General userData={userData} setUserData={setUserData} />

        <Education 
        educationData={educationData} 
        setEducationData={setEducationData} 
        addEducation={addEducation} 
        changeEducation={changeEducation}  
        delEducation={delEducation}
        />

        <ProExp 
        exprienceData={exprienceData} 
        setExprienceData={setExprienceData} 
        addExprience={addExprience}
        changeExprience={changeExprience}
        delExprience={delExprience}
        />
      </div>
      <div className="w-full">
        <Cv userData={userData} educationData={educationData} exprienceData={exprienceData}  />
      </div>
    </div>
  );
}