import React from 'react';
import heroImg from './assets/hero.svg';
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>contentful CMS</h1>
          <p>
            Contentful is a tool to create captivating experiences with
            intelligent composable content platform.
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="A lady and Browser" className="img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
