import { classes } from '@utils/classes';

const spanClasses = 'absolute h-1 w-full rounded bg-secondary duration-300';

const BurgerButton = ({ onClickBurgerMenu, openNav }) => (
    <button
        className={classes([
            'relative ml-3 h-7 w-9 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent md:hidden',
            openNav && 'ml-auto',
        ])}
        onClick={onClickBurgerMenu}
    >
        <span
            className={classes([
                spanClasses,
                'top-0 left-0',
                openNav ? 'top-1/2 -translate-y-1/2 rotate-45' : '',
            ])}
        ></span>
        <span
            className={classes([
                spanClasses,
                'top-1/2 left-1/3 -translate-y-1/2',
                openNav ? 'w-0 bg-transparent' : '',
            ])}
        ></span>
        <span
            className={classes([
                spanClasses,
                'bottom-0 left-0',
                openNav ? 'top-1/2 -translate-y-1/2 -rotate-45' : '',
            ])}
        ></span>
    </button>
);

export default BurgerButton;
