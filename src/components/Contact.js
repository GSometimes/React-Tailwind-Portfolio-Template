import React from 'react';
import { ContactData } from '../data/ContactData';

const Contact = () => {
  return (
    <div
      name='contact'
      id='projects'
      className='container mx-auto px-8 md:px-10 lg:px-20 my-24 md:my-48 w-full font-mono text-slate-200 flex flex-col justify-center items-center'
    >
      <div>
        <h1
          data-aos='fade-up'
          data-aos-duration='500'
          data-aos-delay='150'
          data-aos-once='true'
          className='text-5xl text-center md:text-6xl lg:text-7xl font-bold underline underline-offset-4 decoration-slate-200'
        >
          Contact
        </h1>
      </div>
      {ContactData.map((item, index) => (
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
      ))}
    </div>
  );
};

export default Contact;
