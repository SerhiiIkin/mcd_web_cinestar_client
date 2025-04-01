import LiquiferBg from './LiquiferBg';
import LogoLink from './LogoLink';

import SectionLayout from '@layouts/SectionLayout';

const Footer = () => {
    return (
        <footer className="relative">
            <SectionLayout classNameContainer="grid place-items-center relative z-10">
                <LogoLink className="pb-9" />
                <p className="text-18 text-center">
                    COPYRIGHT <span className="text-2xl">202 ©</span> CINESTAR
                    | POWERED BY ROMETHEM E STUDIO
                </p>
            </SectionLayout>
           <LiquiferBg />
        </footer>
    );
};

export default Footer;
