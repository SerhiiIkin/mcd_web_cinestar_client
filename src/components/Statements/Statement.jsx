import Title from '@components/Title';

import { classes } from '@utils/classes';

const StartSvg = ({ firstPathSvg }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="15"
        viewBox="0 0 16 15"
        fill="none"
    >
        <g clipPath="url(#clip0_8_625)">
            <path
                d="M9.51875 8.75L8 13.75L6.48125 8.75H1.75L5.6125 5.99375L4.14375 1.25L8 4.18125L11.8625 1.25L10.3938 5.99375L14.25 8.75H9.51875Z"
                className={classes(['fill-white', firstPathSvg])}
            />
        </g>
        <defs>
            <clipPath id="clip0_8_625">
                <rect
                    width="15"
                    height="15"
                    fill="white"
                    transform="matrix(1 0 0 -1 0.5 15)"
                />
            </clipPath>
        </defs>
    </svg>
);

const QuoteSvg = ({ className }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="15"
        height="12"
        viewBox="0 0 15 12"
        fill="none"
        className={className}
    >
        <path
            d="M1.24998 11.172H4.37498L6.45831 7.00537V0.755371H0.208313V7.00537H3.33331L1.24998 11.172ZM9.58331 11.172H12.7083L14.7916 7.00537V0.755371H8.54165V7.00537H11.6666L9.58331 11.172Z"
            fill="#999999"
        />
    </svg>
);

const stars = [1, 2, 3, 4, 5];

const Statement = ({ statement }) => {
    return (
        <div className="bg-eighth px-2 py-4">
            <div className="flex gap-1 pb-4">
                {stars.map((star) => (
                    <StartSvg
                        key={star}
                        firstPathSvg={
                            star <= statement.rating ? 'fill-seventh' : ''
                        }
                    />
                ))}
            </div>
            <p className="pb-6 text-xs">"{statement.text}"</p>
            <div className="grid">
                <Title
                    type="h6"
                    className="text-secondary pb-1 text-left uppercase"
                >
                    {statement.name}
                </Title>
                <p className="col-start-1 text-xs font-medium">
                    {statement.position}
                </p>
                <QuoteSvg className="col-start-2 row-start-1 self-center justify-self-center" />
            </div>
        </div>
    );
};

export default Statement;
