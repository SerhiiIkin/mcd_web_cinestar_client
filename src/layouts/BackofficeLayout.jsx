import { Outlet } from 'react-router';
import { ToastContainer } from 'react-toastify';

import BackofficeSideBar from '@pages/backoffice/components/BackofficeSideBar';

import Header from '@components/Header/Header';
import ProtectiveRoute from '@routes/ProtectiveRoute';

const BackofficeLayout = () => {
    return (
        <ProtectiveRoute>
            <div className="bg-tertiary text-primary flex min-h-dvh flex-col">
                <Header />
                <main className="flex-1">
                    <BackofficeSideBar />
                    <Outlet />
                </main>
                <ToastContainer
                    position="bottom-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick={false}
                    rtl={false}
                    pauseOnFocusLoss
                    pauseOnHover
                    theme="colored"
                />
            </div>
        </ProtectiveRoute>
    );
};

export default BackofficeLayout;
