import { useGSAP } from '@gsap/react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'react-loading-skeleton/dist/skeleton.css';

import gsap from 'gsap';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './index.css';
import './styles/swiper.css';

import MainRoute from '@routes/MainRoute';

gsap.registerPlugin(useGSAP);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <MainRoute />
    </StrictMode>,
);
