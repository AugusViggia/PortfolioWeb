import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useCallback, useMemo } from "react";

const ParticlesComponent = () => {
    const options = useMemo(() => {
        return {
          background: {
            color: {
              value: "#1e272e",
            },
          },
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              // onHover: {
              //   enable: true,
              //   mode: "repulse",
              // },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 170,
                duration: 5,
                opacity: 0.5,
                size: 50,
              },
              push: {
                quantity: 3,
              },
              repulse: {
                distance: 100,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#34ace0",
            },
            links: {
              color: "#dff9fb",
              distance: 120,
              enable: true,
              opacity: 2,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "circle",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 850,
              },
              value: 170,
            },
            opacity: {
              value: 0.7,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        };
    }, []);

    const particlesInit = useCallback((engine) => {
        loadSlim(engine);
    }, []);

    return (
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={options}
        style={{
          position: "fixed", 
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
        }}
      />
    );
};
export default ParticlesComponent;