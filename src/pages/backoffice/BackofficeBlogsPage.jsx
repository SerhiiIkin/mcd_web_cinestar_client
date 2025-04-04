import { useQuery } from '@tanstack/react-query';

import BlogForm from './components/BlogForm';
import Table from './components/Table';

import SectionLayout from '@layouts/SectionLayout';

import { axiosGetData } from '@utils/axios';

const BackofficeBlogsPage = () => {
    const data = useQuery({
        queryKey: ['blogs'],
        queryFn: () => axiosGetData({ title: 'blogs', role: 'user' }),
    });

    return (
        <SectionLayout classNameContainer="grid gap-8">
            <Table data={data.data} actions title={'Blogs'} />
            <BlogForm />
        </SectionLayout>
    );
};

export default BackofficeBlogsPage;
