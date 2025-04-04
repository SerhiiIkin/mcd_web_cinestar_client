import { useMutation } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

import { useLocalStorage } from '@uidotdev/usehooks';
import { object, string } from 'yup';

import { axiosPostData } from '@utils/axios';

const useLoginForm = () => {
    const [token, saveToken] = useLocalStorage('token', '');
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const formData = [
        {
            _id: 1,
            name: 'email',
            type: 'text',
            placeholder: 'Email',
        },
        {
            _id: 2,
            name: 'password',
            type: 'password',
            placeholder: 'Password',
        },
    ];

    const validationSchema = object({
        email: string().email('Ugyldig email').required('Påkrævet!'),
        password: string().required('Påkrævet!'),
    });

    const initialValues = {
        email: '',
        password: '',
    };

    const onSubmit = (values, { resetForm }) => {
        const formData = { ...values };
        mutationLogin.mutate(formData, {
            onSuccess: (data) => {
                setError('');
                toast.success(data.message);
                saveToken(data.data.token);
                setTimeout(() => {
                    navigate('/backoffice');
                    resetForm();
                }, 2000);
            },
        });
    };

    const mutationLogin = useMutation({
        mutationFn: (formData) =>
            axiosPostData({ title: 'auth/signin', formData }),
        onError: (error) => {
            setError(error.message);
        },
    });

    const mutationCheckToken = useMutation({
        mutationFn: (token) =>
            axiosPostData({ title: 'auth/token', formData: { token } }),
        onSuccess: () => {
            setTimeout(() => {
                navigate('/backoffice');
            }, 2000);
        },
    });

    useEffect(() => {
        if (token) {
            mutationCheckToken.mutate(token);
        }
    }, [token]);

    return {
        initialValues,
        validationSchema,
        onSubmit,
        mutationLogin,
        formData,
        error,
    };
};

export default useLoginForm;
