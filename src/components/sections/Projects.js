import React from 'react';
import dndToolkit from './dnd-toolkit.png';
import poeStashspy from './poe-stashspy.png';

const Projects = () => {
  return (
    <section id="projects" className="projects-section hero-is-fullheight">
      <div className="container viewport-100">
        <p className="is-size-2 has-text-centered text-banner">
          <span className="text-highlight">My Projects</span>
        </p>
        <div className="columns is-vcentered">
          <div className="column">
            <figure className="image is-square project-img-fig">
              <img
                src={dndToolkit}
                className="is-hidden-mobile is-rounded"
                alt="project thumbnail"
              />
            </figure>
            <p className="project-img-caption is-size-5">DnD Toolkit</p>
            <div class="tags">
              <span class="tag is-info">React</span>
              <span class="tag is-warning">JavaScript</span>
              <span class="tag is-primary">MaterializeCSS</span>
              <span class="tag is-link">API's</span>
            </div>
          </div>
          <div className="column">
            <figure className="image is-square project-img-fig">
              <img
                src={poeStashspy}
                className="is-hidden-mobile is-rounded"
                alt="project thumbnail"
              />
            </figure>
            <p className="project-img-caption is-size-5">
              Path of Exile Stash Spy
            </p>
            <div class="tags">
              <span class="tag is-info">React</span>
              <span class="tag is-warning">JavaScript</span>
              <span class="tag is-link">API's</span>
              <span class="tag is-primary">SASS</span>
            </div>
          </div>
          <div className="column">
            <figure className="image is-square project-img-fig">
              <img
                src="https://via.placeholder.com/432x432"
                className="is-hidden-mobile is-rounded"
                alt="project thumbnail"
              />
            </figure>
            <p className="project-img-caption is-size-5">Platformer Game</p>
            <div class="tags">
              <span class="tag is-light">C#</span>
              <span class="tag is-success">Godot</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
