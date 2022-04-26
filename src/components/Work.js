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
      <div className='flex justify-center items-center flex-row flex-wrap my-8'>
        {ProjectData.map((project) => (
          <a
            data-aos='fade-up'
            data-aos-duration='500'
            data-aos-delay='200'
            data-aos-once='true'
            href={project.link}
            key={project.image}
            className='w-full lg:w-1/2 p-4'
          >
            <div className='border-4 border-teal-600'>
              <img
                alt='gallery'
                className='w-full object-container object-center'
                src={project.image}
              />
              <div className='px-8 py-10 relative z-10 w-full h-full bg-zinc-900 ease-in-out duration-300 hover:bg-teal-600 hover:bg-opacity-50'>
                <h2 className='tracking-widest text-sm font-semibold text-teal-600'>
                  {project.subtitle}
                </h2>
                <h1 className='text-lg font-medium text-white mb-1'>
                  {project.title}
                </h1>
                <p className='leading-tight'>{project.description}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Work;
