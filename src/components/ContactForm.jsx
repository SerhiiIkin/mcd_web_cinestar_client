import { Form, Formik } from 'formik';

import ModalLayout from '@layouts/ModalLayout';
import SectionLayout from '@layouts/SectionLayout';

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
                <div className="bg-secondary/70 grid w-full gap-2 px-2 py-8 text-center">
                    <Title type="h4" className="text-xl break-words text-black">
                        {`Tak for din besked ${name}`}
                    </Title>
                    <Title type="h4" className="text-xl break-words text-black">
                        Vi vender tilbage hurtigst muligt.
                    </Title>
                </div>
            </ModalLayout>
            <SectionLayout classNameSection="bg-secondary">
                <Formik
                    enableReinitialize
                    validationSchema={validationSchema}
                    initialValues={initialValues}
                    onSubmit={onSubmit}
                >
                    {({ isValid }) => (
                        <Form className="mx-auto flex max-w-xs flex-col gap-2">
                            {formData.map((field) => (
                                <Field key={field._id} field={field} />
                            ))}

                            <Button
                                aria-label="send besked"
                                type="submit"
                                className="max-w-none"
                                disabled={
                                    mutationSendMessage.isPending || !isValid
                                }
                            >
                                Send
                                {mutationSendMessage.isPending && (
                                    <Loader className="h-4 w-4" />
                                )}
                            </Button>
                        </Form>
                    )}
                </Formik>
            </SectionLayout>
        </>
    );
};

export default ContactForm;
