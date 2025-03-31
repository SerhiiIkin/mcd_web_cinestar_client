import { Outlet } from 'react-router';
import { ToastContainer } from 'react-toastify';

import Footer from '@components/Footer';
import Header from '@components/Header/Header';

const MainLayout = () => {
    return (
        <div className="bg-tertiary text-primary flex min-h-dvh flex-col">
            <Header />
            <main className="flex-1">
                <Outlet />
            </main>
            <Footer />
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

export default MainLayout;
