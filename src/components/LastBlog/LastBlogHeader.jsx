import Title from "@components/Title";

const LastBlogHeader = () => {
    return (
        <article className="grid gap-2">
        <Title
            type="h5"
            className="text-secondary font-quicksand text-left"
        >
            BLOG
        </Title>
        <Title type="h3" className="pb-5 text-left">
            VORES SENESTE BLOG
        </Title>
        <p className="text-xl">
            Hold dig opdateret med de seneste nyheder, indblik og
            historier fra Cinestar. Vi deler inspiration, tips og bag
            kulisserne fra vores spændende projekter og produktioner.
        </p>
    </article>
    );
};

export default LastBlogHeader;