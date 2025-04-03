import { Form, Formik } from 'formik';

import ModalLayout from '@layouts/ModalLayout';

import Button from '@components/Button';
import Field from '@components/Field';
import Title from '@components/Title';

import useModal from '@hooks/useModal';
import useSubscribeForm from '@hooks/useSubscribeForm';
import Loader from '@components/Loader';

const SubscribeForm = () => {
    const modalProps = useModal();
    const { changeModalState } = modalProps;
    const { initialValues, validationSchema, onSubmit, mutationSubscribe } =
        useSubscribeForm(changeModalState);

    const field = {
        name: 'email',
        type: 'email',
        placeholder: 'Email',
    };

    return (
        <>
            <ModalLayout {...modalProps}>
                <div className="bg-tertiary grid w-full gap-10 px-4 text-center">
                    <Title type="h5" className="text-primary pb-3 break-words">
                        {`Tak for din tilmeling`}
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
                    <Form className="relative z-10 flex items-center">
                        <Field field={field} classNameInput="border py-4" classNameError="text-xs" />
                        <Button
                            aria-label="send besked"
                            type="submit"
                            className="relative mb-6 shrink-0 py-4"
                            disabled={mutationSubscribe.isPending || !isValid}
                        >
                            TILMELD NU
                            {mutationSubscribe.isPending && (
                                <Loader className="absolute top-1/2 right-4 -translate-y-1/2" />
                            )}
                        </Button>
                    </Form>
                )}
            </Formik>
        </>
    );
};

export default SubscribeForm;
