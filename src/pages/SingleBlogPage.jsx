import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router';

import DataHandleLayout from '@layouts/DataHandleLayout';

import Blog from '@components/Blog';
import Breadcrumbs from '@components/Breadcrumbs';

import { axiosGetSingleData } from '@utils/axios';

const SingleBlogPage = () => {
    const { id } = useParams();

    const data = useQuery({
        queryKey: ['blog', id],
        queryFn: () => axiosGetSingleData({ title: 'blog', id, role: 'user' }),
        enabled: !!id,
    });

    return (
        <>
            <Breadcrumbs />
            <DataHandleLayout
                data={data}
                SkeletonCount={20}
                emptyText="Kan ikke finde blog"
            >
                <Blog blog={data.data} isSinglePage />
            </DataHandleLayout>
        </>
    );
};

export default SingleBlogPage;
