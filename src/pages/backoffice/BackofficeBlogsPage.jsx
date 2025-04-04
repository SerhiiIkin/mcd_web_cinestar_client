import { useQuery } from '@tanstack/react-query';

import Table from './components/Table';

import SectionLayout from '@layouts/SectionLayout';

import { axiosGetData } from '@utils/axios';

const BackofficeBlogsPage = () => {
    const data = useQuery({
        queryKey: ['blogs'],
        queryFn: () => axiosGetData({ title: 'blogs', role: 'user' }),
    });

    return (
        <SectionLayout>
            <div className="px-8">
                <div className="text-primary rounded-lg bg-gray-800 p-4">
                    <Table data={data.data} />
                </div>
            </div>
        </SectionLayout>
    );
};

export default BackofficeBlogsPage;
