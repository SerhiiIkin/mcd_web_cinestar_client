import WelcomeAwards from './WelcomeAwards';
import WelcomeHeader from './WelcomeHeader';
import WelcomeOverlay from './WelcomeOverlay';

const Welcome = () => {
    return (
        <section className="relative">
            <WelcomeHeader />
            <WelcomeAwards />
            <WelcomeOverlay />
        </section>
    );
};

export default Welcome;
