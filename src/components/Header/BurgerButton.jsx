import { classes } from '@utils/classes';

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
                'absolute top-0 left-0 h-1 w-full rounded bg-white duration-300',
                openNav ? 'top-1/2 -translate-y-1/2 rotate-45' : '',
            ])}
        ></span>
        <span
            className={classes([
                'absolute top-1/2 left-0 h-1 w-full -translate-y-1/2 rounded bg-white duration-300',
                openNav ? 'w-0 bg-transparent' : '',
            ])}
        ></span>
        <span
            className={classes([
                'absolute bottom-0 left-0 h-1 w-full rounded bg-white duration-300',
                openNav ? 'top-1/2 -translate-y-1/2 -rotate-45' : '',
            ])}
        ></span>
    </button>
);

export default BurgerButton;
