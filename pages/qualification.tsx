
let data = {
    qualification: [
        {
            id: 1,
            name: 'Master of Technology in Computer Science & Engineering from 2017 to 2020  (72%)',
            content: 'I got master of Technology certificate from Teegala Krishna Reddy Engineering College, Approved by AICTE, New Delhi and Permanent Affiliation to Jawaharlal Nehru Technological University, Hyderabad, Accredited by NBA & NAAC "A" Grade. Located in the area Medbowli, Meerpet, Saroornagar, Hyderabad.'
        },
        {
            id: 1,
            name: 'Bachelor of Technology in Computer Science & Engineering from 2013 to 2017 (67%)',
            content: 'I got Bachelor of Technology certificate from Madhira Institute of Technology and Science, Affiliation to Jawaharlal Nehru Technological University, Hyderabad. Located in Kodad, Suryapet District, Telangana.'
        },
        {
            id: 1,
            name: 'HSC(Higher Secondary School Certificate)/ Intermediate from 2011 to 2013  (57%)',
            content: 'My Intermediate completed in Priyadarshini Junior College. Located in Huzur Nagar, Surypet District, Telangana.'
        },
        {
            id: 1,
            name: 'SSC(Secondary School Certificate) from 2010 to 2011  (62%)',
            content: 'I did Schooling n Zilla Parishat High School. Located in Amaravaram Village, Surypet District, Telangana.'
        }],
    skills: [
        {
            point: 'Good knowledge on Fornt-end and Back-end development of Web Applications.',
        },
        {
            point: 'Programming Languages Known, HTML, CSS, JavaScript, React, Next js, Angular, Tailwind CSS, Nest js, Express js and MongoDB.',
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

function Qualification() {
    // console.log("data", pageProps.props)
    return (
        <div className="divide-y-2 divide-white space-y-2">
            <div className="space-y-3">
                <h3 className="text-2xl font-bold text-gray-900">Skills</h3>
                <ul className="space-y-2">
                    {data?.skills.map((item: any, index: number) => (
                        <div key={index} className="bg-red-400 rounded-tr-3xl rounded-br-3xl">
                            <li className="p-2 ml-2 bg-white border  rounded-tr-3xl rounded-br-3xl">
                                {item.point}
                            </li>
                        </div>
                    ))}
                </ul>
            </div>
            <div className="space-y-3 pt-6">
                <h3 className="text-2xl font-bold text-gray-900">Qualification</h3>
                <div className="space-y-3">
                    {data?.qualification.map((item: any, index: number) => (
                        <div key={index} className="p-4 space-y-3 bg-white border border-red-800 rounded-3xl">
                            <div className="text-xl font-semibold">{item.name}</div>
                            <p className="indent-8">{item.content}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Qualification;