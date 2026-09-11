'use client';

import React from 'react';
import '../styles/Skills.scss';
import Image from 'next/image';

const dailyStack = [
  {
    name: 'TypeScript',
    icon: '/Assets/typescript.svg',
    link: 'https://www.typescriptlang.org/',
  },
  {
    name: 'JavaScript',
    icon: '/Assets/js.svg',
    link: 'https://www.javascript.com/',
  },
  {
    name: 'React',
    icon: '/Assets/react.svg',
    link: 'https://react.dev/',
  },
  {
    name: 'Next.js',
    icon: '/Assets/nextjs.svg',
    link: 'https://nextjs.org/',
  },
  {
    name: 'Node.js',
    icon: '/Assets/nodejs.svg',
    link: 'https://nodejs.org/',
  },
  {
    name: 'Sass',
    icon: '/Assets/sass.svg',
    link: 'https://sass-lang.com/',
  },
  {
    name: 'PostgreSQL',
    icon: '/Assets/postgresql.svg',
    link: 'https://www.postgresql.org/',
  },
  {
    name: 'AWS',
    icon: '/Assets/aws-2.svg',
    link: 'https://aws.amazon.com/',
  },
];

const Skills = () => {
  return (
    <section id='skills' className='main-skills'>
      <div className='Skills'>
        <h1>Skills</h1>
        <p className='skills-intro'>Tools I use most often day to day.</p>
        <ul className='skills-list'>
          {dailyStack.map((skill) => (
            <li key={skill.name}>
              <a
                className='skill-item'
                target='_blank'
                href={skill.link}
                rel='noreferrer'
              >
                <Image
                  src={skill.icon}
                  width={28}
                  height={28}
                  alt=''
                  aria-hidden
                />
                <span>{skill.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
