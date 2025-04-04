import SectionLayout from '@layouts/SectionLayout';

import Bg from '@components/Bg';
import LoginForm from '@components/LoginForm';

const LoginPage = () => {
    return (
        <SectionLayout classNameSection="relative min-h-[50dvh]">
            <LoginForm />
            <Bg img="/liquifer.png" />
        </SectionLayout>
    );
};

export default LoginPage;
