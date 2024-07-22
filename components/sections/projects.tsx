'use client';

import {useState} from "react";
import Image from "next/image";
import { IoIosArrowRoundForward } from "react-icons/io";
import {ListOfProjects, Project, sectionProps} from "@/interface/global";
import { MdOutlineWorkOutline } from "react-icons/md";
import { CiUser } from "react-icons/ci";
import { IoIosBusiness } from "react-icons/io";
import {BsStars} from "react-icons/bs";



export default function Projects(props: sectionProps) {
    const {sectionData, language} = props;
    const [activeProject, setActiveProject] = useState<Project >({id: 0})

    function parseTechStack(techStack: string) {
        // substitute space by underscore and lowercase
        return techStack.replace(/\s+/g, '_').toLowerCase()
        }

    return (<>
            <div className="drawer-content w-5/6 md:w-3/4 h-full self-center flex flex-col justify-start items-start">
                    <div className="w-full flex flex-row justify-center items-center mb-1">

                        <h1 className="text-3xl font-bold text-primary font-poppins tracking-widest bg-gradient-to-r from-slate-200 via-slate-300 to-slate-400 inline-block text-transparent bg-clip-text">
                            {
                                sectionData.projects.title[language]
                            }
                        </h1>
                    </div>
                    <div className="w-full mt-8 flex flex-col justify-start items-start">
                        {
                            sectionData.projects.list.map((domain, index) => {
                                return (
                                    <div key={domain.domain[language]} className="w-full flex flex-col justify-start items-center mb-4">
                                        <div className="w-full h-10 flex flex-row justify-start items-center">
                                            <h2 className="text-xl md:text-3xl tracking-widest font-semibold my-1 font-poppins text-white/80">
                                                {domain.domain[language]}
                                            </h2>
                                        </div>
                                        <div data-aos="fade-right" className="w-full flex flex-col lg:flex-row lg:flex-wrap justify-start items-center p-2">
                                            {
                                                domain.content.map((project, tabIndex) => {
                                                    return (
                                                        <label htmlFor="my-drawer"
                                                               className="w-[360px] h-32 my-1 lg:mx-2 p-[2px] flex flex-row justify-start items-center rounded-2xl hover:bg-gradient-to-b from-pink-600 to-blue-700 cursor-pointer hover:scale-105 transition duration-200 "
                                                               key={project.id}
                                                               onClick={() => setActiveProject(project)}>
                                                            <div className="w-full h-full flex flex-row justify-start items-center bg-gradient-to-t from-violet-900/80 via-violet-950/90 to-base-100 rounded-2xl border-t border-l border-base-200/70 py-1 pl-8">
                                                                <div className="w-20 h-20 aspect-square rounded-t-md relative mr-2">
                                                                    <Image src={project.image as string} alt={project.title?.en as string} fill
                                                                           className="object-fit aspect-square"></Image>
                                                                </div>
                                                                <div className="w-3/4 flex flex-col justify-center items-start">
                                                                            <h2 className="text-white font-poppins tracking-wide font-semibold text-lg">
                                                                                {project.title?.[language]}
                                                                            </h2>
                                                                    <p className="text-white text-sm font-light font-poppins mt-2">
                                                                        {
                                                                            project.shortDescription?.[language]
                                                                        }
                                                                    </p>
                                                                </div>
                                                            </div>

                                                        </label>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>)

                            })
                        }

                    </div>

            </div>
            <div className="drawer-side z-30">
                <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay z-50"></label>
                <ul className="menu bg-gradient-to-t from-slate-950 via-indigo-950 to-slate-900 text-base-content min-h-full pt-12 w-[90%] sm:w-[75%] md:w-[60%] lg:w-[50%] 2xl:w-[40%] z-50 border-r border-r-base-200/40">
                    <div className="w-full h-full px-4 flex flex-col justify-start items-start">
                        <div className="w-full flex flex-row items-center justify-between">

                            {activeProject.title && (
                                <h1 className="text-3xl lg:text-4xl tracking-wide font-bold mt-4 brightness-125 font-montserrat bg-gradient-to-r from-slate-200 via-slate-300 to-slate-400 inline-block text-transparent bg-clip-text">
                                    {activeProject.title[language]}
                                </h1>

                            )}
                            <label htmlFor="my-drawer" className="border rounded-full drawer-button mt-4">
                                <IoIosArrowRoundForward className="text-2xl"></IoIosArrowRoundForward>
                            </label>
                        </div>
                        {
                            activeProject.status ? (
                                <div className="w-full flex flex-row justify-start items-center">
                                    <h3 className="text-sm tracking-wide font-semibold my-1 font-poppins text-info">
                                        {activeProject.status[language]}
                                    </h3>
                                </div>
                            ) : null
                        }
                        <div className="w-ful flex flex-row justify-start items-center">
                            {
                                activeProject.jobTitle && activeProject.duration ? (
                                        <h3 className="text-lg tracking-wide font-semibold my-1 font-poppins text-white">
                                            {activeProject.jobTitle[language]} - {activeProject.duration[language]}
                                        </h3>
                                    ) :
                                    activeProject.jobTitle ? (
                                            <h3 className="text-lg tracking-wide font-semibold my-1 font-poppins text-white">
                                                {activeProject.jobTitle[language]}
                                            </h3>
                                        ) :
                                        activeProject.duration ? (
                                            <h3 className="text-lg tracking-wide font-semibold my-1 font-poppins text-white">
                                                {activeProject.duration[language]}
                                            </h3>
                                        ) : null
                            }

                        </div>
                        {activeProject.company && (<div className="w-full flex flex-row">
                            <h2 className="text-md tracking-wide font-normal my-1 font-poppins text-white">{activeProject.company[language]}</h2>

                        </div>)}
                        <div className="w-ful flex flex-row justify-start items-center">
                            {
                                activeProject.contractType ? (
                                    <h3 className="text-md tracking-wide my-1 font-poppins text-white">{activeProject.contractType[language]}</h3>
                                ) : null

                            }
                        </div>
                        {
                            activeProject.image && activeProject.title ? (
                                <div className="w-full h-56 flex flex-row justify-center items-center">
                                    <div className="w-48 h-[168px] relative">
                                        <Image src={activeProject.image} alt={activeProject.title.en} fill
                                               className=" object-fit aspect-square"></Image>

                                    </div>
                                </div>
                            ) : null
                        }
                        {
                            activeProject.description ? (
                                <div className="w-full h-auto mt-2 text-base tracking-widest font-poppins font-light text-base-300"
                                     dangerouslySetInnerHTML={{ __html: activeProject.description[language] }}>
                                </div>
                            ) : null
                        }
                        {
                            activeProject.link ? (
                                <div className="w-full flex flex-row justify-start items-center mt-2">
                                    <p>
                                        <span className="text-base tracking-widest font-poppins font-light text-white/70 mr-2">Link:</span>
                                    </p>
                                    <a href={activeProject.link} target="_blank"
                                       className="text-sm tracking-widest font-poppins font-light text-accent underline underline-offset-4 hover:text-secondary-focus">
                                        {activeProject.link}
                                    </a>
                                </div>
                            ) : null
                        }
                        {
                            activeProject.techStack ? (
                                <div className="w-full flex flex-col justify-start items-start">
                                    <h2 className="text-xl tracking-wide font-semibold my-4 font-poppins text-accent underline underline-offset-4 brightness-130 hover:text-secondary-focus">Tech
                                        Stack</h2>
                                    <div className="w-full flex flex-row justify-start items-start flex-wrap">
                                        {
                                            Object.keys(activeProject.techStack).length > 0 ? (
                                                Object.entries(activeProject.techStack).map(([techName, techs], _) => {
                                                    return <div
                                                        className="w-full px-2 flex flex-col justify-start items-center rounded-2xl bg-transparent m-2"
                                                        key={techName}>
                                                        <div className="divider text-base tracking-widest font-poppins font-light">
                                                            {techName.slice(0, 1).toUpperCase() + techName.slice(1)}
                                                        </div>
                                                        <div
                                                            className="w-full h-full flex flex-row flex-wrap justify-start items-start">
                                                            {
                                                                techs.map((tech, techIndex) => {
                                                                    if (tech === "undefined") {
                                                                        return <h3 className="text-warning" key={techIndex}>
                                                                            {language === 'en' ? 'Under development' : 'Em desenvolvimento'}
                                                                        </h3>
                                                                    }
                                                                    return (
                                                                        <div key={tech} className="w-48 h-20 m-2 flex flex-col justify-center items-center bg-gradient-to-tr from-base-100 via-slate-900 to-slate-800 rounded-md">
                                                                            <div className="h-8 w-8 relative m-1"
                                                                                 key={tech}>
                                                                                <Image
                                                                                    src={`/icons/${parseTechStack(tech)}.svg`}
                                                                                    alt={tech}
                                                                                    title={tech}
                                                                                    fill
                                                                                    className="object-fit aspect-square"></Image>
                                                                            </div>
                                                                            <p>
                                                                                <span
                                                                                    className="text-xs tracking-wide font-light text-white">{tech}</span>
                                                                            </p>
                                                                        </div>
                                                                    )
                                                                })
                                                            }
                                                        </div>
                                                    </div>
                                                })
                                            ) : null

                                        }
                                    </div>
                                </div>
                            ) : null
                        }
                    </div>
                </ul>
            </div>
        </>
    )
}