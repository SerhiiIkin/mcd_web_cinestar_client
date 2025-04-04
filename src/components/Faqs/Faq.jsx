import Arrow from '@components/Arrow';

import { classes } from '@utils/classes';

const Faq = ({ faq }) => {
    return (
        <details className="group">
            <summary className="group-open:bg-secondary bg-primary text-tertiary relative cursor-pointer list-none px-4 py-5 uppercase duration-700">
                <span className="group-open:text-primary inline-block max-w-3/4 text-xl font-bold">
                    {faq.question}
                </span>
                <Arrow
                    className={classes([
                        'fill-tertiary absolute top-1/2 right-0 h-16 w-16 -translate-y-1/2 duration-700',
                        'group-open:fill-primary group-open:-rotate-180',
                    ])}
                />
            </summary>
            <p className="pt-8 text-xl font-medium"> {faq.answer} </p>
        </details>
    );
};

export default Faq;
