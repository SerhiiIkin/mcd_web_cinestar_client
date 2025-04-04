import { classes } from '@utils/classes';

const ChangeSlideButton = ({ direction }) => {
    return (
        <button
            className={classes([
                direction == 'prev'
                    ? 'btn-prev left-0 rotate-180'
                    : 'btn-next right-0',
                'bg-sixth xl:hover:bg-tertiary text-secondary xl:hover:text-primary absolute top-1/2 z-10 grid aspect-square w-[var(--width-swiper-nav-btn)] -translate-y-[calc(50%+var(--padding-bottom-swiper-wrapper)/2)] place-items-center duration-700',
            ])}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="40"
                viewBox="0 0 27 41"
                fill="none"
            >
                <path
                    d="M1.32965 5.08741L16.5362 20.6315L0.842412 35.6835L5.52405 40.4587L26.0829 20.7835L6.16097 0.46375L1.32965 5.08741Z"
                    fill="currentColor"
                />
            </svg>
        </button>
    );
};

export default ChangeSlideButton;
