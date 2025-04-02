import ContactHeader from './ContactHeader';
import ContactInfo from './ContactInfo';

import SectionLayout from '@layouts/SectionLayout';

import Bg from '@components/Bg';
import ContactForm from '@components/ContactForm';

const Contact = () => {
    return (
        <SectionLayout
            classNameContainer="grid gap-8"
            classNameSection="relative"
        >
            <ContactHeader />
            <ContactInfo />
            <ContactForm />
            <Bg img="studie2.jpg" className="opacity-20" />
        </SectionLayout>
    );
};

export default Contact;
