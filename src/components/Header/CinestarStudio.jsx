import { useGSAP } from '@gsap/react';
import { useRef, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import gsap from 'gsap';

import SectionLayout from '@layouts/SectionLayout';

import Title from '@components/Title';

import { classes } from '@utils/classes';

const PlayCircle = ({ className, ...props }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 96 96"
            fill="none"
            className={className}
            {...props}
        >
            <path
                d="M40 66L64 48L40 30V66ZM48 8C25.92 8 8 25.92 8 48C8 70.08 25.92 88 48 88C70.08 88 88 70.08 88 48C88 25.92 70.08 8 48 8ZM48 80C30.36 80 16 65.64 16 48C16 30.36 30.36 16 48 16C65.64 16 80 30.36 80 48C80 65.64 65.64 80 48 80Z"
                fill="#F07232"
            />
        </svg>
    );
};

const Video = ({ classNameContainer, className, ...props }) => {
    const [controls, setControls] = useState(false);
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)',
    });
    const [isPlaying, setIsPlaying] = useState(false);

    const videoContainerRef = useRef(null);
    const previewContainerRef = useRef(null);
    const videoRef = useRef(null);

    const { contextSafe } = useGSAP({ scope: videoContainerRef });

    const videoHandler = contextSafe(() => {
        setIsPlaying((prev) => !prev);
        if (isPlaying) {
            videoRef.current.play();
        } else {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
        }
        gsap.to(previewContainerRef.current, {
            opacity: isPlaying ? 0 : 1,
            duration: 0.5,
            zIndex: isPlaying ? -10 : 10,
            ease: 'power3.inOut',
        });
    });

    return (
        <div className="relative" ref={videoContainerRef}>
            <div
                ref={previewContainerRef}
                className="absolute top-0 left-0 z-10"
            >
                <PlayCircle
                    onClick={videoHandler}
                    className="absolute top-1/2 left-1/2 z-20 aspect-square w-24 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                />
                <img
                    src="studio3.jpg"
                    className="aspect-video w-full"
                    alt="preview image"
                />
            </div>
            <video
                onPause={videoHandler}
                ref={videoRef}
                className={classes(['aspect-video w-full', className])}
                {...props}
                controls={isDesktopOrLaptop ? controls : true}
                onMouseEnter={() => setControls(true)}
                onMouseLeave={() => setControls(false)}
            ></video>
        </div>
    );
};

const CinestarStudio = () => {
    return (
        <SectionLayout classNameSection="py-25" classNameContainer="grid gap-8">
            <article>
                <Title type="h5" className="text-secondary text-left">
                    CINESTAR STUDIO
                </Title>
                <Title type="h3" className="pb-5 text-left">
                    HAR DU EN IDÉ TIL DIT NÆSTE PROJEKT ?
                </Title>
                <p className="pb-5 text-xl">
                    Lad os omsætte dine visioner til levende billeder, der
                    fænger dit publikum. Hos os får du en professionel, kreativ
                    proces fra idéudvikling til færdig produktion.
                </p>
            </article>
            <article>
                <Video src="cinestar_studio_video.mp4" muted />
            </article>
            <Title type="h5" className="text-left">
                TØV IKKE MED AT VÆLGE CINESTAR TIL DIT NÆSTE FILM-PROJEKT
            </Title>
            <p className="text-xl font-medium">
                Hos Cinestar kombinerer vi vores passion for historiefortælling
                med et skarpt øje for detaljen. Med moderne udstyr og et
                erfarent team sikrer vi, at din produktion løfter sig fra skitse
                til strålende slutresultat – hver gang.
            </p>
            <article className="text-center">
                <p className="text-40 text-secondary font-bold">250+</p>
                <p className="text-xl font-bold">FILM PRODUKTION</p>
            </article>
            <article className="text-center">
                <p className="text-40 text-secondary font-bold">78+</p>
                <p className="text-xl font-bold">MUSIK VIDEO</p>
            </article>
        </SectionLayout>
    );
};

export default CinestarStudio;
