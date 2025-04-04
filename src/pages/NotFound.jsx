import { Link } from 'react-router';

import Title from '@components/Title';

const NotFound = () => {
    return (
        <section className="grid place-items-center gap-4 py-10">
            <Title type="h1">404</Title>
            <Title type="h2">Not found</Title>
            <p className="text-18">Den side du leder efter findes ikke.</p>
            <p className="text-18">Prøv at søge igen.</p>
            <Link to="/" className="text-18 hover:xl:text-secondary">
                Til forsiden
            </Link>
        </section>
    );
};

export default NotFound;
