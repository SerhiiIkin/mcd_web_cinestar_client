import { classes } from '@utils/classes';

const Title = ({ type, className, children }) => {
    const titleClasses = 'font-cormorant text-center font-bold';

    switch (type) {
        case 'h2':
            return (
                <h2 className={classes([titleClasses, 'text-5xl', className])}>
                    {children}
                </h2>
            );
        case 'h3':
            return (
                <h3 className={classes([titleClasses, 'text-3xl', className])}>
                    {children}
                </h3>
            );

        case 'h4':
            return (
                <h4 className={classes([titleClasses, 'text-2xl', className])}>
                    {children}
                </h4>
            );
        case 'h5':
            return (
                <h5 className={classes([titleClasses, 'text-xl', className])}>
                    {children}
                </h5>
            );

        default:
            return (
                <h1 className={classes([titleClasses, 'text-5xl', className])}>
                    {children}
                </h1>
            );
    }
};

export default Title;
