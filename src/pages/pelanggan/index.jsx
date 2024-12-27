import { Link } from "react-router-dom";
import Dashboard from "../../layouts/dashboard";
import Swal from "sweetalert2";

const dummyData = [
    {
        id: 1,
        name: "Muhammad Rizky",
        email: "muhammadrizky@email.com",
        phone: "081234567890",
        birthdate: "1995-01-01",
        status: "Aktif"
    },
    {
        id: 2,
        name: "Rafi Muhammad",
        email: "rafimuhammad@email.com",
        phone: "085678901234",
        birthdate: "1990-02-02",
        status: "Non-Aktif"
    },
    {
        id: 3,
        name: "Azzam Muslim",
        email: "azzammuslim@email.com",
        phone: "089876543210",
        birthdate: "1992-03-03",
        status: "Aktif"
    },
    {
        id: 4,
        name: "Azzam Muslim",
        email: "azzammuslim2@email.com",
        phone: "089876543210",
        birthdate: "1992-03-03",
        status: "Non-Aktif"
    },
    {
        id: 5,
        name: "Azzam Muslim",
        email: "azzammuslim3@email.com",
        phone: "089876543210",
        birthdate: "1992-03-03",
        status: "Aktif"
    }
]

const Pelanggan = () => {

    const alertConfirm = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Success!',
                    'Action Execute Successfully',
                    'success'
                )
            }
        })
    }

    return (
        <Dashboard>
            <div className="page-header">
                <div className="page-header-left d-flex align-items-center">

                    <ul className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/pelanggan">Pelanggan</Link></li>
                        <li className="breadcrumb-item">Daftar Pelanggan</li>
                    </ul>
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
                                                <th scope="row">Nama Lengkap</th>
                                                <th>Nomor Telepon</th>
                                                <th>Tanggal Lahir</th>
                                                <th>Status</th>
                                                <th className="text-end">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            {dummyData.map((user) => (
                                                <tr key={user.id}>
                                                    <td>
                                                        <div className="d-flex align-items-center gap-3">
                                                            <div className="avatar-image">
                                                                <img src={`https://i.pravatar.cc/100?img=${user.id}`} alt className="img-fluid" />
                                                            </div>
                                                            <a href="#">
                                                                <span className="d-block">{user.name}</span>
                                                                <span className="fs-12 d-block fw-normal text-muted">{user.email}</span>
                                                            </a>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <span className="badge bg-gray-200 text-dark">{user.phone}</span>
                                                    </td>
                                                    <td>{user.birthdate}</td>
                                                    <td>
                                                        <span className={`badge ${user.status === "Aktif" ? "bg-soft-success text-success" : "bg-soft-danger text-danger"}`}>{user.status}</span>
                                                    </td>
                                                    <td className="text-end">
                                                        <div className="dropdown">
                                                            <a href="#" data-bs-toggle="dropdown" data-bs-offset="-25,-15"><i className="feather-more-vertical" /></a>
                                                            <div className="dropdown-menu dropdown-menu-end">
                                                                {user.status == 'Aktif' && <button type="button" onClick={alertConfirm} className="dropdown-item"><i className="feather-eye-off" />Deactivate</button>}
                                                                {user.status == 'Non-Aktif' && <button type="button" onClick={alertConfirm} className="dropdown-item"><i className="feather-eye" />Activate</button>}

                                                                <a href="#" className="dropdown-item"><i className="feather-edit-2" />Edit</a>
                                                                <button type="button" className="dropdown-item" onClick={alertConfirm}><i className="feather-trash-2" />Delete</button>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}

                                            {/* <tr>
                                                <td>
                                                    <div className="d-flex align-items-center gap-3">
                                                        <div className="avatar-image">
                                                            <img src="https://i.pravatar.cc/100?img=3.png" alt className="img-fluid" />
                                                        </div>
                                                        <a href="#">
                                                            <span className="d-block">Holmes Cherryman</span>
                                                            <span className="fs-12 d-block fw-normal text-muted">golms.chan@gmail.com</span>
                                                        </a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span className="badge bg-gray-200 text-dark">0823456789123</span>
                                                </td>
                                                <td>11/06/2023</td>
                                                <td>
                                                    <span className="badge bg-soft-warning text-warning">Not Active</span>
                                                </td>
                                                <td className="text-end">
                                                    <div className="dropdown">
                                                        <a href="#" data-bs-toggle="dropdown" data-bs-offset="-25,-15"><i className="feather-more-vertical" /></a>
                                                        <div className="dropdown-menu dropdown-menu-end">
                                                            <a href="#" className="dropdown-item"><i className="feather-eye" />Activate</a>
                                                            <a href="#" className="dropdown-item"><i className="feather-edit-2" />Edit</a>
                                                            <a href="#" className="dropdown-item"><i className="feather-trash-2" />Delete</a>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center gap-3">
                                                        <div className="avatar-image">
                                                            <img src="https://i.pravatar.cc/100?img=4.png" alt className="img-fluid" />
                                                        </div>
                                                        <a href="#">
                                                            <span className="d-block">Malanie Hanvey</span>
                                                            <span className="fs-12 d-block fw-normal text-muted">lanie.nveyn@gmail.com</span>
                                                        </a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span className="badge bg-gray-200 text-dark">0823456789123</span>
                                                </td>
                                                <td>11/06/2023</td>
                                                <td>
                                                    <span className="badge bg-soft-success text-success">Active</span>
                                                </td>
                                                <td className="text-end">
                                                    <div className="dropdown">
                                                        <a href="#" data-bs-toggle="dropdown" data-bs-offset="-25,-15"><i className="feather-more-vertical" /></a>
                                                        <div className="dropdown-menu dropdown-menu-end">
                                                            <a href="#" className="dropdown-item"><i className="feather-eye-off" />Deactivate</a>
                                                            <a href="#" className="dropdown-item"><i className="feather-edit-2" />Edit</a>
                                                            <a href="#" className="dropdown-item"><i className="feather-trash-2" />Delete</a>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center gap-3">
                                                        <div className="avatar-image">
                                                            <img src="https://i.pravatar.cc/100?img=5.png" alt className="img-fluid" />
                                                        </div>
                                                        <a href="#">
                                                            <span className="d-block">Kenneth Hune</span>
                                                            <span className="fs-12 d-block fw-normal text-muted">nneth.une@gmail.com</span>
                                                        </a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span className="badge bg-gray-200 text-dark">0823456789123</span>
                                                </td>
                                                <td>11/06/2023</td>
                                                <td>
                                                    <span className="badge bg-soft-warning text-warning">Not Active</span>
                                                </td>
                                                <td className="text-end">
                                                    <div className="dropdown">
                                                        <a href="#" data-bs-toggle="dropdown" data-bs-offset="-25,-15"><i className="feather-more-vertical" /></a>
                                                        <div className="dropdown-menu dropdown-menu-end">
                                                            <a href="#" className="dropdown-item"><i className="feather-eye" />Activate</a>
                                                            <a href="#" className="dropdown-item"><i className="feather-edit-2" />Edit</a>
                                                            <a href="#" className="dropdown-item"><i className="feather-trash-2" />Delete</a>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center gap-3">
                                                        <div className="avatar-image">
                                                            <img src="https://i.pravatar.cc/100?img=6.png" alt className="img-fluid" />
                                                        </div>
                                                        <a href="#">
                                                            <span className="d-block">Valentine Maton</span>
                                                            <span className="fs-12 d-block fw-normal text-muted">alenine.aton@gmail.com</span>
                                                        </a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span className="badge bg-gray-200 text-dark">0823456789123</span>
                                                </td>
                                                <td>11/06/2023</td>
                                                <td>
                                                    <span className="badge bg-soft-success text-success">Active</span>
                                                </td>
                                                <td className="text-end">
                                                    <div className="dropdown">
                                                        <a href="#" data-bs-toggle="dropdown" data-bs-offset="-25,-15"><i className="feather-more-vertical" /></a>
                                                        <div className="dropdown-menu dropdown-menu-end">
                                                            <a href="#" className="dropdown-item"><i className="feather-eye-off" />Deactivate</a>
                                                            <a href="#" className="dropdown-item"><i className="feather-edit-2" />Edit</a>
                                                            <a href="#" className="dropdown-item"><i className="feather-trash-2" />Delete</a>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr> */}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="card-footer">
                                <ul className="list-unstyled d-flex align-items-center gap-2 mb-0 pagination-common-style">
                                    <li>
                                        <a href="#"><i className="bi bi-arrow-left" /></a>
                                    </li>
                                    <li><a href="#" className="active">1</a></li>
                                    <li><a href="#">2</a></li>
                                    <li>
                                        <a href="#"><i className="bi bi-dot" /></a>
                                    </li>
                                    <li><a href="#">8</a></li>
                                    <li><a href="#">9</a></li>
                                    <li>
                                        <a href="#"><i className="bi bi-arrow-right" /></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Dashboard>
    )
}

export default Pelanggan