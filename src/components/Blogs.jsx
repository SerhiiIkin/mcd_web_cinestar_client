import { useQuery } from '@tanstack/react-query';

import Blog from './Blog';

import DataHandleLayout from '@layouts/DataHandleLayout';
import SectionLayout from '@layouts/SectionLayout';

import { axiosGetData } from '@utils/axios';

const Blogs = () => {
    const data = useQuery({
        queryKey: ['blogs'],
        queryFn: () => axiosGetData({ title: 'blogs', role: 'user' }),
    });

    return (
        <SectionLayout classNameContainer="grid gap-12">
            <DataHandleLayout
                data={data}
                SkeletonCount={25}
                emptyText="Det er ikke blogs endnu"
            >
                {data.data &&
                    data.data.map((blog) => (
                        <Blog key={blog._id} blog={blog} />
                    ))}
            </DataHandleLayout>
        </SectionLayout>
    );
};

export default Blogs;
