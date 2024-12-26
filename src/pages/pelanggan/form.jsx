import { Link } from "react-router-dom";
import Dashboard from "../../layouts/dashboard";
import Swal from "sweetalert2";

const Form = () => {
    const alert = () => {
        Swal.mixin({
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            },
            buttonsStyling: false
        }).fire({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timerProgressBar: true,

            timer: 3000,
            title: "Action Execute Successfully",
            icon: "success"
        });
    };

    return (
        <Dashboard>
            <div className="page-header">
                <div className="page-header-left d-flex align-items-center">
                    <div className="page-header-title">
                        <h5 className="m-b-10">Alexandra Della</h5>
                    </div>
                    <ul className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/pelanggan">Pelanggan</Link></li>
                        <li className="breadcrumb-item">Formulir Pelanggan</li>
                    </ul>
                </div>
            </div>

            <div className="main-content">
                <div className="row">
                    <div className="col-12">
                        <div className="card border-top-0">
                            <div className="card-header p-0">
                                <ul className="nav nav-tabs flex-wrap w-100 text-center customers-nav-tabs" id="myTab" role="tablist">
                                    <li className="nav-item flex-fill border-top" role="presentation">
                                        <a href="#" className="nav-link active" data-bs-toggle="tab" data-bs-target="#profil" role="tab">Profil</a>
                                    </li>
                                    <li className="nav-item flex-fill border-top" role="presentation">
                                        <a href="#" className="nav-link" data-bs-toggle="tab" data-bs-target="#product" role="tab">Produk</a>
                                    </li>
                                    <li className="nav-item flex-fill border-top" role="presentation">
                                        <a href="#" className="nav-link" data-bs-toggle="tab" data-bs-target="#order" role="tab">Pemesanan</a>
                                    </li>
                                    <li className="nav-item flex-fill border-top" role="presentation">
                                        <a href="#" className="nav-link" data-bs-toggle="tab" data-bs-target="#PPPoE" role="tab">PPPoE</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="tab-content">
                                <div className="tab-pane fade show active p-4" id="profil" role="tabpanel">
                                    <div className="about-section mb-5">
                                        <div className="mb-4 d-flex align-items-center justify-content-between">
                                            <h5 className="fw-bold mb-0">
                                                <span className="d-block mb-2">Biodata Pelanggan:</span>
                                                <span className="fs-12 fw-normal text-muted text-truncate-1-line">
                                                    Menjadi bagian dari keluarga Bitniaga yang besar dan bahagia
                                                </span>
                                            </h5>
                                        </div>
                                    </div>
                                    <div className="profile-details mb-5">
                                        <div className="row mb-4 align-items-center">
                                            <div className="col-lg-4">
                                                <label className="fw-semibold">Avatar: </label>
                                            </div>
                                            <div className="col-lg-8">
                                                <div className="mb-4 mb-md-0 d-flex gap-4 your-brand">
                                                    <div className="wd-100 ht-100 position-relative overflow-hidden border border-gray-2 rounded">
                                                        <img src="/images/avatar/1.png" className="upload-pic img-fluid rounded h-100 w-100" alt />
                                                        <div className="position-absolute start-50 top-50 end-0 bottom-0 translate-middle h-100 w-100 hstack align-items-center justify-content-center c-pointer upload-button">
                                                            <i className="feather feather-camera" aria-hidden="true" />
                                                        </div>
                                                        <input className="file-upload" type="file" accept="image/*" />
                                                    </div>
                                                    <div className="d-flex flex-column gap-1">
                                                        <div className="fs-11 text-gray-500 mt-2"># Upload your prifile</div>
                                                        <div className="fs-11 text-gray-500"># Avatar size 150x150</div>
                                                        <div className="fs-11 text-gray-500"># Max upload size 2mb</div>
                                                        <div className="fs-11 text-gray-500"># Allowed file types: png, jpg, jpeg</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row mb-4 align-items-center">
                                            <div className="col-lg-4">
                                                <label htmlFor="fullnameInput" className="fw-semibold">Nama Lengkap: </label>
                                            </div>
                                            <div className="col-lg-8">
                                                <div className="input-group">
                                                    <div className="input-group-text"><i className="feather-user" /></div>
                                                    <input type="text" className="form-control" id="fullnameInput" placeholder="cth: Khusn Ridho" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row mb-4 align-items-center">
                                            <div className="col-lg-4">
                                                <label htmlFor="fullnameInput" className="fw-semibold">NIK: </label>
                                            </div>
                                            <div className="col-lg-8">
                                                <div className="input-group">
                                                    <div className="input-group-text"><i className="feather-credit-card" /></div>
                                                    <input type="text" className="form-control" id="fullnameInput" placeholder="cth: 9485739283459192" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row mb-4 align-items-center">
                                            <div className="col-lg-4">
                                                <label htmlFor="fullnameInput" className="fw-semibold">No HP/WA: </label>
                                            </div>
                                            <div className="col-lg-8">
                                                <div className="input-group">
                                                    <div className="input-group-text"><i className="feather-phone" /></div>
                                                    <input type="text" className="form-control" id="fullnameInput" placeholder="cth: 081234567893" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row mb-4 align-items-center">
                                            <div className="col-lg-4">
                                                <label htmlFor="fullnameInput" className="fw-semibold">Tipe Pelanggan: </label>
                                            </div>
                                            <div className="col-lg-8">
                                                <div className="input-group">
                                                    <div className="input-group-text"><i className="feather-users" /></div>
                                                    <select className="form-control" data-select2-selector="icon">
                                                        <option value={'Home'}>Home</option>
                                                        <option value={'Dedicated'}>Dedicated</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row mb-4 align-items-center">
                                            <div className="col-lg-4">
                                                <label htmlFor="fullnameInput" className="fw-semibold">Alamat: </label>
                                            </div>
                                            <div className="col-lg-8">
                                                <div className="input-group">
                                                    <div className="input-group-text"><i className="feather-map-pin" /></div>
                                                    <textarea className="form-control" id="fullnameInput" placeholder="tulis alamat lengkap" rows={3} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="product" role="tabpanel">
                                    <div className="subscription-plan px-4 pt-4">
                                        <div className="mb-4 d-flex align-items-center justify-content-between">
                                            <h5 className="fw-bold mb-0">
                                                <span className="d-block mb-2">Detail Produk:</span>
                                                <span className="fs-12 fw-normal text-muted text-truncate-1-line">
                                                    Temukan kecepatan dan keandalan dengan produk unggulan kami
                                                </span>
                                            </h5>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 mb-4">
                                                <label htmlFor="product" className="form-label">Produk <span className="text-danger">*</span></label>
                                                <div className="input-group">
                                                    <div className="input-group-text"><i className="feather-wifi" /></div>
                                                    <select className="form-control" data-select2-selector="icon" id="product">
                                                        <option value={'15 Mbps'}>15 Mbps</option>
                                                        <option value={'25 Mbps'}>25 Mbps</option>
                                                        <option value={'35 Mbps'}>35 Mbps</option>
                                                        <option value={'60 Mbps'}>60 Mbps</option>
                                                        <option value={'100 Mbps'}>100 Mbps</option>
                                                        <option value={'200 Mbps'}>200 Mbps</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 mb-4">
                                                <label htmlFor="price" className="form-label">Harga <span className="text-danger">*</span></label>
                                                <div className="input-group">
                                                    <div className="input-group-text"><i className="feather-dollar-sign" /></div>
                                                    <input type="text" className="form-control" id="price" placeholder="60.000" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 mb-4">
                                                <label htmlFor="price" className="form-label">Biaya Registrasi <span className="text-danger">*</span></label>
                                                <div className="input-group">
                                                    <div className="input-group-text"><i className="feather-dollar-sign" /></div>
                                                    <input type="text" className="form-control" id="price" placeholder="60.000" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 mb-4">
                                                <label htmlFor="price" className="form-label">Biaya Tambahan <span className="text-danger">*</span></label>
                                                <div className="input-group">
                                                    <div className="input-group-text"><i className="feather-dollar-sign" /></div>
                                                    <input type="text" className="form-control" id="price" placeholder="60.000" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="order" role="tabpanel">
                                    <div className="recent-activity p-4 pb-0">
                                        <div className="mb-4 pb-2 d-flex justify-content-between">
                                            <h5 className="fw-bold mb-0">
                                                <span className="d-block mb-2">Detail Pemesanan:</span>
                                                <span className="fs-12 fw-normal text-muted text-truncate-1-line">
                                                    Cari kecepatan dan keandalan dengan produk unggulan kami, kami akan membantu Anda mencari produk yang sesuai dengan kebutuhan Anda
                                                </span>
                                            </h5>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 mb-4">
                                                <label htmlFor="product" className="form-label">Port OLT <span className="text-danger">*</span></label>
                                                <div className="input-group">
                                                    <div className="input-group-text"><i className="feather-radio" /></div>
                                                    <select className="form-control" data-select2-selector="icon" id="product">
                                                        <option value={'Taman Sari 1/2/3/4'}>Taman Sari 1/2/3/4</option>
                                                        <option value={'Sariejo 1/2/3/4'}>Sariejo 1/2/3/4</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 mb-4">
                                                <label htmlFor="product" className="form-label">ODP <span className="text-danger">*</span></label>
                                                <div className="input-group">
                                                    <div className="input-group-text"><i className="feather-radio" /></div>
                                                    <select className="form-control" data-select2-selector="icon" id="product">
                                                        <option value={'ODP 1.1.1'}>ODP 1.1.1</option>
                                                        <option value={'ODP 1.1.2'}>ODP 1.1.2</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="col-lg-6 mb-4">
                                                <label htmlFor="price" className="form-label">SN Modem <span className="text-danger">*</span></label>
                                                <div className="input-group">
                                                    <div className="input-group-text"><i className="feather-radio" /></div>
                                                    <input type="text" className="form-control" id="price" placeholder="DSL-2543B" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 mb-4">
                                                <label htmlFor="price" className="form-label">Jarak ODP ke Pelanggan <span className="text-danger">*</span></label>
                                                <div className="input-group">
                                                    <div className="input-group-text"><i className="feather-map" /></div>
                                                    <input type="text" className="form-control" id="price" placeholder="10 Km" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="PPPoE" role="tabpanel">
                                    <div className="card-body pass-info">
                                        <div className="mb-4 d-flex align-items-center justify-content-between">
                                            <h5 className="fw-bold mb-0 me-4">
                                                <span className="d-block mb-2">Password Information:</span>
                                                <span className="fs-12 fw-normal text-muted text-truncate-1-line">You can only change your password twice within 24 hours! </span>
                                            </h5>
                                            <a href="#" className="btn btn-sm btn-light-brand">Reset</a>
                                        </div>
                                        <div className="row mb-4 align-items-center">
                                            <div className="col-lg-4">
                                                <label htmlFor="Input" className="fw-semibold">Password: </label>
                                            </div>
                                            <div className="col-lg-8">
                                                <div className="input-group">
                                                    <div className="input-group-text"><i className="feather-key" /></div>
                                                    <input type="password" className="form-control" id="Input" placeholder="Password" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row mb-4 align-items-center">
                                            <div className="col-lg-4">
                                                <label htmlFor="Input" className="fw-semibold">Password Confirm: </label>
                                            </div>
                                            <div className="col-lg-8 generate-pass">
                                                <div className="input-group field">
                                                    <div className="input-group-text"><i className="feather-key" /></div>
                                                    <input type="password" className="form-control password" id="newPassword" placeholder="Password Confirm" />
                                                    <div className="input-group-text c-pointer gen-pass"><i className="feather-hash" /></div>
                                                    <div className="input-group-text border-start bg-gray-2 c-pointer show-pass"><i /></div>
                                                </div>
                                                <div className="progress-bar mt-2">
                                                    <div />
                                                    <div />
                                                    <div />
                                                    <div />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="pass-hint">
                                            <p className="fw-bold">Password Requirements:</p>
                                            <ul className="fs-12 ps-1 ms-2 text-muted">
                                                <li className="mb-1">At least one lowercase character</li>
                                                <li className="mb-1">Minimum 8 characters long - the more, the better</li>
                                                <li>At least one number, symbol, or whitespace character</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <hr className="my-0" />
                                    <div className="card-body pass-security">
                                        <div className="mb-4 d-flex align-items-center justify-content-between">
                                            <h5 className="fw-bold mb-0 me-4">
                                                <span className="d-block mb-2">Security preferences:</span>
                                                <span className="fs-12 fw-normal text-muted text-truncate-1-line">Keep your account more secure with following preferences. </span>
                                            </h5>
                                            <a href="#" className="btn btn-sm btn-light-brand">Check Auth</a>
                                        </div>
                                        <div className="hstack justify-content-between p-4 mb-3 border border-dashed border-gray-3 rounded-1">
                                            <div className="hstack me-4">
                                                <div className="avatar-text">
                                                    <i className="feather-eye" />
                                                </div>
                                                <div className="ms-4">
                                                    <a href="#" className="fw-bold mb-1 text-truncate-1-line">Enable 2-step authentication</a>
                                                    <div className="fs-12 text-muted text-truncate-1-line">Protects you against password theft by requesting an authentication code via SMS on every login.</div>
                                                </div>
                                            </div>
                                            <div className="form-check form-switch form-switch-sm">
                                                <label className="form-check-label fw-500 text-dark c-pointer" htmlFor="formSwitch2FA" />
                                                <input className="form-check-input c-pointer" type="checkbox" id="formSwitch2FA" />
                                            </div>
                                        </div>
                                        <div className="hstack justify-content-between p-4 mb-3 border border-dashed border-gray-3 rounded-1">
                                            <div className="hstack me-4">
                                                <div className="avatar-text">
                                                    <i className="feather-shield" />
                                                </div>
                                                <div className="ms-4">
                                                    <a href="#" className="fw-bold mb-1 text-truncate-1-line">Ask to change password on every 6 months</a>
                                                    <div className="fs-12 text-muted text-truncate-1-line">A simple but an effective way to be protected against data leaks and password theft.</div>
                                                </div>
                                            </div>
                                            <div className="form-check form-switch form-switch-sm">
                                                <label className="form-check-label fw-500 text-dark c-pointer" htmlFor="formSwitchPassChange" />
                                                <input className="form-check-input c-pointer" type="checkbox" id="formSwitchPassChange" />
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-end">
                                            <button type="button" className="btn btn-primary" onClick={alert}>Buat Pesanan</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Dashboard>
    )
}

export default Form