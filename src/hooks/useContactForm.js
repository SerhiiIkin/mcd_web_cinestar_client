import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';

import { object, string } from 'yup';

import { axiosPostData } from '@utils/axios';

const useContactForm = (changeModalState) => {
    const [name, setName] = useState('');

    const formData = [
        {
            _id: 1,
            label: 'Navn',
            type: 'text',
            name: 'name',
        },
        {
            _id: 2,
            label: 'Emne',
            type: 'text',
            name: 'subject',
        },
        {
            _id: 3,
            label: 'Beskrivelse',
            type: 'text',
            name: 'description',
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
        console.log('🚀 ~ onSubmit ~ formData:', formData);
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
