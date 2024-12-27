import { useEffect } from "react"
import { useState } from "react"

const initTheme = {
    appNavigation: { key: 'app-navigation', value: 'app-navigation-light' },
    appHeader: { key: 'app-header', value: 'app-header-light' },
    appSkin: { key: 'app-skin-dark', value: 'app-skin-light' },
    fontFamily: { key: 'font-family', value: 'app-font-family-inter' }
}

const CustomTheme = () => {
    const [theme, setTheme] = useState(initTheme)

    const resetTheme = (e) => {
        e.preventDefault()
        localStorage.removeItem('app-navigation')
        localStorage.removeItem('app-header')
        localStorage.removeItem('app-skin-dark')
        localStorage.removeItem('font-family')

        setTheme(initTheme)
    }

    const changeTheme = (e) => {
        setTheme({
            ...theme,
            [e.target.name]: {
                ...theme[e.target.name],
                value: e.target.dataset[e.target.name]
            }
        })
    }

    useEffect(() => {
        if (
            initTheme.appNavigation.value !== theme.appNavigation.value ||
            initTheme.appHeader.value !== theme.appHeader.value ||
            initTheme.appSkin.value !== theme.appSkin.value ||
            initTheme.fontFamily.value !== theme.fontFamily.value
        ) {
            localStorage.setItem(theme.appNavigation.key, theme.appNavigation.value)
            localStorage.setItem(theme.appHeader.key, theme.appHeader.value)
            localStorage.setItem(theme.appSkin.key, theme.appSkin.value)
            localStorage.setItem(theme.fontFamily.key, theme.fontFamily.value)

            document.documentElement.className = `${theme.appNavigation.value} ${theme.appHeader.value} ${theme.appSkin.value} ${theme.fontFamily.value}`
        }
    }, [theme])

    useEffect(() => {
        const appNavigation = localStorage.getItem('app-navigation') || initTheme.appNavigation.value
        const appHeader = localStorage.getItem('app-header') || initTheme.appHeader.value
        const appSkin = localStorage.getItem('app-skin-dark') || initTheme.appSkin.value
        const fontFamily = localStorage.getItem('font-family') || initTheme.fontFamily.value

        setTheme({
            appNavigation: { ...initTheme.appNavigation, value: appNavigation },
            appHeader: { ...initTheme.appHeader, value: appHeader },
            appSkin: { ...initTheme.appSkin, value: appSkin },
            fontFamily: { ...initTheme.fontFamily, value: fontFamily }
        })
    }, [])

    return (
        <div className="theme-customizer">
            <div className="customizer-handle">
                <button type="button" className="bg-transparent border-0 cutomizer-open-trigger bg-primary">
                    <i className="feather-settings" />
                </button>
            </div>
            <div className="customizer-sidebar-wrapper">
                <div className="customizer-sidebar-header px-4 ht-80 border-bottom d-flex align-items-center justify-content-between">
                    <h5 className="mb-0">Theme Settings</h5>
                    <a href="#" className="cutomizer-close-trigger d-flex">
                        <i className="feather-x" />
                    </a>

                </div>
                <div className="customizer-sidebar-body position-relative p-4">
                    <div className="position-relative px-3 pb-3 pt-4 mt-3 mb-5 border border-gray-2 theme-options-set">
                        <label className="py-1 px-2 fs-8 fw-bold text-uppercase text-muted text-spacing-2 bg-white border border-gray-2 position-absolute rounded-2 options-label" style={{ top: '-12px' }}>Navigation</label>
                        <div className="row g-2 theme-options-items app-navigation" id="appNavigationList">
                            <div className={`col-6 text-center single-option position-relative ${theme.appNavigation.value == 'app-navigation-light' ? 'active' : ''}`}>
                                <input type="radio" className="btn-check" id="app-navigation-light" name="appNavigation" defaultValue={1} data-app-navigation="app-navigation-light" onChange={changeTheme} />
                                <label className="py-2 fs-9 fw-bold text-dark text-uppercase text-spacing-1 border border-gray-2 w-100 h-100 c-pointer position-relative options-label" htmlFor="app-navigation-light">Light</label>
                            </div>
                            <div className={`col-6 text-center single-option position-relative ${theme.appNavigation.value == 'app-navigation-dark' ? 'active' : ''}`}>
                                <input type="radio" className="btn-check" id="app-navigation-dark" name="appNavigation" defaultValue={2} data-app-navigation="app-navigation-dark" onChange={changeTheme} />
                                <label className="py-2 fs-9 fw-bold text-dark text-uppercase text-spacing-1 border border-gray-2 w-100 h-100 c-pointer position-relative options-label" htmlFor="app-navigation-dark">Dark</label>
                            </div>
                        </div>
                    </div>
                    <div className="position-relative px-3 pb-3 pt-4 mt-3 mb-5 border border-gray-2 theme-options-set">
                        <label className="py-1 px-2 fs-8 fw-bold text-uppercase text-muted text-spacing-2 bg-white border border-gray-2 position-absolute rounded-2 options-label" style={{ top: '-12px' }}>Header</label>
                        <div className="row g-2 theme-options-items app-header" id="appHeaderList">
                            <div className={`col-6 text-center single-option position-relative ${theme.appHeader.value == 'app-header-light' ? 'active' : ''}`}>
                                <input type="radio" className="btn-check" id="app-header-light" name="appHeader" defaultValue={1} data-app-header="app-header-light" onChange={changeTheme} />
                                <label className="py-2 fs-9 fw-bold text-dark text-uppercase text-spacing-1 border border-gray-2 w-100 h-100 c-pointer position-relative options-label" htmlFor="app-header-light">Light</label>
                            </div>
                            <div className={`col-6 text-center single-option position-relative ${theme.appHeader.value == 'app-header-dark' ? 'active' : ''}`}>
                                <input type="radio" className="btn-check" id="app-header-dark" name="appHeader" defaultValue={2} data-app-header="app-header-dark" onChange={changeTheme} />
                                <label className="py-2 fs-9 fw-bold text-dark text-uppercase text-spacing-1 border border-gray-2 w-100 h-100 c-pointer position-relative options-label" htmlFor="app-header-dark">Dark</label>
                            </div>
                        </div>
                    </div>
                    <div className="position-relative px-3 pb-3 pt-4 mt-3 mb-5 border border-gray-2 theme-options-set">
                        <label className="py-1 px-2 fs-8 fw-bold text-uppercase text-muted text-spacing-2 bg-white border border-gray-2 position-absolute rounded-2 options-label" style={{ top: '-12px' }}>Skins</label>
                        <div className="row g-2 theme-options-items app-skin" id="appSkinList">
                            <div className={`col-6 text-center single-option position-relative ${theme.appSkin.value == 'app-skin-light' ? 'active' : ''}`}>
                                <input type="radio" className="btn-check" id="app-skin-light" name="appSkin" defaultValue={1} data-app-skin="app-skin-light" onChange={changeTheme} />
                                <label className="py-2 fs-9 fw-bold text-dark text-uppercase text-spacing-1 border border-gray-2 w-100 h-100 c-pointer position-relative options-label" htmlFor="app-skin-light">Light</label>
                            </div>
                            <div className={`col-6 text-center single-option position-relative ${theme.appSkin.value == 'app-skin-dark' ? 'active' : ''}`}>
                                <input type="radio" className="btn-check" id="app-skin-dark" name="appSkin" defaultValue={2} data-app-skin="app-skin-dark" onChange={changeTheme} />
                                <label className="py-2 fs-9 fw-bold text-dark text-uppercase text-spacing-1 border border-gray-2 w-100 h-100 c-pointer position-relative options-label" htmlFor="app-skin-dark">Dark</label>
                            </div>
                        </div>
                    </div>
                    <div className="position-relative px-3 pb-3 pt-4 mt-3 mb-0 border border-gray-2 theme-options-set">
                        <label className="py-1 px-2 fs-8 fw-bold text-uppercase text-muted text-spacing-2 bg-white border border-gray-2 position-absolute rounded-2 options-label" style={{ top: '-12px' }}>Typography</label>
                        <div className="row g-2 theme-options-items font-family" id="fontFamilyList">
                            <div className={`col-6 text-center single-option position-relative ${theme.fontFamily.value == 'app-font-family-lato' ? 'active' : ''}`}>
                                <input type="radio" className="btn-check" id="app-font-family-lato" name="fontFamily" defaultValue={1} data-font-family="app-font-family-lato" onChange={changeTheme} />
                                <label className="py-2 fs-9 fw-bold text-dark text-uppercase text-spacing-1 border border-gray-2 w-100 h-100 c-pointer position-relative options-label" htmlFor="app-font-family-lato">Lato</label>
                            </div>
                            <div className={`col-6 text-center single-option position-relative ${theme.fontFamily.value == 'app-font-family-rubik' ? 'active' : ''}`}>
                                <input type="radio" className="btn-check" id="app-font-family-rubik" name="fontFamily" defaultValue={2} data-font-family="app-font-family-rubik" onChange={changeTheme} />
                                <label className="py-2 fs-9 fw-bold text-dark text-uppercase text-spacing-1 border border-gray-2 w-100 h-100 c-pointer position-relative options-label" htmlFor="app-font-family-rubik">Rubik</label>
                            </div>
                            <div className={`col-6 text-center single-option position-relative ${theme.fontFamily.value == 'app-font-family-inter' ? 'active' : ''}`}>
                                <input type="radio" className="btn-check" id="app-font-family-inter" name="fontFamily" defaultValue={3} data-font-family="app-font-family-inter" onChange={changeTheme} />
                                <label className="py-2 fs-9 fw-bold text-dark text-uppercase text-spacing-1 border border-gray-2 w-100 h-100 c-pointer position-relative options-label" htmlFor="app-font-family-inter">Inter</label>
                            </div>
                            <div className={`col-6 text-center single-option position-relative ${theme.fontFamily.value == 'app-font-family-cinzel' ? 'active' : ''}`}>
                                <input type="radio" className="btn-check" id="app-font-family-cinzel" name="fontFamily" defaultValue={4} data-font-family="app-font-family-cinzel" onChange={changeTheme} />
                                <label className="py-2 fs-9 fw-bold text-dark text-uppercase text-spacing-1 border border-gray-2 w-100 h-100 c-pointer position-relative options-label" htmlFor="app-font-family-cinzel">Cinzel</label>
                            </div>
                            <div className={`col-6 text-center single-option position-relative ${theme.fontFamily.value == 'app-font-family-nunito' ? 'active' : ''}`}>
                                <input type="radio" className="btn-check" id="app-font-family-nunito" name="fontFamily" defaultValue={6} data-font-family="app-font-family-nunito" onChange={changeTheme} />
                                <label className="py-2 fs-9 fw-bold text-dark text-uppercase text-spacing-1 border border-gray-2 w-100 h-100 c-pointer position-relative options-label" htmlFor="app-font-family-nunito">Nunito</label>
                            </div>
                            <div className={`col-6 text-center single-option position-relative ${theme.fontFamily.value == 'app-font-family-roboto' ? 'active' : ''}`}>
                                <input type="radio" className="btn-check" id="app-font-family-roboto" name="fontFamily" defaultValue={7} data-font-family="app-font-family-roboto" onChange={changeTheme} />
                                <label className="py-2 fs-9 fw-bold text-dark text-uppercase text-spacing-1 border border-gray-2 w-100 h-100 c-pointer position-relative options-label" htmlFor="app-font-family-roboto">Roboto</label>
                            </div>
                            <div className={`col-6 text-center single-option position-relative ${theme.fontFamily.value == 'app-font-family-ubuntu' ? 'active' : ''}`}>
                                <input type="radio" className="btn-check" id="app-font-family-ubuntu" name="fontFamily" defaultValue={8} data-font-family="app-font-family-ubuntu" onChange={changeTheme} />
                                <label className="py-2 fs-9 fw-bold text-dark text-uppercase text-spacing-1 border border-gray-2 w-100 h-100 c-pointer position-relative options-label" htmlFor="app-font-family-ubuntu">Ubuntu</label>
                            </div>
                            <div className={`col-6 text-center single-option position-relative ${theme.fontFamily.value == 'app-font-family-poppins' ? 'active' : ''}`}>
                                <input type="radio" className="btn-check" id="app-font-family-poppins" name="fontFamily" defaultValue={9} data-font-family="app-font-family-poppins" onChange={changeTheme} />
                                <label className="py-2 fs-9 fw-bold text-dark text-uppercase text-spacing-1 border border-gray-2 w-100 h-100 c-pointer position-relative options-label" htmlFor="app-font-family-poppins">Poppins</label>
                            </div>
                            <div className={`col-6 text-center single-option position-relative ${theme.fontFamily.value == 'app-font-family-raleway' ? 'active' : ''}`}>
                                <input type="radio" className="btn-check" id="app-font-family-raleway" name="fontFamily" defaultValue={10} data-font-family="app-font-family-raleway" onChange={changeTheme} />
                                <label className="py-2 fs-9 fw-bold text-dark text-uppercase text-spacing-1 border border-gray-2 w-100 h-100 c-pointer position-relative options-label" htmlFor="app-font-family-raleway">Raleway</label>
                            </div>
                            <div className={`col-6 text-center single-option position-relative ${theme.fontFamily.value == 'app-font-family-system-ui' ? 'active' : ''}`}>
                                <input type="radio" className="btn-check" id="app-font-family-system-ui" name="fontFamily" defaultValue={11} data-font-family="app-font-family-system-ui" onChange={changeTheme} />
                                <label className="py-2 fs-9 fw-bold text-dark text-uppercase text-spacing-1 border border-gray-2 w-100 h-100 c-pointer position-relative options-label" htmlFor="app-font-family-system-ui">System UI</label>
                            </div>
                            <div className={`col-6 text-center single-option position-relative ${theme.fontFamily.value == 'app-font-family-noto-sans' ? 'active' : ''}`}>
                                <input type="radio" className="btn-check" id="app-font-family-noto-sans" name="fontFamily" defaultValue={12} data-font-family="app-font-family-noto-sans" onChange={changeTheme} />
                                <label className="py-2 fs-9 fw-bold text-dark text-uppercase text-spacing-1 border border-gray-2 w-100 h-100 c-pointer position-relative options-label" htmlFor="app-font-family-noto-sans">Noto Sans</label>
                            </div>
                            <div className={`col-6 text-center single-option position-relative ${theme.fontFamily.value == 'app-font-family-fira-sans' ? 'active' : ''}`}>
                                <input type="radio" className="btn-check" id="app-font-family-fira-sans" name="fontFamily" defaultValue={13} data-font-family="app-font-family-fira-sans" onChange={changeTheme} />
                                <label className="py-2 fs-9 fw-bold text-dark text-uppercase text-spacing-1 border border-gray-2 w-100 h-100 c-pointer position-relative options-label" htmlFor="app-font-family-fira-sans">Fira Sans</label>
                            </div>
                            <div className={`col-6 text-center single-option position-relative ${theme.fontFamily.value == 'app-font-family-work-sans' ? 'active' : ''}`}>
                                <input type="radio" className="btn-check" id="app-font-family-work-sans" name="fontFamily" defaultValue={14} data-font-family="app-font-family-work-sans" onChange={changeTheme} />
                                <label className="py-2 fs-9 fw-bold text-dark text-uppercase text-spacing-1 border border-gray-2 w-100 h-100 c-pointer position-relative options-label" htmlFor="app-font-family-work-sans">Work Sans</label>
                            </div>
                            <div className={`col-6 text-center single-option position-relative ${theme.fontFamily.value == 'app-font-family-open-sans' ? 'active' : ''}`}>
                                <input type="radio" className="btn-check" id="app-font-family-open-sans" name="fontFamily" defaultValue={15} data-font-family="app-font-family-open-sans" onChange={changeTheme} />
                                <label className="py-2 fs-9 fw-bold text-dark text-uppercase text-spacing-1 border border-gray-2 w-100 h-100 c-pointer position-relative options-label" htmlFor="app-font-family-open-sans">Open Sans</label>
                            </div>
                            <div className={`col-6 text-center single-option position-relative ${theme.fontFamily.value == 'app-font-family-maven-pro' ? 'active' : ''}`}>
                                <input type="radio" className="btn-check" id="app-font-family-maven-pro" name="fontFamily" defaultValue={16} data-font-family="app-font-family-maven-pro" onChange={changeTheme} />
                                <label className="py-2 fs-9 fw-bold text-dark text-uppercase text-spacing-1 border border-gray-2 w-100 h-100 c-pointer position-relative options-label" htmlFor="app-font-family-maven-pro">Maven Pro</label>
                            </div>
                            <div className={`col-6 text-center single-option position-relative ${theme.fontFamily.value == 'app-font-family-quicksand' ? 'active' : ''}`}>
                                <input type="radio" className="btn-check" id="app-font-family-quicksand" name="fontFamily" defaultValue={17} data-font-family="app-font-family-quicksand" onChange={changeTheme} />
                                <label className="py-2 fs-9 fw-bold text-dark text-uppercase text-spacing-1 border border-gray-2 w-100 h-100 c-pointer position-relative options-label" htmlFor="app-font-family-quicksand">Quicksand</label>
                            </div>
                            <div className={`col-6 text-center single-option position-relative ${theme.fontFamily.value == 'app-font-family-montserrat' ? 'active' : ''}`}>
                                <input type="radio" className="btn-check" id="app-font-family-montserrat" name="fontFamily" defaultValue={18} data-font-family="app-font-family-montserrat" onChange={changeTheme} />
                                <label className="py-2 fs-9 fw-bold text-dark text-uppercase text-spacing-1 border border-gray-2 w-100 h-100 c-pointer position-relative options-label" htmlFor="app-font-family-montserrat">Montserrat</label>
                            </div>
                            <div className={`col-6 text-center single-option position-relative ${theme.fontFamily.value == 'app-font-family-josefin-sans' ? 'active' : ''}`}>
                                <input type="radio" className="btn-check" id="app-font-family-josefin-sans" name="fontFamily" defaultValue={19} data-font-family="app-font-family-josefin-sans" onChange={changeTheme} />
                                <label className="py-2 fs-9 fw-bold text-dark text-uppercase text-spacing-1 border border-gray-2 w-100 h-100 c-pointer position-relative options-label" htmlFor="app-font-family-josefin-sans">Josefin Sans</label>
                            </div>
                            <div className={`col-6 text-center single-option position-relative ${theme.fontFamily.value == 'app-font-family-ibm-plex-sans' ? 'active' : ''}`}>
                                <input type="radio" className="btn-check" id="app-font-family-ibm-plex-sans" name="fontFamily" defaultValue={20} data-font-family="app-font-family-ibm-plex-sans" onChange={changeTheme} />
                                <label className="py-2 fs-9 fw-bold text-dark text-uppercase text-spacing-1 border border-gray-2 w-100 h-100 c-pointer position-relative options-label" htmlFor="app-font-family-ibm-plex-sans">IBM Plex Sans</label>
                            </div>
                            <div className={`col-6 text-center single-option position-relative ${theme.fontFamily.value == 'app-font-family-source-sans-pro' ? 'active' : ''}`}>
                                <input type="radio" className="btn-check" id="app-font-family-source-sans-pro" name="fontFamily" defaultValue={5} data-font-family="app-font-family-source-sans-pro" onChange={changeTheme} />
                                <label className="py-2 fs-9 fw-bold text-dark text-uppercase text-spacing-1 border border-gray-2 w-100 h-100 c-pointer position-relative options-label" htmlFor="app-font-family-source-sans-pro">Source Sans Pro</label>
                            </div>
                            <div className={`col-6 text-center single-option position-relative ${theme.fontFamily.value == 'app-font-family-montserrat-alt' ? 'active' : ''}`}>
                                <input type="radio" className="btn-check" id="app-font-family-montserrat-alt" name="fontFamily" defaultValue={21} data-font-family="app-font-family-montserrat-alt" onChange={changeTheme} />
                                <label className="py-2 fs-9 fw-bold text-dark text-uppercase text-spacing-1 border border-gray-2 w-100 h-100 c-pointer position-relative options-label" htmlFor="app-font-family-montserrat-alt">Montserrat Alt</label>
                            </div>
                            <div className={`col-6 text-center single-option position-relative ${theme.fontFamily.value == 'app-font-family-roboto-slab' ? 'active' : ''}`}>
                                <input type="radio" className="btn-check" id="app-font-family-roboto-slab" name="fontFamily" defaultValue={22} data-font-family="app-font-family-roboto-slab" onChange={changeTheme} />
                                <label className="py-2 fs-9 fw-bold text-dark text-uppercase text-spacing-1 border border-gray-2 w-100 h-100 c-pointer position-relative options-label" htmlFor="app-font-family-roboto-slab">Roboto Slab</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="customizer-sidebar-footer px-4 ht-60 border-top d-flex align-items-center gap-2">
                    <div className="flex-fill w-50">
                        <button type="button" className="bg-transparent border-0 btn btn-danger w-100" data-style="reset-all-common-style" onClick={resetTheme}>Reset</button>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default CustomTheme;