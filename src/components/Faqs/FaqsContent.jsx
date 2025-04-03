import { useQuery } from '@tanstack/react-query';

import Faq from './Faq';

import DataHandleLayout from '@layouts/DataHandleLayout';

import { axiosGetData } from '@utils/axios';

const FaqsContent = () => {
    const data = useQuery({
        queryKey: ['faqs'],
        queryFn: () => axiosGetData({ title: 'faqs', role: 'user' }),
    });

    return (
        <article className='grid gap-8'>
            <DataHandleLayout
                data={data}
                SkeletonCount={20}
                emptyText="Det er ikke spørgsmål endnu"
            >
                {data.data &&
                    data.data.map((faq) => <Faq key={faq._id} faq={faq} />)}
            </DataHandleLayout>
        </article>
    );
};

export default FaqsContent;
