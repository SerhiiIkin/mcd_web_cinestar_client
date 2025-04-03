import { useMutation } from '@tanstack/react-query';

import { object, string } from 'yup';

import { axiosPostData } from '@utils/axios';

const useSubscribeForm = (changeModalState) => {
    const validationSchema = object({
        email: string().email('Ugyldig email').required('Påkrævet!'),
    });

    const initialValues = {
        email: '',
    };

    const onSubmit = (values, { setErrors, resetForm }) => {
        const formData = { ...values };
        mutationSubscribe.mutate(formData, {
            onSuccess: () => {
                changeModalState();
                resetForm();
            },
            onError: (error) => {
                setErrors({ email: 'Error tilmelding' });
            },
        });
    };

    const mutationSubscribe = useMutation({
        mutationFn: (formData) =>
            axiosPostData({ title: 'subscription', formData }),
    });
    return {
        initialValues,
        validationSchema,
        onSubmit,
        mutationSubscribe,
    };
};

export default useSubscribeForm;
