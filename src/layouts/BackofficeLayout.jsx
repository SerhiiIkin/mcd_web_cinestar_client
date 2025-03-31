import { Outlet } from 'react-router';
import { ToastContainer } from 'react-toastify';

import BackofficeSideBar from '@pages/backoffice/components/BackofficeSideBar';

import Header from '@components/Header/Header';

const BackofficeLayout = () => {
    return (
        <div className="flex min-h-dvh flex-col">
            <Header classNameHeader="bg-primary" />
            <main className="flex-1 pt-22">
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
    );
};

export default BackofficeLayout;
