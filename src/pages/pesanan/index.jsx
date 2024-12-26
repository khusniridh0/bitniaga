import { Link } from "react-router-dom";
import DashboardLayout from "../../layouts/dashboard";

const dummyData = [
    {
        invoice: "INV001",
        customerName: "John Doe",
        totalAmount: 100000,
        paymentDate: "2023-06-11",
        period: "June 2023",
        status: "Paid",
    },
    {
        invoice: "INV002",
        customerName: "Jane Smith",
        totalAmount: 150000,
        paymentDate: "2023-06-12",
        period: "June 2023",
        status: "Pending",
    },
    {
        invoice: "INV003",
        customerName: "Alice Johnson",
        totalAmount: 200000,
        paymentDate: "2023-06-13",
        period: "June 2023",
        status: "Overdue",
    },
    {
        invoice: "INV004",
        customerName: "Bob Brown",
        totalAmount: 250000,
        paymentDate: "2023-06-14",
        period: "June 2023",
        status: "Paid",
    },
    {
        invoice: "INV005",
        customerName: "Charlie Davis",
        totalAmount: 300000,
        paymentDate: "2023-06-15",
        period: "June 2023",
        status: "Pending",
    },
    {
        invoice: "INV006",
        customerName: "David Edwards",
        totalAmount: 350000,
        paymentDate: "2023-06-16",
        period: "June 2023",
        status: "Overdue",
    },
    {
        invoice: "INV007",
        customerName: "Eva Frank",
        totalAmount: 400000,
        paymentDate: "2023-06-17",
        period: "June 2023",
        status: "Paid",
    },
    {
        invoice: "INV008",
        customerName: "Fred Garcia",
        totalAmount: 450000,
        paymentDate: "2023-06-18",
        period: "June 2023",
        status: "Pending",
    },
];

const Pesanan = () => {
    return (
        <DashboardLayout>
            <div className="page-header">
                <div className="page-header-left d-flex align-items-center">
                    <div className="page-header-title">
                        <h5 className="m-b-10">Alexandra Della</h5>
                    </div>
                    <ul className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/pembayaran">Pesanan</Link></li>
                        <li className="breadcrumb-item">Pembayaran Pelanggan</li>
                    </ul>
                </div>
                <div className="page-header-right ms-auto">
                    <div className="page-header-right-items">
                        <div className="d-flex align-items-center gap-2 page-header-right-items-wrapper">
                            <div className="dropdown filter-dropdown">
                                <a href="javascript:void(0);" className="btn btn-primary">
                                    <i className="feather-plus me-2" />
                                    <span>Add Widgets</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="main-content">
                <div className="row">
                    <div className="col-12">
                        <div className="card stretch stretch-full">
                            <div className="card-header">
                                <h5 className="card-title">Daftar Pelanggan</h5>
                            </div>
                            <div className="card-body custom-card-action p-0">
                                <div className="table-responsive">
                                    <table className="table table-hover mb-0">
                                        <thead>
                                            <tr className="border-b">
                                                <th scope="row">Invoice</th>
                                                <th>Nama Pelanggan</th>
                                                <th>Jumlah Tagihan</th>
                                                <th>Tanggal Pembayaran</th>
                                                <th>Periode</th>
                                                <th>Status</th>
                                                <th className="text-end">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {dummyData.map((data) => (
                                                <tr key={data.id}>
                                                    <td>{data.invoice}</td>
                                                    <td>{data.customerName}</td>
                                                    <td>{data.totalAmount}</td>
                                                    <td>{data.paymentDate}</td>
                                                    <td>{data.period}</td>
                                                    <td>
                                                        {data.status === 'Aktif' && <span className="badge bg-soft-success text-success">Aktif</span>}
                                                        {data.status === 'Non-Aktif' && <span className="badge bg-soft-danger text-danger">Non-Aktif</span>}
                                                        {data.status === 'Paid' && <span className="badge bg-soft-success text-success">Paid</span>}
                                                        {data.status === 'Pending' && <span className="badge bg-soft-warning text-warning">Pending</span>}
                                                        {data.status === 'Overdue' && <span className="badge bg-soft-danger text-danger">Overdue</span>}
                                                    </td>
                                                    <td className="text-end">
                                                        <div className="dropdown">
                                                            <a href="javascript:void(0);" data-bs-toggle="dropdown" data-bs-offset="-25,-15"><i className="feather-more-vertical" /></a>
                                                            <div className="dropdown-menu dropdown-menu-end">
                                                                <Link to="/pembayaran/invoice" className="dropdown-item"><i className="feather-printer" />Buat Invoice</Link>
                                                                <a href="javascript:void(0);" className="dropdown-item"><i className="feather-trash-2" />Delete</a>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="card-footer">
                                <ul className="list-unstyled d-flex align-items-center gap-2 mb-0 pagination-common-style">
                                    <li>
                                        <a href="javascript:void(0);"><i className="bi bi-arrow-left" /></a>
                                    </li>
                                    <li><a href="javascript:void(0);" className="active">1</a></li>
                                    <li><a href="javascript:void(0);">2</a></li>
                                    <li>
                                        <a href="javascript:void(0);"><i className="bi bi-dot" /></a>
                                    </li>
                                    <li><a href="javascript:void(0);">8</a></li>
                                    <li><a href="javascript:void(0);">9</a></li>
                                    <li>
                                        <a href="javascript:void(0);"><i className="bi bi-arrow-right" /></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}

export default Pesanan;