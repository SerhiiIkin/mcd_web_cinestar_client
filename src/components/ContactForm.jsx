import ModalLayout from '@layouts/ModalLayout';

import Button from '@components/Button';

import Title from '@components/Title';

import useContactForm from '@hooks/useContactForm';
import useModal from '@hooks/useModal';
import FormFormik from './FormFormik';

const ContactForm = () => {
    const modalProps = useModal();
    const { changeModalState } = modalProps;
    const {
        formData,
        validationSchema,
        initialValues,
        onSubmit,
        mutationSendMessage,
        name,
    } = useContactForm(changeModalState);

    return (
        <>
            <ModalLayout {...modalProps}>
                <div className="bg-tertiary grid w-full gap-10 px-4 text-center">
                    <Title type="h5" className="text-primary pb-3 break-words">
                        {`Tak for din besked ${name}`}
                    </Title>
                    <Title type="h5" className="text-primary break-words">
                        Vi bestræber os på at kontakte dig via din email
                        indenfor 24 timer.
                    </Title>
                    <Button
                        onClick={changeModalState}
                        className="justify-self-center"
                    >
                        Luk
                    </Button>
                </div>
            </ModalLayout>
            <FormFormik
                buttonName="Send besked"
                mutation={mutationSendMessage}
                validationSchema={validationSchema}
                initialValues={initialValues}
                onSubmit={onSubmit}
                formData={formData}
            />
        </>
    );
};

export default ContactForm;
