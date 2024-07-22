'use client';

import {sectionProps} from "@/interface/global";
import {BsStars} from "react-icons/bs";
import {FaCode} from "react-icons/fa6";
import {FiLayers} from "react-icons/fi";
import {AiOutlineCheck} from "react-icons/ai";

export default function Services(props: sectionProps) {
    const {language, sectionData} = props;


    return (
        <div className="w-5/6 h-full self-center flex flex-col justify-start items-start">
            <div className="w-full flex flex-col justify-center items-center flex-nowrap">
                <h1 className="text-2xl md:text-3xl font-bold text-primary font-poppins tracking-widest bg-gradient-to-r from-slate-200 via-slate-300 to-slate-400 inline-block text-transparent bg-clip-text">
                    {
                        sectionData.services.title[language]
                    }
                </h1>
                <div className="w-full flex flex-row justify-center items-center flex-wrap mt-8">
                    {sectionData.services.list.map((service, index) => {
                        return <div key={index} data-aos={index % 2 == 0 ? "fade-right" : "fade-left"}
                            className="lg:h-[800px] lg:w-1/2 w-full px-1 md:px-4 py-1 ">
                            <div className="w-full h-full rounded-2xl p-[1px] hover:bg-gradient-to-b from-pink-600 to-blue-700">
                            <div
                                className="w-full h-full bg-gradient-to-t from-violet-900/80 via-violet-950/90 to-base-100 rounded-2xl flex flex-col items-center justify-start animate-fadeIn border-t border-l border-base-200/70 drop-shadow-lg p-4">
                                { index== 0 ? <BsStars className="text-primary hover:text-secondary text-2xl"></BsStars> : <FaCode className="text-primary hover:text-secondary text-2xl"></FaCode>}
                                <div className="divider divider-primary font-light tracking-widest text-sm md:text-lg font-poppins">
                                    {
                                        sectionData.services.list[index].title[language]
                                    }
                                </div>
                                <ul className="py-8 px-8 md:px-16 w-full flex flex-col items-center justify-center">

                                    {
                                        sectionData.services.list[index].content[language].split(', ').map((desc, index) => {
                                            return <li key={index}
                                                className="my-2 w-full py-1 flex flex-row items-center">
                                                <div className="mr-4 w-8 flex justify-center items-center">
                                                    <AiOutlineCheck className="text-accent text-lg "></AiOutlineCheck>
                                                </div>
                                                <p className="w-full text-sm md:text-lg tracking-wide text-base-content font-poppins ">
                                                    {desc}
                                                </p>
                                            </li>
                                        })

                                    }
                                </ul>
                            </div>
                            </div>
                        </div>
                    })
                }
                  </div>
            </div>
        </div>
    )
}