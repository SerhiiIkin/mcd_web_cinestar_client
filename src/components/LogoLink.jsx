import { Link } from 'react-router';

import { LOGO_WIDTH } from '@constants/constants';

import { classes } from '@utils/classes';

const LogoLink = ({ className, classNameImg }) => (
    <Link
        to="/"
        className={classes([
            'xl:duration-700 xl:hover:scale-110',
            className,
        ])}
    >
        <img
            className={classes([`w-[${LOGO_WIDTH}px]`, classNameImg])}
            src="/logo.png"
            alt="logo"
        />
    </Link>
);

export default LogoLink;
