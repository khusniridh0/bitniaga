import DashboardLayout from "../../layouts/dashboard";

const Home = () => {
    return (
        <DashboardLayout>
            <div className="page-header">
                <div className="page-header-left d-flex align-items-center">
                    <div className="page-header-title">
                        <h5 className="m-b-10">Alexandra Della</h5>
                    </div>
                    <ul className="breadcrumb">
                        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                        <li className="breadcrumb-item">Dashboard</li>
                    </ul>
                </div>

            </div>
            <div className="main-content">
                <h1>Belum ada halaman</h1>
            </div>
        </DashboardLayout>
    );
}

export default Home;