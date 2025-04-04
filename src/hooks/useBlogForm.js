import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useMemo } from 'react';
import { useNavigate, useParams } from 'react-router';
import { toast } from 'react-toastify';

import { object, string } from 'yup';

import { axiosGetSingleData, axiosPostData, axiosUpdateData } from '@utils/axios';

const useBlogForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const data = useQuery({
        queryKey: ['blog', id],
        queryFn: () => axiosGetSingleData({ title: 'blog', role: 'admin', id }),
        enabled: !!id,
    });

    const queryClient = useQueryClient();
    const formData = [
        {
            _id: 1,
            name: 'title',
            type: 'text',
            placeholder: 'Title',
        },
        {
            _id: 2,
            name: 'teaser',
            type: 'text',
            placeholder: 'Teaser',
            rows: 5,
            fieldsType: 'textarea',
        },
        {
            _id: 3,
            name: 'description',
            type: 'text',
            placeholder: 'Description',
            rows: 5,
            fieldsType: 'textarea',
        },
    ];

    const validationSchema = object({
        title: string().required('Påkrævet!'),
        teaser: string().required('Påkrævet!'),
        description: string().required('Påkrævet!'),
    });

    const initialValues = {
        title: data?.data ? data.data.title : '',
        teaser: data?.data ? data.data.teaser : '',
        description: data?.data ? data.data.description : '',
        file: null,
        imagePreview: data?.data ? data.data.image : null,
    };

    const onSubmit = (values, { resetForm }) => {
        const formData = new FormData();
        formData.append('title', values.title);
        formData.append('teaser', values.teaser);
        formData.append('description', values.description);
        formData.append('file', values.file);
        id && formData.append("id", id);
        id ? mutationUpdateBlog.mutate(formData, {
            onSuccess: (data) => {
                queryClient.invalidateQueries(['blog', id]);
                toast.success(data.message);
                setTimeout(() => {
                    navigate("/backoffice/blogs")
                }, 2000);
            }
        }) : mutationPostBlog.mutate(formData, {
            onSuccess: (data) => {
                queryClient.invalidateQueries(['blogs']);
                toast.success(data.message);
                resetForm();
            },
        });
    };

    const mutationUpdateBlog = useMutation({
        mutationFn:(formData) => axiosUpdateData({ title: 'blog', formData, id }),
    });

    const mutationPostBlog = useMutation({
        mutationFn: (formData) => axiosPostData({ title: 'blog', formData }),
    });

    const buttonName = useMemo(() => {
        return id ? 'Update blog' : 'Add new blog';
    }, [id]);

    return {
        formData,
        validationSchema,
        initialValues,
        onSubmit,
        mutationPostBlog,
        buttonName,
    };
};

export default useBlogForm;
