import { useNavigate } from 'react-router';

import Button from './Button';
import Title from './Title';

import { classes } from '@utils/classes';
import { createdDate } from '@utils/createdDate';

const CustomDescription = ({ str }) => {
    return (
        <ul className="grid gap-4">
            {str
                .split('.')
                .filter((str) => !!str)
                .map((str, i) => (
                    <li className="text-xl font-medium" key={i}>
                        {str}.
                    </li>
                ))}
        </ul>
    );
};

const Blog = ({ blog, isHomePage, isSinglePage }) => {
    const navigate = useNavigate();
    if (!blog) return;
    const { image, title, created, teaser, description } = blog;

    return (
        <article
            className={classes([
                'border-tenth border',
                isSinglePage && 'border-none px-5 py-25',
            ])}
        >
            <img src={image} alt="blog img" className="pb-9" />
            <div className="px-4">
                <Title
                    type="h5"
                    className={classes([
                        'text-secondary font-quicksand pb-5 text-left font-medium uppercase',
                        isSinglePage && 'pb-0',
                    ])}
                >
                    {title}
                </Title>
                {isSinglePage && (
                    <>
                        <p className={classes(['text-15 pb-8 font-medium'])}>
                            Oprettet d. {createdDate(created)}
                        </p>
                        <CustomDescription str={description} />
                    </>
                )}

                {!isSinglePage && (
                    <>
                        <p className="pb-9 text-xl">{teaser}</p>
                        <Button
                            onClick={() => navigate(`/blog/${blog._id}`)}
                            className="mb-5"
                        >
                            Læs mere
                        </Button>
                    </>
                )}
                {isHomePage && (
                    <p className="pb-2 text-right text-xs">
                        Oprettet d. {createdDate(created)}
                    </p>
                )}
            </div>
        </article>
    );
};

export default Blog;
