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
        ],
    },

    {
        path: 'backoffice',
        element: <BackofficeLayout />,
        children: [
            {
                path: '',
                element: <Backoffice />,
                inMenu: true,
                name: 'Backoffice',
            },

            {
                path: 'messages',
                element: <Messages />,
                inMenu: true,
                name: 'Messages',
            },
        ],
    },
];
