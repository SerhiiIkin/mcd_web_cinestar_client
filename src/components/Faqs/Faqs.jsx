import FaqsContent from './FaqsContent';
import FaqsHeader from './FaqsHeader';

import SectionLayout from '@layouts/SectionLayout';

const Faqs = () => {
    return (
        <SectionLayout classNameContainer="grid gap-8" classNameSection="pb-0">
            <FaqsHeader />
            <FaqsContent />
        </SectionLayout>
    );
};

export default Faqs;
