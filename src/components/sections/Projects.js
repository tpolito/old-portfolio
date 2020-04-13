import React from 'react';
import dndToolkit from './dnd-toolkit.png';
import gameOfLife from './game-of-life.png';
import discordBot from './discord-bot.png';

const Projects = () => {
  return (
    <section id='projects' className='projects-section hero-is-fullheight'>
      <div className='container viewport-100'>
        <p className='is-size-2 has-text-centered text-banner'>
          <span className='text-highlight'>My Projects</span>
        </p>
        <div className='columns is-vcentered'>
          <div className='column'>
            <figure className='image is-square project-img-fig'>
              <a
                href='https://dndtoolkit.app/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <img
                  src={dndToolkit}
                  className='is-hidden-mobile is-rounded'
                  alt='project thumbnail'
                />
              </a>
            </figure>
            <p className='project-img-caption is-size-5'>
              <a
                href='https://dndtoolkit.app/'
                style={{ color: 'white' }}
                target='_blank'
                rel='noopener noreferrer'
              >
                DnD Toolkit
              </a>
            </p>
            <div className='tags'>
              <span className='tag is-info'>React</span>
              <span className='tag is-warning'>JavaScript</span>
              <span className='tag is-primary'>MaterializeCSS</span>
              <span className='tag is-link'>API's</span>
            </div>
          </div>
          <div className='column'>
            <figure className='image is-square project-img-fig'>
              <a
                href='https://github.com/tpolito/rainbow-game-of-life'
                target='_blank'
                rel='noopener noreferrer'
              >
                <img
                  src={gameOfLife}
                  className='is-hidden-mobile is-rounded'
                  alt='project thumbnail'
                />
              </a>
            </figure>
            <a
              href='https://github.com/tpolito/rainbow-game-of-life'
              target='_blank'
              rel='noopener noreferrer'
            >
              <p className='project-img-caption is-size-5'>
                Rainbow Game of Life
              </p>
            </a>

            <div className='tags'>
              <span className='tag is-info'>React</span>
              <span className='tag is-link'>TypeScript</span>
              <span className='tag is-success'>Algo</span>
            </div>
          </div>
          <div className='column'>
            <figure className='image is-square project-img-fig'>
              <a
                href='https://github.com/tpolito/discord-bot'
                target='_blank'
                rel='noopener noreferrer'
              >
                <img
                  src={discordBot}
                  className='is-hidden-mobile is-rounded'
                  alt='project thumbnail'
                />
              </a>
            </figure>
            <a
              href='https://github.com/tpolito/discord-bot'
              style={{ color: 'white' }}
              target='_blank'
              rel='noopener noreferrer'
            >
              <p className='project-img-caption is-size-5'>
                Custom Discord Bot
              </p>
            </a>
            <div className='tags'>
              <span className='tag is-warning'>JavaScript</span>
              <span className='tag is-link'>API's</span>
              <span className='tag is-success'>NodeJS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
