'use client';

import React from 'react';
import './styles/ProjectsCardDisplay.scss';
import Image from 'next/image';
import { FaLocationArrow } from 'react-icons/fa6';
import PinContainer from './PinContainer';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Project Pictures
import TicTacToeImg from '../../public/Assets/TicTacToe.png';
import PreviousPort from '../../public/Assets/previousPort.png';
import CvApp from '../../public/Assets/CvApp.png';
import AppleClone from '../../public/Assets/AppleClone.png';
import TopFlightTracker from '../../public/Assets/TopFlightTracker.png';
import WeatherApp from '../../public/Assets/weatherApp.png';
import TFTApp from '../../public/Assets/TFTApp.png';
import YSC from '../../public/Assets/yscLunchSoccer.png';

// Tech Stack Logos
import ReactLogo from '../../public/Assets/reactLogo.svg';
import JsLogo from '../../public/Assets/jsLogo.svg';
import ThreeLogo from '../../public/Assets/threeLogo.svg';
import GsapLogo from '../../public/Assets/gsapLogo.svg';
import NextLogo from '../../public/Assets/nextLogo.svg';
import SassLogo from '../../public/Assets/sassLogo.svg';
import NodeLogo from '../../public/Assets/nodejsLogo.svg';
import CssLogo from '../../public/Assets/CssLogo.svg';
import HtmlLogo from '../../public/Assets/HtmlLogo.svg';
import TailLogo from '../../public/Assets/tailLogo.svg';
import RedisLogo from '../../public/Assets/redis.svg';
import MongoDbLogo from '../../public/Assets/mongoDB.svg';
import NeonLogo from '../../public/Assets/Neon.svg';
import PostgreLogo from '../../public/Assets/postgresql.svg';
import PythonLogo from '../../public/Assets/python.svg';
import FlaskLogo from '../../public/Assets/flask.svg';
import ExpressLogo from '../../public/Assets/express.svg';
import SupabaseLogo from '../../public/Assets/supabase.svg';
import PrismaLogo from '../../public/Assets/prisma.svg';

const ProjectsCardDisplay = () => {
  useGSAP(() => {
    gsap.to('.project-grid', {
      scrollTrigger: '.project-grid',
      duration: 2,
      delay: 0.4,
      opacity: 1,
      stagger: {
        each: 0.25,
        from: 'start',
      },
    });
  }, []);

  const projects = [
    {
      Title: 'YSC Lunch Soccer',
      Description:
        'A web application for managing lunchtime soccer sessions, RSVPs, team randomization, and communication for YSC sports lunch soccer members.',
      Link: 'https://ysclunchsoccer.com/',
      GitHubLink: 'https://github.com/alanzhang03/YSCLunchSoccer',
      Image: YSC,
      tech1: NextLogo,
      tech2: ExpressLogo,
      tech3: SupabaseLogo,
      tech4: PrismaLogo,
      tech5: PostgreLogo,
    },
    {
      Title: 'TopFlight Tracker',
      Description: 'Football statistic web application built using Next.js ',
      Link: 'https://topflight-tracker.vercel.app/',
      GitHubLink: 'https://github.com/alanzhang03/topflight-tracker',
      Image: TopFlightTracker,
      tech1: NextLogo,
      tech2: SassLogo,
      tech3: JsLogo,
      tech4: GsapLogo,
      tech5: RedisLogo,
    },
    {
      Title: 'StreamerTracker TFT',
      Description:
        'Tracking App tracks the statistics of the top TFT streamers',
      Link: 'https://streamer-tracker-tft.vercel.app/',
      GitHubLink: 'https://github.com/alanzhang03/streamer-tracker-tft',
      Image: TFTApp,
      tech1: NextLogo,
      tech2: PythonLogo,
      tech3: PostgreLogo,
      tech4: FlaskLogo,
      tech5: JsLogo,
    },
    {
      Title: 'Previous Web Portfolio',
      Description: 'My previous web portfolio',
      Link: 'https://alanzhang.onrender.com',
      GitHubLink: 'https://github.com/alanzhang03/personal-portfolio',
      Image: PreviousPort,
      tech1: ReactLogo,
      tech2: NodeLogo,
      tech3: JsLogo,
      tech4: CssLogo,
      tech5: HtmlLogo,
    },
    {
      Title: 'CV Builder',
      Description:
        'A powerful CV builder designed specifically for software developers',
      Link: 'https://resume-cv-app.onrender.com/',
      GitHubLink: 'https://github.com/alanzhang03/Resume-CV-App',
      Image: CvApp,
      tech1: ReactLogo,
      tech2: NodeLogo,
      tech3: JsLogo,
      tech4: CssLogo,
      tech5: HtmlLogo,
    },
    {
      Title: 'Weather Application',
      Description: 'A Weather Application utilizing MongoDB to store results',
      Link: 'https://weatherapp-7fu2.onrender.com/',
      GitHubLink: 'https://github.com/alanzhang03/weather-app',
      Image: WeatherApp,
      tech1: ReactLogo,
      tech2: NodeLogo,
      tech3: JsLogo,
      tech4: CssLogo,
      tech5: MongoDbLogo,
    },

    {
      Title: 'Tic-Tac-Toe',
      Description: 'Tic Tac Toe game implemented using minimax algorithm',
      Link: 'https://alantictactoe.onrender.com/',
      GitHubLink: 'https://github.com/alanzhang03/tictactoe',
      Image: TicTacToeImg,
      tech1: ReactLogo,
      tech2: JsLogo,
      tech3: HtmlLogo,
      tech4: CssLogo,
      tech5: '',
    },
  ];

  const projectDivs = projects.map((project, index) => {
    return (
      <PinContainer key={index} title={project.Title} href={project.Link}>
        <a href={project.Link} target='_blank' rel='noopener noreferrer'>
          <div className='project-grid'>
            <div className='project-image-container'>
              <Image
                className='projects-images'
                src={project.Image}
                alt={`${project.Title} image`}
              />
            </div>
            <div className='project-text-container'>
              <h1 className='project-title'>{project.Title}</h1>
              <p className='project-description'>{project.Description}</p>
            </div>
            <div className='project-tech-link-container'>
              <div className='tech-container'>
                {project.tech1 && (
                  <Image
                    className='image-icon'
                    src={project.tech1}
                    alt='Tech logo 1'
                  />
                )}
                {project.tech2 && (
                  <Image
                    className='image-icon'
                    src={project.tech2}
                    alt='Tech logo 2'
                  />
                )}
                {project.tech3 && (
                  <Image
                    className='image-icon'
                    src={project.tech3}
                    alt='Tech logo 3'
                  />
                )}
                {project.tech4 && (
                  <Image
                    className='image-icon'
                    src={project.tech4}
                    alt='Tech logo 4'
                  />
                )}
                {project.tech5 && (
                  <Image
                    className='image-icon'
                    src={project.tech5}
                    alt='Tech logo 5'
                  />
                )}
              </div>
              <p className='project-nav'>
                Check Live Site <FaLocationArrow className='location-arrow' />
              </p>
            </div>
          </div>
        </a>
      </PinContainer>
    );
  });

  return (
    <section className='projects-card-display'>
      <div className='projects-display-container'>{projectDivs}</div>
    </section>
  );
};

export default ProjectsCardDisplay;
