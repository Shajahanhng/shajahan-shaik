function Experience(pageProps: any) {
    console.log(pageProps.props)
    return (
        <div className="space-y-3 ">
            {/* <h3 className="text-2xl font-bold text-gray-900">Experience</h3> */}
            <div className="pl-5 space-y-4">
                <div className="grid grid-cols-2">
                    <div className="">
                        <h1 className="text-xl font-semibold">Health Net Global</h1>
                        <p className="text-md">Software Developer</p>
                    </div>
                    <div className="flex items-center justify-end">
                        <p className=" bg-white rounded-full pl-2 pr-2 pt-0.5 pb-0.5 text-green-700">June 2012 - Present</p>
                    </div>
                </div>
                <div className="space-y-6">
                    <div className="bg-white rounded-3xl pl-2 border border-red-800 space-y-2 p-4">
                        <h1 className="p-2 text-xl">
                            Smart Reports
                        </h1>
                        <p className="p-2 ">
                            Developed a robust and holistic application for patients to manage quality health care services.
                            It is an integrated single-page client application.
                            It is a customized template for easy understanding of content, graph, scale, tooltip and color. 
                            Firebase Analytics has been added to monitor user activity. This document can also be downloaded in PDF format. 
                            To improve this, filtering data has been added to effectively display content. This is a responsive document.
                        </p>
                        <div className="flex space-x-6">
                            <p className="bg-green-500 rounded-full pr-2 pl-2 text-white">Next js</p>
                            <p className="bg-green-500 rounded-full pr-2 pl-2 text-white">Tailwind CSS</p>
                            <p className="bg-green-500 rounded-full pr-2 pl-2 text-white">Nest js</p>
                            <p className="bg-green-500 rounded-full pr-2 pl-2 text-white">MongoDB</p>

                        </div>
                    </div>
                    <div className="bg-white rounded-3xl pl-2 space-y-2 border border-red-800 p-4">
                        <h1 className="p-2 text-xl">
                            Apollo-Connect
                        </h1>
                        <p className="p-2 ">Developed highly customised application with various attributes like templates, medical favorites and auto-complete search filters. Integrated immediate and scheduled appointment bookings for different specialists and developed irrefutable validations for incoming patient records and documents.</p>
                        <div className="flex space-x-6 ">
                            <p className="bg-green-500 rounded-full pr-2 pl-2 text-white">Angular 13</p>
                            <p className="bg-green-500 rounded-full pr-2 pl-2 text-white">Next js</p>
                            <p className="bg-green-500 rounded-full pr-2 pl-2 text-white">Tailwind CSS</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Experience;