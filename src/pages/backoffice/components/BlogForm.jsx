import FormFormik from '@components/FormFormik';

import useBlogForm from '@hooks/useBlogForm';

const BlogForm = () => {
    const {
        formData,
        validationSchema,
        initialValues,
        onSubmit,
        mutationPostBlog,
        buttonName
    } = useBlogForm();

    return (
        <FormFormik
            buttonName={buttonName}
            mutation={mutationPostBlog}
            validationSchema={validationSchema}
            initialValues={initialValues}
            onSubmit={onSubmit}
            formData={formData}
            inputFile
        />
    );
};

export default BlogForm;
