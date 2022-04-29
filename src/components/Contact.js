import React from 'react';
import { ContactInfo } from '../data/ConactInfo';

const Contact = () => {
  return (
    // <div
    //   name='contact'
    //   id='projects'
    //   className='container mx-auto px-8 md:px-10 lg:px-20 md:my-48 max-w-[1160px] h-[500px] font-mono text-slate-200 flex flex-col justify-center items-center'
    // >
    <div className='container flex flex-col mx-auto px-8 py-10 md:px-10 lg:px-20 h-[500px] max-w-[1160px] font-mono text-slate-200 gap-8 my-24'>
      <div>
        <h1
          data-aos='fade-up'
          data-aos-duration='500'
          data-aos-delay='150'
          data-aos-once='true'
          className='text-5xl md:text-6xl lg:text-7xl font-bold underline underline-offset-4 decoration-slate-200'
        >
          Contact
        </h1>
        <p
          data-aos='fade-up'
          data-aos-duration='500'
          data-aos-delay='200'
          data-aos-once='true'
          className='my-8 w-full max-w-3xl leading-normal'
        >
          I am open for work and currently seeking new opportunities. Drop me a
          line and lets talk about how I could put my eye for design and
          development into a hand-crafted experience for you!
        </p>
      </div>
      <div className='container grid justify-center grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-7'>
        {ContactInfo.map((item, index) => (
          <a
            key={index}
            href={item.link}
            className='tracking-widest text-sm font-semibold hover:bg-teal-600 hover:bg-opacity-30 border-2 border-teal-600 rounded'
          >
            <div className='md:max-w-none overflow-hidden '>
              <div className='p-4 ease-in-out duration-300'>
                <h1 className='text-xl tracking-widest font-medium text-white my-1'>
                  {item.form}
                </h1>
                <h2 className='tracking-widest text-sm font-semibold text-teal-600 hover:'>
                  {item.line}
                </h2>
              </div>
            </div>
          </a>
        ))}
      </div>
      {/* <h1 className='text-slate-200'>{line}</h1> */}
      {/* {ContactData.map((item, index) => (
        <div key={index}>
          <p
            data-aos='fade-up'
            data-aos-duration='500'
            data-aos-delay='200'
            data-aos-once='true'
            key={index}
            className='my-8 w-full max-w-3xl leading-normal'
          >
            {item.line}
          </p>
          <div
            data-aos='fade-up'
            data-aos-duration='500'
            data-aos-delay='250'
            data-aos-once='true'
            className='w-full flex justify-center'
          >
            <a
              href={item.email}
              className='px-8 py-4 bg-teal-600 hover:bg-teal-700 text-slate-200 font-bold flex items-center space-x-3 font-mono rounded'
              target='_blank'
              rel='noopener noreferrer'
            >
              Say Hello
            </a>
          </div>
        </div>
      ))} */}
    </div>
  );
};

export default Contact;
