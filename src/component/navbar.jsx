import { useEffect } from "react"
import { useRef } from "react"

const Sidebar = () => {
    const menuOverlay = useRef()

    const fullScreenHelper = () => {
        if (document.fullscreenElement) {
            document.exitFullscreen()
            document.querySelector('.feather-maximize').style.display = 'block'
            document.querySelector('.feather-minimize').style.display = 'none'
        } else {
            document.documentElement.requestFullscreen()
            document.querySelector('.feather-maximize').style.display = 'none'
            document.querySelector('.feather-minimize').style.display = 'block'
        }
    }

    const expandSidebar = () => {
        document.querySelector('html').classList.toggle('minimenu')
        if (document.querySelector('html').classList.contains('minimenu')) {
            document.querySelector('#menu-expend-button').style.display = 'block'
            document.querySelector('#menu-mini-button').style.display = 'none'
        } else {
            document.querySelector('#menu-expend-button').style.display = 'none'
            document.querySelector('#menu-mini-button').style.display = 'block'
        }
    }

    const expandSidebarMobile = () => {
        document.querySelector('.nxl-navigation').classList.toggle('mob-navigation-active')
        document.querySelector('.nxl-navigation').append(menuOverlay.current)
        document.querySelector('.hamburger').classList.toggle('is-active')

        menuOverlay.current.addEventListener('click', () => {
            document.querySelector('.nxl-navigation').classList.remove('mob-navigation-active')
            document.querySelector('.hamburger').classList.remove('is-active')
            menuOverlay.current.remove()
        })
    }

    const switchTheme = () => {
        if (document.querySelector('html').classList.contains('app-skin-dark')) {
            document.querySelector('html').classList.remove('app-skin-dark')
            document.querySelector('html').classList.add('app-skin-light')
            localStorage.setItem('app-skin-dark', 'app-skin-light')
        } else {
            document.querySelector('html').classList.remove('app-skin-light')
            document.querySelector('html').classList.add('app-skin-dark')
            localStorage.setItem('app-skin-dark', 'app-skin-dark')
        }
    }

    useEffect(() => {
        if (menuOverlay.current) {
            menuOverlay.current.remove()
        }
    })

    return (
        <header className="nxl-header">
            <div className="header-wrapper">
                <div className="header-left d-flex align-items-center gap-4">
                    <div className="nxl-head-mobile-toggler" id="mobile-collapse">
                        <div className="hamburger hamburger--arrowturn" role="button" onClick={expandSidebarMobile}>
                            <div className="hamburger-box">
                                <div className="hamburger-inner" />
                            </div>
                        </div>
                    </div>
                    <div className="nxl-navigation-toggle" role="button">
                        <div id="menu-mini-button" role="button" style={{ display: 'block' }} onClick={expandSidebar}>
                            <i className="feather-align-left" />
                        </div>
                        <div id="menu-expend-button" role="button" style={{ display: 'none' }} onClick={expandSidebar}>
                            <i className="feather-arrow-right" />
                        </div>
                    </div>

                </div>
                <div className="header-right ms-auto">
                    <div className="d-flex align-items-center">
                        <div className="dropdown nxl-h-item nxl-header-search">
                            <div role="button" className="nxl-head-link me-0" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                                <i className="feather-search" />
                            </div>
                            <div className="dropdown-menu dropdown-menu-end nxl-h-dropdown nxl-search-dropdown">
                                <div className="input-group search-form">
                                    <span className="input-group-text">
                                        <i className="feather-search fs-6 text-muted" />
                                    </span>
                                    <input type="text" className="form-control search-input-field" placeholder="Search...." />
                                    <span className="input-group-text">
                                        <button type="button" className="btn-close" />
                                    </span>
                                </div>
                                <div className="dropdown-divider mt-0" />
                                <div className="search-items-wrapper">
                                    <div className="searching-for px-4 py-2">
                                        <p className="fs-11 fw-medium text-muted">You are searching for...</p>
                                        <div className="d-flex flex-wrap gap-1">
                                            <div role="button" className="flex-fill border rounded py-1 px-2 text-center fs-11 fw-semibold">Projects</div>
                                            <div role="button" className="flex-fill border rounded py-1 px-2 text-center fs-11 fw-semibold">Leads</div>
                                            <div role="button" className="flex-fill border rounded py-1 px-2 text-center fs-11 fw-semibold">Contacts</div>
                                            <div role="button" className="flex-fill border rounded py-1 px-2 text-center fs-11 fw-semibold">Inbox</div>
                                            <div role="button" className="flex-fill border rounded py-1 px-2 text-center fs-11 fw-semibold">Invoices</div>
                                            <div role="button" className="flex-fill border rounded py-1 px-2 text-center fs-11 fw-semibold">Tasks</div>
                                            <div role="button" className="flex-fill border rounded py-1 px-2 text-center fs-11 fw-semibold">Customers</div>
                                            <div role="button" className="flex-fill border rounded py-1 px-2 text-center fs-11 fw-semibold">Notes</div>
                                            <div role="button" className="flex-fill border rounded py-1 px-2 text-center fs-11 fw-semibold">Affiliate</div>
                                            <div role="button" className="flex-fill border rounded py-1 px-2 text-center fs-11 fw-semibold">Storage</div>
                                            <div role="button" className="flex-fill border rounded py-1 px-2 text-center fs-11 fw-semibold">Calendar</div>
                                        </div>
                                    </div>
                                    <div className="dropdown-divider" />
                                    <div className="recent-result px-4 py-2">
                                        <h4 className="fs-13 fw-normal text-gray-600 mb-3">Recnet <span className="badge small bg-gray-200 rounded ms-1 text-dark">3</span></h4>
                                        <div className="d-flex align-items-center justify-content-between mb-4">
                                            <div className="d-flex align-items-center gap-3">
                                                <div className="avatar-text rounded">
                                                    <i className="feather-airplay" />
                                                </div>
                                                <div>
                                                    <div role="button" className="font-body fw-bold d-block mb-1">CRM dashboard redesign</div>
                                                    <p className="fs-11 text-muted mb-0">Home / project / crm</p>
                                                </div>
                                            </div>
                                            <div>
                                                <div role="button" className="badge border rounded text-dark">/<i className="feather-command ms-1 fs-10" /></div>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between mb-4">
                                            <div className="d-flex align-items-center gap-3">
                                                <div className="avatar-text rounded">
                                                    <i className="feather-file-plus" />
                                                </div>
                                                <div>
                                                    <div role="button" className="font-body fw-bold d-block mb-1">Create new document</div>
                                                    <p className="fs-11 text-muted mb-0">Home / tasks / docs</p>
                                                </div>
                                            </div>
                                            <div>
                                                <div role="button" className="badge border rounded text-dark">N /<i className="feather-command ms-1 fs-10" /></div>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="d-flex align-items-center gap-3">
                                                <div className="avatar-text rounded">
                                                    <i className="feather-user-plus" />
                                                </div>
                                                <div>
                                                    <div role="button" className="font-body fw-bold d-block mb-1">Invite project colleagues</div>
                                                    <p className="fs-11 text-muted mb-0">Home / project / invite</p>
                                                </div>
                                            </div>
                                            <div>
                                                <div role="button" className="badge border rounded text-dark">P /<i className="feather-command ms-1 fs-10" /></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="dropdown-divider my-3" />
                                    <div className="users-result px-4 py-2">
                                        <h4 className="fs-13 fw-normal text-gray-600 mb-3">Users <span className="badge small bg-gray-200 rounded ms-1 text-dark">5</span></h4>
                                        <div className="d-flex align-items-center justify-content-between mb-4">
                                            <div className="d-flex align-items-center gap-3">
                                                <div className="avatar-image rounded">
                                                    <img src="https://i.pravatar.cc/100?img=11" alt="Image" className="img-fluid" />
                                                </div>
                                                <div>
                                                    <div role="button" className="font-body fw-bold d-block mb-1">Alexandra Della</div>
                                                    <p className="fs-11 text-muted mb-0">alex.della@outlook.com</p>
                                                </div>
                                            </div>
                                            <div role="button" className="avatar-text avatar-md">
                                                <i className="feather-chevron-right" />
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between mb-4">
                                            <div className="d-flex align-items-center gap-3">
                                                <div className="avatar-image rounded">
                                                    <img src="https://i.pravatar.cc/100?img=1" alt="Image" className="img-fluid" />
                                                </div>
                                                <div>
                                                    <div role="button" className="font-body fw-bold d-block mb-1">Green Cute</div>
                                                    <p className="fs-11 text-muted mb-0">green.cute@outlook.com</p>
                                                </div>
                                            </div>
                                            <div role="button" className="avatar-text avatar-md">
                                                <i className="feather-chevron-right" />
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between mb-4">
                                            <div className="d-flex align-items-center gap-3">
                                                <div className="avatar-image rounded">
                                                    <img src="https://i.pravatar.cc/100?img=3" alt="Image" className="img-fluid" />
                                                </div>
                                                <div>
                                                    <div role="button" className="font-body fw-bold d-block mb-1">Malanie Hanvey</div>
                                                    <p className="fs-11 text-muted mb-0">malanie.anvey@outlook.com</p>
                                                </div>
                                            </div>
                                            <div role="button" className="avatar-text avatar-md">
                                                <i className="feather-chevron-right" />
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between mb-4">
                                            <div className="d-flex align-items-center gap-3">
                                                <div className="avatar-image rounded">
                                                    <img src="https://i.pravatar.cc/100?img=4" alt="Image" className="img-fluid" />
                                                </div>
                                                <div>
                                                    <div role="button" className="font-body fw-bold d-block mb-1">Kenneth Hune</div>
                                                    <p className="fs-11 text-muted mb-0">kenth.hune@outlook.com</p>
                                                </div>
                                            </div>
                                            <div role="button" className="avatar-text avatar-md">
                                                <i className="feather-chevron-right" />
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between mb-0">
                                            <div className="d-flex align-items-center gap-3">
                                                <div className="avatar-image rounded">
                                                    <img src="https://i.pravatar.cc/100?img=5" alt="Image" className="img-fluid" />
                                                </div>
                                                <div>
                                                    <div role="button" className="font-body fw-bold d-block mb-1">Archie Cantones</div>
                                                    <p className="fs-11 text-muted mb-0">archie.cones@outlook.com</p>
                                                </div>
                                            </div>
                                            <div role="button" className="avatar-text avatar-md">
                                                <i className="feather-chevron-right" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="dropdown-divider my-3" />
                                    <div className="file-result px-4 py-2">
                                        <h4 className="fs-13 fw-normal text-gray-600 mb-3">Files <span className="badge small bg-gray-200 rounded ms-1 text-dark">3</span></h4>
                                        <div className="d-flex align-items-center justify-content-between mb-4">
                                            <div className="d-flex align-items-center gap-3">
                                                <div className="avatar-image bg-gray-200 rounded">
                                                    <img src="/images/file-icons/css.png" alt="Image" className="img-fluid" />
                                                </div>
                                                <div>
                                                    <div role="button" className="font-body fw-bold d-block mb-1">Project Style CSS</div>
                                                    <p className="fs-11 text-muted mb-0">05.74 MB</p>
                                                </div>
                                            </div>
                                            <div role="button" className="avatar-text avatar-md">
                                                <i className="feather-download" />
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between mb-4">
                                            <div className="d-flex align-items-center gap-3">
                                                <div className="avatar-image bg-gray-200 rounded">
                                                    <img src="/images/file-icons/zip.png" alt="Image" className="img-fluid" />
                                                </div>
                                                <div>
                                                    <div role="button" className="font-body fw-bold d-block mb-1">Dashboard Project Zip</div>
                                                    <p className="fs-11 text-muted mb-0">46.83 MB</p>
                                                </div>
                                            </div>
                                            <div role="button" className="avatar-text avatar-md">
                                                <i className="feather-download" />
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between mb-0">
                                            <div className="d-flex align-items-center gap-3">
                                                <div className="avatar-image bg-gray-200 rounded">
                                                    <img src="/images/file-icons/pdf.png" alt="Image" className="img-fluid" />
                                                </div>
                                                <div>
                                                    <div role="button" className="font-body fw-bold d-block mb-1">Project Document PDF</div>
                                                    <p className="fs-11 text-muted mb-0">12.85 MB</p>
                                                </div>
                                            </div>
                                            <div role="button" className="avatar-text avatar-md">
                                                <i className="feather-download" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="dropdown-divider mt-3 mb-0" />
                                    <div role="button" className="p-3 fs-10 fw-bold text-uppercase text-center d-block">Loar More</div>
                                </div>
                            </div>
                        </div>
                        <div className="dropdown nxl-h-item nxl-header-language d-none d-sm-flex">
                            <div role="button" className="nxl-head-link me-0 nxl-language-link" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                                <img src="/vendors/img/flags/4x3/us.svg" alt="Image" className="img-fluid wd-20" />
                            </div>
                            <div className="dropdown-menu dropdown-menu-end nxl-h-dropdown nxl-language-dropdown">
                                <div className="dropdown-divider mt-0" />
                                <div className="language-items-wrapper">
                                    <div className="row px-4 pt-3">
                                        <div className="col-sm-4 col-6 language_select">
                                            <div role="button" className="d-flex align-items-center gap-2">
                                                <div className="avatar-image avatar-sm"><img src="vendors/img/flags/1x1/id.svg" alt="Image" className="img-fluid" /></div>
                                                <span>Indonesia</span>
                                            </div>
                                        </div>
                                        <div className="col-sm-4 col-6 language_select active">
                                            <div role="button" className="d-flex align-items-center gap-2">
                                                <div className="avatar-image avatar-sm"><img src="vendors/img/flags/1x1/us.svg" alt="Image" className="img-fluid" /></div>
                                                <span>English</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="nxl-h-item d-none d-sm-flex">
                            <div className="full-screen-switcher">
                                <div role="button" className="nxl-head-link me-0" onClick={fullScreenHelper}>
                                    <i className="feather-maximize maximize" />
                                    <i className="feather-minimize minimize" style={{ display: 'none' }} />
                                </div>
                            </div>
                        </div>
                        <div className="nxl-h-item dark-light-theme">
                            <div role="button" className="nxl-head-link me-0 dark-button" onClick={switchTheme}>
                                <i className="feather-moon" />
                            </div>
                            <div role="button" className="nxl-head-link me-0 light-button" onClick={switchTheme} style={{ display: 'none' }}>
                                <i className="feather-sun" />
                            </div>
                        </div>

                        <div className="dropdown nxl-h-item">
                            <a className="nxl-head-link me-3" data-bs-toggle="dropdown" href="#" role="button" data-bs-auto-close="outside">
                                <i className="feather-bell" />
                                <span className="badge bg-danger nxl-h-badge">3</span>
                            </a>
                            <div className="dropdown-menu dropdown-menu-end nxl-h-dropdown nxl-notifications-menu">
                                <div className="d-flex justify-content-between align-items-center notifications-head">
                                    <h6 className="fw-bold text-dark mb-0">Notifications</h6>
                                    <div role="button" className="fs-11 text-success text-end ms-auto" data-bs-toggle="tooltip" title="Make as Read">
                                        <i className="feather-check" />
                                        <span>Make as Read</span>
                                    </div>
                                </div>
                                <div className="notifications-item">
                                    <img src="https://i.pravatar.cc/100?img=1" alt="Image" className="rounded me-3 border" />
                                    <div className="notifications-desc">
                                        <div role="button" className="font-body text-truncate-2-line"> <span className="fw-semibold text-dark">Malanie Hanvey</span> We should talk about that at lunch!</div>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="notifications-date text-muted border-bottom border-bottom-dashed">2 minutes ago</div>
                                            <div className="d-flex align-items-center float-end gap-2">
                                                <div role="button" className="d-block wd-8 ht-8 rounded-circle bg-gray-300" data-bs-toggle="tooltip" title="Make as Read" />
                                                <div role="button" className="text-danger" data-bs-toggle="tooltip" title="Remove">
                                                    <i className="feather-x fs-12" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="notifications-item">
                                    <img src="https://i.pravatar.cc/100?img=3" alt="Image" className="rounded me-3 border" />
                                    <div className="notifications-desc">
                                        <div role="button" className="font-body text-truncate-2-line"> <span className="fw-semibold text-dark">Valentine Maton</span> You can download the latest invoices now.</div>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="notifications-date text-muted border-bottom border-bottom-dashed">36 minutes ago</div>
                                            <div className="d-flex align-items-center float-end gap-2">
                                                <div role="button" className="d-block wd-8 ht-8 rounded-circle bg-gray-300" data-bs-toggle="tooltip" title="Make as Read" />
                                                <div role="button" className="text-danger" data-bs-toggle="tooltip" title="Remove">
                                                    <i className="feather-x fs-12" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="notifications-item">
                                    <img src="https://i.pravatar.cc/100?img=4" alt="Image" className="rounded me-3 border" />
                                    <div className="notifications-desc">
                                        <div role="button" className="font-body text-truncate-2-line"> <span className="fw-semibold text-dark">Archie Cantones</span>Forget to pickup Jeremy after school!</div>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="notifications-date text-muted border-bottom border-bottom-dashed">53 minutes ago</div>
                                            <div className="d-flex align-items-center float-end gap-2">
                                                <div role="button" className="d-block wd-8 ht-8 rounded-circle bg-gray-300" data-bs-toggle="tooltip" title="Make as Read" />
                                                <div role="button" className="text-danger" data-bs-toggle="tooltip" title="Remove">
                                                    <i className="feather-x fs-12" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center notifications-footer">
                                    <div role="button" className="fs-13 fw-semibold text-dark">Alls Notifications</div>
                                </div>
                            </div>
                        </div>
                        <div className="dropdown nxl-h-item">
                            <div role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                                <img src="https://i.pravatar.cc/100?img=11" alt="user-image" className="img-fluid user-avtar me-0" />
                            </div>
                            <div className="dropdown-menu dropdown-menu-end nxl-h-dropdown nxl-user-dropdown">
                                <div className="dropdown-header">
                                    <div className="d-flex align-items-center">
                                        <img src="https://i.pravatar.cc/100?img=11" alt="user-image" className="img-fluid user-avtar" />
                                        <div>
                                            <h6 className="text-dark mb-0">Alexandra Della <span className="badge bg-soft-success text-success ms-1">PRO</span></h6>
                                            <span className="fs-12 fw-medium text-muted">alex.della@outlook.com</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="dropdown">
                                    <div role="button" className="dropdown-item" data-bs-toggle="dropdown">
                                        <span className="hstack">
                                            <i className="wd-10 ht-10 border border-2 border-gray-1 bg-success rounded-circle me-2" />
                                            <span>Active</span>
                                        </span>
                                        <i className="feather-chevron-right ms-auto me-0" />
                                    </div>
                                    <div className="dropdown-menu">
                                        <div role="button" className="dropdown-item">
                                            <span className="hstack">
                                                <i className="wd-10 ht-10 border border-2 border-gray-1 bg-warning rounded-circle me-2" />
                                                <span>Always</span>
                                            </span>
                                        </div>
                                        <div role="button" className="dropdown-item">
                                            <span className="hstack">
                                                <i className="wd-10 ht-10 border border-2 border-gray-1 bg-success rounded-circle me-2" />
                                                <span>Active</span>
                                            </span>
                                        </div>
                                        <div role="button" className="dropdown-item">
                                            <span className="hstack">
                                                <i className="wd-10 ht-10 border border-2 border-gray-1 bg-danger rounded-circle me-2" />
                                                <span>Bussy</span>
                                            </span>
                                        </div>
                                        <div role="button" className="dropdown-item">
                                            <span className="hstack">
                                                <i className="wd-10 ht-10 border border-2 border-gray-1 bg-info rounded-circle me-2" />
                                                <span>Inactive</span>
                                            </span>
                                        </div>
                                        <div role="button" className="dropdown-item">
                                            <span className="hstack">
                                                <i className="wd-10 ht-10 border border-2 border-gray-1 bg-dark rounded-circle me-2" />
                                                <span>Disabled</span>
                                            </span>
                                        </div>
                                        <div className="dropdown-divider" />
                                        <div role="button" className="dropdown-item">
                                            <span className="hstack">
                                                <i className="wd-10 ht-10 border border-2 border-gray-1 bg-primary rounded-circle me-2" />
                                                <span>Cutomization</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="dropdown-divider" />
                                <div className="dropdown">
                                    <div role="button" className="dropdown-item" data-bs-toggle="dropdown">
                                        <span className="hstack">
                                            <i className="feather-dollar-sign me-2" />
                                            <span>Subscriptions</span>
                                        </span>
                                        <i className="feather-chevron-right ms-auto me-0" />
                                    </div>
                                    <div className="dropdown-menu">
                                        <div role="button" className="dropdown-item">
                                            <span className="hstack">
                                                <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3" />
                                                <span>Plan</span>
                                            </span>
                                        </div>
                                        <div role="button" className="dropdown-item">
                                            <span className="hstack">
                                                <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3" />
                                                <span>Billings</span>
                                            </span>
                                        </div>
                                        <div role="button" className="dropdown-item">
                                            <span className="hstack">
                                                <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3" />
                                                <span>Referrals</span>
                                            </span>
                                        </div>
                                        <div role="button" className="dropdown-item">
                                            <span className="hstack">
                                                <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3" />
                                                <span>Payments</span>
                                            </span>
                                        </div>
                                        <div role="button" className="dropdown-item">
                                            <span className="hstack">
                                                <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3" />
                                                <span>Statements</span>
                                            </span>
                                        </div>
                                        <div className="dropdown-divider" />
                                        <div role="button" className="dropdown-item">
                                            <span className="hstack">
                                                <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3" />
                                                <span>Subscriptions</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="dropdown-divider" />
                                <div role="button" className="dropdown-item">
                                    <i className="feather-user" />
                                    <span>Profile Details</span>
                                </div>
                                <div role="button" className="dropdown-item">
                                    <i className="feather-activity" />
                                    <span>Activity Feed</span>
                                </div>
                                <div role="button" className="dropdown-item">
                                    <i className="feather-dollar-sign" />
                                    <span>Billing Details</span>
                                </div>
                                <div role="button" className="dropdown-item">
                                    <i className="feather-bell" />
                                    <span>Notifications</span>
                                </div>
                                <div role="button" className="dropdown-item">
                                    <i className="feather-settings" />
                                    <span>Account Settings</span>
                                </div>
                                <div className="dropdown-divider" />
                                <a href="./auth-login-minimal.html" className="dropdown-item">
                                    <i className="feather-log-out" />
                                    <span>Logout</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="nxl-menu-overlay" ref={menuOverlay}></div>
        </header >
    )
}

export default Sidebar