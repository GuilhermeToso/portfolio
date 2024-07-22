'use client';

import { BsStars } from "react-icons/bs";
import { FaCode } from "react-icons/fa6";
import { ImCogs } from "react-icons/im";
import { IoIosApps } from "react-icons/io";

import {sectionProps} from "@/interface/global";
import React from "react";
import Image from "next/image";
export default function Skills(props: sectionProps) {
    const {sectionData, language} = props;
    const domainIcons: Record<string, React.ComponentType<{ className?: string }>> = {
        'AI Engineering': BsStars,
        'Web Development': FaCode,
        'DevOps': ImCogs,
        'Software Engineering': IoIosApps,
    }

    function parseTechStack(techStack: string) {
        // substitute space by underscore and lowercase
        return techStack.replace(/\s+/g, '_').toLowerCase()
    }

    return (
        <div className="w-5/6 md:w-3/4 h-full self-center flex flex-col justify-start items-center">
            <div className="w-full flex flex-col justify-center items-center">
                <h2 className="text-2xl md:text-3xl font-bold text-primary font-poppins tracking-widest bg-gradient-to-r from-slate-200 via-slate-300 to-slate-400 inline-block text-transparent bg-clip-text">
                    {
                        sectionData.skills.title[language]
                    }
                </h2>
                <p className="text-base-200 font-poppins font-semibold tracking-wide">
                    {
                        sectionData.skills.subTitle[language]
                    }
                </p>
            </div>
            <div className="w-full flex flex-row flex-wrap justify-center items-center">

                    {
                        sectionData.skills.domains.map((domain, index) => {
                            const Icon = domainIcons[domain.title.en];

                            return (
                                <div key={index} className="w-full lg:w-1/2 h-[420px] lg:h-96 flex flex-row justify-center items-center py-2 lg:px-4">
                                <div className="w-full h-full rounded-md bg-gradient-to-r from-slate-800 via-slate-900 to-slate-950 bg-opacity-80 shadow-lg shadow-slate-900 border-t border-l border-base-200/70 flex flex-col">
                                    <div className="w-full flex flex-row justify-start items-center p-2">
                                        <div className="w-12 h-12 relative">
                                            <div
                                                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 opacity-90 bg-gradient-to-r from-primary via-secondary to-white rounded-full blur-md z-10">
                                            </div>
                                            <div
                                                className="avatar w-10 h-10 rounded-full bg-slate-900 self-center flex justify-center items-center z-20 m-auto">
                                                <Icon className="text-2xl text-primary"></Icon>
                                            </div>
                                        </div>
                                        <div className="pl-4 h-full flex items-center">
                                            <h3 className="bg-gradient-to-r from-slate-200 via-slate-300 to-slate-400 inline-block text-transparent bg-clip-text font-bold text-sm md:text-xl tracking-widest font-poppins">
                                                {domain.title[language]}
                                            </h3>
                                        </div>
                                    </div>
                                    <div className="w-full h-full flex flex-row flex-wrap justify-start items-start mt-1 lg:mt-4 px-2">
                                        {
                                            domain.content.map((skill, index) => {
                                                return (
                                                    <div key={index} className={`w-1/3 lg:w-1/4 lg:h-full flex flex-col justify-start items-center mr-2 lg:pr-4`}>
                                                        <div className="h-8 lg:h-10 w-full text-sm text-base-300 font-poppins text-center">
                                                            {skill.title[language]}
                                                        </div>
                                                        <div className="w-full flex flex-row flex-wrap justify-center items-start">
                                                            {
                                                                skill.list.map((item, index) => {
                                                                    return (
                                                                        <div key={index} className="flex flex-row justify-start items-start">
                                                                            <div className="h-6 w-6 relative m-1 lg:m-2">
                                                                                <Image src={`/icons/${parseTechStack(item)}.svg`} alt={item} fill className={"object-cover"}></Image>

                                                                            </div>
                                                                        </div>
                                                                    )
                                                                })
                                                            }

                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }

                                    </div>
                                </div>

                                </div>
                            )
                        })
                    }
            </div>
        </div>
    )
}