import { useGSAP } from '@gsap/react';
import { useRef, useState } from 'react';
import { Link } from 'react-router';

import { routes } from '@constants/constants';
import gsap from 'gsap';

import Arrow from '@components/Arrow';

const BackofficeSideBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const sideBarLinks = routes[1].children
        .filter((route) => route.name)
        .map((route) => {
            return {
                name: route.name,
                href: `/backoffice/${route.path}`,
            };
        });

    const sideBar = useRef(null);
    const arrowSvg = useRef(null);

    const { contextSafe } = useGSAP({ scope: sideBar });
    const duration = 0.5;

    const handleSideBar = contextSafe(() => {
        setIsOpen((prev) => !prev);

        gsap.to(sideBar.current, {
            translateX: isOpen ? '-100%' : 0,
            duration,
            ease: 'power3.inOut',
        });
        gsap.to(arrowSvg.current, {
            rotate: isOpen ? -90 : 90,
            duration,
        });
    });

    return (
        <>
            <aside ref={sideBar} className="fixed z-50 -translate-x-full">
                <button
                    onClick={handleSideBar}
                    type="button"
                    className="bg-secondary absolute top-1/2 right-0 translate-x-full -translate-y-1/2 rounded-tr-2xl rounded-br-2xl p-2"
                >
                    <Arrow ref={arrowSvg} className="-rotate-90 fill-white" />
                </button>
                <ul className="bg-secondary grid min-h-screen content-center gap-4 rounded-t-lg rounded-b-lg p-2">
                    {sideBarLinks.map((link, index) => (
                        <li key={index}>
                            <Link onClick={handleSideBar} to={link.href}>
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </aside>
        </>
    );
};

export default BackofficeSideBar;
