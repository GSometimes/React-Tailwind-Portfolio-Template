import React from 'react';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <div
      name='home'
      className='container flex justify-between items-center mx-auto px-8 md:px-10 lg:px-24 max-w-[1160px] h-screen'
    >
      <div className='mx-auto flex flex-col justify-center h-full font-mono'>
        <p
          data-aos-once='true'
          data-aos='fade-up'
          data-aos-duration='500'
          className='text-teal-600'
        >
          Hi, my name is,
        </p>
        <h1
          data-aos='fade-up'
          data-aos-duration='500'
          data-aos-delay='50'
          data-aos-once='true'
          className='text-5xl md:text-6xl lg:text-7xl font-bold text-slate-200 py-2'
        >
          Gore Sometimes.
        </h1>
        <h2
          data-aos='fade-up'
          data-aos-duration='500'
          data-aos-delay='100'
          data-aos-once='true'
          className='max-w-[1000px] text-4xl md:text-5xl lg:text-6xl font-bold text-slate-300'
        >
          I build beautiful web experiences.
        </h2>
        <p
          data-aos='fade-up'
          data-aos-duration='500'
          data-aos-delay='150'
          data-aos-once='true'
          className='text-teal-600 py-6 max-w-[600px]'
        >
          I'm a frontend developer specializing in building modern, beautiful
          web experiences.
        </p>
        <div className='w-full flex justify-start gap-4'>
          <button
            data-aos='fade-up'
            data-aos-duration='500'
            data-aos-delay='200'
            data-aos-once='true'
            className='px-8 py-4 bg-teal-600 hover:bg-teal-700 text-slate-200 font-bold mt-12 flex items-center space-x-3 font-mono rounded'
          >
            <Link to='work' smooth={true} duration={700} offset={-125}>
              My Work
            </Link>
          </button>
          <a
            href='https://drive.google.com/file/d/1f0kOI0jBmxmA_I8b1LkIOoDGSWdyQQHa/view'
            className='px-8 py-4 bg-teal-600 hover:bg-teal-700 text-slate-200 font-bold mt-12 flex items-center space-x-3 font-mono rounded'
            target='_blank'
            rel='noopener noreferrer'
            data-aos='fade-up'
            data-aos-duration='500'
            data-aos-delay='250'
            data-aos-once='true'
          >
            My Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
