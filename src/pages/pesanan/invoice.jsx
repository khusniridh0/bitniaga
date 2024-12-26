import { Link } from "react-router-dom";
import Dashboard from "../../layouts/dashboard";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { useRef } from "react";

const Form = () => {
    const printInvoice = useRef()

    const handlePrint = () => {
        const fileName = `Invoice.pdf`
        html2canvas(printInvoice.current).then(canvas => {
            const pdf = new jsPDF({
                orientation: 'portrait',
                unit: 'mm',
                format: 'a4'
            })

            pdf.addImage(canvas.toDataURL('img/webp', 2.0), 'WEBP', 0, 0, pdf.internal.pageSize.getWidth(), 0)
            pdf.save(fileName);
        })
    }


    return (
        <Dashboard>
            <div className="page-header">
                <div className="page-header-left d-flex align-items-center">
                    <div className="page-header-title">
                        <h5 className="m-b-10">Alexandra Della</h5>
                    </div>
                    <ul className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/pembayaran">Pesanan</Link></li>
                        <li className="breadcrumb-item"><Link to="/pembayaran">Pembayaran Pelanggan</Link></li>
                        <li className="breadcrumb-item">Invoice</li>
                    </ul>
                </div>
            </div>
            <div className="main-content container-lg">
                <div className="row">
                    <div className="col-12 mx-auto">
                        <div className="card invoice-container">
                            <div className="card-header">
                                <div>
                                    <h2 className="fs-16 fw-700 text-truncate-1-line mb-0 mb-sm-1">Invoice Preview</h2>
                                </div>
                                <div className="d-flex">
                                    <button type="button" className="bg-transparent border-0 p-2">
                                        <div className="avatar-text avatar-md" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Send Invoice">
                                            <i className="feather feather-send" />
                                        </div>
                                    </button>
                                    <button type="button" className="bg-transparent border-0 p-2" onClick={handlePrint}>
                                        <div className="avatar-text avatar-md" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Download Invoice">
                                            <i className="feather feather-download" />
                                        </div>
                                    </button>
                                    <Link to="/pelanggan/form" className="bg-transparent border-0 p-2">
                                        <div className="avatar-text avatar-md" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Edit Invoice">
                                            <i className="feather feather-edit" />
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="card-body p-0" ref={printInvoice}>
                                <div className="px-4 pt-4">
                                    <div className="d-sm-flex align-items-center justify-content-between">
                                        <div>
                                            <div className="fs-24 fw-bolder font-montserrat-alt text-uppercase">Bitniaga</div>
                                            <address className="text-muted">
                                                P.O. Box 18728,<br />
                                                DeLorean New York<br />
                                                VAT No: 2617 348 2752
                                            </address>
                                        </div>
                                        <div className="lh-lg pt-3 pt-sm-0">
                                            <h2 className="fs-4 fw-bold text-primary">Invoice</h2>
                                            <div>
                                                <span className="fw-bold text-dark">Invoice:</span>
                                                <span className="fw-bold text-primary"> #NXL369852</span>
                                            </div>
                                            <div>
                                                <span className="fw-bold text-dark">Due Date:</span>
                                                <span className="text-muted"> 28 Feb, 2023</span>
                                            </div>
                                            <div>
                                                <span className="fw-bold text-dark">Issued Date:</span>
                                                <span className="text-muted"> 25 JAN, 2023</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr className="border-dashed" />
                                <div className="px-4 py-sm-5">
                                    <div className="d-sm-flex gap-4 justify-content-center">
                                        <div className="text-sm-end">
                                            <h2 className="fs-16 fw-bold text-dark mb-3">Invoiced To:</h2>
                                            <address className="text-muted lh-lg">
                                                Ellen Louise Ripley<br />
                                                Nostromo PO Box 29618<br />
                                                VAT No: 295 3932 6119<br />
                                                United Kingdom
                                            </address>
                                        </div>
                                        <div className="border-end border-end-dashed border-gray-500 d-none d-sm-block" />
                                        <div className="mt-4 mt-sm-0">
                                            <h2 className="fs-16 fw-bold text-dark mb-3">Payment Details:</h2>
                                            <div className="text-muted lh-lg">
                                                <div>
                                                    <span className="text-muted">Total Due:</span>
                                                    <span className="fw-bold text-dark"> $249 USD</span>
                                                </div>
                                                <div>
                                                    <span className="text-muted">Payout Status:</span>
                                                    <span className="fw-bold text-warning">Pending</span>
                                                </div>
                                                <div>
                                                    <span className="text-muted">Card Holder:</span>
                                                    <span className="fw-bold text-dark"> Alexandra Della</span>
                                                </div>
                                                <div>
                                                    <span className="text-muted">Payment Method:</span>
                                                    <span className="fw-bold text-dark"> Mastercard</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr className="border-dashed mb-0" />
                                <div className="table-responsive">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>Service</th>
                                                <th>Description</th>
                                                <th>Rate</th>
                                                <th>QTY</th>
                                                <th>Amount</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><a href="#">Adata </a></td>
                                                <td>Modern &amp; Minimal Multipurpose Bootstrap Admin Dashboard</td>
                                                <td>$50.00</td>
                                                <td>10</td>
                                                <td className="text-dark fw-semibold">$500.00</td>
                                            </tr>
                                            <tr>
                                                <td><a href="#">Avesta </a></td>
                                                <td>Multipurpose Bootstrap4 Admin Dashboard Template</td>
                                                <td>$120.00</td>
                                                <td>10</td>
                                                <td className="text-dark fw-semibold">$1200.00</td>
                                            </tr>
                                            <tr>
                                                <td><a href="#">Metrical </a></td>
                                                <td>Multipurpose Bootstrap4 Admin Dashboard Template</td>
                                                <td>$450.00</td>
                                                <td>1</td>
                                                <td className="text-dark fw-semibold">$450.00</td>
                                            </tr>
                                            <tr>
                                                <td><a href="#">Avesta </a></td>
                                                <td>Multipurpose Bootstrap4 Admin Dashboard Template</td>
                                                <td>$120.00</td>
                                                <td>10</td>
                                                <td className="text-dark fw-semibold">$1200.00</td>
                                            </tr>
                                            <tr>
                                                <td><a href="#">Duralux </a></td>
                                                <td>Admin Dashboard &amp; Webapps Template</td>
                                                <td>$50.00</td>
                                                <td>10</td>
                                                <td className="text-dark fw-semibold">$500.00</td>
                                            </tr>
                                            <tr>
                                                <td colSpan={3} />
                                                <td className="fw-semibold text-dark bg-gray-100 text-lg-end">Sub Total</td>
                                                <td className="fw-bold text-dark bg-gray-100">+ $2150.00</td>
                                            </tr>
                                            <tr>
                                                <td colSpan={3} />
                                                <td className="fw-semibold text-dark bg-gray-100 text-lg-end">Discount (NXL2023 - 15%)</td>
                                                <td className="fw-bold text-success bg-gray-100">- $567.00</td>
                                            </tr>
                                            <tr>
                                                <td colSpan={3} />
                                                <td className="fw-semibold text-dark bg-gray-100 text-lg-end">Estimated Tax (12.5%)</td>
                                                <td className="fw-bold text-dark bg-gray-100">+ $225.00</td>
                                            </tr>
                                            <tr>
                                                <td colSpan={3} />
                                                <td className="fw-semibold text-dark bg-gray-100 text-lg-end">Grand Amount</td>
                                                <td className="fw-bolder text-dark bg-gray-100">= $2065.00</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <hr className="border-dashed mt-0" />
                                <div className="px-4 pt-4 d-sm-flex align-items-center justify-content-between">
                                    <div className="mb-5 mb-sm-0">
                                        <h6 className="fs-13 fw-bold mb-3">Tarm &amp; Condition :</h6>
                                        <ul className="list-unstyled lh-lg fs-12">
                                            <li># All accounts are to be paid within 7 days from receipt of invoice.</li>
                                            <li># To be paid by cheque or credit card or direct payment online.</li>
                                            <li># If account is not paid within 7 days the credits details supplied as confirmation.</li>
                                            <li># This is computer generated receipt and does not require physical signature.</li>
                                        </ul>
                                    </div>
                                    <div className="text-center">
                                        <img src="/images/bitmiring.png" className="img-fluid wd-100" alt="image" />
                                        <h6 className="fs-13 fw-bold mt-2">Account Manager</h6>
                                        <p className="fs-11 fw-semibold text-muted">26 MAY 2023, 10:35PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </Dashboard >
    )
}

export default Form