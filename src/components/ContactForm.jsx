import { Form, Formik } from 'formik';

import ModalLayout from '@layouts/ModalLayout';

import Button from '@components/Button';
import Field from '@components/Field';
import Loader from '@components/Loader';
import Title from '@components/Title';

import useContactForm from '@hooks/useContactForm';
import useModal from '@hooks/useModal';

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

            <Formik
                enableReinitialize
                validationSchema={validationSchema}
                initialValues={initialValues}
                onSubmit={onSubmit}
            >
                {({ isValid }) => (
                    <Form className="relative z-10 grid gap-9 py-3">
                        {formData.map((field) => (
                            <Field key={field._id} field={field} />
                        ))}

                        <Button
                            aria-label="send besked"
                            type="submit"
                            className="relative justify-self-start"
                            disabled={mutationSendMessage.isPending || !isValid}
                        >
                            Send besked
                            {mutationSendMessage.isPending && (
                                <Loader className="absolute top-1/2 right-4 -translate-y-1/2" />
                            )}
                        </Button>
                    </Form>
                )}
            </Formik>
        </>
    );
};

export default ContactForm;
