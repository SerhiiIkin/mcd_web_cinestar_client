import BackofficeLayout from '@layouts/BackofficeLayout';
import MainLayout from '@layouts/MainLayout';

import BlogsPage from '@pages/BlogsPage';
import ContactPage from '@pages/ContactPage';
import FaqPage from '@pages/FaqPage';
import HomePage from '@pages/HomePage';
import LoginPage from '@pages/LoginPage';
import SingleBlogPage from '@pages/SingleBlogPage';
import BackofficeBlogsPage from '@pages/backoffice/BackofficeBlogsPage';
import BackofficePage from '@pages/backoffice/BackofficePage';
import EditBlogPage from '@pages/backoffice/EditBlogPage';
import MessagesPage from '@pages/backoffice/MessagesPage';

export const routes = [
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <HomePage />,
                name: 'Forside',
            },
            {
                path: '/blogs',
                element: <BlogsPage />,
                name: 'Blog',
            },
            {
                path: '/blog/:id',
                element: <SingleBlogPage />,
            },
            {
                path: '/faq',
                element: <FaqPage />,
                name: 'FAQ',
            },
            {
                path: '/kontakt',
                element: <ContactPage />,
                name: 'Kontakt',
            },
            {
                path: '/login',
                element: <LoginPage />,
            },
        ],
    },

    {
        path: 'backoffice',
        element: <BackofficeLayout />,
        children: [
            {
                path: '',
                element: <BackofficePage />,
                name: 'Backoffice',
            },
            {
                path: 'messages',
                element: <MessagesPage />,
                name: 'Messages',
            },
            {
                path: 'blogs',
                element: <BackofficeBlogsPage />,
                name: 'Blogs',
            },
            {
                path: 'blog/:id',
                element: <EditBlogPage />,
            },
        ],
    },
];

export const awardsData = [
    {
        id: 1,
        img: 'awards/award1.png',
    },
    {
        id: 2,
        img: 'awards/award2.png',
    },
    {
        id: 3,
        img: 'awards/award3.png',
    },
];

export const portfolioImages = [
    {
        id: 1,
        src: 'daughter_mom.jpg',
        alt: 'daughter_mom',
    },
    {
        id: 2,
        src: 'school_life.jpg',
        alt: 'school_life',
    },
    {
        id: 3,
        src: 'into_your_heart.jpg',
        alt: 'into_your_heart',
    },
];

export const dataServices = () => {
    const CreativeSvg = () => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="96"
            height="96"
            viewBox="0 0 96 96"
            fill="none"
        >
            <g clipPath="url(#clip0_8_62)">
                <path
                    d="M53 57.5278V90.9722H41V57.5278H53ZM71 52.75H65V57.5278H59V52.75H35V57.5278H29V52.75H23V95.75H29V90.9722H35V95.75H59V90.9722H65V95.75H71V52.75ZM59 67.0833V62.3056H65V67.0833H59ZM29 67.0833V62.3056H35V67.0833H29ZM59 76.6389V71.8611H65V76.6389H59ZM29 76.6389V71.8611H35V76.6389H29ZM59 86.1944V81.4167H65V86.1944H59ZM29 86.1944V81.4167H35V86.1944H29Z"
                    fill="#F07232"
                />
                <path
                    d="M48.336 53.9637L47.6228 53.2834L46.9322 53.9868L35.7031 65.4243L34.0335 67.1248H36.4167H81.3333H83.6571L82.0595 65.4373L67.622 50.1873L66.9081 49.4333L66.1815 50.1751L55.6428 60.9331L48.336 53.9637ZM86.75 33.0832V68.6665C86.75 70.7054 84.5399 72.7498 81.3333 72.7498H36.4167C33.2101 72.7498 31 70.7054 31 68.6665V33.0832C31 31.0442 33.2101 28.9998 36.4167 28.9998H81.3333C84.5399 28.9998 86.75 31.0442 86.75 33.0832Z"
                    fill="#F07232"
                    stroke="#262626"
                    strokeWidth="2"
                />
            </g>
            <defs>
                <clipPath id="clip0_8_62">
                    <rect width="96" height="96" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );

    const FilmSvg = () => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="96"
            height="96"
            viewBox="0 0 96 96"
            fill="none"
        >
            <g clipPath="url(#clip0_7_57)">
                <path
                    d="M56 20V76H40V20H56ZM80 12H72V20H64V12H32V20H24V12H16V84H24V76H32V84H64V76H72V84H80V12ZM64 36V28H72V36H64ZM24 36V28H32V36H24ZM64 52V44H72V52H64ZM24 52V44H32V52H24ZM64 68V60H72V68H64ZM24 68V60H32V68H24Z"
                    fill="#F07232"
                />
            </g>
            <defs>
                <clipPath id="clip0_7_57">
                    <rect width="96" height="96" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );

    const TvSvg = () => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="65"
            viewBox="0 0 80 65"
            fill="none"
        >
            <path
                d="M8 64.5C5.8 64.5 3.91733 63.7173 2.352 62.152C0.784 60.584 0 58.7 0 56.5V8.5C0 6.3 0.784 4.41733 2.352 2.852C3.91733 1.284 5.8 0.5 8 0.5H56C58.2 0.5 60.084 1.284 61.652 2.852C63.2173 4.41733 64 6.3 64 8.5V26.5L76.6 13.9C77.2 13.3 77.9173 13.1493 78.752 13.448C79.584 13.7493 80 14.3667 80 15.3V49.7C80 50.6333 79.584 51.2493 78.752 51.548C77.9173 51.8493 77.2 51.7 76.6 51.1L64 38.5V56.5C64 58.7 63.2173 60.584 61.652 62.152C60.084 63.7173 58.2 64.5 56 64.5H8ZM16.1 48.5H47.9C48.7667 48.5 49.384 48.1333 49.752 47.4C50.1173 46.6667 50.0333 45.9667 49.5 45.3L39.8 32.6C39.4 32.0667 38.8667 31.8 38.2 31.8C37.5333 31.8 37 32.0667 36.6 32.6L29 42.5L24.4 36.5C24 35.9667 23.4667 35.7 22.8 35.7C22.1333 35.7 21.6 35.9667 21.2 36.5L14.5 45.3C13.9667 45.9667 13.8827 46.6667 14.248 47.4C14.616 48.1333 15.2333 48.5 16.1 48.5Z"
                fill="#F07232"
            />
        </svg>
    );

    const MusicSvg = () => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="72"
            viewBox="0 0 48 72"
            fill="none"
        >
            <path
                d="M24 0V42.2C21.64 40.84 18.92 40 16 40C7.16 40 0 47.16 0 56C0 64.84 7.16 72 16 72C24.84 72 32 64.84 32 56V16H48V0H24Z"
                fill="#F07232"
            />
        </svg>
    );

    return [
        {
            id: 1,
            title: 'FILM PRODUKTION',
            description:
                'Vi skaber professionelle filmproduktioner, der formidler dit budskab klart, engagerende og visuelt overbevisende.',
            svg: <FilmSvg />,
        },
        {
            id: 2,
            title: 'EN KREATIV RETNING',
            description:
                'Vi sikrer en kreativ retning, der løfter dit projekt fra almindeligt til uforglemmeligt.',
            svg: <CreativeSvg />,
        },
        {
            id: 3,
            title: 'TV PRODUKTION',
            description:
                'Vi leverer komplette løsninger inden for formatudvikling, optagelse og redigering.',
            svg: <TvSvg />,
        },
        {
            id: 4,
            title: 'MUSIK VIDEO',
            description:
                'Lad din musik træde frem i et visuelt univers, der forstærker din lyd og dit budskab.',
            svg: <MusicSvg />,
        },
    ];
};

export const contactInfoData = () => {
    const PhoneSvg = () => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
        >
            <path
                d="M11.0333 17.9833C13.4333 22.7 17.3 26.55 22.0167 28.9667L25.6833 25.3C26.1333 24.85 26.8 24.7 27.3833 24.9C29.25 25.5167 31.2667 25.85 33.3333 25.85C34.25 25.85 35 26.6 35 27.5167V33.3333C35 34.25 34.25 35 33.3333 35C17.6833 35 5 22.3167 5 6.66667C5 5.75 5.75 5 6.66667 5H12.5C13.4167 5 14.1667 5.75 14.1667 6.66667C14.1667 8.75 14.5 10.75 15.1167 12.6167C15.3 13.2 15.1667 13.85 14.7 14.3167L11.0333 17.9833Z"
                fill="#F07232"
            />
        </svg>
    );

    const LocationSvg = () => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
        >
            <path
                d="M20 3.3335C13.55 3.3335 8.33333 8.55016 8.33333 15.0002C8.33333 23.7502 20 36.6668 20 36.6668C20 36.6668 31.6667 23.7502 31.6667 15.0002C31.6667 8.55016 26.45 3.3335 20 3.3335ZM20 19.1668C17.7 19.1668 15.8333 17.3002 15.8333 15.0002C15.8333 12.7002 17.7 10.8335 20 10.8335C22.3 10.8335 24.1667 12.7002 24.1667 15.0002C24.1667 17.3002 22.3 19.1668 20 19.1668Z"
                fill="#F07232"
            />
        </svg>
    );

    const MailSvg = () => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="28"
            viewBox="0 0 40 28"
            fill="none"
        >
            <path
                d="M36 0H4C1.8 0 0.02 1.575 0.02 3.5L0 24.5C0 26.425 1.8 28 4 28H36C38.2 28 40 26.425 40 24.5V3.5C40 1.575 38.2 0 36 0ZM36 7L20 15.75L4 7V3.5L20 12.25L36 3.5V7Z"
                fill="#F07232"
            />
        </svg>
    );

    return [
        {
            id: 1,
            href: 'tel:+4512345678',
            name: '+45 12 34 56 78',
            svg: <PhoneSvg />,
        },
        {
            id: 2,
            href: 'https://maps.app.goo.gl/uECGBfHLAHQRKspg8',
            name: 'Fotovej 66, 8456 Cineby',
            svg: <LocationSvg />,
        },
        {
            id: 3,
            href: 'mailto:cinestar@production.dk',
            name: 'cinestar@production.dk',
            svg: <MailSvg />,
        },
    ];
};

export const linksSocialContact = [
    {
        id: 1,
        name: 'facebook',
        href: 'www.facebook.com',
    },
    {
        id: 2,
        name: 'twitter',
        href: 'www.twitter.com',
    },
    {
        id: 3,
        name: 'instagram',
        href: 'www.instagram.com',
    },
    {
        id: 4,
        name: 'linkedin',
        href: 'www.linkedin.com',
    },
    {
        id: 5,
        name: 'youtube',
        href: 'www.youtube.com',
    },
];
