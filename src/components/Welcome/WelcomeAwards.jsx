import { awardsData } from '@constants/constants';

const WelcomeAwards = () => {
    return (
        <article className="relative z-20 grid gap-10 px-16 py-16">
            {awardsData.map((data) => (
                <img key={data.id} src={data.img} />
            ))}
        </article>
    );
};

export default WelcomeAwards;
