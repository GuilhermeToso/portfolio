'use client';
import Link from 'next/link';
import Image from "next/image";
import {useEffect, useRef, useState} from "react";
import SocialMedia from "@/components/social-media";
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import {EffectCoverflow, Navigation, Pagination} from "swiper/modules";
import {HomeInterface} from "@/interface/global";
import {useLanguage} from "@/context/language";

Swiper.use([Navigation, Pagination, EffectCoverflow]);

type HomeProps = {
    homeData: HomeInterface

}


export default function Home(props: HomeProps) {
    const {homeData} = props;
    const [imageLoaded, setImageLoaded] = useState(false);
    const swiperRef = useRef<HTMLDivElement | null>(null);

    const {language} = useLanguage();

    const handleImageLoad = () => {
        setImageLoaded(true);
    };

    useEffect(() => {
        if (swiperRef.current) {
            const swiper = new Swiper(swiperRef.current, {
                effect: 'coverflow',
                grabCursor: true,
                centeredSlides: true, // Ensures the main slide is centered
                slidesPerView: 1.5, // Default setting for smallest screens
                spaceBetween: 10, // Default setting for smallest screens
                loop: true,
                breakpoints: {
                    640: {
                        slidesPerView: 3,
                        spaceBetween: 15,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 15,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    1280: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    1536: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    }
                },
                coverflowEffect: {
                    rotate: 50,
                    stretch: 10,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
            });

            return () => {
            swiper.destroy(true, true);
        };
        }
    }, []);


    return (
        <div className="w-5/6 md:w-3/4 h-full self-center flex flex-col justify-start items-start">


            <div className="flex flex-col-reverse lg:flex-row w-full h-full mx-auto justify-center items-center mt-4 lg:mt-0">
                <div className="w-20 h-full lg:flex hidden flex-col items-center justify-center">
                    <SocialMedia isMobile={false}></SocialMedia>
                </div>
                <div
                    data-aos="fade-right" className="w-full lg:w-1/2 lg:h-full lg:min-w-[360px] max-w-[600px] flex flex-col justify-start lg:justify-center items-start rounded-lg lg:px-2 mt-4 lg:mt-0">
                    <div className="w-full  flex flex-col justify-start lg:justify-center items-start bg-base-100/60">
                        <h1 className=" text-3xl md:text-4xl lg:text-5xl font-bold text-primary font-poppins tracking-widest bg-gradient-to-r from-slate-200 via-slate-300 to-slate-400 inline-block text-transparent bg-clip-text mb-4 lg:mb-8">Guilherme
                            Toso</h1>
                        <h3 className="mb-2 text-base lg:text-2xl tracking-widest font-poppins font-light text-indigo-300">
                            {
                                homeData.jobTitle[language]
                            }
                        </h3>
                        <p className="text-sm lg:text-base tracking-wider text-base-content font-light font-montserrat mb-4">
                            {homeData.description[language]}
                        </p>

                    </div>
                    <div className="flex flex-row justify-start items-center w-full mt-2 py-1">

                        <a
                            href={`/assets/gmt-cv-${language}.pdf`}
                            className="w-48 h-12 mr-2 md:mr-4 p-[1px] bg-transparent hover:bg-gradient-to-b hover:from-pink-500 hover:via-blue-600 hover:to-accent flex flex-row justify-center items-center rounded-md"
                            download="guilherme-toso-cv.pdf"
                        >
                            <div className="w-full h-full bg-gradient-to-tr from-purple-800 via-purple-700 to-purple-400 text-white font-semibold text-sm lg:text-base uppercase flex flex-row justify-center items-center rounded-lg hover:rounded-md">
                                <p>{homeData.cvButton[language]}</p>
                            </div>

                        </a>
                        <Link
                            className="w-48 h-12 mr-2 md:mr-4 p-[1px] bg-transparent hover:bg-gradient-to-b hover:from-pink-500 hover:via-blue-600 hover:to-accent flex flex-row justify-center items-center rounded-md"
                            href={"https://calendly.com/guilhermetoso/30min"}
                            target="_blank"
                        >
                            <div
                                className="w-full h-full bg-gradient-to-tr from-purple-800 via-purple-700 to-purple-400 text-white font-semibold text-sm lg:text-base uppercase flex flex-row justify-center items-center rounded-lg hover:rounded-md">

                                <p>{
                                    homeData.callButton[language]
                                }</p>
                            </div>
                        </Link>

                    </div>
                </div>
                <div
                    data-aos="fade-left" className="w-full lg:w-1/2 flex flex-col justify-center items-center bg-transparent">
                    <div className="avatar">
                        <div className="w-56 h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 relative rounded-full shadow-xl">
                            <Image
                                src="/guilherme_toso.png"
                                alt="Guilherme Toso"
                                layout="fill"
                                objectFit="cover"
                                className={`rounded-full brightness-115 ${imageLoaded ? '' : 'opacity-0'}`}
                                onLoadingComplete={handleImageLoad}
                                priority
                            />
                        </div>
                    </div>
                    <div className="w-full h-12 lg:hidden flex flex-row items-center justify-center">
                        <SocialMedia isMobile={true}></SocialMedia>
                    </div>
                </div>
            </div>


        </div>
    );
}