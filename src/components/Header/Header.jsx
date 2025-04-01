import BurgerButton from './BurgerButton';
import NavBar from './NavBar';

import LogoLink from '@components/LogoLink';

import useHeader from '@hooks/useHeader';

import { classes } from '@utils/classes';

const Header = ({ classNameHeader }) => {
    const {
        openNav,
        setOpenNav,
        onClickBurgerMenu,
        navBarRef,
        navBarContentRef,
    } = useHeader();

    return (
        <>
            <header
                className={classes(['bg-tertiary relative', classNameHeader])}
            >
                <div className="relative container mx-auto flex min-h-20 items-center p-5">
                    {!openNav && <LogoLink className="mr-auto" />}
                    <NavBar />
                    <BurgerButton
                        onClickBurgerMenu={onClickBurgerMenu}
                        openNav={openNav}
                        setOpenNav={setOpenNav}
                    />
                </div>
                <NavBar
                    isMobile
                    navBarRef={navBarRef}
                    onClickBurgerMenu={onClickBurgerMenu}
                    navBarContentRef={navBarContentRef}
                />
            </header>
        </>
    );
};

export default Header;
