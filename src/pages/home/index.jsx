import { useEffect } from "react";
import DashboardLayout from "../../layouts/dashboard";
import ApexCharts from 'apexcharts'
import { Link } from "react-router-dom";


const Home = () => {

    const chart = () => {
        new ApexCharts(document.querySelector("#total-sales-color-graph"), {
            chart: {
                type: "area",
                height: 150,
                sparkline: {
                    enabled: !0
                }
            },
            dataLabels: {
                enabled: !1
            },
            colors: ["#93a9ff"],
            fill: {
                type: "solid",
                opacity: .4
            },
            stroke: {
                curve: "smooth",
                width: 3
            },
            series: [{
                name: "Total Sales",
                data: [20, 10, 18, 12, 25, 10, 20]
            }],
            yaxis: {
                min: 0,
                max: 30
            },
            tooltip: {
                theme: "dark",
                y: {
                    formatter: function (e) {
                        return +e + "K"
                    }
                },
                style: {
                    fontSize: "12px",
                    fontFamily: "Inter"
                }
            }
        }).render()

        new ApexCharts(document.querySelector("#leads-overview-donut"), {
            chart: {
                width: 328,
                type: "donut"
            },
            dataLabels: {
                enabled: !1
            },
            series: [20, 15, 10, 18, 10, 15, 16, 14, 10],
            labels: ["New", "Contacted", "Qualified", "Working", "Customer", "Proposal", "Leads", "Prograss", "Others"],
            colors: ["#3454d1", "#1565c0", "#1976d2", "#1e88e5", "#2196f3", "#42a5f5", "#64b5f6", "#90caf9", "#aad6fa"],
            stroke: {
                width: 0,
                lineCap: "round"
            },
            legend: {
                show: !1,
                position: "bottom",
                fontFamily: "Inter",
                fontWeight: 500,
                labels: {
                    colors: "#A0ACBB",
                    fontFamily: "Inter"
                },
                markers: {
                    width: 10,
                    height: 10
                },
                itemMargin: {
                    horizontal: 20,
                    vertical: 5
                }
            },
            plotOptions: {
                pie: {
                    donut: {
                        size: "85%",
                        labels: {
                            show: !1,
                            name: {
                                show: !1,
                                fontSize: "16px",
                                colors: "#A0ACBB",
                                fontFamily: "Inter"
                            },
                            value: {
                                show: !1,
                                fontSize: "30px",
                                fontFamily: "Inter",
                                color: "#A0ACBB",
                                formatter: function (e) {
                                    return e
                                }
                            }
                        }
                    }
                }
            },
            responsive: [{
                breakpoint: 380,
                options: {
                    chart: {
                        width: 280
                    },
                    legend: {
                        show: !1
                    }
                }
            }],
            tooltip: {
                y: {
                    formatter: function (e) {
                        return +e + "K"
                    }
                },
                style: {
                    colors: "#A0ACBB",
                    fontFamily: "Inter"
                }
            }
        }).render()

        document.querySelectorAll("#payment-records-chart").forEach(item => {
            new ApexCharts(item, {
                chart: {
                    type: "area",
                    height: 380,
                    width: '100%',
                    toolbar: {
                        show: false
                    }
                },
                dataLabels: {
                    enabled: false
                },
                colors: ["#93a9ff"],
                fill: {
                    opacity: .4
                },
                stroke: {
                    curve: "smooth",
                    width: 3
                },
                series: [{
                    name: "Time Logged",
                    data: [20, 45, 25, 60, 30, 65, 35, 75, 60, 80, 65, 95]
                }],
                xaxis: {
                    categories: ["08:30", "09:30", "10:30", "11:30", "12:30", "13:30", "14:30", "15:30", "16:30", "17:30", "18:30", "19:30"]
                },
                yaxis: {
                    min: 0,
                    max: 100,
                    labels: { formatter: function (e) { return +e + " Mins" } },
                },
                tooltip: {
                    theme: "dark",
                    y: {
                        formatter: function (e) {
                            return +e + "K"
                        }
                    },
                    style: {
                        fontSize: "12px",
                        fontFamily: "Inter"
                    }
                }
            }).render()
        })

        new ApexCharts(document.querySelector("#bounce-rate"), {
            chart: {
                type: "area",
                height: 80,
                sparkline: {
                    enabled: !0
                }
            },
            series: [{
                name: "Bounce Rate (Avg)",
                data: [25, 60, 20, 90, 45, 100, 45, 100, 55]
            }],
            stroke: {
                width: 1,
                curve: "smooth"
            },
            fill: {
                opacity: [.85, .25, 1, 1],
                gradient: {
                    inverseColors: !1,
                    shade: "light",
                    type: "vertical",
                    opacityFrom: .5,
                    opacityTo: .1,
                    stops: [0, 100, 100, 100]
                }
            },
            yaxis: {
                min: 0
            },
            colors: ["#64748a"]
        }).render()

        new ApexCharts(document.querySelector("#page-views"), {
            chart: {
                type: "area",
                height: 80,
                sparkline: {
                    enabled: !0
                }
            },
            series: [{
                name: "Page Views (Avg)",
                data: [25, 60, 20, 90, 45, 100, 45, 100, 55]
            }],
            stroke: {
                width: 1,
                curve: "smooth"
            },
            fill: {
                opacity: [.85, .25, 1, 1],
                gradient: {
                    inverseColors: !1,
                    shade: "light",
                    type: "vertical",
                    opacityFrom: .5,
                    opacityTo: .1,
                    stops: [0, 100, 100, 100]
                }
            },
            yaxis: {
                min: 0
            },
            colors: ["#3454d1"]
        }).render()

        new ApexCharts(document.querySelector("#site-impressions"), {
            chart: {
                type: "area",
                height: 80,
                sparkline: {
                    enabled: !0
                }
            },
            series: [{
                name: "Site Impression (Avg)",
                data: [25, 60, 20, 90, 45, 100, 45, 100, 55]
            }],
            stroke: {
                width: 1,
                curve: "smooth"
            },
            fill: {
                opacity: [.85, .25, 1, 1],
                gradient: {
                    inverseColors: !1,
                    shade: "light",
                    type: "vertical",
                    opacityFrom: .5,
                    opacityTo: .1,
                    stops: [0, 100, 100, 100]
                }
            },
            yaxis: {
                min: 0
            },
            colors: ["#e49e3d"]
        }).render()

        new ApexCharts(document.querySelector("#conversions-rate"), {
            chart: {
                type: "area",
                height: 80,
                sparkline: {
                    enabled: !0
                }
            },
            series: [{
                name: "Site Impression (Avg)",
                data: [25, 60, 20, 90, 45, 100, 45, 100, 55]
            }],
            stroke: {
                width: 1,
                curve: "smooth"
            },
            fill: {
                opacity: [.85, .25, 1, 1],
                gradient: {
                    inverseColors: !1,
                    shade: "light",
                    type: "vertical",
                    opacityFrom: .5,
                    opacityTo: .1,
                    stops: [0, 100, 100, 100]
                }
            },
            yaxis: {
                min: 0
            },
            colors: ["#25b865"]
        }).render()

        new ApexCharts(document.querySelector("#campaign-alytics-bar-chart"), {
            chart: {
                type: "bar",
                height: 370,
                toolbar: {
                    show: !1
                }
            },
            series: [{
                name: "Online Campaign",
                data: [44, 55, 41, 64, 22, 43, 21, 41, 64, 22, 43, 21]
            }, {
                name: "Offline Campaign",
                data: [53, 32, 33, 52, 13, 44, 32, 33, 52, 13, 44, 32]
            }],
            plotOptions: {
                bar: {
                    horizontal: !1,
                    endingShape: "rounded",
                    columnWidth: "30%"
                }
            },
            dataLabels: {
                enabled: !1,
                offsetX: -6,
                style: {
                    fontSize: "12px",
                    colors: ["#fff"]
                }
            },
            stroke: {
                show: !1,
                width: 1,
                colors: ["#fff"]
            },
            colors: ["#E1E3EA", "#3454d1"],
            xaxis: {
                categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                axisBorder: {
                    show: !1
                },
                axisTicks: {
                    show: !1
                },
                labels: {
                    style: {
                        colors: "#64748b",
                        fontFamily: "Inter"
                    }
                }
            },
            yaxis: {
                labels: {
                    formatter: function (e) {
                        return +e + "K"
                    },
                    style: {
                        color: "#64748b",
                        fontFamily: "Inter"
                    }
                }
            },
            grid: {
                strokeDashArray: 3,
                borderColor: "#e9ecef"
            },
            tooltip: {
                y: {
                    formatter: function (e) {
                        return +e + "K"
                    }
                },
                style: {
                    colors: "#64748b",
                    fontFamily: "Inter"
                }
            },
            legend: {
                show: !1,
                fontFamily: "Inter",
                labels: {
                    colors: "#64748b"
                }
            }
        }).render()

        new ApexCharts(document.querySelector("#social-radar-chart"), {
            series: [{
                name: "Facebook",
                data: [80, 50, 30, 40, 100, 20]
            }, {
                name: "Twitter",
                data: [20, 30, 40, 80, 20, 80]
            }, {
                name: "Youtube",
                data: [44, 76, 78, 13, 43, 10]
            }],
            chart: {
                height: 376,
                type: "radar",
                toolbar: {
                    show: !1
                }
            },
            colors: ["#3454D1", "#41B2C4", "#EA4D4D"],
            xaxis: {
                categories: ["Sun", "Mon", "Tue", "Wen", "Thu", "Fri"]
            },
            yaxis: {
                show: !1
            },
            stroke: {
                show: !1,
                width: .5
            },
            tooltip: {
                y: {
                    formatter: function (e) {
                        return +e + "K"
                    }
                },
                style: {
                    colors: "#64748b",
                    fontFamily: "Inter"
                }
            },
            legend: {
                show: !0,
                height: 65,
                offsetY: -35,
                labels: {
                    colors: "#64748b",
                    fontFamily: "Inter"
                }
            }
        }).render()
    }

    useEffect(() => { chart() }, [])

    return (
        <DashboardLayout>
            <div className="page-header">
                <div className="page-header-left d-flex align-items-center">

                    <ul className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/">Dashboard</Link></li>
                        <li className="breadcrumb-item">OLT</li>
                    </ul>
                </div>

            </div>
            <div className="main-content">
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div className="card  stretch stretch-full border border-gray-5">
                            <div className="card-body text-center p-1" style={{ backgroundColor: 'rgb(0, 100, 200)', borderTopLeftRadius: 8, borderTopRightRadius: 8 }}>
                                <div className="row justify-content-between">
                                    <div className="col-4 d-flex align-items-center">
                                        <div className="ps-3"><i className="bi bi-magic fs-1 text-white" /></div>
                                    </div>
                                    <div className="col-8 text-end ">
                                        <div className="pe-3">
                                            <div className="fs-1 fw-bolder text-white mt-2">2</div>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ marginRight: 15, marginTop: '-5px' }}>
                                    <p className="text-end fs-12 fw-medium text-white text-spacing-1 mb-0 text-truncate-1-line">Waiting Authorization</p>
                                </div>
                            </div>
                            <div className="p-2">
                                <div className="row justify-content-between">
                                    <div className="col-8 d-flex">
                                        <p className="text-start fs-12 fw-medium text-spacing-1 mb-0 text-truncate-1-line" style={{ color: 'rgb(0, 100, 200)' }}>D: 0 Resync: 0</p>
                                    </div>
                                    <div className="col-4 d-flex">
                                        <p className="text-end fs-12 fw-medium text-spacing-1 mb-0 text-truncate-1-line" style={{ color: 'rgb(0, 100, 200)' }}>New:2</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="card  stretch stretch-full border border-gray-5">
                            <div className="card-body text-center p-1" style={{ backgroundColor: 'rgb(77, 177, 75)', borderTopLeftRadius: 8, borderTopRightRadius: 8 }}>
                                <div className="row justify-content-between">
                                    <div className="col-4 d-flex align-items-center">
                                        <div className="ps-3"><i className="bi bi-ui-checks fs-1 text-white" /></div>
                                    </div>
                                    <div className="col-8 ">
                                        <div className="pe-3">
                                            <div className=" text-end fs-1 fw-bolder text-white mt-2">240</div>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ marginRight: 15, marginTop: '-5px' }}>
                                    <p className="text-end fs-12 fw-medium text-white text-spacing-1 mb-0 text-truncate-1-line">Online</p>
                                </div>
                            </div>
                            <div className="p-2">
                                <div className="row justify-content-between">
                                    <div className="col-12 d-flex">
                                        <p className="text-start fs-12 fw-medium text-spacing-1 mb-0 text-truncate-1-line" style={{ color: 'rgb(77, 177, 75)' }}>Total Authorized : 0</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="card  stretch stretch-full border border-gray-5">
                            <div className="card-body text-center p-1" style={{ backgroundColor: 'rgb(76, 75, 75)', borderTopLeftRadius: 8, borderTopRightRadius: 8 }}>
                                <div className="row justify-content-between">
                                    <div className="col-4 d-flex align-items-center">
                                        <div className="ps-3"><i className="bi bi-x-circle fs-1 text-white" /></div>
                                    </div>
                                    <div className="col-8 text-end ">
                                        <div className="pe-3">
                                            <div className="fs-1 fw-bolder text-white mt-2">0</div>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ marginRight: 15, marginTop: '-5px' }}>
                                    <p className="text-end fs-12 fw-medium text-white text-spacing-1 mb-0 text-truncate-1-line">Total Offline</p>
                                </div>
                            </div>
                            <div className="p-2">
                                <div className="row justify-content-between">
                                    <div className="col-8 d-flex">
                                        <p className="text-start fs-12 fw-medium text-spacing-1 mb-0 text-truncate-1-line" style={{ color: 'rgb(76, 75, 75)' }}>PwrFail: 0 LoS: 0</p>
                                    </div>
                                    <div className="col-4 d-flex">
                                        <p className="text-end fs-12 fw-medium text-spacing-1 mb-0 text-truncate-1-line" style={{ color: 'rgb(76, 75, 75)' }}>N/A:100</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="card  stretch stretch-full border border-gray-5">
                            <div className="card-body text-center p-1" style={{ backgroundColor: 'rgb(247, 161, 39)', borderTopLeftRadius: 8, borderTopRightRadius: 8 }}>
                                <div className="row justify-content-between">
                                    <div className="col-4 d-flex align-items-center">
                                        <div className="ps-3"><i className="bi bi-exclamation-circle fs-1 text-white" /></div>
                                    </div>
                                    <div className="col-8 text-end ">
                                        <div className="pe-3">
                                            <div className="fs-1 fw-bolder text-white mt-2">7</div>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ marginRight: 15, marginTop: '-5px' }}>
                                    <p className="text-end fs-12 fw-medium text-white text-spacing-1 mb-0 text-truncate-1-line">Low Signal</p>
                                </div>
                            </div>
                            <div className="p-2">
                                <div className="row justify-content-between">
                                    <div className="col-6 d-flex">
                                        <p className="text-start fs-12 fw-medium text-spacing-1 mb-0 text-truncate-1-line" style={{ color: 'rgb(247, 161, 39)' }}>Warning: -</p>
                                    </div>
                                    <div className="col-6 d-flex">
                                        <p className="text-end fs-12 fw-medium text-spacing-1 mb-0 text-truncate-1-line" style={{ color: 'rgb(247, 161, 39)' }}>Critical: -</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-xxl-6">
                        <div className="card stretch stretch-full">
                            <div className="card-header">
                                <h5 className="card-title">INET HSP</h5>
                            </div>
                            <div className="card-body custom-card-action p-0">
                                <div id="payment-records-chart" />
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-6">
                        <div className="card stretch stretch-full">
                            <div className="card-header">
                                <h5 className="card-title">INET XL</h5>
                            </div>
                            <div className="card-body custom-card-action p-0">
                                <div id="payment-records-chart" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card mb-4 stretch stretch-full">
                            <div className="card-body d-flex align-items-center justify-content-between">
                                <div className="d-flex gap-3 align-items-center">
                                    <div className="avatar-text" style={{ backgroundColor: '#4db14b' }}>
                                        <i className="feather feather-star text-white" />
                                    </div>
                                    <div>
                                        <div className="fw-semibold text-dark">PSB Completed</div>
                                        <div className="fs-12 text-muted">10/35 completed</div>
                                    </div>
                                </div>
                                <div className="fs-4 fw-bold text-dark">10</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card mb-4 stretch stretch-full">
                            <div className="card-body d-flex align-items-center justify-content-between">
                                <div className="d-flex gap-3 align-items-center">
                                    <div className="avatar-text" style={{ backgroundColor: '#f7a127' }}>
                                        <i className="feather feather-file-text text-white" />
                                    </div>
                                    <div>
                                        <div className="fw-semibold text-dark">PSB Progress</div>
                                        <div className="fs-12 text-muted">5 progress</div>
                                    </div>
                                </div>
                                <div className="fs-4 fw-bold text-dark">5</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card mb-4 stretch stretch-full">
                            <div className="card-body d-flex align-items-center justify-content-between">
                                <div className="d-flex gap-3 align-items-center">
                                    <div className="avatar-text bg-danger" style={{ backgroundColor: '#4c4b4b' }}>
                                        <i className="feather feather-airplay text-white" />
                                    </div>
                                    <div>
                                        <div className="fw-semibold text-dark">Belum PSB</div>
                                        <div className="fs-12 text-muted">15 Belum PSB</div>
                                    </div>
                                </div>
                                <div className="fs-4 fw-bold text-dark">15</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="card stretch stretch-full">
                            <div className="card-header">
                                <h5 className="card-title">Browser States</h5>
                            </div>
                            <div className="card-body custom-card-action p-0">
                                <div className="table-responsive">
                                    <table className="table table-hover mb-0">
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <a href="javascript:void(0);">
                                                        <i className="fa-brands fa-chrome fs-16 text-primary me-2" />
                                                        <span>Google Chrome</span>
                                                    </a>
                                                </td>
                                                <td>
                                                    <span className="text-end d-flex align-items-center m-0">
                                                        <span className="me-3">90%</span>
                                                        <span className="progress w-100 ht-5">
                                                            <span className="progress-bar bg-success" style={{ width: '90%' }} />
                                                        </span>
                                                    </span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="javascript:void(0);">
                                                        <i className="fa-brands fa-firefox-browser fs-16 text-warning me-2" />
                                                        <span>Mozila Firefox</span>
                                                    </a>
                                                </td>
                                                <td>
                                                    <span className="text-end d-flex align-items-center m-0">
                                                        <span className="me-3">76%</span>
                                                        <span className="progress w-100 ht-5">
                                                            <span className="progress-bar bg-primary" style={{ width: '76%' }} />
                                                        </span>
                                                    </span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="javascript:void(0);">
                                                        <i className="fa-brands fa-safari fs-16 text-info me-2" />
                                                        <span>Apple Safari</span>
                                                    </a>
                                                </td>
                                                <td>
                                                    <span className="text-end d-flex align-items-center m-0">
                                                        <span className="me-3">50%</span>
                                                        <span className="progress w-100 ht-5">
                                                            <span className="progress-bar bg-warning" style={{ width: '50%' }} />
                                                        </span>
                                                    </span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="javascript:void(0);">
                                                        <i className="fa-brands fa-edge fs-16 text-success me-2" />
                                                        <span>Edge Browser</span>
                                                    </a>
                                                </td>
                                                <td>
                                                    <span className="text-end d-flex align-items-center m-0">
                                                        <span className="me-3">20%</span>
                                                        <span className="progress w-100 ht-5">
                                                            <span className="progress-bar bg-success" style={{ width: '20%' }} />
                                                        </span>
                                                    </span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="javascript:void(0);">
                                                        <i className="fa-brands fa-opera fs-16 text-danger me-2" />
                                                        <span>Opera mini</span>
                                                    </a>
                                                </td>
                                                <td>
                                                    <span className="text-end d-flex align-items-center m-0">
                                                        <span className="me-3">15%</span>
                                                        <span className="progress w-100 ht-5">
                                                            <span className="progress-bar bg-danger" style={{ width: '15%' }} />
                                                        </span>
                                                    </span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="javascript:void(0);">
                                                        <i className="fa-brands fa-internet-explorer fs-16 text-teal me-2" />
                                                        <span>Internet Explorer</span>
                                                    </a>
                                                </td>
                                                <td>
                                                    <span className="text-end d-flex align-items-center m-0">
                                                        <span className="me-3">12%</span>
                                                        <span className="progress w-100 ht-5">
                                                            <span className="progress-bar bg-teal" style={{ width: '12%' }} />
                                                        </span>
                                                    </span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="javascript:void(0);">
                                                        <i className="fa-brands fa-octopus-deploy fs-16 text-dark me-2" />
                                                        <span>Others Browser</span>
                                                    </a>
                                                </td>
                                                <td>
                                                    <span className="text-end d-flex align-items-center m-0">
                                                        <span className="me-3">6%</span>
                                                        <span className="progress w-100 ht-5">
                                                            <span className="progress-bar bg-dark" style={{ width: '6%' }} />
                                                        </span>
                                                    </span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <a href="javascript:void(0);" className="card-footer fs-11 fw-bold text-uppercase text-center">Explore Details</a>
                        </div>
                    </div>
                    <div className="col-xxl-3 col-md-6">
                        <div className="card stretch stretch-full">
                            <div className="card-body p-0">
                                <div className="d-flex justify-content-between p-4 mb-4">
                                    <div>
                                        <div className="fw-bold mb-2 text-dark text-truncate-1-line">Bounce Rate (Avg)</div>
                                        <div className="fs-11 text-muted">VS 20.49% (Prev)</div>
                                    </div>
                                    <div className="text-end">
                                        <div className="fs-24 fw-bold mb-2 text-dark"><span className="counter">78.65</span>%</div>
                                        <div className="fs-11 text-success">(+ 22.85%)</div>
                                    </div>
                                </div>
                                <div id="bounce-rate" />
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-3 col-md-6">
                        <div className="card stretch stretch-full">
                            <div className="card-body p-0">
                                <div className="d-flex justify-content-between p-4 mb-4">
                                    <div>
                                        <div className="fw-bold mb-2 text-dark text-truncate-1-line">Page Views (Avg)</div>
                                        <div className="fs-11 text-muted">VS 36.47% (Prev)</div>
                                    </div>
                                    <div className="text-end">
                                        <div className="fs-24 fw-bold mb-2 text-dark"><span className="counter">86.37</span>%</div>
                                        <div className="fs-11 text-danger">(- 34.25%)</div>
                                    </div>
                                </div>
                                <div id="page-views" />
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-3 col-md-6">
                        <div className="card stretch stretch-full">
                            <div className="card-body p-0">
                                <div className="d-flex justify-content-between p-4 mb-4">
                                    <div>
                                        <div className="fw-bold mb-2 text-dark text-truncate-1-line">Site Impressions (Avg)</div>
                                        <div className="fs-11 text-muted">VS 43.67% (Prev)</div>
                                    </div>
                                    <div className="tx-right">
                                        <div className="fs-24 fw-bold mb-2 text-dark"><span className="counter">67.53</span>%</div>
                                        <div className="fs-11 text-success">(+ 42.72%)</div>
                                    </div>
                                </div>
                                <div id="site-impressions" />
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-3 col-md-6">
                        <div className="card stretch stretch-full">
                            <div className="card-body p-0">
                                <div className="d-flex justify-content-between p-4 mb-4">
                                    <div>
                                        <div className="fw-bold mb-2 text-dark text-truncate-1-line">Conversions Rate (Avg)</div>
                                        <div className="fs-11 text-muted">VS 22.34% (Prev)</div>
                                    </div>
                                    <div className="tx-right">
                                        <div className="fs-24 fw-bold mb-2 text-dark"><span className="counter">32.53</span>%</div>
                                        <div className="fs-11 text-success">(+ 35.47%)</div>
                                    </div>
                                </div>
                                <div id="conversions-rate" />
                            </div>
                        </div>
                    </div>

                    <div className="col-xxl-4">
                        <div className="card stretch stretch-full">
                            <div className="card-header">
                                <h5 className="card-title">Goal Progress</h5>
                            </div>
                            <div className="card-body custom-card-action">
                                <div className="row g-4">
                                    <div className="col-sm-6">
                                        <div className="px-4 py-3 text-center border border-dashed rounded-3">
                                            <div className="mx-auto mb-4">
                                                <div className="goal-progress-1" />
                                            </div>
                                            <h2 className="fs-13 tx-spacing-1">Marketing Gaol</h2>
                                            <div className="fs-11 text-muted text-truncate-1-line">$550/$1250 USD</div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="px-4 py-3 text-center border border-dashed rounded-3">
                                            <div className="mx-auto mb-4">
                                                <div className="goal-progress-2" />
                                            </div>
                                            <h2 className="fs-13 tx-spacing-1">Teams Goal</h2>
                                            <div className="fs-11 text-muted text-truncate-1-line">$550/$1250 USD</div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="px-4 py-3 text-center border border-dashed rounded-3">
                                            <div className="mx-auto mb-4">
                                                <div className="goal-progress-3" />
                                            </div>
                                            <h2 className="fs-13 tx-spacing-1">Leads Goal</h2>
                                            <div className="fs-11 text-muted text-truncate-1-line">$850/$950 USD</div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="px-4 py-3 text-center border border-dashed rounded-3">
                                            <div className="mx-auto mb-4">
                                                <div className="goal-progress-4" />
                                            </div>
                                            <h2 className="fs-13 tx-spacing-1">Revenue Goal</h2>
                                            <div className="fs-11 text-muted text-truncate-1-line">$5,655/$12,500 USD</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer">
                                <a href="javascript:void(0);" className="btn btn-primary">Generate Report</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-8">
                        <div className="card stretch stretch-full">
                            <div className="card-header">
                                <h5 className="card-title">Marketing Campaign</h5>
                            </div>
                            <div className="card-body custom-card-action p-0">
                                <div id="campaign-alytics-bar-chart" />
                            </div>
                            <div className="card-footer">
                                <div className="row g-4">
                                    <div className="col-lg-3">
                                        <div className="p-3 border border-dashed rounded">
                                            <div className="fs-12 text-muted mb-1">Reach</div>
                                            <h6 className="fw-bold text-dark">5,486</h6>
                                            <div className="progress mt-2 ht-3">
                                                <div className="progress-bar bg-primary" role="progressbar" style={{ width: '81%' }} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="p-3 border border-dashed rounded">
                                            <div className="fs-12 text-muted mb-1">Opened</div>
                                            <h6 className="fw-bold text-dark">42.75%</h6>
                                            <div className="progress mt-2 ht-3">
                                                <div className="progress-bar bg-success" role="progressbar" style={{ width: '82%' }} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="p-3 border border-dashed rounded">
                                            <div className="fs-12 text-muted mb-1">Clicked</div>
                                            <h6 className="fw-bold text-dark">38.68%</h6>
                                            <div className="progress mt-2 ht-3">
                                                <div className="progress-bar bg-danger" role="progressbar" style={{ width: '68%' }} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="p-3 border border-dashed rounded">
                                            <div className="fs-12 text-muted mb-1">Conversion</div>
                                            <h6 className="fw-bold text-dark">16.68%</h6>
                                            <div className="progress mt-2 ht-3">
                                                <div className="progress-bar bg-dark" role="progressbar" style={{ width: '75%' }} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-8">
                        <div className="card stretch stretch-full">
                            <div className="card-header">
                                <h5 className="card-title">Project Remainders</h5>
                            </div>
                            <div className="card-body custom-card-action p-0">
                                <div className="table-responsive">
                                    <table className="table table-hover mb-0">
                                        <thead>
                                            <tr>
                                                <th scope="col">Name</th>
                                                <th scope="col">Status</th>
                                                <th scope="col">Remaining</th>
                                                <th scope="col">Stage</th>
                                                <th scope="col" className="text-end">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div className="hstack gap-2">
                                                        <span className="wd-10 ht-10 bg-gray-400 rounded-circle d-inline-block me-2 lh-base" />
                                                        <div className="border-3 border-start rounded ps-3">
                                                            <a href="javascript:void(0);" className="mb-2 d-block">
                                                                <span>CRM Dashboard Redesign</span>
                                                            </a>
                                                            <p className="fs-12 text-muted mb-0">Management of project under "Duralux" brand</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span className="badge bg-soft-primary text-primary">In Prograss</span>
                                                </td>
                                                <td>
                                                    <div data-time-countdown="countdown_1" />
                                                </td>
                                                <td>
                                                    <div className="hstack gap-1">
                                                        <div className="wd-15 ht-4 bg-success rounded-pill opacity-75" />
                                                        <div className="wd-15 ht-4 bg-success rounded-pill opacity-75" />
                                                        <div className="wd-15 ht-4 bg-success rounded-pill opacity-75" />
                                                        <div className="wd-15 ht-4 bg-warning rounded-pill opacity-75" />
                                                        <div className="wd-15 ht-4 bg-warning rounded-pill opacity-75" />
                                                        <div className="wd-15 ht-4 bg-gray-300 rounded-pill" />
                                                    </div>
                                                </td>
                                                <td>
                                                    <a href="javascript:void(0);" className="avatar-text avatar-md ms-auto">
                                                        <i className="feather-arrow-right" />
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="hstack gap-2">
                                                        <span className="wd-10 ht-10 bg-gray-400 rounded-circle d-inline-block me-2 lh-base" />
                                                        <div className="border-3 border-start rounded ps-3">
                                                            <a href="javascript:void(0);" className="mb-2 d-block">
                                                                <span>Duralux CRM Admin Project</span>
                                                            </a>
                                                            <p className="fs-12 text-muted mb-0">Duralux CRM Dashbaord Project</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span className="badge bg-soft-info text-info">Updading</span>
                                                </td>
                                                <td>
                                                    <div data-time-countdown="countdown_2" />
                                                </td>
                                                <td>
                                                    <div className="hstack gap-1">
                                                        <div className="wd-15 ht-4 bg-success rounded-pill opacity-75" />
                                                        <div className="wd-15 ht-4 bg-success rounded-pill opacity-75" />
                                                        <div className="wd-15 ht-4 bg-success rounded-pill opacity-75" />
                                                        <div className="wd-15 ht-4 bg-warning rounded-pill opacity-75" />
                                                        <div className="wd-15 ht-4 bg-warning rounded-pill opacity-75" />
                                                        <div className="wd-15 ht-4 bg-gray-300 rounded-pill" />
                                                    </div>
                                                </td>
                                                <td>
                                                    <a href="javascript:void(0);" className="avatar-text avatar-md ms-auto">
                                                        <i className="feather-arrow-right" />
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="hstack gap-2">
                                                        <span className="wd-10 ht-10 bg-gray-400 rounded-circle d-inline-block me-2 lh-base" />
                                                        <div className="border-3 border-start rounded ps-3">
                                                            <a href="javascript:void(0);" className="mb-2 d-block">
                                                                <span>Website Redesign for Nike</span>
                                                            </a>
                                                            <p className="fs-12 text-muted mb-0">Website Redesign for Nike</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span className="badge bg-soft-danger text-danger">Upcoming</span>
                                                </td>
                                                <td>
                                                    <div data-time-countdown="countdown_3" />
                                                </td>
                                                <td>
                                                    <div className="hstack gap-1">
                                                        <div className="wd-15 ht-4 bg-success rounded-pill opacity-75" />
                                                        <div className="wd-15 ht-4 bg-success rounded-pill opacity-75" />
                                                        <div className="wd-15 ht-4 bg-success rounded-pill opacity-75" />
                                                        <div className="wd-15 ht-4 bg-warning rounded-pill opacity-75" />
                                                        <div className="wd-15 ht-4 bg-warning rounded-pill opacity-75" />
                                                        <div className="wd-15 ht-4 bg-gray-300 rounded-pill" />
                                                    </div>
                                                </td>
                                                <td>
                                                    <a href="javascript:void(0);" className="avatar-text avatar-md ms-auto">
                                                        <i className="feather-arrow-right" />
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="hstack gap-2">
                                                        <span className="wd-10 ht-10 bg-gray-400 rounded-circle d-inline-block me-2 lh-base" />
                                                        <div className="border-3 border-start rounded ps-3">
                                                            <a href="javascript:void(0);" className="mb-2 d-block">
                                                                <span>Duralux CRM Dashbaord Project</span>
                                                            </a>
                                                            <p className="fs-12 text-muted mb-0">Duralux CRM Dashbaord Project</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span className="badge bg-soft-teal text-teal">Submitted</span>
                                                </td>
                                                <td>
                                                    <div data-time-countdown="countdown_4" />
                                                </td>
                                                <td>
                                                    <div className="hstack gap-1">
                                                        <div className="wd-15 ht-4 bg-success rounded-pill opacity-75" />
                                                        <div className="wd-15 ht-4 bg-success rounded-pill opacity-75" />
                                                        <div className="wd-15 ht-4 bg-success rounded-pill opacity-75" />
                                                        <div className="wd-15 ht-4 bg-warning rounded-pill opacity-75" />
                                                        <div className="wd-15 ht-4 bg-warning rounded-pill opacity-75" />
                                                        <div className="wd-15 ht-4 bg-gray-300 rounded-pill" />
                                                    </div>
                                                </td>
                                                <td>
                                                    <a href="javascript:void(0);" className="avatar-text avatar-md ms-auto">
                                                        <i className="feather-arrow-right" />
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="hstack gap-2">
                                                        <span className="wd-10 ht-10 bg-gray-400 rounded-circle d-inline-block me-2 lh-base" />
                                                        <div className="border-3 border-start rounded ps-3">
                                                            <a href="javascript:void(0);" className="mb-2 d-block">
                                                                <span>Update User Flows with UX Feedback</span>
                                                            </a>
                                                            <p className="fs-12 text-muted mb-0">Update User Flows with UX Feedback</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span className="badge bg-soft-warning text-warning">Working</span>
                                                </td>
                                                <td>
                                                    <div data-time-countdown="countdown_5" />
                                                </td>
                                                <td>
                                                    <div className="hstack gap-1">
                                                        <div className="wd-15 ht-4 bg-success rounded-pill opacity-75" />
                                                        <div className="wd-15 ht-4 bg-success rounded-pill opacity-75" />
                                                        <div className="wd-15 ht-4 bg-success rounded-pill opacity-75" />
                                                        <div className="wd-15 ht-4 bg-warning rounded-pill opacity-75" />
                                                        <div className="wd-15 ht-4 bg-warning rounded-pill opacity-75" />
                                                        <div className="wd-15 ht-4 bg-gray-300 rounded-pill" />
                                                    </div>
                                                </td>
                                                <td>
                                                    <a href="javascript:void(0);" className="avatar-text avatar-md ms-auto">
                                                        <i className="feather-arrow-right" />
                                                    </a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
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
                    <div className="col-xxl-4">
                        <div className="card stretch stretch-full">
                            <div className="card-header">
                                <h5 className="card-title">Social Statistics</h5>
                            </div>
                            <div className="card-body">
                                <div id="social-radar-chart" />
                            </div>
                            <a href="javascript:void(0);" className="card-footer fs-11 fw-bold text-uppercase text-center">Explore Details</a>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}

export default Home;