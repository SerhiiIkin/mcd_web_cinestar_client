import ContactContextProvider from '@context/ContactContext';

import Contact from '@components/Contact/Contact';
import CinestarStudio from '@components/Header/CinestarStudio';
import History from '@components/History';
import LastBlog from '@components/LastBlog/LastBlog';
import Portfolio from '@components/Portfolio/Portfolio';
import Services from '@components/Services/Services';
import SocialContact from '@components/SocialContact';
import Statements from '@components/Statements/Statements';
import Welcome from '@components/Welcome/Welcome';

const HomePage = () => {
    const contactHeaderData = {
        title: 'BOOK EN SAMTALE MED OS',
        description:
            'Har du spørgsmål eller ønsker du at vide mere om, hvordan vi kan hjælpe med dit næste projekt? Udfyld formularen, og vi kontakter dig hurtigst muligt. Vi ser frem til at samarbejde med dig!',
        isHomePage: true,
    };

    return (
        <>
            <Welcome />
            <CinestarStudio />
            <Portfolio />
            <Services />
            <History />
            <Statements />
            <ContactContextProvider.Provider value={contactHeaderData}>
                <Contact />
            </ContactContextProvider.Provider>
            <LastBlog />
            <SocialContact />
        </>
    );
};

export default HomePage;
