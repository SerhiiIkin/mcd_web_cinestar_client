import { classes } from '@/utils/classes';

const Loader = ({ className }) => {
    return (
        <span
            className={classes([
                'aspect-square w-4 animate-spin rounded-full border-b border-b-white',
                className,
            ])}
        ></span>
    );
};

export default Loader;
