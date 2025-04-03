import Blogs from '@components/Blogs';
import Breadcrumbs from '@components/Breadcrumbs';
import SocialContact from '@components/SocialContact';
import Subscribe from '@components/Subscribe/Subscribe';

const BlogsPage = () => {
    return (
        <>
            <Breadcrumbs />
            <Blogs />
            <Subscribe />
            <SocialContact />
        </>
    );
};

export default BlogsPage;
