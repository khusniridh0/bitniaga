import { Link } from "react-router-dom"

const Navbar = () => {
    const pathname = window.location.pathname

    const toggleSubMenu = (e) => {
        const el = e.currentTarget.parentElement
        if (!el.classList.contains("nxl-trigger")) {
            document.querySelectorAll("div.nxl-trigger").forEach(function (item) {
                item.classList.remove("nxl-trigger")

            })
            el.classList.add("nxl-trigger")
        } else {
            el.classList.remove("nxl-trigger")
        }
    }

    return (
        <nav className="nxl-navigation">
            <div className="navbar-wrapper">
                <div className="m-header">
                    <a href="index.html" className="b-brand">
                        <img src="/images/bitmiring.png" alt="logo" className="logo w-100 logo-lg" />
                        <img src="/images/logo-abbr.png" alt="logo" className="logo w-100 logo-sm" />
                    </a>
                </div>
                <div className="navbar-content">
                    <div className="nxl-navbar">
                        <div className="nxl-item nxl-caption">
                            <label>Navigation</label>
                        </div>
                        <div className="nxl-item nxl-hasmenu">
                            <div role="button" className="nxl-link" onClick={(el) => { toggleSubMenu(el) }}>
                                <span className="nxl-micon"><i className="feather-airplay" /></span>
                                <span className="nxl-mtext">Dashboards</span><span className="nxl-arrow"><i className="feather-chevron-right" /></span>
                            </div>
                            <div className="nxl-submenu">
                                <div className="nxl-item"><a className="nxl-link" href="index.html">CRM</a></div>
                                <div className="nxl-item"><a className="nxl-link" href="analytics.html">Analytics</a></div>
                            </div>
                        </div>
                        <div className={`nxl-item nxl-hasmenu ${pathname == '/pelanggan' || pathname == '/pelanggan/form' ? 'active nxl-trigger' : ''}`}>
                            <div role="button" className="nxl-link" onClick={(el) => { toggleSubMenu(el) }}>
                                <span className="nxl-micon"><i className="feather-users" /></span>
                                <span className="nxl-mtext">Pelanggan</span><span className="nxl-arrow"><i className="feather-chevron-right" /></span>
                            </div>
                            <div className="nxl-submenu">
                                <div className={`nxl-item ${pathname == '/pelanggan' ? 'active' : ''}`}><Link className="nxl-link" to="/pelanggan">Daftar Pelanggan</Link></div>
                                <div className={`nxl-item ${pathname == '/pelanggan/form' ? 'active' : ''}`}><Link className="nxl-link" to="/pelanggan/form">Tambah Pelanggan</Link></div>
                            </div>
                        </div>
                        <div className={`nxl-item nxl-hasmenu ${pathname == '/pembayaran' ? 'active nxl-trigger' : ''}`}>
                            <div role="button" className="nxl-link" onClick={(el) => { toggleSubMenu(el) }}>
                                <span className="nxl-micon"><i className="feather-truck" /></span>
                                <span className="nxl-mtext">Pesanan</span><span className="nxl-arrow"><i className="feather-chevron-right" /></span>
                            </div>
                            <div className="nxl-submenu">
                                <div className={`nxl-item ${pathname == '/pembayaran' ? 'active' : ''}`}><Link className="nxl-link" to="/pembayaran">Pembayaran</Link></div>
                            </div>
                        </div>
                        <div className="nxl-item nxl-hasmenu">
                            <div role="button" className="nxl-link" onClick={(el) => { toggleSubMenu(el) }}>
                                <span className="nxl-micon"><i className="feather-book-open" /></span>
                                <span className="nxl-mtext">Laporan</span><span className="nxl-arrow"><i className="feather-chevron-right" /></span>
                            </div>
                            <div className="nxl-submenu">
                                <div className="nxl-item"><a className="nxl-link" href="/pelanggan/daftar">Daftar Pelanggan</a></div>
                                <div className="nxl-item"><a className="nxl-link" href="/pelanggan/form">Tambah Pelanggan</a></div>
                            </div>
                        </div>

                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <hr />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <div className="nxl-item nxl-hasmenu">
                            <div role="button" className="nxl-link" onClick={(el) => { toggleSubMenu(el) }}>
                                <span className="nxl-micon"><i className="feather-send" /></span>
                                <span className="nxl-mtext">Applications</span><span className="nxl-arrow"><i className="feather-chevron-right" /></span>
                            </div>
                            <div className="nxl-submenu">
                                <div className="nxl-item"><a className="nxl-link" href="apps-chat.html">Chat</a></div>
                                <div className="nxl-item"><a className="nxl-link" href="apps-email.html">Email</a></div>
                                <div className="nxl-item"><a className="nxl-link" href="apps-tasks.html">Tasks</a></div>
                                <div className="nxl-item"><a className="nxl-link" href="apps-notes.html">Notes</a></div>
                                <div className="nxl-item"><a className="nxl-link" href="apps-storage.html">Storage</a></div>
                                <div className="nxl-item"><a className="nxl-link" href="apps-calendar.html">Calendar</a></div>
                            </div>
                        </div>
                        <div className="nxl-item nxl-hasmenu">
                            <div role="button" className="nxl-link" onClick={(el) => { toggleSubMenu(el) }}>
                                <span className="nxl-micon"><i className="feather-at-sign" /></span>
                                <span className="nxl-mtext">Proposal</span><span className="nxl-arrow"><i className="feather-chevron-right" /></span>
                            </div>
                            <div className="nxl-submenu">
                                <div className="nxl-item"><a className="nxl-link" href="proposal.html">Proposal</a></div>
                                <div className="nxl-item"><a className="nxl-link" href="proposal-view.html">Proposal View</a></div>
                                <div className="nxl-item"><a className="nxl-link" href="proposal-edit.html">Proposal Edit</a></div>
                                <div className="nxl-item"><a className="nxl-link" href="proposal-create.html">Proposal Create</a></div>
                            </div>
                        </div>
                        <div className="nxl-item nxl-hasmenu">
                            <div role="button" className="nxl-link" onClick={(el) => { toggleSubMenu(el) }}>
                                <span className="nxl-micon"><i className="feather-dollar-sign" /></span>
                                <span className="nxl-mtext">Payment</span><span className="nxl-arrow"><i className="feather-chevron-right" /></span>
                            </div>
                            <div className="nxl-submenu">
                                <div className="nxl-item"><a className="nxl-link" href="payment.html">Payment</a></div>
                                <div className="nxl-item"><a className="nxl-link" href="invoice-view.html">Invoice View</a></div>
                                <div className="nxl-item"><a className="nxl-link" href="invoice-create.html">Invoice Create</a></div>
                            </div>
                        </div>
                        <div className="nxl-item nxl-hasmenu">
                            <div role="button" className="nxl-link" onClick={(el) => { toggleSubMenu(el) }}>
                                <span className="nxl-micon"><i className="feather-users" /></span>
                                <span className="nxl-mtext">Customers</span><span className="nxl-arrow"><i className="feather-chevron-right" /></span>
                            </div>
                            <div className="nxl-submenu">
                                <div className="nxl-item"><a className="nxl-link" href="customers.html">Customers</a></div>
                                <div className="nxl-item"><a className="nxl-link" href="customers-view.html">Customers View</a></div>
                                <div className="nxl-item"><a className="nxl-link" href="customers-create.html">Customers Create</a></div>
                            </div>
                        </div>
                        <div className="nxl-item nxl-hasmenu">
                            <div role="button" className="nxl-link" onClick={(el) => { toggleSubMenu(el) }}>
                                <span className="nxl-micon"><i className="feather-alert-circle" /></span>
                                <span className="nxl-mtext">Leads</span><span className="nxl-arrow"><i className="feather-chevron-right" /></span>
                            </div>
                            <div className="nxl-submenu">
                                <div className="nxl-item"><a className="nxl-link" href="leads.html">Leads</a></div>
                                <div className="nxl-item"><a className="nxl-link" href="leads-view.html">Leads View</a></div>
                                <div className="nxl-item"><a className="nxl-link" href="leads-create.html">Leads Create</a></div>
                            </div>
                        </div>
                        <div className="nxl-item nxl-hasmenu">
                            <div role="button" className="nxl-link" onClick={(el) => { toggleSubMenu(el) }}>
                                <span className="nxl-micon"><i className="feather-briefcase" /></span>
                                <span className="nxl-mtext">Projects</span><span className="nxl-arrow"><i className="feather-chevron-right" /></span>
                            </div>
                            <div className="nxl-submenu">
                                <div className="nxl-item"><a className="nxl-link" href="projects.html">Projects</a></div>
                                <div className="nxl-item"><a className="nxl-link" href="projects-view.html">Projects View</a></div>
                                <div className="nxl-item"><a className="nxl-link" href="projects-create.html">Projects Create</a></div>
                            </div>
                        </div>
                        <div className="nxl-item nxl-hasmenu">
                            <div role="button" className="nxl-link" onClick={(el) => { toggleSubMenu(el) }}>
                                <span className="nxl-micon"><i className="feather-layout" /></span>
                                <span className="nxl-mtext">Widgets</span><span className="nxl-arrow"><i className="feather-chevron-right" /></span>
                            </div>
                            <div className="nxl-submenu">
                                <div className="nxl-item"><a className="nxl-link" href="widgets-lists.html">Lists</a></div>
                                <div className="nxl-item"><a className="nxl-link" href="widgets-tables.html">Tables</a></div>
                                <div className="nxl-item"><a className="nxl-link" href="widgets-charts.html">Charts</a></div>
                                <div className="nxl-item"><a className="nxl-link" href="widgets-statistics.html">Statistics</a></div>
                                <div className="nxl-item"><a className="nxl-link" href="widgets-miscellaneous.html">Miscellaneous</a></div>
                            </div>
                        </div>
                        <div className="nxl-item nxl-hasmenu">
                            <div role="button" className="nxl-link" onClick={(el) => { toggleSubMenu(el) }}>
                                <span className="nxl-micon"><i className="feather-settings" /></span>
                                <span className="nxl-mtext">Settings</span><span className="nxl-arrow"><i className="feather-chevron-right" /></span>
                            </div>
                            <div className="nxl-submenu">
                                <div className="nxl-item"><a className="nxl-link" href="settings-general.html">General</a></div>
                                <div className="nxl-item"><a className="nxl-link" href="settings-seo.html">SEO</a></div>
                                <div className="nxl-item"><a className="nxl-link" href="settings-tags.html">Tags</a></div>
                                <div className="nxl-item"><a className="nxl-link" href="settings-email.html">Email</a></div>
                                <div className="nxl-item"><a className="nxl-link" href="settings-tasks.html">Tasks</a></div>
                                <div className="nxl-item"><a className="nxl-link" href="settings-leads.html">Leads</a></div>
                                <div className="nxl-item"><a className="nxl-link" href="settings-support.html">Support</a></div>
                                <div className="nxl-item"><a className="nxl-link" href="settings-finance.html">Finance</a></div>
                                <div className="nxl-item"><a className="nxl-link" href="settings-gateways.html">Gateways</a></div>
                                <div className="nxl-item"><a className="nxl-link" href="settings-customers.html">Customers</a></div>
                                <div className="nxl-item"><a className="nxl-link" href="settings-localization.html">Localization</a></div>
                                <div className="nxl-item"><a className="nxl-link" href="settings-recaptcha.html">reCAPTCHA</a></div>
                                <div className="nxl-item"><a className="nxl-link" href="settings-miscellaneous.html">Miscellaneous</a></div>
                            </div>
                        </div>
                        <div className="nxl-item nxl-hasmenu">
                            <div role="button" className="nxl-link" onClick={(el) => { toggleSubMenu(el) }}>
                                <span className="nxl-micon"><i className="feather-power" /></span>
                                <span className="nxl-mtext">Authentication</span><span className="nxl-arrow"><i className="feather-chevron-right" /></span>
                            </div>
                            <div className="nxl-submenu">
                                <div className="nxl-item nxl-hasmenu">
                                    <div role="button" className="nxl-link" onClick={(el) => { toggleSubMenu(el) }}>
                                        <span className="nxl-mtext">Login</span><span className="nxl-arrow"><i className="feather-chevron-right" /></span>
                                    </div>
                                    <div className="nxl-submenu">
                                        <div className="nxl-item"><a className="nxl-link" href="./auth-login-cover.html">Cover</a></div>
                                        <div className="nxl-item"><a className="nxl-link" href="./auth-login-minimal.html">Minimal</a></div>
                                        <div className="nxl-item"><a className="nxl-link" href="./auth-login-creative.html">Creative</a></div>
                                    </div>
                                </div>
                                <div className="nxl-item nxl-hasmenu">
                                    <div role="button" className="nxl-link" onClick={(el) => { toggleSubMenu(el) }}>
                                        <span className="nxl-mtext">Register</span><span className="nxl-arrow"><i className="feather-chevron-right" /></span>
                                    </div>
                                    <div className="nxl-submenu">
                                        <div className="nxl-item"><a className="nxl-link" href="./auth-register-cover.html">Cover</a></div>
                                        <div className="nxl-item"><a className="nxl-link" href="./auth-register-minimal.html">Minimal</a></div>
                                        <div className="nxl-item"><a className="nxl-link" href="./auth-register-creative.html">Creative</a></div>
                                    </div>
                                </div>
                                <div className="nxl-item nxl-hasmenu">
                                    <div role="button" className="nxl-link" onClick={(el) => { toggleSubMenu(el) }}>
                                        <span className="nxl-mtext">Error-404</span><span className="nxl-arrow"><i className="feather-chevron-right" /></span>
                                    </div>
                                    <div className="nxl-submenu">
                                        <div className="nxl-item"><a className="nxl-link" href="./auth-404-cover.html">Cover</a></div>
                                        <div className="nxl-item"><a className="nxl-link" href="./auth-404-minimal.html">Minimal</a></div>
                                        <div className="nxl-item"><a className="nxl-link" href="./auth-404-creative.html">Creative</a></div>
                                    </div>
                                </div>
                                <div className="nxl-item nxl-hasmenu">
                                    <div role="button" className="nxl-link" onClick={(el) => { toggleSubMenu(el) }}>
                                        <span className="nxl-mtext">Reset Pass</span><span className="nxl-arrow"><i className="feather-chevron-right" /></span>
                                    </div>
                                    <div className="nxl-submenu">
                                        <div className="nxl-item"><a className="nxl-link" href="./auth-reset-cover.html">Cover</a></div>
                                        <div className="nxl-item"><a className="nxl-link" href="./auth-reset-minimal.html">Minimal</a></div>
                                        <div className="nxl-item"><a className="nxl-link" href="./auth-reset-creative.html">Creative</a></div>
                                    </div>
                                </div>
                                <div className="nxl-item nxl-hasmenu">
                                    <div role="button" className="nxl-link" onClick={(el) => { toggleSubMenu(el) }}>
                                        <span className="nxl-mtext">Verify OTP</span><span className="nxl-arrow"><i className="feather-chevron-right" /></span>
                                    </div>
                                    <div className="nxl-submenu">
                                        <div className="nxl-item"><a className="nxl-link" href="./auth-verify-cover.html">Cover</a></div>
                                        <div className="nxl-item"><a className="nxl-link" href="./auth-verify-minimal.html">Minimal</a></div>
                                        <div className="nxl-item"><a className="nxl-link" href="./auth-verify-creative.html">Creative</a></div>
                                    </div>
                                </div>
                                <div className="nxl-item nxl-hasmenu">
                                    <div role="button" className="nxl-link" onClick={(el) => { toggleSubMenu(el) }}>
                                        <span className="nxl-mtext">Maintenance</span><span className="nxl-arrow"><i className="feather-chevron-right" /></span>
                                    </div>
                                    <div className="nxl-submenu">
                                        <div className="nxl-item"><a className="nxl-link" href="./auth-maintenance-cover.html">Cover</a></div>
                                        <div className="nxl-item"><a className="nxl-link" href="./auth-maintenance-minimal.html">Minimal</a></div>
                                        <div className="nxl-item"><a className="nxl-link" href="./auth-maintenance-creative.html">Creative</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="nxl-item nxl-hasmenu">
                            <div role="button" className="nxl-link" onClick={(el) => { toggleSubMenu(el) }}>
                                <span className="nxl-micon"><i className="feather-life-buoy" /></span>
                                <span className="nxl-mtext">Help Center</span><span className="nxl-arrow"><i className="feather-chevron-right" /></span>
                            </div>
                            <div className="nxl-submenu">
                                <div className="nxl-item"><a className="nxl-link" href="https://themeforest.net/user/flexilecode">Support</a></div>
                                <div className="nxl-item"><a className="nxl-link" href="help-knowledgebase.html">KnowledgeBase</a></div>
                                <div className="nxl-item"><a className="nxl-link" href="#">Documentations</a></div>
                            </div>
                        </div>
                    </div>
                    <div className="card text-center">
                        <div className="card-body">
                            <i className="feather-sunrise fs-4 text-dark" />
                            <h6 className="mt-4 text-dark fw-bolder">Downloading Center</h6>
                            <p className="fs-11 my-3 text-dark">Duralux is a production ready CRM to get started up and running easily.</p>
                            <div role="button" className="btn btn-primary text-dark w-100">Download Now</div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar