import { classes } from '@utils/classes';

const Bg = ({ className, img }) => {
    return (
        <div className={classes([`absolute inset-0 opacity-10`, className])}>
            <img
                src={img}
                className="h-full w-full object-cover object-center"
                alt="background"
            />
        </div>
    );
};
//bg-[url(${img})] bg-cover bg-center bg-no-repeat
export default Bg;
