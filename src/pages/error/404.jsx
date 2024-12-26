import { Link } from "react-router-dom";

const Error404 = () => {
    return (
        <main className="auth-minimal-wrapper">
            <div className="auth-minimal-inner">
                <div className="minimal-card-wrapper">
                    <div className="card mb-4 mt-5 mx-4 mx-sm-0 position-relative">
                        <div className="wd-50 bg-white p-2 rounded-circle shadow-lg position-absolute translate-middle top-0 start-50">
                            <img src="/images/logo-abbr.png" alt className="img-fluid" />
                        </div>
                        <div className="card-body p-sm-5 text-center">
                            <h2 className="fw-bolder mb-4" style={{ fontSize: 120 }}>4<span className="text-danger">0</span>4</h2>
                            <h4 className="fw-bold mb-2">Halaman tidak ditemukan</h4>
                            <p className="fs-12 fw-medium text-muted">Maaf, halaman yang Anda cari tidak dapat ditemukan. Silakan periksa URL atau coba halaman lain di situs kami.</p>
                            <div className="mt-5">
                                <Link to="/" className="btn btn-light-brand w-100">Kembali</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>

    );
}

export default Error404;