'use client';
import {Link as ScrollLink} from 'react-scroll';
import Link from 'next/link';
import { IoMenu } from "react-icons/io5";
import React from "react";
import Image from "next/image";
import {HeaderInterface} from "@/interface/global";
import {useLanguage} from "@/context/language";

type TopNavProps = {
    headerData: HeaderInterface;
}

export default function TopNav(props: TopNavProps) {
    const {headerData} = props;
    const duration = 500;
    const sections = ['home', 'about', 'services', 'projects', 'timeline', 'contact'];
    const {setLanguage, language} = useLanguage();
    const handleCheckBox = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLanguage(e.target.checked ? 'pt' : 'en');
    }

    return (
        <header className="flex flex-row justify-center items-center w-screen h-12 fixed left-0 top-0 bg-neutral-content bg-opacity-70 z-20 m-0">
            <div className="flex flex-row justify-center items-center w-5/6 md:w-3/4">
                <div className="w-32 max-w-32 md:w-28 h-full md:max-w-28 flex flex-row justify-center items-center ">
                    <ScrollLink spy={true} activeClass="active" to={"home"} smooth={true} duration={duration}
                                offset={-100} className="cursor-pointer"
                    >
                        <h3 className="bg-gradient-to-r from-slate-200 via-slate-300 to-slate-400 inline-block text-transparent bg-clip-text font-bold text-md md:text-lg font-poppins">G.
                            Toso</h3>
                    </ScrollLink>
                </div>
                <div role="tablist"
                     className="hidden md:flex flex-row justify-center items-center w-full tabs tabs-bordered font-poppins">
                    {sections.map((section, index) => (
                        <ScrollLink role="tab" to={section} smooth={true} duration={duration} offset={section === 'contact' ? 0 : -100} spy={true}
                                    activeClass="active"
                                    className="text-sm px-1 lg:px-3 cursor-pointer header-link transition duration-75 hover:text-primary"
                                    key={index}
                        >
                            {headerData.sections[index][language].slice(0, 1).toUpperCase() +
                                headerData.sections[index][language].slice(1)}
                        </ScrollLink>
                    ))}
                </div>
                <div className="flex md:hidden flex-row justify-start items-center w-full h-full px-2">
                </div>

                    {/*<div className="flex md:hidden flex-row justify-start items-center w-full h-full px-2">*/}
                    {/*    <details className="relative focus:bg-transparent">*/}
                    {/*        <summary className="p-1 bg-neutral-content bg-opacity-50 list-none cursor-pointer">*/}
                    {/*            <IoMenu className="text-white text-2xl"/>*/}
                    {/*        </summary>*/}
                    {/*        <ul className="absolute left-0 p-2 shadow z-[1] bg-neutral-content bg-opacity-50 rounded-box w-52">*/}
                    {/*            {sections.map((section, index) => (*/}
                    {/*                <li key={index}*/}
                    {/*                    className="w-48 self-center flex flex-row justify-start items-center rounded-md h-6">*/}
                    {/*                    <ScrollLink spy={true} to={section} smooth={true} duration={duration} offset={-50}*/}
                    {/*                                activeClass="active"*/}
                    {/*                                className="w-full h-full px-2 text-neutral text-sm font-poppins cursor-pointer rounded-md hover:bg-base-200 hover:bg-opacity-10 header-link"*/}
                    {/*                                key={index}*/}
                    {/*                    >*/}
                    {/*                        {section.charAt(0).toUpperCase() + section.slice(1)}*/}
                    {/*                    </ScrollLink>*/}
                    {/*                </li>*/}
                    {/*            ))}*/}
                    {/*        </ul>*/}
                    {/*    </details>*/}
                    {/*</div>*/}

                    <div className="w-52 h-full max-w-52 flex flex-row justify-center items-center ">
                        <label className="swap swap-flip text-9xl">
                            <input type="checkbox" onChange={handleCheckBox}/>
                            <div className="swap-off">
                                <Image src={"/icons/en-us.svg"} alt={"English"} width={20} height={20}
                                       className={"rounded-full"}/>
                            </div>
                            <div className="swap-on">
                                <Image src={"/icons/pt-br.svg"} alt={"Portuguese"} width={20} height={20}
                                       className={"rounded-full"}/>
                            </div>
                        </label>
                        <Link
                            href={'/blog'}
                            className="text-white text-lg font-semibold mx-4 tracking-widest cursor-pointer font-poppins hover:text-primary transition duration-75"
                        >
                            Blog
                        </Link>
                    </div>

                </div>

        </header>
);
}
