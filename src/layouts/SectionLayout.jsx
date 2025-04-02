import { classes } from '@utils/classes';

const SectionLayout = ({ children, classNameSection, classNameContainer }) => {
    return (
        <section
            className={classes([
                'py-25 md:py-27 xl:py-29',
                classNameSection ?? '',
            ])}
        >
            <div
                className={classes([
                    'container mx-auto px-5 md:px-7 xl:px-9',
                    classNameContainer ?? '',
                ])}
            >
                {children}
            </div>
        </section>
    );
};

export default SectionLayout;
