import Title from '@components/Title';

const ContactHeader = () => {
    return (
        <article>
            <Title
                type="h5"
                className="text-secondary font-quicksand text-left"
            >
                KONTAKT
            </Title>
            <Title type="h3" className="pb-5 text-left">
                BOOK EN SAMTALE MED OS
            </Title>
            <p className='text-xl pb-5'>
                Har du spørgsmål eller ønsker du at vide mere om, hvordan vi kan
                hjælpe med dit næste projekt? Udfyld formularen, og vi kontakter
                dig hurtigst muligt. Vi ser frem til at samarbejde med dig!
            </p>
        </article>
    );
};

export default ContactHeader;
