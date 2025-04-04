import { useLocalStorage } from '@uidotdev/usehooks';

import SectionLayout from '@layouts/SectionLayout';

import Button from '@components/Button';
import Title from '@components/Title';

const BackofficePage = () => {
    const [_, saveToken] = useLocalStorage('token', '');
    return (
        <SectionLayout>
            <Title type="h2" className="pb-8 text-center">
                Welcome til backoffice
            </Title>
            <p className="pb-8 text-center text-xl">
                Vælg et menupunkt fra sidebar
            </p>
            <Button onClick={() => saveToken('')}>Log ud </Button>
        </SectionLayout>
    );
};

export default BackofficePage;
