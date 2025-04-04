import { useMutation } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';

import { useLocalStorage } from '@uidotdev/usehooks';

import { axiosPostData } from '@utils/axios';

const ProtectiveRoute = ({ children }) => {
    const [token] = useLocalStorage('token', '');
    const navigate = useNavigate();

    const mutationCheckToken = useMutation({
        mutationFn: (token) =>
            axiosPostData({ title: 'auth/token', formData: { token } }),

        onError: () => {
            navigate('/login');
        },
    });

    useEffect(() => {
        if (!token) {
            navigate('/login');
        }
        if (token) {
            mutationCheckToken.mutate(token);
        }
    }, [token]);

    return <> {children} </>;
};

export default ProtectiveRoute;
