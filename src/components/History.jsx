import Title from './Title';

import SectionLayout from '@layouts/SectionLayout';

const History = () => {
    return (
        <SectionLayout classNameContainer="grid gap-8">
            <article>
                <Title
                    type="h4"
                    className="text-secondary font-quicksand pb-2 text-left"
                >
                    HISTORIEN
                </Title>
                <Title
                    type="h4"
                    className="text-secondary font-quicksand pb-2 text-left"
                >
                    HISTORIEN BAG CINESTAR
                </Title>
            </article>
            <p className="text-18">
                Cinestar blev grundlagt med en passion for at fortælle
                historier, der fanger og bevæger sit publikum. Virksomheden
                begyndte som en lille uafhængig film- og tv-produktionsenhed med
                et klart fokus på originalt og visuelt engagerende indhold.
            </p>
            <article>
                <Title type="h4" className="text-secondary pb-2 text-left">
                    DYAS KARDINAL
                </Title>
                <Title
                    type="h4"
                    className="font-quicksand pb-2 text-left font-medium"
                >
                    CEO AF CINESTAR
                </Title>
                <img src="filming.jpg" alt="filming" />
            </article>
        </SectionLayout>
    );
};

export default History;
