import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="hero is-fullheight hero-section">
      <div className="container abs-center">
        <p className="is-size-3">
          <span role="img" aria-label="waving hand">
            🖐️
          </span>
          Hello! I am
        </p>
        <p className="is-size-1 has-text-centered fancy text-highlight">
          <span>Tyler Polito</span>
        </p>
        <br />

        <p className="is-size-5">a developer from Houston.</p>
        <p className="is-size-5">I have loved technology since I was little.</p>
        <p className="is-size-5">Developing and creating are my passions.</p>
        <p className="is-size-5">You can find my projects down below.</p>
        <p className="is-size-5">
          Alternatively, you can download my{' '}
          <a href="#!" className="text-highlight">
            <span className="link-hover">resume.</span>
          </a>
        </p>
        <p className="is-size-5">
          Feel free to{' '}
          <a href="mailto:tyler@tylerpolito.info" className="text-highlight">
            <span className="link-hover">email</span>
          </a>
          me if you'd like to work together.{' '}
        </p>
      </div>
    </section>
  );
};

export default Hero;
