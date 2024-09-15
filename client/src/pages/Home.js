import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import video from "../assets/video/video2.mp4";
import Footer from '../components/Footer';
import { Player } from 'video-react';
import AboutLady from '../components/About Lady';
import signature from "../assets/img/signature.png"
import ceo from "../assets/img/ceo.jpg"
import PropTypes from "prop-types";
export default function Home() {

  return (
    <div className='' >
      <header className="relative flex items-center justify-center resp" style={{ height: '70vh', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', width: '100%', height: '100%', zIndex: -1 }}>
          <Player autoPlay muted style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
            <source src={video} />
          </Player>
        </div>
        <div className='elementor-background-video-container'>

          <div className='elementor-background-overlay  flex flex-col items-center justify-center' style={{ overflow: "hidden" }}>
            <img className="px-6" src='https://beta.coficab.com/wp-content/uploads/2021/09/Ativo-6-650x109.png' />
            <h1 className='text-white mt-5 text-center' style={{ fontSize: "18px" }}>Global leader in the design, manufacturing, and sales of automotive cables and wires.</h1>
          </div>
        </div>
      </header>
      {/* <About />
      <AboutLady /> */}
      <Features />

      <div className='my-[110px] text-center '>

        <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-dark">Words from Our <mark class="px-2 text-white bg-blue rounded dark:bg-blue-500">Leadership</mark></h1>
        <p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">WE CARE ABOUT THE FUTURE & align our products with the current path of reducing CO2 footprint</p>
      </div>
      <div className='xl:flex  gap-10 justify-center w-full mb-9'>

        <div class=" mt-9 bg-gray-200 flex items-center justify-center px-5 py-5  data-aos='fade-up'
      data-aos-offset='50'">
          <div class=" mx-auto rounded-lg bg-white shadow-lg px-5 pt-5 pb-10 text-gray-800 w-full" >
            <div class="w-full pt-1 pb-5 ">
              <div class="overflow-hidden rounded w-36 h-36 -mt-16 mx-auto shadow-lg">
                <img class="" src={ceo} alt="Extra large avatar" />
              </div>
            </div>
            <div class=" mb-10 ">
              <div class="text-3xl text-indigo-500 text-left leading-tight h-3">“</div>
              <p class="text-sm text-gray-600 text-center px-5"> COFICAB maintains its commitment towards a sustainable growth and innovation, with the aim to leave a better world to the next generations.

                As we continue to expand our global footprint to get closer to our clients and reduce supply chain, we also keep improving the sustainability of in our operations, to reduce our carbon footprint.


              </p>
              <div class="text-3xl text-indigo-500 text-right leading-tight h-3 -mt-3">”</div>
            </div>
            <div class="w-full">
              <p class="text-md text-indigo-500 font-bold text-center">MESSAGE FROM THE CHAIRMAN & CEO</p>
              <p class="text-xs text-gray-500 text-center"> <div className=' flex justify-end '>

                <img src={signature} className='pt-5' alt='signature' width={140} />
              </div></p>
            </div>
          </div>
        </div>
        <div class="mt-9 bg-gray-200 flex items-center justify-center px-5 py-5">
          <div class="w-full mx-auto rounded-lg bg-white shadow-lg px-5 pt-5 pb-10 text-gray-800">
            <div class="w-full pt-1 pb-5">
              <div class="overflow-hidden rounded w-36 h-36 -mt-16 mx-auto shadow-lg">
                <img class="" src="https://beta.coficab.com/wp-content/uploads/2021/09/Mme-Elghoul.jpg" alt="Extra large avatar" />
              </div>
            </div>
            <div class="w-full mb-10 ">
              <div class="text-3xl text-indigo-500 text-left leading-tight h-3">“</div>
              <p class="text-sm text-gray-600 text-center px-5">We would like to pay an homage to a great lady. The business world is in mourning today. An admirable leader is gone. But first, Aouatef Elloumi El Ghoul was a wife to Mr. Hazem El Ghoul and a mother to her sons Aziz and Youssef, whom we hope will find patience and courage in this time of deep pain. She also was a loving daughter, a reliable sister, and a loyal friend.


              </p>
              <div class="text-3xl text-indigo-500 text-right leading-tight h-3 -mt-3">”</div>
            </div>
            <div class="w-full">
              <p class="text-md text-indigo-500 font-bold text-center">THE IRON LADY
                WITH THE GOLDEN HEART</p>
              <div className=' flex justify-end '>

                <img src={signature} className="pt-5 invisible w-36 h-auto" alt="signature hidden" />

              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='my-[110px] text-center '>

        <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-dark">Inside <mark class="px-2 text-white bg-blue rounded dark:bg-blue-500">COFICAB</mark> </h1>
        <p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">- Cable production process-</p>
      </div>
      <iframe
        style={{ background: "red" }}
        height="480"
        className='w-full'

        src={`https://www.youtube.com/embed/qIfsFHTtVC0`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />

      <Testimonials />
    </div>
  );
}
