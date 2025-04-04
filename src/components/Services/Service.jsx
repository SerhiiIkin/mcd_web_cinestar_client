import Title from '@components/Title';

const Service = ({ service }) => {
    return (
        <article className="flex gap-x-6 md:gap-x-8">
            <div className="row-span-2 grid min-w-24 place-items-center">
                {service.svg}
            </div>
            <div className="grid gap-y-5">
                <Title type="h5" className="text-left">
                    {service.title}
                </Title>
                <p className="text-18 font-medium">{service.description}</p>
            </div>
        </article>
    );
};

export default Service;
