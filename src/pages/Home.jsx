import Blogs from '@components/Blogs/Blogs';
import Contact from '@components/Contact/Contact';
import CinestarStudio from '@components/Header/CinestarStudio';
import History from '@components/History';
import Portfolio from '@components/Portfolio/Portfolio';
import Services from '@components/Services/Services';
import Statements from '@components/Statements/Statements';
import Welcome from '@components/Welcome/Welcome';

const Home = () => {
    return (
        <>
            <Welcome />
            <CinestarStudio />
            <Portfolio />
            <Services />
            <History />
            <Statements />
            <Contact />
            <Blogs />
        </>
    );
};

export default Home;
