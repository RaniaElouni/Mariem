import React from 'react';

// import about data
import { aboutData } from '../data';
import signature from "../assets/img/signature.png"
import ceo from "../assets/img/ceo.jpg"
const About = () => {
  // destructure about
  const { image, title, subtitle } = aboutData;
  return (
    <section
      className='my-[30px] xl:mt-[100px]'
      data-aos='fade-up'
      data-aos-offset='50'
    >
      <div className='container mx-auto'>
        <div className='bg-accent-blue/[15%] rounded-[50px] min-h-[560px]  pb-12 flex flex-col  text-center xl:flex-row xl:items-center xl:text-left  xl:gap-x-[60px] xl:pb-0'>
          {/* image */}
          <div className='flex-1' data-aos='zoom-in-left'>
            <img src={ceo} alt='ceo' style={{ borderTopLeftRadius: "50px", borderBottomLeftRadius: "50px" }} />
          </div>
          {/* text */}
          <div className='flex-1 xl:pr-12'>
            <h2 className='h2 mt-3 mb-5' data-aos='fade-up' data-aos-delay='300'>
              Message from the Chairman & CEO
            </h2>
            <p
              className='max-w-[474px] mx-auto xl:mx-0'
              data-aos='fade-up'
              data-aos-delay='400'
            >
              Dear Partners,
              <br />
              COFICAB maintains its commitment towards a sustainable growth and innovation, with the aim to leave a better world to the next generations.

              As we continue to expand our global footprint to get closer to our clients and reduce supply chain, we also keep improving the sustainability of in our operations, to reduce our carbon footprint.

              On top of being a worldwide leader in the automotive megatrends of E-Mobility, Connectivity, and Autonomous Driving, COFICAB also conquered new markets in the appliance, medical and distribution sectors. We approach new markets with the same compromise of working closely with our clients on their specific needs, and to shape a better tomorrow together.

              Since the beginning of its story, COFICAB stands as a socially responsible company, ensuring it contribution to the well-being of the communities where it is present. A story to which we intend want to keep adding new and successful chapters.

              COFICAB has always been on track to meet its engagements at both national and international levels, and that is why our focus on sustainability is now stronger than ever.


            </p>
            <div className=' flex justify-end '>

              <img src={signature} className='pt-5' alt='signature' width={140}/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
