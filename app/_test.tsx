'use client';

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { ISourceOptions, Container as ParticlesContainer } from "@tsparticles/engine";

export default function ParticlesBackground() {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = async (container?: ParticlesContainer): Promise<void> => {
        console.log(container);
    };

    const options: ISourceOptions = useMemo(() => ({
        background: {
            color: {
                value: "#141d34",
            },
        },
        fpsLimit: 60,
        particles: {
            color: {
                value: "#ffffff",
            },
            move: {
                direction: "none",
                enable: true,
                outModes: "out",
                random: false,
                speed: 2,
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
                value: 3,
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
            className="absolute z-[10] left-0 top-0 w-screen h-screen"
            particlesLoaded={particlesLoaded}
            options={options}
        />
    );
}
