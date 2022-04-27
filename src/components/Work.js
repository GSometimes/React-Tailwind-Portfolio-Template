import React from 'react';
import { ProjectData } from '../data/ProjectData';

const Work = () => {
  return (
    <div
      name='work'
      className='container mx-auto px-8 md:px-10 lg:px-20 my-24 max-w-[1160px] font-mono text-slate-200'
    >
      <div className='flex w-full'>
        <h1
          className='text-5xl md:text-6xl lg:text-7xl font-bold underline underline-offset-4 decoration-slate-200'
          data-aos='fade-up'
          data-aos-duration='500'
          data-aos-delay='150'
          data-aos-once='true'
        >
          My Work
        </h1>
      </div>
      {/* <div className='flex items-center justify-center flex-wrap my-8 outline outline-offset-2 outline-slate-200'> */}
      <div class='container grid justify-center grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-7 my-10'>
        {ProjectData.map((project) => (
          <a
            data-aos='fade-up'
            data-aos-duration='500'
            data-aos-delay='200'
            data-aos-once='true'
            href={project.link}
            key={project.image}
            className='hover:bg-teal-600 hover:bg-opacity-50 border-2 border-teal-600 rounded'
          >
            {/* max-w-xs  */}
            <div className='md:max-w-none overflow-hidden'>
              <img
                alt='gallery'
                className='h-56 lg:h-60 w-full object-cover'
                src={project.image}
              />
              <div className='p-4 ease-in-out duration-300 hover:bg-teal-600 hover:bg-opacity-50'>
                <h2 className='tracking-widest text-sm font-semibold text-teal-600'>
                  {project.subtitle}
                </h2>
                <h1 className='text-xl tracking-widest font-medium text-white my-1'>
                  {project.title}
                </h1>
                <p className='leading-relaxed'>{project.description}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
      {/* </div> */}
    </div>
  );
};

export default Work;
