import ContactContextProvider from '@context/ContactContext';

import Breadcrumbs from '@components/Breadcrumbs';
import Contact from '@components/Contact/Contact';

const ContactPage = () => {

    const contactHeaderData = {
        title: "TØV IKKE MED AT TAGE KONTAKT",
        description: "Har du spørgsmål eller brug for mere information om vores tjenester og processer? Vores team står klar til at hjælpe dig. Kontakt os, og lad os tage en uforpligtende samtale om dine behov og idéer.",
        isHomePage: false
    }

    return (
        <>
            <Breadcrumbs />
            <ContactContextProvider.Provider value={contactHeaderData}>
                <Contact  />
            </ContactContextProvider.Provider>
        </>
    );
};

export default ContactPage;
