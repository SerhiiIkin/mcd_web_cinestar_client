import { awardsData } from '@constants/constants';

const WelcomeAwards = () => {
    return (
        <article className="relative z-20 grid justify-items-center gap-10 py-16 md:flex md:flex-wrap">
            {awardsData.map((data) => (
                <img
                    key={data.id}
                    src={data.img}
                    className="mx-auto max-w-xs"
                />
            ))}
        </article>
    );
};

export default WelcomeAwards;
