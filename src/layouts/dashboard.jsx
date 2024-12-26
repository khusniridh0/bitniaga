import Sidebar from '../component/sidebar'
import Navbar from '../component/navbar'
// import Header from '../component/header'
import CustomTheme from '../component/custom-theme'

const DashboardLayout = ({ children }) => {
    return (
        <div className="flex h-screen">
            <Sidebar />
            <Navbar />
            <main className="nxl-container">
                <div className="nxl-content min-vh-100">
                    {children}
                </div>
                <footer className="footer">
                    <p className="fs-11 text-muted fw-medium text-uppercase mb-0 copyright">
                        <span>Copyright ©</span>
                    </p>
                    <div className="d-flex align-items-center gap-4">
                        <a href="#" className="fs-11 fw-semibold text-uppercase">Help</a>
                        <a href="#" className="fs-11 fw-semibold text-uppercase">Terms</a>
                        <a href="#" className="fs-11 fw-semibold text-uppercase">Privacy</a>
                    </div>
                </footer>

            </main>
            <CustomTheme />
        </div>
    );
};

export default DashboardLayout