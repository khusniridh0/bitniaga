const CustomTheme = () => {
    return (
        <div className="theme-customizer">
            <div className="customizer-handle">
                <a href="javascript:void(0);" className="cutomizer-open-trigger bg-primary">
                    <i className="feather-settings" />
                </a>
            </div>
            <div className="customizer-sidebar-wrapper">
                <div className="customizer-sidebar-header px-4 ht-80 border-bottom d-flex align-items-center justify-content-between">
                    <h5 className="mb-0">Theme Settings</h5>
                    <a href="javascript:void(0);" className="cutomizer-close-trigger d-flex">
                        <i className="feather-x" />
                    </a>
                </div>
                <div className="customizer-sidebar-body position-relative p-4 ps ps--active-y" data-scrollbar-target="#psScrollbarInit">
                    <div className="position-relative px-3 pb-3 pt-4 mt-3 mb-5 border border-gray-2 theme-options-set">
                        <label className="py-1 px-2 fs-8 fw-bold text-uppercase text-muted text-spacing-2 bg-white border border-gray-2 position-absolute rounded-2 options-label" style={{ top: '-12px' }}>Navigation</label>
                        <div className="row g-2 theme-options-items app-navigation" id="appNavigationList">
                            <div className="col-6 text-center single-option">
                                <input type="radio" className="btn-check" id="app-navigation-light" name="app-navigation" defaultValue={1} data-app-navigation="app-navigation-light" defaultChecked />
                                <label className="py-2 fs-9 fw-bold text-dark text-uppercase text-spacing-1 border border-gray-2 w-100 h-100 c-pointer position-relative options-label" htmlFor="app-navigation-light">Light</label>
                            </div>
                            <div className="col-6 text-center single-option">
                                <input type="radio" className="btn-check" id="app-navigation-dark" name="app-navigation" defaultValue={2} data-app-navigation="app-navigation-dark" />
                                <label className="py-2 fs-9 fw-bold text-dark text-uppercase text-spacing-1 border border-gray-2 w-100 h-100 c-pointer position-relative options-label" htmlFor="app-navigation-dark">Dark</label>
                            </div>
                        </div>
                    </div>
                    <div className="position-relative px-3 pb-3 pt-4 mt-3 mb-5 border border-gray-2 theme-options-set mt-5">
                        <label className="py-1 px-2 fs-8 fw-bold text-uppercase text-muted text-spacing-2 bg-white border border-gray-2 position-absolute rounded-2 options-label" style={{ top: '-12px' }}>Header</label>
                        <div className="row g-2 theme-options-items app-header" id="appHeaderList">
                            <div className="col-6 text-center single-option">
                                <input type="radio" className="btn-check" id="app-header-light" name="app-header" defaultValue={1} data-app-header="app-header-light" defaultChecked />
                                <label className="py-2 fs-9 fw-bold text-dark text-uppercase text-spacing-1 border border-gray-2 w-100 h-100 c-pointer position-relative options-label" htmlFor="app-header-light">Light</label>
                            </div>
                            <div className="col-6 text-center single-option">
                                <input type="radio" className="btn-check" id="app-header-dark" name="app-header" defaultValue={2} data-app-header="app-header-dark" />
                                <label className="py-2 fs-9 fw-bold text-dark text-uppercase text-spacing-1 border border-gray-2 w-100 h-100 c-pointer position-relative options-label" htmlFor="app-header-dark">Dark</label>
                            </div>
                        </div>
                    </div>
                    <div className="position-relative px-3 pb-3 pt-4 mt-3 mb-5 border border-gray-2 theme-options-set">
                        <label className="py-1 px-2 fs-8 fw-bold text-uppercase text-muted text-spacing-2 bg-white border border-gray-2 position-absolute rounded-2 options-label" style={{ top: '-12px' }}>Skins</label>
                        <div className="row g-2 theme-options-items app-skin" id="appSkinList">
                            <div className="col-6 text-center position-relative single-option light-button" style={{}}>
                                <input type="radio" className="btn-check" id="app-skin-light" name="app-skin" defaultValue={1} data-app-skin="app-skin-light" />
                                <label className="py-2 fs-9 fw-bold text-dark text-uppercase text-spacing-1 border border-gray-2 w-100 h-100 c-pointer position-relative options-label" htmlFor="app-skin-light">Light</label>
                            </div>
                            <div className="col-6 text-center position-relative single-option dark-button active" style={{ display: 'none' }}>
                                <input type="radio" className="btn-check" id="app-skin-dark" name="app-skin" defaultValue={2} data-app-skin="app-skin-dark" />
                                <label className="py-2 fs-9 fw-bold text-dark text-uppercase text-spacing-1 border border-gray-2 w-100 h-100 c-pointer position-relative options-label" htmlFor="app-skin-dark">Dark</label>
                            </div>
                        </div>
                    </div>
                    <div className="position-relative px-3 pb-3 pt-4 mt-3 mb-0 border border-gray-2 theme-options-set">
                        <label className="py-1 px-2 fs-8 fw-bold text-uppercase text-muted text-spacing-2 bg-white border border-gray-2 position-absolute rounded-2 options-label" style={{ top: '-12px' }}>Typography</label>
                        <div className="row g-2 theme-options-items font-family" id="fontFamilyList">
                            <div className="col-6 text-center single-option">
                                <input type="radio" className="btn-check" id="app-font-family-lato" name="font-family" defaultValue={1} data-font-family="app-font-family-lato" />
                                <label className="py-2 fs-9 fw-bold text-dark text-uppercase text-spacing-1 border border-gray-2 w-100 h-100 c-pointer position-relative options-label" htmlFor="app-font-family-lato">Lato</label>
                            </div>
                            <div className="col-6 text-center single-option">
                                <input type="radio" className="btn-check" id="app-font-family-rubik" name="font-family" defaultValue={2} data-font-family="app-font-family-rubik" />
                                <label className="py-2 fs-9 fw-bold text-dark text-uppercase text-spacing-1 border border-gray-2 w-100 h-100 c-pointer position-relative options-label" htmlFor="app-font-family-rubik">Rubik</label>
                            </div>
                            <div className="col-6 text-center single-option">
                                <input type="radio" className="btn-check" id="app-font-family-inter" name="font-family" defaultValue={3} data-font-family="app-font-family-inter" defaultChecked />
                                <label className="py-2 fs-9 fw-bold text-dark text-uppercase text-spacing-1 border border-gray-2 w-100 h-100 c-pointer position-relative options-label" htmlFor="app-font-family-inter">Inter</label>
                            </div>
                            <div className="col-6 text-center single-option">
                                <input type="radio" className="btn-check" id="app-font-family-cinzel" name="font-family" defaultValue={4} data-font-family="app-font-family-cinzel" />
                                <label className="py-2 fs-9 fw-bold text-dark text-uppercase text-spacing-1 border border-gray-2 w-100 h-100 c-pointer position-relative options-label" htmlFor="app-font-family-cinzel">Cinzel</label>
                            </div>
                            <div className="col-6 text-center single-option">
                                <input type="radio" className="btn-check" id="app-font-family-nunito" name="font-family" defaultValue={6} data-font-family="app-font-family-nunito" />
                                <label className="py-2 fs-9 fw-bold text-dark text-uppercase text-spacing-1 border border-gray-2 w-100 h-100 c-pointer position-relative options-label" htmlFor="app-font-family-nunito">Nunito</label>
                            </div>
                            <div className="col-6 text-center single-option">
                                <input type="radio" className="btn-check" id="app-font-family-roboto" name="font-family" defaultValue={7} data-font-family="app-font-family-roboto" />
                                <label className="py-2 fs-9 fw-bold text-dark text-uppercase text-spacing-1 border border-gray-2 w-100 h-100 c-pointer position-relative options-label" htmlFor="app-font-family-roboto">Roboto</label>
                            </div>
                            <div className="col-6 text-center single-option">
                                <input type="radio" className="btn-check" id="app-font-family-ubuntu" name="font-family" defaultValue={8} data-font-family="app-font-family-ubuntu" />
                                <label className="py-2 fs-9 fw-bold text-dark text-uppercase text-spacing-1 border border-gray-2 w-100 h-100 c-pointer position-relative options-label" htmlFor="app-font-family-ubuntu">Ubuntu</label>
                            </div>
                            <div className="col-6 text-center single-option">
                                <input type="radio" className="btn-check" id="app-font-family-poppins" name="font-family" defaultValue={9} data-font-family="app-font-family-poppins" />
                                <label className="py-2 fs-9 fw-bold text-dark text-uppercase text-spacing-1 border border-gray-2 w-100 h-100 c-pointer position-relative options-label" htmlFor="app-font-family-poppins">Poppins</label>
                            </div>
                            <div className="col-6 text-center single-option">
                                <input type="radio" className="btn-check" id="app-font-family-raleway" name="font-family" defaultValue={10} data-font-family="app-font-family-raleway" />
                                <label className="py-2 fs-9 fw-bold text-dark text-uppercase text-spacing-1 border border-gray-2 w-100 h-100 c-pointer position-relative options-label" htmlFor="app-font-family-raleway">Raleway</label>
                            </div>
                            <div className="col-6 text-center single-option">
                                <input type="radio" className="btn-check" id="app-font-family-system-ui" name="font-family" defaultValue={11} data-font-family="app-font-family-system-ui" />
                                <label className="py-2 fs-9 fw-bold text-dark text-uppercase text-spacing-1 border border-gray-2 w-100 h-100 c-pointer position-relative options-label" htmlFor="app-font-family-system-ui">System UI</label>
                            </div>
                            <div className="col-6 text-center single-option">
                                <input type="radio" className="btn-check" id="app-font-family-noto-sans" name="font-family" defaultValue={12} data-font-family="app-font-family-noto-sans" />
                                <label className="py-2 fs-9 fw-bold text-dark text-uppercase text-spacing-1 border border-gray-2 w-100 h-100 c-pointer position-relative options-label" htmlFor="app-font-family-noto-sans">Noto Sans</label>
                            </div>
                            <div className="col-6 text-center single-option">
                                <input type="radio" className="btn-check" id="app-font-family-fira-sans" name="font-family" defaultValue={13} data-font-family="app-font-family-fira-sans" />
                                <label className="py-2 fs-9 fw-bold text-dark text-uppercase text-spacing-1 border border-gray-2 w-100 h-100 c-pointer position-relative options-label" htmlFor="app-font-family-fira-sans">Fira Sans</label>
                            </div>
                            <div className="col-6 text-center single-option">
                                <input type="radio" className="btn-check" id="app-font-family-work-sans" name="font-family" defaultValue={14} data-font-family="app-font-family-work-sans" />
                                <label className="py-2 fs-9 fw-bold text-dark text-uppercase text-spacing-1 border border-gray-2 w-100 h-100 c-pointer position-relative options-label" htmlFor="app-font-family-work-sans">Work Sans</label>
                            </div>
                            <div className="col-6 text-center single-option">
                                <input type="radio" className="btn-check" id="app-font-family-open-sans" name="font-family" defaultValue={15} data-font-family="app-font-family-open-sans" />
                                <label className="py-2 fs-9 fw-bold text-dark text-uppercase text-spacing-1 border border-gray-2 w-100 h-100 c-pointer position-relative options-label" htmlFor="app-font-family-open-sans">Open Sans</label>
                            </div>
                            <div className="col-6 text-center single-option">
                                <input type="radio" className="btn-check" id="app-font-family-maven-pro" name="font-family" defaultValue={16} data-font-family="app-font-family-maven-pro" />
                                <label className="py-2 fs-9 fw-bold text-dark text-uppercase text-spacing-1 border border-gray-2 w-100 h-100 c-pointer position-relative options-label" htmlFor="app-font-family-maven-pro">Maven Pro</label>
                            </div>
                            <div className="col-6 text-center single-option">
                                <input type="radio" className="btn-check" id="app-font-family-quicksand" name="font-family" defaultValue={17} data-font-family="app-font-family-quicksand" />
                                <label className="py-2 fs-9 fw-bold text-dark text-uppercase text-spacing-1 border border-gray-2 w-100 h-100 c-pointer position-relative options-label" htmlFor="app-font-family-quicksand">Quicksand</label>
                            </div>
                            <div className="col-6 text-center single-option">
                                <input type="radio" className="btn-check" id="app-font-family-montserrat" name="font-family" defaultValue={18} data-font-family="app-font-family-montserrat" />
                                <label className="py-2 fs-9 fw-bold text-dark text-uppercase text-spacing-1 border border-gray-2 w-100 h-100 c-pointer position-relative options-label" htmlFor="app-font-family-montserrat">Montserrat</label>
                            </div>
                            <div className="col-6 text-center single-option">
                                <input type="radio" className="btn-check" id="app-font-family-josefin-sans" name="font-family" defaultValue={19} data-font-family="app-font-family-josefin-sans" />
                                <label className="py-2 fs-9 fw-bold text-dark text-uppercase text-spacing-1 border border-gray-2 w-100 h-100 c-pointer position-relative options-label" htmlFor="app-font-family-josefin-sans">Josefin Sans</label>
                            </div>
                            <div className="col-6 text-center single-option">
                                <input type="radio" className="btn-check" id="app-font-family-ibm-plex-sans" name="font-family" defaultValue={20} data-font-family="app-font-family-ibm-plex-sans" />
                                <label className="py-2 fs-9 fw-bold text-dark text-uppercase text-spacing-1 border border-gray-2 w-100 h-100 c-pointer position-relative options-label" htmlFor="app-font-family-ibm-plex-sans">IBM Plex Sans</label>
                            </div>
                            <div className="col-6 text-center single-option">
                                <input type="radio" className="btn-check" id="app-font-family-source-sans-pro" name="font-family" defaultValue={5} data-font-family="app-font-family-source-sans-pro" />
                                <label className="py-2 fs-9 fw-bold text-dark text-uppercase text-spacing-1 border border-gray-2 w-100 h-100 c-pointer position-relative options-label" htmlFor="app-font-family-source-sans-pro">Source Sans Pro</label>
                            </div>
                            <div className="col-6 text-center single-option">
                                <input type="radio" className="btn-check" id="app-font-family-montserrat-alt" name="font-family" defaultValue={21} data-font-family="app-font-family-montserrat-alt" />
                                <label className="py-2 fs-9 fw-bold text-dark text-uppercase text-spacing-1 border border-gray-2 w-100 h-100 c-pointer position-relative options-label" htmlFor="app-font-family-montserrat-alt">Montserrat Alt</label>
                            </div>
                            <div className="col-6 text-center single-option">
                                <input type="radio" className="btn-check" id="app-font-family-roboto-slab" name="font-family" defaultValue={22} data-font-family="app-font-family-roboto-slab" />
                                <label className="py-2 fs-9 fw-bold text-dark text-uppercase text-spacing-1 border border-gray-2 w-100 h-100 c-pointer position-relative options-label" htmlFor="app-font-family-roboto-slab">Roboto Slab</label>
                            </div>
                        </div>
                    </div>
                    <div className="ps__rail-x" style={{ left: 0, bottom: 0 }}><div className="ps__thumb-x" tabIndex={0} style={{ left: 0, width: 0 }} /></div><div className="ps__rail-y" style={{ top: 0, height: 828, right: 0 }}><div className="ps__thumb-y" tabIndex={0} style={{ top: 0, height: 755 }} /></div></div>
                <div className="customizer-sidebar-footer px-4 ht-60 border-top d-flex align-items-center gap-2">
                    <div className="flex-fill w-50">
                        <a href="javascript:void(0);" className="btn btn-danger" data-style="reset-all-common-style">Reset</a>
                    </div>
                    <div className="flex-fill w-50">
                        <a href="javascript:void(0);" className="btn btn-primary">Download</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CustomTheme;