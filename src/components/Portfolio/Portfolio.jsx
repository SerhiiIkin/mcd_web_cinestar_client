import PortfolioCarousel from './PortfolioCarousel';
import PortfolioContainer from './PortfolioContainer';

import Title from '@components/Title';

const Portfolio = () => {
    return (
        <section className="bg-fourth grid gap-7 py-25">
            <PortfolioContainer>
                <Title
                    type="h5"
                    className="text-secondary font-quicksand pb-2 text-left"
                >
                    PORTFOLIO
                </Title>
                <Title type="h3" className="text-left">
                    UDVALGTE PROJEKTER
                </Title>
            </PortfolioContainer>
            <PortfolioCarousel />
            <PortfolioContainer className="grid gap-5 text-xl font-bold">
                <p>
                    Her præsenterer vi et udvalg af de produktioner, vi er
                    stolte af at have skabt.
                </p>
                <p>
                    Hvert projekt fortæller sin unikke historie og illustrerer
                    vores ambition om at levere høj kvalitet, originalitet og
                    visuel gennemslagskraft.
                </p>
                <p>Gå på opdagelse, og lad dig inspirere af vores arbejde.</p>
            </PortfolioContainer>
        </section>
    );
};

export default Portfolio;
