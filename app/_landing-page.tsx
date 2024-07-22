'use client';
import TopNav from "@/app/header";
import ParticlesBackground from "@/app/_particles";
import React, {useEffect, useState} from "react";
import Home from "@/components/sections/home";
import Projects from "@/components/sections/projects";
import Timeline from "@/components/sections/timeline";
import Contact from "@/components/sections/contact";
import About from "@/components/sections/about";
import {Element} from "react-scroll";
import {data} from "@/data/data";
import {sectionProps} from "@/interface/global";
import Services from "@/components/sections/services";
import BottomNav from "@/app/bottom-nav";
import {useLanguage} from "@/context/language";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function LandingPage() {
    const [loading, setLoading] = useState<boolean>(true);
    const handleLoading = () => {
        setLoading(false);
    }

    const {language} = useLanguage();




    const sections: Record<string, React.FC<sectionProps>> = {'about': About, 'services': Services, 'projects': Projects, 'timeline': Timeline, };

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div className="relative overflow-hidden bg-base-100">
            <ParticlesBackground handleLoading={handleLoading}></ParticlesBackground>
            {
                loading ? (
                    <div className="w-screen h-screen bg-base-100 flex justify-center items-center">
                        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary"></div>
                    </div>)
                    : (
                    <>
                        <TopNav headerData={data["header"]}></TopNav>
                        <main className="relative flex flex-col overflow-hidden justify-start bg-transparent">
                            <Element name="home" className="w-screen h-[calc(100vh-48px)] pt-12 flex flex-col justify-center items-center mb-12"
                                     key={"home"}
                                     id="home">

                                <Home homeData={data["home"]}></Home>
                            </Element>
                            {
                                Object.keys(sections).map((section, _) => {
                                    const Section = sections[section];
                                    return (
                                        <Element name={section} key={section}
                                                 className={`w-screen min-h-screen flex flex-col justify-start items-center mt-12 ${section === 'projects' ? 'drawer' : ''}`}

                                                 id={section}>
                                            {section === 'projects' && (
                                                <input id="my-drawer" type="checkbox" className="drawer-toggle"/>
                                            )}
                                            <Section sectionData={data} language={language} />
                                        </Element>
                                    )
                                })
                            }
                            <Element name={"contact"} className="h-screen w-screen flex flex-col justify-center items-center"
                                     key={"contact"}
                                     id="contact">
                                <Contact  sectionData={data} language={language} ></Contact>
                            </Element>

                        </main>
                        <BottomNav></BottomNav>
                    </>
                    )
            }
        </div>
    )
}