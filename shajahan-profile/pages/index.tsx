import Head from 'next/head'
import Image from 'next/image'
import ProfileFooter from './profile-footer'
import ProfileHeader from './profile-header'
import Particles from "react-tsparticles";

export default function Home() {
  const particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <div>
      <Head>
        <link rel="shortcut icon" href="tab_img.png" className='bg-white' type="image/x-icon" />
        <title>Shajahan Shaik</title>
      </Head>

      <div className='bg-gradient-to-r from-indigo-100 via-purple-300  to-pink-100 xl:h-screen h-full'>
        <div className='z-40'>
          <Particles
            id="tsparticles"
            // init={particlesInit}
            // loaded={particlesLoaded}
            options={{
              background: {
                // color: {
                //   value: "#0d4",
                // },
                // image: url('./profile.jpeg')
              },
              // fpsLimit: 1200,
              interactivity: {
                events: {
                  onClick: {
                    enable: true,
                    mode: "push",
                  },
                  onHover: {
                    enable: true,
                    mode: "repulse",
                  },
                  resize: true,
                },
                modes: {
                  bubble: {
                    distance: 100,
                    duration: 2,
                    opacity: 0.8,
                    size: 40,
                  },
                  push: {
                    quantity: 4,
                  },
                  repulse: {
                    distance: 200,
                    duration: 0.4,
                  },
                },
              },
              particles: {
                color: {
                  value: "#f15",
                },
                links: {
                  color: "#000",
                  // distance: 150,
                  enable: true,
                  opacity: 0.5,
                  width: 1,
                },
                collisions: {
                  enable: true,
                },
                move: {
                  direction: "none",
                  enable: true,
                  outMode: "bounce",
                  random: false,
                  speed: 4,
                  straight: false,
                },
                number: {
                  density: {
                    enable: true,
                    area: 800,
                  },
                  value: 30,
                },
                opacity: {
                  value: 0.5,
                },
                shape: {
                  type: "",
                },
                size: {
                  random: true,
                  value: 5,
                },
              },
              detectRetina: true,
            }}
          />
        </div>
        <div className='z-30'>
          <ProfileHeader />
        </div>
        {/* <ProfileFooter/> */}
        
          <div className='p-10 flex items-center justify-center z-10'>
          <a href="Shajahan-Resume-Updated.pdf" download>
            <button
              type="button"
              className="inline-flex items-center px-4 py-3 border border-transparent text-sm font-base rounded-md shadow-sm text-white bg-indigo-400 hover:bg-indigo-500 focus:outline-none ">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download Resume
            </button>
            </a>
          </div>

      </div>
    </div>
  )
}
