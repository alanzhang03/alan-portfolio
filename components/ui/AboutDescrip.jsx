'use client';

import React from 'react';
import './styles/AboutDescrip.scss';
import Link from 'next/link';
import { MdOutlineFileDownload } from 'react-icons/md';

const AboutDescrip = () => {
  return (
    <>
      <p className='about-me-description'>
        Graduate with a Bachelor&apos;s degree in{' '}
        <a
          className='inline-link'
          target='_blank'
          href='https://www.cs.umd.edu/'
          rel='noreferrer'
        >
          Computer Science
        </a>{' '}
        from the{' '}
        <a
          className='inline-link'
          target='_blank'
          href='https://www.cs.umd.edu/'
          rel='noreferrer'
        >
          University of Maryland, College Park
        </a>{' '}
        and current{' '}
        <a
          className='inline-link'
          target='_blank'
          href='https://www.tollbrothers.com/'
          rel='noreferrer'
        >
          Software Engineer
        </a>{' '}
        at{' '}
        <a
          className='inline-link'
          target='_blank'
          href='https://www.tollbrothers.com/'
          rel='noreferrer'
        >
          Toll Brothers
        </a>
        . I have developed a wide range of{' '}
        <Link className='inline-link' href='#projects'>
          interactive web applications
        </Link>{' '}
        which you can view in the{' '}
        <Link className='inline-link' href='#projects'>
          projects section
        </Link>{' '}
        of this portfolio!
      </p>

      <div className='download-cv-container'>
        <a href='/Alan_Zhang_Main_Resume.pdf' download>
          <button className='download-cv-button'>
            Download CV <MdOutlineFileDownload className='download-icon' />
          </button>
        </a>
      </div>
    </>
  );
};

export default AboutDescrip;
