// import Image from "next/image";

// function ProfileHeader() {
//     return (
//         <div className="grid grid-cols-3 p-2">
//             <div className="w-full flex items-center justify-center">
//                 <img src="profile_img.png" alt="Profile Imge" className="border-2 h-44 rounded-lg" />
//                 {/* <Image src={"/profile_img.png"} width={200} height={240} /> */}
//             </div>
//             <div className="w-full flex flex-col items-center justify-center font-serif">
//                 <h2 className="text-6xl ">Shaik Shajahan</h2>
//                 <div className="flex divide-x-2">
//                     <p className="p-2">shajahan.j2se@gmail.com</p>
//                     <p className="p-2">+91 9000425100</p>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default ProfileHeader;
/* This example requires Tailwind CSS v2.0+ */
import { NewspaperIcon, PhoneIcon, CheckIcon, BriefcaseIcon, AcademicCapIcon, PencilAltIcon } from '@heroicons/react/outline'
import { useState } from 'react'
import Experience from './experience';
import PersonalProjects from './personal-project';
import ProfileFooter from './profile-footer';
import Qualification from './qualification';

const data = [
    {
        id: 0,
        name: 'Experience',
        duration:'June 2021-Present',
        description:
            'Having 9+ months experience as Software Developer.',
        icon: BriefcaseIcon,
    },
    {
        id: 1,
        name: 'Projects',
        description:
            'Developed few Personal Projects using HTML,CSS,JavaScript, Next js, Tailwind css and Academic Projects using HTML, CSS, Java, JavaScript.',
        icon: PencilAltIcon,
        data:
        {
            personal_projects: [
                {
                    id: 0,
                    name: '',
                    content: ''
                }
            ],
            academic_projects: [
                {
                    id: 0,
                    name: 'Evaluating and Finding out the Money Laundering Accounts in Online Social Network',
                    content: 'This is my M.Tech academic project. Aim of this project is to finding the fraud accounts in Social Networks. They are 1) Money Laundering Accounts, 2) Phishing Attackers, 3) Exploit Vulnerability.',
                    url: 'https://www.irjet.net/archives/V7/i10/IRJET-V7I10179.pdf',
                    icon: CheckIcon,
                    iconBackground: 'bg-gray-400',

                },
                {
                    id: 1,
                    name: 'Enabling Cloud Storage Auditing with Key Exposure Resistance',
                    content: 'This is my B.Tech academic project. Aim of this project is to transform a file securely from one to another. In this, public and private keys used for file transformation.',
                    url: '',
                    icon: CheckIcon,
                    iconBackground: 'bg-gray-400',

                }
            ]
        },
    },
    {
        id: 2,
        name: 'Education',
        duration:'September 2017 -  August 2020',
        description:
            'TKR Engineering College for Higher Education. Master of Technology - Computer Science and Engineering (7.5/10)',
        icon: AcademicCapIcon,
        data: {
            qualification: [
                {
                    id: 1,
                    name: 'Master of Technology in Computer Science & Engineering from 2017 to 2020',
                    content: 'I got master of Technology certificate from Teegala Krishna Reddy Engineering College, Approved by AICTE, New Delhi and Permanent Affiliation to Jawaharlal Nehru Technological University, Hyderabad, Accredited by NBA & NAAC "A" Grade. Located in the area Medbowli, Meerpet, Saroornagar, Hyderabad.'
                },
                {
                    id: 1,
                    name: 'Bachelor of Technology in Computer Science & Engineering from 2013 to 2017',
                    content: 'I got Bachelor of Technology certificate from Madhira Institute of Technology and Science, Affiliation to Jawaharlal Nehru Technological University, Hyderabad. Located in Kodad, Suryapet District, Telangana.'
                },
                {
                    id: 1,
                    name: 'HSC(Higher Secondary School Certificate)/ Intermediate from 2011 to 2013',
                    content: 'My Intermediate completed in Priyadarshini Junior College. Located in Huzur Nagar, Surypet District, Telangana.'
                },
                {
                    id: 1,
                    name: 'SSC(Secondary School Certificate) from 2010 to 2011',
                    content: 'I did Schooling n Zilla Parishat High School. Located in Amaravaram Village, Surypet District, Telangana.'
                }],
            skills: [
                {
                    point: 'Good knowledge on Fornt-end and Back-end development of Web Applications.',
                },
                {
                    point: 'Programming Languages Known, HTML, CSS, JavaScript and Frameworks : React, Next js, Angular, Tailwind CSS, Nest js, Express js, MongoDB.',
                },
                {
                    point: 'Good awareness on SQL.',

                },
                {
                    point: 'Knowledge on Visual Studio Code, Unity 3D Game Engine, MS-OFFICE, WPS.',

                },
                {
                    point: 'Easily recognize structure of programming.',

                },
                {
                    point: 'Quick learner and self motivating.',

                },
                {
                    point: 'Passion of developing new things and my work.',

                },
                {
                    point: 'Always learn new things. ',

                }
            ]


        }

    },
]

export default function ProfileHeader() {
    const [showhide, setShowHide] = useState<boolean>(true)
    let [profileData, setProfileData] = useState<any>(data);
    const [singlData, setSingleData] = useState<any>(null)
    // console.log(profileData[0])
    const show = (id: number) => {
        // setIndex(id)
        // console.log(id)
        // supportLinks = supportLinks[id]
        // setProfileData(profileData[id])
        setSingleData(profileData[id])
        setShowHide(false)
        console.log(profileData[id])

    }
    const hide = (id: any) => {
        setSingleData(null);
        setShowHide(true)

    }
    return (
        <div className="font-serif relative">
            {/* Header */}
            <div className="relative ">
                <div className="absolute opacity-90 inset-0">
                    <img
                        className="w-full h-full object-cover -scale-x-100"
                        src="profile.jpeg"
                        alt="Profile Background"
                    />
                    <div className="absolute inset-0 bg-gray-800 mix-blend-multiply" aria-hidden="true" />
                </div>

                <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-2 lg:px-4">
                    <div className="flex items-center space-x-1 p-2">
                        <img src="profile_img.png" alt="Profile Imge" className=" h-44  rounded-full border-2" />
                        <div className='space-y-2'>
                            <h1 className="text-4xl tracking-tight text-white text-center md:text-5xl lg:text-5xl">Shajahan Shaik</h1>
                            <h1 className="text-md tracking-tight text-white md:text-xl lg:text-xl text-center">(Software Developer)</h1>
                            <div className="lg:flex lg:flex-row flex-col lg:divide-x-2 divide-x-0 text-white">
                                <p className="p-2 flex space-x-1"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg><span>shajahan.fsdev@gmail.com</span></p>
                                <p className="p-2 flex space-x-1"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg> <span>+91 9000-425-100</span></p>
                            </div>
                            <ProfileFooter/>
                        </div>

                    </div>

                </div>
            </div>

            {/* Overlapping cards */}
            <section
                className="lg:-mt-10 -mt-0 lg:pt-0 pt-8 max-w-7xl mx-auto relative px-0 sm:px-1 lg:px-1"
                aria-labelledby="contact-heading"
            >
                <h2 className="sr-only" id="contact-heading">
                    Contact us
                </h2>
                {singlData == null ? <div className="grid grid-cols-1 gap-y-10 pl-6 pr-6 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8 ">
                    {profileData.map((link) => (
                        <div key={link.name} className="flex flex-col bg-gradient-to-r from-cyan-700  to-cyan-400  text-white rounded-2xl shadow-xl">
                            <div className="flex-1 relative pt-10 px-6 pb-4 md:px-8">
                                <div className='flex items-center space-x-2'>
                                    <div className="p-2 inline-block bg-white rounded-xl shadow-lg">
                                        <link.icon className="h-6 w-6 text-black" aria-hidden="true" />
                                    </div>
                                    <div>
                                    <h3 className="text-xl font-medium ">{link.name}</h3>
                                    {link?.duration ? <p className='italic'>{link?.duration}</p>: null}
                                    </div>
                                </div>

                                <p className="mt-4 text-base ">{link.description}</p>
                            </div>
                            <div className="p-3 bg-gray-200 rounded-bl-2xl rounded-br-2xl md:px-8">
                                {showhide ? <a onClick={() => show(link?.id)} className="text-base cursor-pointer font-medium text-indigo-700 hover:text-indigo-600">
                                    See More<span aria-hidden="true"> &rarr;</span>
                                </a> :
                                    <a onClick={() => hide(link?.id)} className="text-base font-medium cursor-pointer text-indigo-700 hover:text-indigo-600">
                                        <span aria-hidden="true"> &larr;</span>Back
                                    </a>}
                            </div>
                        </div>
                    ))}
                </div>
                    :
                    <div className="grid grid-cols-1 gap-y-20 lg:gap-y-0 lg:gap-x-8">

                        <div key={singlData.name} className="flex flex-col bg-lime-400 text-lg rounded-2xl shadow-xl">
                            <div className="flex-1 relative ">
                                
                                <div className="ml-2 bg-gradient-to-r from-lime-100 via-amber-100 to-pink-100 rounded-t-2xl p-6 ">
                                    {singlData.id == 0 ? <Experience props={singlData.data} /> : null}
                                    {singlData.id == 1 ? <PersonalProjects /> : null}
                                    {singlData.id == 2 ? <Qualification /> : null}
                                </div>
                            </div>
                            <div className="ml-2 p-2 bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8">
                                {showhide ? <a onClick={() => show(singlData?.id)} className="text-base cursor-pointer font-medium text-indigo-700 hover:text-indigo-600">
                                    See More<span aria-hidden="true"> &rarr;</span>
                                </a> :
                                    <a onClick={() => hide(singlData?.id)} className="text-base font-medium cursor-pointer text-indigo-700 hover:text-indigo-600">
                                        <span aria-hidden="true"> &larr;</span>Back
                                    </a>}
                            </div>
                        </div>

                    </div>
                }
            </section>
        </div>
    )
}
