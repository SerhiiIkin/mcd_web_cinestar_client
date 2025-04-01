import CinestarStudio from '@components/Header/CinestarStudio';
import Portfolio from '@components/Portfolio/Portfolio';
import Services from '@components/Services/Services';
import Welcome from '@components/Welcome/Welcome';

const Home = () => {
    return (
        <>
            <Welcome />
            <CinestarStudio />
            <Portfolio />
            <Services />
        </>
    );
};

export default Home;
