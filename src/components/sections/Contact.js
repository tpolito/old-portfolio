import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="hero is-fullheight contact-section">
      <div className="container veiwport-100">
        <p className="is-size-2 has-text-centered text-banner">
          <span className="text-highlight">Contact Me</span>
        </p>

        <div className="field form-helper">
          <label className="label">Name</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Ex: John Doe"
              required
            />
          </div>
          <label className="label">Email</label>
          <div className="control">
            <input
              className="input"
              type="email"
              placeholder="Ex: john.doe@email.com"
              required
            />
          </div>
          <label class="label">Message</label>
          <div class="control">
            <textarea
              class="textarea"
              placeholder="Ex: I'd love to work with you on a really cool project..."
              required
            />
          </div>

          <div className="control button-padding">
            <button className="button is-link">Send Message!</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
