import BackofficeLayout from '@layouts/BackofficeLayout';
import MainLayout from '@layouts/MainLayout';

import Home from '@pages/Home';
import Backoffice from '@pages/backoffice/Backoffice';
import Messages from '@pages/backoffice/Messages';

export const routes = [
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />,
                name: 'Forside',
            },
            {
                path: '/blog',
                element: <Home />,
                name: 'Blog',
            },
            {
                path: '/blog/:id',
                element: <Home />,
            },
            {
                path: '/faq',
                element: <Home />,
                name: 'FAQ',
            },
            {
                path: '/kontakt',
                element: <Home />,
                name: 'Kontakt',
            },
        ],
    },

    {
        path: 'backoffice',
        element: <BackofficeLayout />,
        children: [
            {
                path: '',
                element: <Backoffice />,
                name: 'Backoffice',
            },

            {
                path: 'messages',
                element: <Messages />,
                name: 'Messages',
            },
        ],
    },
];

export const LOGO_WIDTH = 190;
