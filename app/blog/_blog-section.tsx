'use client';

import Lottie from "lottie-react";
import construction from "../..//public/animation/construction.json";
import {data} from "@/data/data";
import Link from "next/link";
import {IoChevronBackCircleOutline} from "react-icons/io5";
import {useLanguage} from "@/context/language";

export default function BlogSection() {
    const {language} = useLanguage();
    return (
        <div
            className="w-screen h-screen flex flex-col justify-center items-center bg-gradient-to-tr from-slate-950 via-slate-800 to-slate-700 overflow-hidden">
            <h1 data-aos="zoom-in" data-aos-duration="2000" className="text-5xl font-bold text-primary font-poppins tracking-widest bg-gradient-to-r from-slate-200 via-slate-300 to-slate-400 inline-block text-transparent bg-clip-text py-4">
                {data.blog.title[language]}
            </h1>
            <div data-aos="zoom-in" data-aos-duration="2000" className="w-5/6 md:h-[400px] flex justify-center items-center">
                <Lottie animationData={construction} className="w-full h-full overflow-hidden" loop={true} autoplay={true}/>

            </div>
            <div data-aos="zoom-in" data-aos-duration="2000" className="w-full flex flex-row justify-center items-center mt-8">
                <Link href={"/"} className="flex flex-row justify-center items-center">
                    <IoChevronBackCircleOutline
                        className="text-4xl text-white hover:text-secondary mr-4"></IoChevronBackCircleOutline>
                    <p className="text-2xl text-white font-poppins font-light tracking-widest">
                        {
                            data.blog.button[language]
                        }
                    </p>
                </Link>

            </div>
        </div>

)
}