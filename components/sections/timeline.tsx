'use client';

import {sectionProps} from "@/interface/global";
import { IoIosLink } from "react-icons/io";

export default function Timeline(props: sectionProps) {
    const { language, sectionData } = props;
    return (
        <div className="w-5/6 md:w-3/4 h-full self-center flex flex-col justify-start items-center">
            <h2 className="text-2xl md:text-3xl font-bold text-primary font-poppins tracking-widest bg-gradient-to-r from-slate-200 via-slate-300 to-slate-400 inline-block text-transparent bg-clip-text">
                {sectionData.timeline.title[language]}
            </h2>

                <ul className="timeline timeline-vertical max-md:timeline-compact mt-8">
                    {
                        sectionData.timeline.list.map((item, index) => {

                            const isEven = index % 2 === 0;
                            return (
                                <li key={index}>
                                    {
                                        index !== 0 ? (
                                            <hr className="bg-primary"></hr>
                                        ) : null
                                    }
                                    <div
                                        data-aos={isEven ? 'flip-left' : 'flip-right'} className={`timeline-end ${isEven ? 'md:timeline-start' : 'md:timeline-end'} mb-5 ${isEven ? 'mr-2' : 'ml-2'} `}>
                                        <div
                                            className="w-[360px] h-56 md:w-[400px] md:h-50 p-1 rounded-2xl hover:bg-gradient-to-b from-pink-600 to-blue-700 hover:scale-105 transition duration-200 ">
                                            <div
                                                className="bg-gradient-to-t from-violet-900/80 via-violet-950/90 to-base-100 rounded-2xl border-t border-l border-base-200/70 p-4 w-full h-full flex flex-col justify-evenly ">
                                                <h3 className="text-lg font-bold font-poppins">{item.title[language]}</h3>
                                                <time className="font-montserrat text-sm">{item.time[language]}</time>
                                                {
                                                    item.link ? (
                                                        <IoIosLink
                                                            className="text-accent text-2xl hover:text-primary cursor-pointer"
                                                            onClick={() => window.open(item.link)}></IoIosLink>
                                                    ) : null
                                                }
                                                <p className="text-base-content font-montserrat">{item.description[language]}</p>
                                            </div>
                                        </div>

                                    </div>
                                    {
                                        index !== sectionData.timeline.list.length - 1 ? (
                                            <hr className="bg-primary"></hr>
                                        ) : null
                                    }

                                </li>
                            )
                        })
                    }

                </ul>
            </div>

    )
}