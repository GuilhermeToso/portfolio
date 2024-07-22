'use client';

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { ISourceOptions, Container as ParticlesContainer } from "@tsparticles/engine";

type ParticlesBackgroundProps = {
    handleLoading: () => void;
}

export default function ParticlesBackground(props: ParticlesBackgroundProps) {
    const { handleLoading } = props;
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            console.log('particles loaded');
            setInit(true);
            handleLoading();
        });
    }, [handleLoading]);

    const particlesLoaded = async (container?: ParticlesContainer): Promise<void> => {
        console.log(container);

    };

    const options: ISourceOptions = useMemo(() => ({
        fullScreen: {
            enable: true,
            zIndex: -1,
        },
        background: {
            width: "100%",
            height: "100%",
            color: {
                value: "#050326",
            },
        },
        fpsLimit: 60,
        interactivity: {
            detectsOn: "canvas" as const, // "window" is also valid
            events: {
                onClick: {
                    enable: true,
                    mode: "repulse",
                },
                onHover: {
                    enable: true,
                    mode: "grab",
                },
                resize: {
                    enable: true,
                }
            },
            modes: {
                bubble: {
                    distance: 400,
                    duration: 2,
                    opacity: 0.8,
                    size: 40,
                },
                push: {
                    quantity: 4,
                },
                repulse: {
                    distance: 200,
                    duration: 0.4,
                },
                grab: {
                    distance: 400,
                    links: {
                        opacity: 1,
                    },
                },
            },
        },
        particles: {
            color: {
                value: "#22d3ee",
            },
            links: {
                color: "#22d3ee",
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
                outModes: "out",
                random: false,
                speed: 2,
                straight: false,
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200,
                }
            },
            number: {
                density: {
                    enable: true,
                    area: 800,
                },
                value: 150,
            },
            opacity: {
                value: 0.3,
                random: false,
                animation: {
                    enable: false,
                    speed: 1,
                    minimumValue: 0.1,
                    sync: false,
                }
            },
            shape: {
                type: "circle",
            },
            size: {
                value: 3,
                random: true,
                animation: {
                    enable: false,
                    speed: 40,
                    minimumValue: 0.1,
                    sync: false,
                }
            },
            stroke: {
                color: "#000000",
                width: 0,
            },
        },
        detectRetina: true,
    }), []);

    if (!init) {
        return null;
    }

    return (
        <Particles
            id="tsparticles"
            style={{
                position: "fixed",
                width: "100%",
                height: "10%",
                zIndex: -1,
                overflow: "hidden",

            }}
            particlesLoaded={particlesLoaded}
            options={options}
        />
    );
}
