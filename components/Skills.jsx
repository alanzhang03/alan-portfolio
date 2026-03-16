'use client';

import React from 'react';
import '../styles/Skills.scss';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const skills = [
  {
    name: 'JavaScript',
    icon: '/Assets/js.svg',
    link: 'https://www.javascript.com/',
  },
  {
    name: 'TypeScript',
    icon: '/Assets/typescript.svg',
    link: 'https://www.typescriptlang.org/',
  },
  {
    name: 'Java',
    icon: '/Assets/java.svg',
    link: 'https://www.java.com/en/',
  },
  {
    name: 'Python',
    icon: '/Assets/python.svg',
    link: 'https://www.python.org/',
  },
  {
    name: 'Html',
    icon: '/Assets/html.svg',
    link: 'https://www.w3schools.com/html/html_intro.asp',
  },
  {
    name: 'Sass',
    icon: '/Assets/sass.svg',
    link: 'https://sass-lang.com/',
  },
  {
    name: 'Tailwind',
    icon: '/Assets/tailwind.svg',
    link: 'https://tailwindcss.com/',
  },
  {
    name: 'Css',
    icon: '/Assets/css.svg',
    link: 'https://www.w3schools.com/css/',
  },
  {
    name: 'C#',
    icon: '/Assets/csharp.svg',
    link: 'https://learn.microsoft.com/en-us/dotnet/csharp/',
  },
  {
    name: 'C',
    icon: '/Assets/c.svg',
    link: 'https://www.learn-c.org/',
  },

  {
    name: 'R',
    icon: '/Assets/r.svg',
    link: 'https://www.r-project.org/',
  },
  {
    name: 'Matlab',
    icon: '/Assets/matlab.svg',
    link: 'https://www.mathworks.com/?s_tid=gn_logo',
  },
];

const technologies = [
  {
    name: 'React',
    icon: '/Assets/react.svg',
    link: 'https://react.dev/',
  },
  {
    name: 'React-Native',
    icon: '/Assets/react-native.svg',
    link: 'https://reactnative.dev/',
  },
  {
    name: 'Next JS',
    icon: '/Assets/nextjs.svg',
    link: 'https://nextjs.org/',
  },
  {
    name: 'ExpressJs',
    icon: '/Assets/express.svg',
    link: 'https://expressjs.com/',
  },
  {
    name: 'AWS',
    icon: '/Assets/aws-2.svg',
    link: 'https://aws.amazon.com/',
  },
  {
    name: 'PostgreSQL',
    icon: '/Assets/postgresql.svg',
    link: 'https://nextjs.org/',
  },
  {
    name: 'Github',
    icon: '/Assets/github.svg',
    link: 'https://github.com/',
  },
  {
    name: 'Jira',
    icon: '/Assets/jira.svg',
    link: 'https://www.atlassian.com/software/jira',
  },
  {
    name: 'Bitbucket',
    icon: '/Assets/bitbucket.svg',
    link: 'https://bitbucket.org/product/',
  },
  {
    name: 'Redis',
    icon: '/Assets/redis.svg',
    link: 'https://redis.io/',
  },
  {
    name: 'Prisma',
    icon: '/Assets/prisma.svg',
    link: 'https://www.prisma.io/',
  },
  {
    name: 'Supabase',
    icon: '/Assets/supabase.svg',
    link: 'https://supabase.com/',
  },
  {
    name: 'GSAP',
    icon: '/Assets/gsap.svg',
    link: 'https://gsap.com/',
  },
  {
    name: 'Node',
    icon: '/Assets/nodejs.svg',
    link: 'https://nodejs.org/en',
  },
  {
    name: 'Vite',
    icon: '/Assets/vitejs.svg',
    link: 'https://vitejs.dev/',
  },
  {
    name: 'Vue',
    icon: '/Assets/vue.svg',
    link: 'https://vuejs.org/',
  },

  {
    name: 'GitLab',
    icon: '/Assets/gitlab.svg',
    link: 'https://about.gitlab.com/',
  },
  {
    name: 'git',
    icon: '/Assets/git.svg',
    link: 'https://git-scm.com/',
  },
  {
    name: 'MongoDB',
    icon: '/Assets/mongoDB.svg',
    link: 'https://www.mongodb.com/',
  },
  {
    name: 'Twilio',
    icon: '/Assets/twilio.svg',
    link: 'https://www.twilio.com/en-us',
  },
  {
    name: 'Stripe',
    icon: '/Assets/stripe.svg',
    link: 'https://stripe.com/',
  },
];

const Skills = () => {
  useGSAP(() => {
    gsap.fromTo(
      '.hex-item',
      { opacity: 0, scale: 0.7 },
      {
        scrollTrigger: {
          trigger: '.hex-grid',
          start: 'top 80%',
        },
        opacity: 1,
        scale: 1,
        duration: 0.4,
        ease: 'back.out(1.4)',
        stagger: { each: 0.05, from: 'start' },
      },
    );

    gsap.fromTo(
      '.tech-hex-item',
      { opacity: 0, scale: 0.7 },
      {
        scrollTrigger: {
          trigger: '.tech-hex-grid',
          start: 'top 80%',
        },
        opacity: 1,
        scale: 1,
        duration: 0.4,
        ease: 'back.out(1.4)',
        stagger: { each: 0.05, from: 'start' },
      },
    );
  }, []);

  return (
    <section id='skills' className='main-skills'>
      <div className='Skills'>
        <span className='section-label'>Tech Stack</span>
        <h1>
          Programming <span className='gradient-green'>Languages</span>
        </h1>
        <div className='skills-group'>
          <div className='hex-grid'>
            {skills.map((skill) => (
              <a
                key={skill.name}
                className='hex-item'
                target='_blank'
                href={skill.link}
              >
                <Image
                  src={skill.icon}
                  width={48}
                  height={48}
                  alt={skill.name}
                />
                <p className='hex-label'>{skill.name}</p>
              </a>
            ))}
          </div>
        </div>
        <h1>
          Frameworks & <span className='gradient-green'>Tools</span>
        </h1>
        <div className='skills-group'>
          <div className='tech-hex-grid'>
            {technologies.map((tech) => (
              <a
                key={tech.name}
                className='tech-hex-item'
                target='_blank'
                href={tech.link}
              >
                <Image src={tech.icon} width={48} height={48} alt={tech.name} />
                <p className='hex-label'>{tech.name}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
