'use client';

import Link from "next/link";
import {FaInstagram, FaLinkedinIn} from "react-icons/fa";
import {IoMailOutline, IoLogoGithub} from "react-icons/io5";

type SocialMediaProps = {
    isMobile?: boolean
}

export default function SocialMedia(props: SocialMediaProps) {
    const {isMobile} = props;
    return (
        <div className={`flex ${isMobile ? 'flex-row' : 'flex-col'} items-center justify-center`}>
            <Link className="w-12 h-12 flex flex-row justify-center items-center px-1"
                  href={"https://www.linkedin.com/in/guilherme-toso/"} target="_blank">
                 <FaLinkedinIn className="text-xl text-primary hover:text-primary-focus"/>

                </Link>
            <Link className="w-12 h-12 flex flex-row justify-center items-center px-1"
                  href={"https://github.com/GuilhermeToso"} target="_blank">
                <IoLogoGithub className="text-xl text-primary hover:text-primary-focus"/>
            </Link>
            <Link className="w-12 h-12 flex flex-row justify-center items-center px-1"
                  href={"https://www.instagram.com/guilhermetoso/"} target="_blank">
                <FaInstagram className="text-xl text-primary hover:text-primary-focus"/>
            </Link>
            <Link className="w-12 h-12 flex flex-row justify-center items-center px-1"
                  href={"mailto:guilhermetoso@hotmail.com"} target="_blank">
                <IoMailOutline className="text-xl text-primary hover:text-primary-focus"/>
            </Link>

        </div>
    )
}