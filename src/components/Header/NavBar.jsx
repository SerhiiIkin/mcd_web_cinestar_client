import { NavLink } from 'react-router';

import { routes } from '@constants/constants';

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
                isMobile &&
                    'bg-tertiary fixed inset-0 z-30 hidden text-xl font-bold',
            ])}
        >
            <div
                ref={navBarContentRef}
                className={classes([
                    isMobile
                        ? 'grid content-start gap-y-5 pt-20 pl-10 text-left uppercase'
                        : 'mr-4 hidden md:flex md:gap-4',
                ])}
            >
                {navList.map((item, i) => (
                    <NavLink
                        key={i}
                        className={({ isActive }) =>
                            classes([
                                'text-primary xl:hover:text-secondary duration-300',
                                isActive && 'text-secondary',
                            ])
                        }
                        onClick={onClickBurgerMenu}
                        to={item.href}
                    >
                        {item.name}
                    </NavLink>
                ))}
            </div>
        </nav>
    );
};

export default NavBar;
