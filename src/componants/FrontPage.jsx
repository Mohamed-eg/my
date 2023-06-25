import React from "react";
import "../styles/front.css";
import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

const FrontPage = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "#373842",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 3,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />
      <section className="nav">
        <h1 className="frontH1">FRONTEND TRENDS</h1>
        <h3 className="span loader">
          <span className="m">B</span>
          <span className="m">E</span>
          <span className="m">N</span>
          <span className="m">E</span>
          <span className="m">F</span>
          <span className="m">I</span>
          <span className="m">T</span>
          <span className="m">S</span>
          <span className="m">&nbsp;</span>
          <span className="m">o</span>
          <span className="m">f</span>
          <span className="m">&nbsp;</span>
          <span className="m">T</span>
          <span className="m">E</span>
          <span className="m">C</span>
          <span className="m">H</span>
          <span className="m">N</span>
          <span className="m">O</span>
          <span className="m">L</span>
          <span className="m">O</span>
          <span className="m">G</span>
          <span className="m">I</span>
          <span className="m">E</span>
          <span className="m">S</span>
        </h3>
      </section>
    </>
  );
};

export default FrontPage;
