import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';

import { object, string } from 'yup';

import { axiosPostData } from '@utils/axios';

const useContactForm = (changeModalState) => {
    const [name, setName] = useState('');

    const formData = [
        {
            _id: 1,
            name: 'name',
            type: 'text',
            placeholder: 'Navn',
        },
        {
            _id: 2,
            name: 'subject',
            type: 'text',
            placeholder: 'Emne',
        },
        {
            _id: 3,
            name: 'description',
            type: 'text',
            placeholder: 'Besked',
            rows: 5,
            fieldsType: 'textarea',
        },
    ];

    const validationSchema = object({
        name: string().required('Påkrævet!'),
        subject: string().required('Påkrævet!'),
        description: string().required('Påkrævet!'),
    });

    const initialValues = {
        name: '',
        subject: '',
        description: '',
    };

    const onSubmit = (values, { resetForm }) => {
        const formData = { ...values };
        setName(values.name);
        mutationSendMessage.mutate(formData);
        resetForm();
    };

    const mutationSendMessage = useMutation({
        mutationFn: (formData) => axiosPostData({ title: 'message', formData }),
        onSuccess: () => {
            changeModalState();
        },
    });

    return {
        formData,
        validationSchema,
        initialValues,
        onSubmit,
        mutationSendMessage,
        name,
    };
};

export default useContactForm;
