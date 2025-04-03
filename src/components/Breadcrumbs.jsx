import { useMemo } from 'react';
import { Link, useParams } from 'react-router';
import useBreadcrumbs from 'use-react-router-breadcrumbs';

import Bg from './Bg';
import Title from './Title';

import SectionLayout from '@layouts/SectionLayout';

const Breadcrumbs = () => {
    const { id } = useParams();
    const breadcrumbs = useBreadcrumbs();

    const current = useMemo(() => {
        const currentBreadcrumb = breadcrumbs[breadcrumbs.length - 1].key
            .split('/')
            .pop();
        if (currentBreadcrumb === 'blogs') return 'Blog arkiv';
        if (currentBreadcrumb === id) return 'Blog arkiv';
        return currentBreadcrumb;
    }, [breadcrumbs]);

    return (
        <SectionLayout classNameSection="relative">
            <Bg img="/studio.jpg" />
            <div className="relative z-10">
                <Title type="h3" className="text-38 pb-4 text-left uppercase">
                    {current}
                </Title>
                <div className="flex flex-wrap gap-2">
                    {breadcrumbs.map(({ key }) => {
                        const breadcrumbMap = {
                            '/': 'Forside',
                            '/blogs': '/ BLOG ARKIV',
                            '/blog': '/ BLOG ARKIV',
                            [`/blog/${id}`]: '/ BLOG',
                        };

                        return (
                            <Link
                                key={key}
                                to={key === '/blog' ? '/blogs' : key}
                                className={
                                    key === '/' || key === '/blog'
                                        ? ''
                                        : 'text-secondary uppercase'
                                }
                            >
                                {breadcrumbMap[key] ||
                                    key.split('/').join(' / ')}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </SectionLayout>
    );
};

export default Breadcrumbs;
