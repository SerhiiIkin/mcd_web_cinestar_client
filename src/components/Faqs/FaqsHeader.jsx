import Title from '@components/Title';

const FaqsHeader = () => {
    return (
        <article>
            <Title
                type="h5"
                className="text-secondary font-quicksand text-left"
            >
                OFTE STILLEDE SPØRGSMÅL
            </Title>
            <Title type="h3" className="text-32 pb-6 text-left">
                DE MEST ALMINDELIGE SPØRGSMÅL, VI FÅR
            </Title>
            <p className="text-xl font-medium">
                Her finder du svar på de spørgsmål, vi oftest bliver stillet om
                vores processer, tjenester og produktioner. Har du brug for
                yderligere information? Tøv ikke med at kontakte os!
            </p>
        </article>
    );
};

export default FaqsHeader;
