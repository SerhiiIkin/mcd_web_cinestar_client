import Title from '@components/Title';

const WelcomeHeader = () => {
    return (
        <article className="bg-[url(studio.jpg)] bg-cover bg-center bg-no-repeat px-9 py-26">
            <div className="relative z-20">
                <Title type="h4">CINESTAR STUDIO </Title>
                <Title className="pb-7">
                    FILM & TV
                    <span className="text-secondary"> PRODUKTION</span>
                </Title>
                <p className="text-center text-xl">
                    Vi skaber levende fortællinger, der fanger dit publikum. Fra
                    idé til færdigt produkt leverer vi professionelle film- og
                    tv-løsninger, der gør din historie uforglemmelig.
                </p>
            </div>
        </article>
    );
};

export default WelcomeHeader;
