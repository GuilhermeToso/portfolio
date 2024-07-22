'use client';

import {sectionProps} from "@/interface/global";
import Image from "next/image";
import { FaBookOpen } from "react-icons/fa";
import { CgGym } from "react-icons/cg";
import { MdDirectionsRun } from "react-icons/md";

export default function About(props: sectionProps) {
    const {sectionData, language} = props;

    return (
        <div className="w-11/12 md:w-3/4 h-full self-center flex flex-col justify-start items-center">
            <h2 className="text-2xl md:text-3xl font-bold text-primary font-poppins tracking-widest bg-gradient-to-r from-slate-200 via-slate-300 to-slate-400 inline-block text-transparent bg-clip-text">
                {sectionData.about.title[language]}
            </h2>
            <div data-aos="fade-up"
                 data-aos-duration="1000" className="mt-8 xl:h-[700px] w-full rounded-2xl p-[1px] hover:bg-gradient-to-b from-pink-600 to-blue-700">
                <div
                    className="flex flex-col lg:flex-row lg:flex-wrap w-full h-full bg-gradient-to-tr from-base-100/80 via-[#1C1959]/90 to-[#47438C]/95 rounded-2xl px-2 py-4 lg:p-8 border-t border-l border-base-200/70">
                    <div
                        className="w-full lg:w-1/2 flex flex-col justify-center items-center bg-transparent">
                        <div className="avatar">
                            <div
                                className="w-56 h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 relative rounded-full shadow-xl">
                                <Image
                                    src="/images/about-img-7.jpg"
                                    alt="Guilherme Toso"
                                    layout="fill"
                                    objectFit="cover"
                                    className={`rounded-full`}
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                    <div className="w-full mt-4 lg:mt-0 lg:w-1/2 flex flex-col justify-center items-center bg-transparent">
                        <div className="font-montserrat text-sm lg:text-base 2xl:text-lg tracking-wide text-base-300" dangerouslySetInnerHTML={{ __html: sectionData.about.description[language]}}>

                        </div>
                        <div className="w-full flex flex-col justify-center items-center my-4">
                            <div className="divider divider-accent font-poppins font-light text-white">Hobbies</div>
                            <div className="w-full flex flex-row justify-center items-center">
                                <FaBookOpen className="text-2xl text-accent mr-4" title={sectionData.about.hobbies[0][language]}/>
                                <CgGym className="text-2xl text-accent mr-4" title={sectionData.about.hobbies[1][language]}/>
                                <MdDirectionsRun className="text-2xl text-accent" title={sectionData.about.hobbies[2][language]}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}