import React from 'react';

const AboutMe = () => {
  return (
    <section id="aboutMe" className="aboutMe-section hero-is-fullheight">
      <div className="container viewport-100">
        <p className="is-size-2 has-text-centered text-banner">
          <span className="text-highlight">About Me</span>
        </p>
        <div className="columns is-vcentered">
          <div className="column">
            <p className="is-size-5 has-text-justified">
              I am fresh out of college, and looking to work on projects that
              can teach me new things.
            </p>
            <br />
            <p className="is-size-5">
              I enjoy developing websites & games, rockclimbing and table top
              games.
            </p>
            <br />
            <p className="is-size-5">I have a cat named Mila</p>
          </div>
          <div className="column">
            <img src="https://via.placeholder.com/400x600" alt="my self" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
