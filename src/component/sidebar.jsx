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
                        <div className={`nxl-item nxl-hasmenu ${pathname == '/' || pathname == '/keuangan' ? 'active nxl-trigger' : ''}`}>
                            <div role="button" className="nxl-link" onClick={(el) => { toggleSubMenu(el) }}>
                                <span className="nxl-micon"><i className="feather-airplay" /></span>
                                <span className="nxl-mtext">Dashboards</span><span className="nxl-arrow"><i className="feather-chevron-right" /></span>
                            </div>
                            <div className="nxl-submenu">
                                <div className={`nxl-item ${pathname == '/' ? 'active' : ''}`}><Link className="nxl-link" to="/">OLT</Link></div>
                                <div className={`nxl-item ${pathname == '/keuangan' ? 'active' : ''}`}><Link className="nxl-link" to="/keuangan">Keuangan</Link></div>
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
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar