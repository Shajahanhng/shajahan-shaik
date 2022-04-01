// function PersonalProjects(pageProps: any) {
//     console.log(pageProps)
//     return (
//         <div className="divide-y-2 space-y-2">
//             <div className="space-y-3 pt-2">
//                 <h3 className="text-2xl font-bold text-gray-900">Academic Projects</h3>
//                 <div>
//                     {pageProps?.props?.academic_projects.map((item: any, index: number) => (
//                         <div key={index} className="p-3 space-y-2">
//                             <div className="flex lg:flex-row flex-col space-x-2 items-center justify-start">
//                                 <div className="text-lg font-semibold">{item.name}</div>
//                                 {item?.url ? <a href={item?.url} target={'_blank'} className="text-blue-500 underline">Base Paper</a>: null}
//                             </div>
//                             <p className="indent-8">{item.content}</p>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default PersonalProjects;

/* This example requires Tailwind CSS v2.0+ */
import { CheckIcon, ThumbUpIcon, UserIcon } from '@heroicons/react/solid'

let data = {
    personal_projects: [
        {
            id: 0,
            name: 'Word Notes',
            content: 'developed a responsive web application for word typing, editing and saving. included pdf format saver',
            icon: CheckIcon,
            tech: ['Next js', 'Tailwind CSS'],
            iconBackground: 'bg-white',
        },
        {
            id: 1,
            name: 'Word to PDF Converter',
            content: 'developed a responsive web application for converting Word Document to PDF file.',
            icon: CheckIcon,
            tech: ['Next js', 'Tailwind CSS'],
            iconBackground: 'bg-white',
        },
        {
            id: 2,
            name: 'Get The Way 3D',
            content: 'Get the way is a 3D Game for Mobile.It is to find a way to escape from a closed room. If you have to go out, you need to collect coins to open the end gate and you must escape from some dangerous walls and fires.',
            icon: CheckIcon,
            tech: ['Unity 3D', 'C#'],
            iconBackground: 'bg-white',
        }
    ],
    academic_projects: [
        {
            id: 0,
            name: 'Evaluating and Finding out the Money Laundering Accounts in Online Social Network',
            content: 'This is my M.Tech academic project. Aim of this project is to finding the fraud accounts in Social Networks. They are 1) Money Laundering Accounts, 2) Phishing Attackers, 3) Exploit Vulnerability.',
            url: 'https://www.irjet.net/archives/V7/i10/IRJET-V7I10179.pdf',
            icon: CheckIcon,
            iconBackground: 'bg-white',

        },
        {
            id: 1,
            name: 'Enabling Cloud Storage Auditing with Key Exposure Resistance',
            content: 'This is my B.Tech academic project. Aim of this project is to transform a file securely from one to another. In this, public and private keys used for file transformation.',
            url: '',
            icon: CheckIcon,
            iconBackground: 'bg-white',

        }
    ]
}

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function PersonalProjects() {
    return (
        <div>
            <div>
                <h1 className="text-2xl font-bold text-gray-900">Personal Projects</h1>
                <ul role="list" className="">
                    {data?.personal_projects.map((event: any, index: number) => (
                        <li key={index} className='pb-4'>
                            <div className="relative">
                                {index !== data?.personal_projects.length - 1 ? (
                                    <span className="absolute top-8 left-4  h-full w-0.5 bg-white" aria-hidden="true" />
                                ) : null}
                                <div className="relative flex space-x-3">
                                    <div>
                                        <span
                                            className={classNames(
                                                event.iconBackground,
                                                'h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-lime-100'
                                            )}
                                        >
                                            <event.icon className="h-5 w-5  text-black" aria-hidden="true" />
                                        </span>
                                    </div>
                                    <div className="min-w-0 pt-1.5 flex-1 flex justify-between space-x-4 bg-white border border-red-800   rounded-3xl">
                                        <div className='space-y-3 px-4 py-1'>
                                            <h1 className="text-2xl font-bold text-gray-900">{event?.name}</h1>
                                            <p className="text-xl text-gray-700 indent-12">
                                                {event?.content}
                                            </p>
                                            <div className='flex space-x-4'>
                                                {
                                                    event?.tech?.map((item,index)=>(
                                                        <div key={index} className='bg-green-500 text-white px-2 py-1 rounded-full'>{item}</div>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="flow-root space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">Academic Projects</h3>
                <ul role="list" className="">
                    {data?.academic_projects.map((event: any, index: number) => (
                        <li key={index} className='pb-4'>
                            <div className="relative">
                                {index !== data?.academic_projects.length - 1 ? (
                                    <span className="absolute top-8 left-4  h-full w-0.5 bg-white" aria-hidden="true" />
                                ) : null}
                                <div className="relative flex space-x-3">
                                    <div>
                                        <span
                                            className={classNames(
                                                event.iconBackground,
                                                'h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-lime-100'
                                            )}
                                        >
                                            <event.icon className="h-5 w-5  text-black" aria-hidden="true" />
                                        </span>
                                    </div>
                                    <div className="min-w-0 pt-1.5 flex-1 flex justify-between space-x-4 bg-white border border-red-800   rounded-3xl">
                                        <div className='space-y-3 px-4 py-1'>
                                            <h1 className="text-2xl font-bold text-gray-900">{event.name}</h1>
                                            <p className="text-xl text-gray-700 indent-12">
                                                {event.content}

                                            </p>
                                            <div>
                                                {event?.url ? <a href={event.url} className="font-medium text-gray-900 pl-2 pr-2 pt-1 pb-1 rounded-3xl bg-fuchsia-300	" target={'_blank'}>
                                                    Link: IRJET Journal
                                                </a> : null}
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
