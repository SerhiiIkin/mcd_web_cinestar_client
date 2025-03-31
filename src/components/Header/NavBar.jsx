import { Link } from 'react-router';

import { routes } from '@constants/routes';

import { classes } from '@utils/classes';

const NavBar = ({
    navBarRef,
    isMobile,
    onClickBurgerMenu,
    navBarContentRef,
}) => {
    const navList = routes[0].children
        .filter((route) => route.name !== '')
        .map((route) => {
            return {
                name: route.name,
                href: route.path,
            };
        });

    return (
        <nav
            ref={navBarRef}
            className={classes([
                isMobile && 'bg-primary fixed inset-0 z-20 hidden text-center',
            ])}
        >
            <div
                ref={navBarContentRef}
                className={classes([
                    isMobile
                        ? 'grid content-center gap-10'
                        : 'mr-4 hidden md:flex md:gap-4',
                ])}
            >
                {navList.map((item, i) => (
                    <Link
                        key={i}
                        className="font-just shadow-title text-5xl leading-7 text-white duration-300 hover:text-black"
                        onClick={onClickBurgerMenu}
                        to={item.href}
                    >
                        {item.name}
                    </Link>
                ))}
            </div>
        </nav>
    );
};

export default NavBar;
