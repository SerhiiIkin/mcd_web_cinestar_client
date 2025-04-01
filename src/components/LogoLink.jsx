import { Link } from 'react-router';

import { classes } from '@utils/classes';

const LogoLink = ({ className, classNameImg }) => (
    <Link
        to="/"
        className={classes([
            `max-w-48`,
            'xl:duration-700 xl:hover:scale-110',
            className,
        ])}
    >
        <img
            className={classes([``, classNameImg])}
            src="/logo.png"
            alt="logo"
        />
    </Link>
);

export default LogoLink;
