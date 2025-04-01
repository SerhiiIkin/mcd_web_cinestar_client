import { classes } from '@utils/classes';

const PortfolioContainer = ({ children, className }) => (
    <article className={classes(['container mx-auto px-8', className])}>
        {children}
    </article>
);

export default PortfolioContainer;
