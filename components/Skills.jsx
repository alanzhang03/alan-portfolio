'use client';

import React from 'react';
import '../styles/Skills.scss';
import Image from 'next/image';

const languages = [
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
    name: 'Python',
    icon: '/Assets/python.svg',
    link: 'https://www.python.org/',
  },
  {
    name: 'Java',
    icon: '/Assets/java.svg',
    link: 'https://www.java.com/en/',
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
    name: 'HTML',
    icon: '/Assets/html.svg',
    link: 'https://www.w3schools.com/html/html_intro.asp',
  },
  {
    name: 'CSS',
    icon: '/Assets/css.svg',
    link: 'https://www.w3schools.com/css/',
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

const frameworks = [
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
    name: 'React Native',
    icon: '/Assets/react-native.svg',
    link: 'https://reactnative.dev/',
  },
  {
    name: 'Vue',
    icon: '/Assets/vue.svg',
    link: 'https://vuejs.org/',
  },
  {
    name: 'Node.js',
    icon: '/Assets/nodejs.svg',
    link: 'https://nodejs.org/en',
  },
  {
    name: 'Express',
    icon: '/Assets/express.svg',
    link: 'https://expressjs.com/',
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
    name: 'GSAP',
    icon: '/Assets/gsap.svg',
    link: 'https://gsap.com/',
  },
  {
    name: 'Vite',
    icon: '/Assets/vitejs.svg',
    link: 'https://vitejs.dev/',
  },
  {
    name: 'Prisma',
    icon: '/Assets/prisma.svg',
    link: 'https://www.prisma.io/',
  },
];

const dataAndCloud = [
  {
    name: 'PostgreSQL',
    icon: '/Assets/postgresql.svg',
    link: 'https://www.postgresql.org/',
  },
  {
    name: 'MongoDB',
    icon: '/Assets/mongoDB.svg',
    link: 'https://www.mongodb.com/',
  },
  {
    name: 'Redis',
    icon: '/Assets/redis.svg',
    link: 'https://redis.io/',
  },
  {
    name: 'DynamoDB',
    icon: '/Assets/dynamodb.svg',
    link: 'https://aws.amazon.com/dynamodb/',
  },
  {
    name: 'Supabase',
    icon: '/Assets/supabase.svg',
    link: 'https://supabase.com/',
  },
  {
    name: 'AWS',
    icon: '/Assets/aws-2.svg',
    link: 'https://aws.amazon.com/',
  },
  {
    name: 'S3',
    icon: '/Assets/s3.svg',
    link: 'https://aws.amazon.com/s3/',
  },
  {
    name: 'Amplify',
    icon: '/Assets/amplify.svg',
    link: 'https://aws.amazon.com/amplify/',
  },
  {
    name: 'Cognito',
    icon: '/Assets/cognito.svg',
    link: 'https://aws.amazon.com/cognito/',
  },
];

const tools = [
  {
    name: 'Git',
    icon: '/Assets/git.svg',
    link: 'https://git-scm.com/',
  },
  {
    name: 'GitHub',
    icon: '/Assets/github.svg',
    link: 'https://github.com/',
  },
  {
    name: 'GitLab',
    icon: '/Assets/gitlab.svg',
    link: 'https://about.gitlab.com/',
  },
  {
    name: 'Bitbucket',
    icon: '/Assets/bitbucket.svg',
    link: 'https://bitbucket.org/product/',
  },
  {
    name: 'Jira',
    icon: '/Assets/jira.svg',
    link: 'https://www.atlassian.com/software/jira',
  },
  {
    name: 'Stripe',
    icon: '/Assets/stripe.svg',
    link: 'https://stripe.com/',
  },
  {
    name: 'Twilio',
    icon: '/Assets/twilio.svg',
    link: 'https://www.twilio.com/en-us',
  },
];

const SkillGroup = ({ title, items }) => (
  <div className='skills-group'>
    <h2 className='skills-group-title'>{title}</h2>
    <ul className='skills-list'>
      {items.map((skill) => (
        <li key={skill.name}>
          <a
            className='skill-item'
            target='_blank'
            href={skill.link}
            rel='noreferrer'
          >
            <Image
              src={skill.icon}
              width={24}
              height={24}
              alt=''
              aria-hidden
            />
            <span>{skill.name}</span>
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const Skills = () => {
  return (
    <section id='skills' className='main-skills'>
      <div className='Skills'>
        <h1>Skills</h1>
        <p className='skills-intro'>
          Languages, frameworks, data, cloud, and tools I&apos;ve worked with.
        </p>
        <SkillGroup title='Languages' items={languages} />
        <SkillGroup title='Frameworks & Libraries' items={frameworks} />
        <SkillGroup title='Databases & Cloud' items={dataAndCloud} />
        <SkillGroup title='Tools & Platforms' items={tools} />
      </div>
    </section>
  );
};

export default Skills;
