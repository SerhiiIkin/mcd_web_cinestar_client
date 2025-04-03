import Button from './Button';
import Title from './Title';

const Blog = ({ blog, isHomePage }) => {
    if(!blog) return;
    const { image, title, created, teaser } = blog;
    return (
        <article className="border-tenth border">
            <img src={image} alt="blog img" className="pb-9" />
            <div className="px-4">
                <Title
                    type="h5"
                    className="text-secondary font-quicksand pb-5 text-left font-medium uppercase"
                >
                    {title}
                </Title>
                <p className="pb-9 text-xl">{teaser}</p>
                <Button className="mb-5"> Læs mere </Button>
                {isHomePage &&<p className="pb-2 text-right text-xs">Oprettet d. {created}</p>}
            </div>
        </article>
    );
};

export default Blog;
