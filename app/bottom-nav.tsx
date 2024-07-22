'use client';

import React, {useState} from "react";
import { IoHomeOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { IoBriefcaseOutline } from "react-icons/io5";
import { IoLayersOutline } from "react-icons/io5";
import { PiPathLight } from "react-icons/pi";
import { IoPaperPlaneOutline } from "react-icons/io5";
import {Link as ScrollLink} from 'react-scroll';

export default function BottomNav() {
    const duration = 500;
    const [active, setActive] = useState<string>('home');
    const sections: Record<string, React.ComponentType<{ className?: string }>> = {'home': IoHomeOutline, 'about': IoPersonOutline,
        'services': IoBriefcaseOutline, 'projects': IoLayersOutline,
        'timeline': PiPathLight, 'contact': IoPaperPlaneOutline};
    return (
        <div className="fixed h-16 bottom-0 w-full z-50 rounded-t-md flex md:hidden justify-center px-1 bg-gradient-to-r from-slate-900 to-slate-950 border-t border-base-200/40 shadow-inner shadow-base-200/10">
            <div role="tablist" className="tabs tabs-bordered flex flex-row justify-around items-center w-full h-full">
                {Object.keys(sections).map((key, index) => {
                    const Section = sections[key];

                    return <ScrollLink role="tab" to={key} smooth={true} duration={duration} offset={-50} spy={true}
                                       activeClass="active" key={index} className="flex flex-col justify-center items-center w-1/7">
                        {
                            <Section className={`text-xl`}></Section>
                        }
                    </ScrollLink>
                })}
            </div>
        </div>
    )
}