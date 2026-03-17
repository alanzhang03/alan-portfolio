'use client';

import React from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import '../styles/HomePage.scss';
import { FaArrowDownLong } from 'react-icons/fa6';
import TextLoop from './ui/TextLoop';
import Image from 'next/image';

import { FaGithub } from 'react-icons/fa';
import { CiLinkedin } from 'react-icons/ci';
import { MdOutlineEmail } from 'react-icons/md';
import { CiTwitter } from 'react-icons/ci';
import { FaInstagram } from 'react-icons/fa6';

const HomePage = () => {
  useGSAP(() => {
    gsap.from('.hero-greeting', {
      delay: 0.3,
      duration: 0.6,
      y: 20,
      opacity: 0,
      ease: 'power2.out',
    });
    gsap.from('.hero-name', {
      delay: 0.5,
      duration: 0.7,
      y: 30,
      opacity: 0,
      ease: 'power2.out',
    });
    gsap.from('.hero-textloop', {
      delay: 0.8,
      duration: 0.6,
      y: 20,
      opacity: 0,
      ease: 'power2.out',
    });
    gsap.to('.social-box', {
      delay: 1.1,
      opacity: 1,
      duration: 0.5,
      stagger: { each: 0.1, from: 'start' },
    });
    gsap.to('.profile-photo', {
      opacity: 1,
      delay: 0.4,
      duration: 1.2,
    });
    gsap.from('#gsap-arrow-down', {
      opacity: 0,
      delay: 1.8,
      duration: 1,
    });
  }, []);

  const socialLinks = [
    {
      Index: '1',
      Title: 'LinkedIn',
      Icon: <CiLinkedin />,
      Link: 'https://www.linkedin.com/in/alan-zhang-a254b8233/',
    },
    {
      Index: '2',
      Title: 'GitHub',
      Icon: <FaGithub />,
      Link: 'https://github.com/alanzhang03',
    },
    {
      Index: '3',
      Title: 'Email',
      Icon: <MdOutlineEmail />,
      Link: 'mailto:alan.s.zhang04@gmail.com',
    },
    {
      Index: '4',
      Title: 'Twitter',
      Icon: <CiTwitter />,
      Link: 'https://twitter.com/alanzhang003',
    },
    {
      Index: '5',
      Title: 'Instagram',
      Icon: <FaInstagram />,
      Link: 'https://www.instagram.com/_alanzhang_3/',
    },
  ];

  const mapSocialLinks = socialLinks.map((socials) => (
    <a key={socials.Index} target='_blank' href={socials.Link} rel='noreferrer'>
      <div className='social-box'>
        <div className='home-page-icon'>{socials.Icon}</div>
        <p className='socials-text'>{socials.Title}</p>
      </div>
    </a>
  ));

  return (
    <section id='homePage' className='main-homepage'>
      <div className='hero-content'>
        <div className='hero-left'>
          <p className='hero-greeting'>Hi, I&apos;m</p>
          <h1 className='hero-name'>Alan Zhang</h1>
          <div className='hero-textloop'>
            <TextLoop />
          </div>
          <div className='socials-container'>{mapSocialLinks}</div>
        </div>
        <div className='hero-right'>
          <div className='profile-photo-container'>
            <Image
              src='/Assets/alan-pic.JPG'
              alt='Alan Zhang'
              width={320}
              height={320}
              className='profile-photo'
              priority
              onClick={() =>
                window.open('https://www.linkedin.com/in/azhang03/', '_blank')
              }
            />
          </div>
        </div>
      </div>
      <FaArrowDownLong id='gsap-arrow-down' className='arrow-down' />
    </section>
  );
};

export default HomePage;
