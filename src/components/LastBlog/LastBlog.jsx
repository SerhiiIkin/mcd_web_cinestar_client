import { useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';

import LastBlogHeader from './LastBlogHeader';

import SectionLayout from '@layouts/SectionLayout';

import Blog from '@components/Blog';

import { axiosGetData } from '@utils/axios';
import { createdDate } from '@utils/createdDate';

const LastBlog = () => {
    const data = useQuery({
        queryKey: ['blogs'],
        queryFn: () => axiosGetData({ title: 'blogs', role: 'user' }),
    });

    const lastBlog = useMemo(() => {
        return (
            data.data &&
            data.data.sort(
                (a, b) => new Date(b.created) - new Date(a.created),
            )[0]
        );
    }, [data.data]);

    return (
        <SectionLayout
            classNameSection="bg-fourth"
            classNameContainer="grid gap-8"
        >
            <LastBlogHeader />
            <Blog isHomePage blog={lastBlog} />
        </SectionLayout>
    );
};

export default LastBlog;
