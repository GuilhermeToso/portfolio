'use client';

import {sectionProps} from "@/interface/global";
import SocialMedia from "@/components/social-media";
import Link from "next/link";
import {FaInstagram, FaLinkedinIn} from "react-icons/fa";
import {IoLogoGithub, IoMailOutline} from "react-icons/io5";

export default function Contact(props: sectionProps) {
    const { language, sectionData } = props;
    return (
        <div className="w-5/6 md:w-3/4 h-full self-center flex flex-col justify-start items-center">
            <div data-aos="zoom-in" data-aos-duration="2000" className="w-full h-[700px] lg:h-full flex flex-col lg:flex-row justify-start items-center mt-28 bg-gradient-to-tr from-slate-950 via-base-100/70 to-base-200/80 rounded-2xl mb-16 lg:mb-8">
                <div className="flex flex-col justify-evenly items-center w-full lg:h-full lg:w-1/2 px-8 pt-8 lg:pt-0 lg:px-0">
                    <div className="w-full 2xl:w-[400px] flex flex-row justify-start items-center">
                        <h1 className="text-5xl lg:text-7xl font-bold text-primary font-poppins tracking-widest bg-gradient-to-r from-slate-200 via-slate-300 to-slate-400 inline-block text-transparent bg-clip-text">
                            {sectionData.contact.leftSide[0][language]}
                        </h1>
                    </div>
                    <div className="w-full 2xl:w-[400px] flex flex-row justify-center items-center">
                        <h1 className="text-5xl lg:text-7xl italic font-bold text-primary font-poppins tracking-widest bg-gradient-to-r from-slate-200 via-slate-300 to-slate-400 inline-block text-transparent bg-clip-text">
                            {sectionData.contact.leftSide[1][language]}
                        </h1>
                    </div>
                    <div className="w-full 2xl:w-[400px] flex flex-row justify-end items-center">
                        <h1 className="text-5xl lg:text-7xl font-bold text-primary font-poppins tracking-widest bg-gradient-to-r from-slate-200 via-slate-300 to-slate-400 inline-block text-transparent bg-clip-text">
                            {sectionData.contact.leftSide[2][language]}
                        </h1>
                    </div>
                    <div className="w-full flex flex-row justify-center items-end mt-8">
                        <h1 className="text-xl italic font-bold text-primary font-poppins tracking-widest bg-gradient-to-r from-slate-200 via-slate-300 to-slate-400 inline-block text-transparent bg-clip-text">
                            {sectionData.contact.leftSide[3][language]}
                        </h1>
                    </div>
                </div>
                <div className="flex flex-col justify-start items-center w-full lg:h-full lg:w-1/2 lg:px-8 pt-8 lg:pt-28">
                    <div className="divider text-2xl tracking-widest font-poppins font-semibold">
                        {
                            sectionData.contact.rightSide.title[language]
                        }
                    </div>
                    <div className="w-full h-36 flex flex-row items-start justify-center pt-8">
                        <div className={`flex flex-row items-center justify-center`}>
                            <Link className="w-16 h-16 flex flex-row justify-center items-center px-1"
                                  href={"https://www.linkedin.com/in/guilherme-toso/"} target="_blank">
                                <FaLinkedinIn className="text-2xl text-accent hover:text-accent-focus"/>

                            </Link>
                            <Link className="w-16 h-16 flex flex-row justify-center items-center px-1"
                                  href={"https://github.com/GuilhermeToso"} target="_blank">
                                <IoLogoGithub className="text-2xl text-accent hover:text-accent-focus"/>
                            </Link>
                            <Link className="w-16 h-16 flex flex-row justify-center items-center px-1"
                                  href={"https://www.instagram.com/guilhermetoso/"} target="_blank">
                                <FaInstagram className="text-2xl text-accent hover:text-accent-focus"/>
                            </Link>
                            <Link className="w-16 h-16 flex flex-row justify-center items-center px-1"
                                  href={"mailto:guilhermetoso@hotmail.com"} target="_blank">
                                <IoMailOutline className="text-2xl text-accent hover:text-accent-focus"/>
                            </Link>

                        </div>
                    </div>
                    <div className="divider text-2xl tracking-widest font-poppins font-semibold">
                        {
                            sectionData.contact.rightSide.text[language]
                        }
                    </div>
                    <Link
                        className="w-64 h-14 mt-8 p-[2px] bg-transparent hover:bg-gradient-to-b hover:from-pink-500 hover:via-blue-600 hover:to-accent flex flex-row justify-center items-center rounded-2xl"
                        href={"https://calendly.com/guilhermetoso/30min"}
                        target="_blank"
                    >
                        <div
                            className="w-full h-full bg-gradient-to-tr from-purple-800 via-purple-700 to-purple-400 text-white font-semibold text-base lg:text-lg uppercase flex flex-row justify-center items-center rounded-2xl">

                            <p>{
                                sectionData.contact.rightSide.button[language]
                            }</p>
                        </div>
                    </Link>
                </div>
            </div>

        </div>
    )
}