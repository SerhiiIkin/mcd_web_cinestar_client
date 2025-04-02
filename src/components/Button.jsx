import { classes } from '@utils/classes';

const Button = ({ className, variable = 'primary', children, ...props }) => {
    const primaryClasses =
        'bg-transparent outline outline-secondary xl:hover:text-primary xl:hover:bg-secondary disabled:hover:bg-transparent text-secondary ';
    const rejectClasses =
        ' bg-reject text-white xl:hover:bg-white xl:hover:text-reject disabled:hover:bg-reject';

    const generalClasses = [
        variable === 'primary' && primaryClasses,
        variable === 'reject' && rejectClasses,
        'py-5 px-16 duration-700',
        'disabled:cursor-not-allowed  disabled:hover:text-secondary',
        className,
    ];

    return (
        <button
            type="button"
            className={classes([...generalClasses, ''])}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
