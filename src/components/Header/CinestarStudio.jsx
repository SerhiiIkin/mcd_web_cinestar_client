import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import SectionLayout from '@layouts/SectionLayout';

import Title from '@components/Title';

import { classes } from '@utils/classes';

const Video = ({ classNameContainer, className, ...props }) => {
    const [controls, setControls] = useState(false);
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)',
    });
    return (
        <div className='relative'>
            <video
                
                className={classes(['w-full', className])}
                {...props}
                controls={isDesktopOrLaptop ? controls : true}
                onMouseEnter={() => setControls(true)}
                onMouseLeave={() => setControls(false)}
            ></video>
        </div>
    );
};

const CinestarStudio = () => {
    return (
        <SectionLayout classNameSection="py-25" classNameContainer="grid gap-8">
            <article>
                <Title type="h5" className="text-secondary text-left">
                    CINESTAR STUDIO
                </Title>
                <Title type="h3" className="pb-5 text-left">
                    HAR DU EN IDÉ TIL DIT NÆSTE PROJEKT ?
                </Title>
                <p className="pb-5 text-xl">
                    Lad os omsætte dine visioner til levende billeder, der
                    fænger dit publikum. Hos os får du en professionel, kreativ
                    proces fra idéudvikling til færdig produktion.
                </p>
            </article>
            <article>
                <Video src="cinestar_studio_video.mp4" loop muted />
            </article>
        </SectionLayout>
    );
};

export default CinestarStudio;
