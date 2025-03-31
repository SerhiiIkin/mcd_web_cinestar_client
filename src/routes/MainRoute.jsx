import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider, createBrowserRouter } from 'react-router';

import { routes } from '@constants/constants';

const MainRoute = () => {
    const queryClient = new QueryClient();

    const router = createBrowserRouter(routes);

    return (
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
        </QueryClientProvider>
    );
};

export default MainRoute;
