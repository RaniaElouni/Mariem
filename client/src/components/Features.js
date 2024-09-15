import React from 'react';

// import features data
import { featuresData } from '../data';

// import icons
import { BsArrowRight } from 'react-icons/bs';

const Features = () => {
  // destructure features data
  const { title, subtitle, list } = featuresData;
  return (
    <section className='my-[30px] xl:my-[70px]' >


      <div className='container mx-auto'>
        {/* text */}
        <div className='my-[30px] xl:my-[70px] text-center'>

          <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-dark">Our <mark class="px-2 text-white bg-blue rounded dark:bg-blue-500">Product</mark></h1>
          <p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">We can customize our cables on demand .</p>
        </div>

        {/* feature list */}
        <div className='grid grid-cols-1 gap-[50px] xl:grid-cols-2'>
          {list.map((feature, index) => {
            // destructure feature
            const { image, bgImage, title, description, linkText, delay } =
              feature;
            // feature item
            return (
              <div
                key={index}
                className='w-full max-w-[530px] h-[358px] relative flex flex-col items-center justify-center xl:flex-row xl:justify-start mx-auto'
                data-aos='zoom-in'
                data-aos-offset='100'
                data-aos-delay={delay}
              >
                {/* bg image */}
                <div className='hidden sm:flex absolute top-0 right-0 -z-10'>
                  <img src={bgImage} />
                </div>

                {/* icon image */}
                <div
                  className='max-w-[120px] xl:mr-7 xl:max-w-[232px]'
                  data-aos='zoom-in-right'
                  data-aos-delay={delay}
                >
                  <img className='rounded-lg' src={image} />
                </div>
                {/* text */}
                <div className='max-w-[220px]'>
                  <h3 className='h3 mb-4'>{title}</h3>
                  <p className='font-light italic mb-4'>{description}</p>
                  {/* link & arrow */}

                </div>
              </div>
            );
          })}

        </div>
        {/* <div className='flex justify-end mt-9 mr-5 gap-x-2 group'>
          <a className='text-primary font-bold' href='#'>
            All Product
          </a>
          <BsArrowRight className='text-xl text-accent-primary group-hover:ml-[5px] transition-all' />
        </div> */}
      </div>
    </section>
  );
};

export default Features;
