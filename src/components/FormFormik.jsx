
import { Formik, Form } from 'formik';

import Button from './Button';
import Field from './Field';
import Loader from './Loader';

import InputFile from '@pages/backoffice/components/InputFile';

const FormFormik = ({
    buttonName,
    mutation,
    formData,
    inputFile,
    ...props
}) => {
    return (
        <Formik enableReinitialize {...props}>
            {({ isValid, values }) => {
                return (
                    <Form className="relative z-10 grid gap-9 py-3">
                        {formData.map((field) => (
                            <Field key={field._id} field={field} />
                        ))}
                        {inputFile && (
                            <>
                                <InputFile
                                    field={{
                                        label: 'Image',
                                        type: 'file',
                                        name: 'file',
                                        placeholder: 'Upload billede',
                                    }}
                                />
                                {values.imagePreview && (
                                    <img
                                        src={values.imagePreview}
                                        className="mx-auto max-w-30 text-center"
                                        alt=""
                                    />
                                )}
                            </>
                        )}
                        <Button
                            aria-label={buttonName}
                            type="submit"
                            className="relative justify-self-start"
                            disabled={mutation.isPending || !isValid}
                        >
                            {buttonName}
                            {mutation.isPending && (
                                <Loader className="absolute top-1/2 right-4 -translate-y-1/2" />
                            )}
                        </Button>
                    </Form>
                );
            }}
        </Formik>
    );
};

export default FormFormik;
