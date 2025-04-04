import { useQuery } from '@tanstack/react-query';

import TableMessage from './components/TableMessage';

import SectionLayout from '@layouts/SectionLayout';

import { axiosGetData } from '@utils/axios';

const MessagesPage = () => {
    const data = useQuery({
        queryKey: ['messages'],
        queryFn: () => axiosGetData({ title: 'messages', role: 'user' }),
    });

    return (
        <SectionLayout>
            <TableMessage data={data.data} title={"Messages"} />
        </SectionLayout>
    );
};

export default MessagesPage;
