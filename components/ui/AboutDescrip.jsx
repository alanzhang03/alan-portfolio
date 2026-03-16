'use client';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import React from 'react';
import './styles/AboutDescrip.scss';
import Link from 'next/link';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { MdOutlineFileDownload } from 'react-icons/md';
import { FaBriefcase, FaCode, FaUsers } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const AboutDescrip = () => {
  useGSAP(() => {
    gsap.fromTo(
      '#gsap-about-me-description span',
      { opacity: 0, y: 8 },
      {
        scrollTrigger: {
          trigger: '.about-me-description',
          start: 'top 80%',
        },
        duration: 0.6,
        delay: 0.1,
        opacity: 1,
        y: 0,
        ease: 'power2.out',
        stagger: { each: 0.12, from: 'start' },
      }
    );

    gsap.fromTo(
      '.stat-card',
      { opacity: 0, y: 20 },
      {
        scrollTrigger: {
          trigger: '.about-section-2',
          start: 'top 85%',
        },
        duration: 0.5,
        opacity: 1,
        y: 0,
        ease: 'power2.out',
        stagger: { each: 0.1, from: 'start' },
      }
    );

    gsap.fromTo(
      '.download-cv-button',
      { opacity: 0, y: 8 },
      {
        scrollTrigger: {
          trigger: '.download-cv-button',
          start: 'top 90%',
        },
        duration: 0.5,
        opacity: 1,
        y: 0,
        ease: 'power2.out',
      }
    );
  }, []);

  return (
    <>
      <p id='gsap-about-me-description' className='about-me-description'>
        <span>Graduate with a Bachelor&apos;s degree in</span>
        <span className='purple-text'>
          {' '}
          <a target='_blank' href='https://www.cs.umd.edu/'>
            {' '}
            Computer Science{' '}
          </a>{' '}
        </span>{' '}
        <span>from the</span>
        <span className='purple-text'>
          {' '}
          <a target='_blank' href='https://www.cs.umd.edu/'>
            {' '}
            University of Maryland, College Park{' '}
          </a>{' '}
        </span>{' '}
        <span>
          and current{' '}
          <span className='purple-text'>
            <a target='_blank' href='https://www.tollbrothers.com/'>
              Software Engineer
            </a>
          </span>{' '}
          at{' '}
        </span>
        <span className='purple-text'>
          <a target='_blank' href='https://www.tollbrothers.com/'>
            {' '}
            Toll Brothers{' '}
          </a>{' '}
        </span>{' '}
        <span>. I have developed a wide range of</span>
        <span className='purple-text'>
          <Link href='#projects'> interactive web applications </Link>
        </span>
        <span>which you can view in the</span>
        <span className='purple-text'>
          <Link href='#projects'> projects section </Link>
        </span>
        <span>of this portfolio!</span>
      </p>

      <div className='about-section-2'>
        <div className='stat-card'>
          <FaBriefcase className='stat-icon' />
          <span className='number'>2</span>
          <p className='stat-label'>Years Production Experience</p>
        </div>
        <div className='stat-card'>
          <FaCode className='stat-icon' />
          <span className='number'>4</span>
          <p className='stat-label'>End-to-End Projects Delivered</p>
        </div>
        <div className='stat-card'>
          <FaCode className='stat-icon' />
          <span className='number'>30+</span>
          <p className='stat-label'>Technologies Mastered</p>
        </div>
        <div className='stat-card'>
          <FaUsers className='stat-icon' />
          <span className='number'>1k+</span>
          <p className='stat-label'>Users Impacted</p>
        </div>
      </div>

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
