import { Form, Formik } from 'formik';

import Button from './Button';
import Field from './Field';
import Loader from './Loader';

import useLoginForm from '@hooks/useLoginForm';

const LoginForm = () => {
    const {
        initialValues,
        validationSchema,
        onSubmit,
        mutationLogin,
        formData,
        error,
    } = useLoginForm();

    return (
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
                        disabled={mutationLogin.isPending || !isValid}
                    >
                        Login
                        {mutationLogin.isPending && (
                            <Loader className="absolute top-1/2 right-4 -translate-y-1/2" />
                        )}
                    </Button>
                    <div className="text-secondary text-center">{error}</div>
                </Form>
            )}
        </Formik>
    );
};

export default LoginForm;
