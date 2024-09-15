import React from 'react';

// import about data
import { aboutData } from '../data';
import signature from "../assets/img/signature.png"
import ceo from "../assets/img/ceo.jpg"
const AboutLady = () => {
  // destructure about
  const { image, title, subtitle } = aboutData;
  return (
    <section
      className='my-[30px] xl:mt-[100px]'
      data-aos='fade-up'
      data-aos-offset='50'
    >
      <div className='container mx-auto'>
        <div className='bg-accent-blue/[15%] rounded-[50px]   pb-12 flex flex-col  text-center xl:flex-row xl:items-center xl:text-left  xl:gap-x-[60px] xl:pb-0'>
          {/* image */}
         
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
              We would like to pay an homage to a great lady. The business world is in mourning today. An admirable leader is gone. But first, Aouatef Elloumi El Ghoul was a wife to Mr. Hazem El Ghoul and a mother to her sons Aziz and Youssef, whom we hope will find patience and courage in this time of deep pain. She also was a loving daughter, a reliable sister, and a loyal friend.

              Aouatef Elloumi El Ghoul, the Executive Vice President of Coficab Group and CEO of Coficab Tunisie passed away on November 19th, 2017. Her sudden passing was a shock to the very foundation of the people who knew her and loved her.

            

            </p>
            <div className=' flex justify-end '>

              <img src={signature} className='pt-5' alt='signature' width={140} />
            </div>
          </div>
          <div className='flex-1 justify-end' data-aos='zoom-in-left' style={{height:"100%"}}>
            <img  src="https://beta.coficab.com/wp-content/uploads/2021/09/Mme-Elghoul.jpg" alt='ceo' style={{objectFit: "cover" , borderTopRightRadius: "50px", borderBottomRightRadius: "50px" }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutLady;
