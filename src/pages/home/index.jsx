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

        new ApexCharts(document.querySelector("#payment-records-chart"), {
            chart: {
                height: 380,
                width: "100%",
                stacked: !1,
                toolbar: {
                    show: !1
                }
            },
            stroke: {
                width: [1, 2, 3],
                curve: "smooth",
                lineCap: "round"
            },
            plotOptions: {
                bar: {
                    endingShape: "rounded",
                    columnWidth: "30%"
                }
            },
            colors: ["#3454d1", "#a2acc7", "#E1E3EA"],
            series: [{
                name: "Payment Rejected",
                type: "bar",
                data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 21]
            }, {
                name: "Payment Completed",
                type: "line",
                data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43, 41]
            }, {
                name: "Awaiting Payment",
                type: "bar",
                data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43, 56]
            }],
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
            markers: {
                size: 0
            },
            xaxis: {
                categories: ["JAN/23", "FEB/23", "MAR/23", "APR/23", "MAY/23", "JUN/23", "JUL/23", "AUG/23", "SEP/23", "OCT/23", "NOV/23", "DEC/23"],
                axisBorder: {
                    show: !1
                },
                axisTicks: {
                    show: !1
                },
                labels: {
                    style: {
                        fontSize: "10px",
                        colors: "#A0ACBB"
                    }
                }
            },
            yaxis: {
                labels: {
                    formatter: function (e) {
                        return +e + "K"
                    },
                    offsetX: -5,
                    offsetY: 0,
                    style: {
                        color: "#A0ACBB"
                    }
                }
            },
            grid: {
                xaxis: {
                    lines: {
                        show: !1
                    }
                },
                yaxis: {
                    lines: {
                        show: !1
                    }
                }
            },
            dataLabels: {
                enabled: !1
            },
            tooltip: {
                y: {
                    formatter: function (e) {
                        return +e + "K"
                    }
                },
                style: {
                    fontSize: "12px",
                    fontFamily: "Inter"
                }
            },
            legend: {
                show: !1,
                labels: {
                    fontSize: "12px",
                    colors: "#A0ACBB"
                },
                fontSize: "12px",
                fontFamily: "Inter"
            }
        }).render()

        new ApexCharts(document.querySelector("#task-completed-area-chart"), {
            series: [{
                name: "Task Completed",
                data: [44, 55, 41, 60, 52, 66, 51]
            }],
            chart: {
                type: "area",
                height: 100,
                toolbar: {
                    show: !1
                },
                sparkline: {
                    enabled: !0
                }
            },
            stroke: {
                width: 2,
                curve: "smooth"
            },
            fill: {
                type: "gradient",
                gradient: {
                    shadeIntensity: 1,
                    opacityFrom: .2,
                    opacityTo: .75,
                    stops: [0, 90, 100]
                }
            },
            colors: ["#3454d1"],
            grid: {
                show: !1
            },
            legend: {
                show: !1
            },
            dataLabels: {
                enabled: !1
            },
            xaxis: {
                categories: ["SUN", "MON", "TUE", "WEN", "THU", "FRI", "SAR"],
                axisBorder: {
                    show: !1
                },
                axisTicks: {
                    show: !1
                }
            },
            tooltip: {
                y: {
                    formatter: function (e) {
                        return +e + "Tasks"
                    }
                },
                style: {
                    fontSize: "12px",
                    colors: "#A0ACBB",
                    fontFamily: "Inter"
                }
            }
        }).render()

        new ApexCharts(document.querySelector("#new-tasks-area-chart"), {
            series: [{
                name: "New Tasks",
                data: [44, 55, 41, 60, 52, 66, 51]
            }],
            chart: {
                type: "area",
                height: 100,
                toolbar: {
                    show: !1
                },
                sparkline: {
                    enabled: !0
                }
            },
            stroke: {
                width: 2,
                curve: "smooth"
            },
            fill: {
                type: "gradient",
                gradient: {
                    shadeIntensity: 1,
                    opacityFrom: .2,
                    opacityTo: .75,
                    stops: [0, 90, 100]
                }
            },
            colors: ["#25b865"],
            grid: {
                show: !1
            },
            legend: {
                show: !1
            },
            dataLabels: {
                enabled: !1
            },
            xaxis: {
                categories: ["SUN", "MON", "TUE", "WEN", "THU", "FRI", "SAR"],
                axisBorder: {
                    show: !1
                },
                axisTicks: {
                    show: !1
                }
            },
            tooltip: {
                y: {
                    formatter: function (e) {
                        return +e + "Projects"
                    }
                },
                style: {
                    fontSize: "12px",
                    colors: "#A0ACBB",
                    fontFamily: "Inter"
                }
            }
        }).render()

        new ApexCharts(document.querySelector("#project-done-area-chart"), {
            series: [{
                name: "Project Done",
                data: [44, 55, 41, 60, 52, 66, 51]
            }],
            chart: {
                type: "area",
                height: 100,
                toolbar: {
                    show: !1
                },
                sparkline: {
                    enabled: !0
                }
            },
            stroke: {
                width: 2,
                curve: "smooth"
            },
            fill: {
                type: "gradient",
                gradient: {
                    shadeIntensity: 1,
                    opacityFrom: .2,
                    opacityTo: .75,
                    stops: [0, 90, 100]
                }
            },
            colors: ["#d13b4c"],
            grid: {
                show: !1
            },
            legend: {
                show: !1
            },
            dataLabels: {
                enabled: !1
            },
            xaxis: {
                categories: ["SUN", "MON", "TUE", "WEN", "THU", "FRI", "SAR"],
                axisBorder: {
                    show: !1
                },
                axisTicks: {
                    show: !1
                }
            },
            tooltip: {
                y: {
                    formatter: function (e) {
                        return +e + "Projects"
                    }
                },
                style: {
                    fontSize: "12px",
                    colors: "#A0ACBB",
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
                    <div className="page-header-title">
                        <h5 className="m-b-10">Alexandra Della</h5>
                    </div>
                    <ul className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/">Dashboard</Link></li>
                        <li className="breadcrumb-item">OLT</li>
                    </ul>
                </div>

            </div>
            <div className="main-content">
                <div className="row">
                    <div className="col-xxl-3 col-md-6">
                        <div className="card stretch stretch-full">
                            <div className="card-body">
                                <div className="d-flex align-items-start justify-content-between mb-4">
                                    <div className="d-flex gap-4 align-items-center">
                                        <div className="avatar-text avatar-lg bg-gray-200">
                                            <i className="feather-dollar-sign" />
                                        </div>
                                        <div>
                                            <div className="fs-4 fw-bold text-dark"><span className="counter">45</span>/<span className="counter">76</span></div>
                                            <h3 className="fs-13 fw-semibold text-truncate-1-line">Invoices Awaiting Payment</h3>
                                        </div>
                                    </div>
                                    <a href="#" className>
                                        <i className="feather-more-vertical" />
                                    </a>
                                </div>
                                <div className="pt-4">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <a href="#" className="fs-12 fw-medium text-muted text-truncate-1-line">Invoices Awaiting </a>
                                        <div className="w-100 text-end">
                                            <span className="fs-12 text-dark">$5,569</span>
                                            <span className="fs-11 text-muted">(56%)</span>
                                        </div>
                                    </div>
                                    <div className="progress mt-2 ht-3">
                                        <div className="progress-bar bg-primary" role="progressbar" style={{ width: '56%' }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-3 col-md-6">
                        <div className="card stretch stretch-full">
                            <div className="card-body">
                                <div className="d-flex align-items-start justify-content-between mb-4">
                                    <div className="d-flex gap-4 align-items-center">
                                        <div className="avatar-text avatar-lg bg-gray-200">
                                            <i className="feather-cast" />
                                        </div>
                                        <div>
                                            <div className="fs-4 fw-bold text-dark"><span className="counter">48</span>/<span className="counter">86</span></div>
                                            <h3 className="fs-13 fw-semibold text-truncate-1-line">Converted Leads</h3>
                                        </div>
                                    </div>
                                    <a href="#" className>
                                        <i className="feather-more-vertical" />
                                    </a>
                                </div>
                                <div className="pt-4">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <a href="#" className="fs-12 fw-medium text-muted text-truncate-1-line">Converted Leads </a>
                                        <div className="w-100 text-end">
                                            <span className="fs-12 text-dark">52 Completed</span>
                                            <span className="fs-11 text-muted">(63%)</span>
                                        </div>
                                    </div>
                                    <div className="progress mt-2 ht-3">
                                        <div className="progress-bar bg-warning" role="progressbar" style={{ width: '63%' }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-3 col-md-6">
                        <div className="card stretch stretch-full">
                            <div className="card-body">
                                <div className="d-flex align-items-start justify-content-between mb-4">
                                    <div className="d-flex gap-4 align-items-center">
                                        <div className="avatar-text avatar-lg bg-gray-200">
                                            <i className="feather-briefcase" />
                                        </div>
                                        <div>
                                            <div className="fs-4 fw-bold text-dark"><span className="counter">16</span>/<span className="counter">20</span></div>
                                            <h3 className="fs-13 fw-semibold text-truncate-1-line">Projects In Progress</h3>
                                        </div>
                                    </div>
                                    <a href="#" className>
                                        <i className="feather-more-vertical" />
                                    </a>
                                </div>
                                <div className="pt-4">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <a href="#" className="fs-12 fw-medium text-muted text-truncate-1-line">Projects In Progress </a>
                                        <div className="w-100 text-end">
                                            <span className="fs-12 text-dark">16 Completed</span>
                                            <span className="fs-11 text-muted">(78%)</span>
                                        </div>
                                    </div>
                                    <div className="progress mt-2 ht-3">
                                        <div className="progress-bar bg-success" role="progressbar" style={{ width: '78%' }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-3 col-md-6">
                        <div className="card stretch stretch-full">
                            <div className="card-body">
                                <div className="d-flex align-items-start justify-content-between mb-4">
                                    <div className="d-flex gap-4 align-items-center">
                                        <div className="avatar-text avatar-lg bg-gray-200">
                                            <i className="feather-activity" />
                                        </div>
                                        <div>
                                            <div className="fs-4 fw-bold text-dark"><span className="counter">46.59</span>%</div>
                                            <h3 className="fs-13 fw-semibold text-truncate-1-line">Conversion Rate</h3>
                                        </div>
                                    </div>
                                    <a href="#" className>
                                        <i className="feather-more-vertical" />
                                    </a>
                                </div>
                                <div className="pt-4">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <a href="#" className="fs-12 fw-medium text-muted text-truncate-1-line"> Conversion Rate </a>
                                        <div className="w-100 text-end">
                                            <span className="fs-12 text-dark">$2,254</span>
                                            <span className="fs-11 text-muted">(46%)</span>
                                        </div>
                                    </div>
                                    <div className="progress mt-2 ht-3">
                                        <div className="progress-bar bg-danger" role="progressbar" style={{ width: '46%' }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-8">
                        <div className="card stretch stretch-full">
                            <div className="card-header">
                                <h5 className="card-title">Payment Record</h5>
                            </div>
                            <div className="card-body custom-card-action p-0">
                                <div id="payment-records-chart" />
                            </div>
                            <div className="card-footer">
                                <div className="row g-4">
                                    <div className="col-lg-3">
                                        <div className="p-3 border border-dashed rounded">
                                            <div className="fs-12 text-muted mb-1">Awaiting</div>
                                            <h6 className="fw-bold text-dark">$5,486</h6>
                                            <div className="progress mt-2 ht-3">
                                                <div className="progress-bar bg-primary" role="progressbar" style={{ width: '81%' }} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="p-3 border border-dashed rounded">
                                            <div className="fs-12 text-muted mb-1">Completed</div>
                                            <h6 className="fw-bold text-dark">$9,275</h6>
                                            <div className="progress mt-2 ht-3">
                                                <div className="progress-bar bg-success" role="progressbar" style={{ width: '82%' }} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="p-3 border border-dashed rounded">
                                            <div className="fs-12 text-muted mb-1">Rejected</div>
                                            <h6 className="fw-bold text-dark">$3,868</h6>
                                            <div className="progress mt-2 ht-3">
                                                <div className="progress-bar bg-danger" role="progressbar" style={{ width: '68%' }} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="p-3 border border-dashed rounded">
                                            <div className="fs-12 text-muted mb-1">Revenue</div>
                                            <h6 className="fw-bold text-dark">$50,668</h6>
                                            <div className="progress mt-2 ht-3">
                                                <div className="progress-bar bg-dark" role="progressbar" style={{ width: '75%' }} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-4">
                        <div className="card stretch stretch-full overflow-hidden">
                            <div className="bg-primary text-white">
                                <div className="p-4">
                                    <span className="badge bg-light text-primary text-dark float-end">12%</span>
                                    <div className="text-start">
                                        <h4 className="text-reset">30,569</h4>
                                        <p className="text-reset m-0">Total Sales</p>
                                    </div>
                                </div>
                                <div id="total-sales-color-graph" />
                            </div>
                            <div className="card-body">
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className="hstack gap-3">
                                        <div className="avatar-image avatar-lg p-2 rounded">
                                            <img className="img-fluid" src="/images/brand/shopify.png" alt="image" />
                                        </div>
                                        <div>
                                            <a href="#" className="d-block">Shopify eCommerce Store</a>
                                            <span className="fs-12 text-muted">Development</span>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="fw-bold text-dark">$1200</div>
                                        <div className="fs-12 text-end">6 Projects</div>
                                    </div>
                                </div>
                                <hr className="border-dashed my-3" />
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className="hstack gap-3">
                                        <div className="avatar-image avatar-lg p-2 rounded">
                                            <img className="img-fluid" src="/images/brand/app-store.png" alt="image" />
                                        </div>
                                        <div>
                                            <a href="#" className="d-block">iOS Apps Development</a>
                                            <span className="fs-12 text-muted">Development</span>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="fw-bold text-dark">$1450</div>
                                        <div className="fs-12 text-end">3 Projects</div>
                                    </div>
                                </div>
                                <hr className="border-dashed my-3" />
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className="hstack gap-3">
                                        <div className="avatar-image avatar-lg p-2 rounded">
                                            <img className="img-fluid" src="/images/brand/figma.png" alt="image" />
                                        </div>
                                        <div>
                                            <a href="#" className="d-block">Figma Dashboard Design</a>
                                            <span className="fs-12 text-muted">UI/UX Design</span>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="fw-bold text-dark">$1250</div>
                                        <div className="fs-12 text-end">5 Projects</div>
                                    </div>
                                </div>
                            </div>
                            <a href="#" className="card-footer fs-11 fw-bold text-uppercase text-center py-4">Full Details</a>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card mb-4 stretch stretch-full">
                            <div className="card-header d-flex align-items-center justify-content-between">
                                <div className="d-flex gap-3 align-items-center">
                                    <div className="avatar-text">
                                        <i className="feather feather-star" />
                                    </div>
                                    <div>
                                        <div className="fw-semibold text-dark">Tasks Completed</div>
                                        <div className="fs-12 text-muted">22/35 completed</div>
                                    </div>
                                </div>
                                <div className="fs-4 fw-bold text-dark">22/35</div>
                            </div>
                            <div className="card-body d-flex align-items-center justify-content-between gap-4">
                                <div id="task-completed-area-chart" />
                                <div className="fs-12 text-muted text-nowrap">
                                    <span className="fw-semibold text-primary">28% more</span><br />
                                    <span>from last week</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card mb-4 stretch stretch-full">
                            <div className="card-header d-flex align-items-center justify-content-between">
                                <div className="d-flex gap-3 align-items-center">
                                    <div className="avatar-text">
                                        <i className="feather feather-file-text" />
                                    </div>
                                    <div>
                                        <div className="fw-semibold text-dark">New Tasks</div>
                                        <div className="fs-12 text-muted">0/20 tasks</div>
                                    </div>
                                </div>
                                <div className="fs-4 fw-bold text-dark">5/20</div>
                            </div>
                            <div className="card-body d-flex align-items-center justify-content-between gap-4">
                                <div id="new-tasks-area-chart" />
                                <div className="fs-12 text-muted text-nowrap">
                                    <span className="fw-semibold text-success">34% more</span><br />
                                    <span>from last week</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card mb-4 stretch stretch-full">
                            <div className="card-header d-flex align-items-center justify-content-between">
                                <div className="d-flex gap-3 align-items-center">
                                    <div className="avatar-text">
                                        <i className="feather feather-airplay" />
                                    </div>
                                    <div>
                                        <div className="fw-semibold text-dark">Project Done</div>
                                        <div className="fs-12 text-muted">20/30 project</div>
                                    </div>
                                </div>
                                <div className="fs-4 fw-bold text-dark">20/30</div>
                            </div>
                            <div className="card-body d-flex align-items-center justify-content-between gap-4">
                                <div id="project-done-area-chart" />
                                <div className="fs-12 text-muted text-nowrap">
                                    <span className="fw-semibold text-danger">42% more</span><br />
                                    <span>from last week</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-4">
                        <div className="card stretch stretch-full">
                            <div className="card-header">
                                <h5 className="card-title">Leads Overview</h5>
                            </div>
                            <div className="card-body custom-card-action">
                                <div id="leads-overview-donut" />
                                <div className="row g-2">
                                    <div className="col-4">
                                        <a href="#" className="p-2 hstack gap-2 rounded border border-dashed border-gray-5">
                                            <span className="wd-7 ht-7 rounded-circle d-inline-block" style={{ backgroundColor: '#3454d1' }} />
                                            <span>New<span className="fs-10 text-muted ms-1">(20K)</span></span>
                                        </a>
                                    </div>
                                    <div className="col-4">
                                        <a href="#" className="p-2 hstack gap-2 rounded border border-dashed border-gray-5">
                                            <span className="wd-7 ht-7 rounded-circle d-inline-block" style={{ backgroundColor: '#0d519e' }} />
                                            <span>Contacted<span className="fs-10 text-muted ms-1">(15K)</span></span>
                                        </a>
                                    </div>
                                    <div className="col-4">
                                        <a href="#" className="p-2 hstack gap-2 rounded border border-dashed border-gray-5">
                                            <span className="wd-7 ht-7 rounded-circle d-inline-block" style={{ backgroundColor: '#1976d2' }} />
                                            <span>Qualified<span className="fs-10 text-muted ms-1">(10K)</span></span>
                                        </a>
                                    </div>
                                    <div className="col-4">
                                        <a href="#" className="p-2 hstack gap-2 rounded border border-dashed border-gray-5">
                                            <span className="wd-7 ht-7 rounded-circle d-inline-block" style={{ backgroundColor: '#1e88e5' }} />
                                            <span>Working<span className="fs-10 text-muted ms-1">(18K)</span></span>
                                        </a>
                                    </div>
                                    <div className="col-4">
                                        <a href="#" className="p-2 hstack gap-2 rounded border border-dashed border-gray-5">
                                            <span className="wd-7 ht-7 rounded-circle d-inline-block" style={{ backgroundColor: '#2196f3' }} />
                                            <span>Customer<span className="fs-10 text-muted ms-1">(10K)</span></span>
                                        </a>
                                    </div>
                                    <div className="col-4">
                                        <a href="#" className="p-2 hstack gap-2 rounded border border-dashed border-gray-5">
                                            <span className="wd-7 ht-7 rounded-circle d-inline-block" style={{ backgroundColor: '#42a5f5' }} />
                                            <span>Proposal<span className="fs-10 text-muted ms-1">(15K)</span></span>
                                        </a>
                                    </div>
                                    <div className="col-4">
                                        <a href="#" className="p-2 hstack gap-2 rounded border border-dashed border-gray-5">
                                            <span className="wd-7 ht-7 rounded-circle d-inline-block" style={{ backgroundColor: '#64b5f6' }} />
                                            <span>Leads<span className="fs-10 text-muted ms-1">(16K)</span></span>
                                        </a>
                                    </div>
                                    <div className="col-4">
                                        <a href="#" className="p-2 hstack gap-2 rounded border border-dashed border-gray-5">
                                            <span className="wd-7 ht-7 rounded-circle d-inline-block" style={{ backgroundColor: '#90caf9' }} />
                                            <span>Progress<span className="fs-10 text-muted ms-1">(14K)</span></span>
                                        </a>
                                    </div>
                                    <div className="col-4">
                                        <a href="#" className="p-2 hstack gap-2 rounded border border-dashed border-gray-5">
                                            <span className="wd-7 ht-7 rounded-circle d-inline-block" style={{ backgroundColor: '#aad6fa' }} />
                                            <span>Others<span className="fs-10 text-muted ms-1">(10K)</span></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-8">
                        <div className="card stretch stretch-full">
                            <div className="card-header">
                                <h5 className="card-title">Latest Leads</h5>
                            </div>
                            <div className="card-body custom-card-action p-0">
                                <div className="table-responsive">
                                    <table className="table table-hover mb-0">
                                        <thead>
                                            <tr className="border-b">
                                                <th scope="row">Users</th>
                                                <th>Proposal</th>
                                                <th>Date</th>
                                                <th>Status</th>
                                                <th className="text-end">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center gap-3">
                                                        <div className="avatar-image">
                                                            <img src="https://i.pravatar.cc/100?img=2" alt="image" className="img-fluid" />
                                                        </div>
                                                        <a href="#">
                                                            <span className="d-block">Archie Cantones</span>
                                                            <span className="fs-12 d-block fw-normal text-muted">arcie.tones@gmail.com</span>
                                                        </a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span className="badge bg-gray-200 text-dark">Sent</span>
                                                </td>
                                                <td>11/06/2023 10:53</td>
                                                <td>
                                                    <span className="badge bg-soft-success text-success">Completed</span>
                                                </td>
                                                <td className="text-end">
                                                    <a href="#"><i className="feather-more-vertical" /></a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center gap-3">
                                                        <div className="avatar-image">
                                                            <img src="https://i.pravatar.cc/100?img=3" alt="image" className="img-fluid" />
                                                        </div>
                                                        <a href="#">
                                                            <span className="d-block">Holmes Cherryman</span>
                                                            <span className="fs-12 d-block fw-normal text-muted">golms.chan@gmail.com</span>
                                                        </a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span className="badge bg-gray-200 text-dark">New</span>
                                                </td>
                                                <td>11/06/2023 10:53</td>
                                                <td>
                                                    <span className="badge bg-soft-primary text-primary">In Progress </span>
                                                </td>
                                                <td className="text-end">
                                                    <a href="#"><i className="feather-more-vertical" /></a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center gap-3">
                                                        <div className="avatar-image">
                                                            <img src="https://i.pravatar.cc/100?img=4" alt="image" className="img-fluid" />
                                                        </div>
                                                        <a href="#">
                                                            <span className="d-block">Malanie Hanvey</span>
                                                            <span className="fs-12 d-block fw-normal text-muted">lanie.nveyn@gmail.com</span>
                                                        </a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span className="badge bg-gray-200 text-dark">Sent</span>
                                                </td>
                                                <td>11/06/2023 10:53</td>
                                                <td>
                                                    <span className="badge bg-soft-success text-success">Completed</span>
                                                </td>
                                                <td className="text-end">
                                                    <a href="#"><i className="feather-more-vertical" /></a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center gap-3">
                                                        <div className="avatar-image">
                                                            <img src="https://i.pravatar.cc/100?img=5" alt="image" className="img-fluid" />
                                                        </div>
                                                        <a href="#">
                                                            <span className="d-block">Kenneth Hune</span>
                                                            <span className="fs-12 d-block fw-normal text-muted">nneth.une@gmail.com</span>
                                                        </a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span className="badge bg-gray-200 text-dark">Returning</span>
                                                </td>
                                                <td>11/06/2023 10:53</td>
                                                <td>
                                                    <span className="badge bg-soft-warning text-warning">Not Interested</span>
                                                </td>
                                                <td className="text-end">
                                                    <a href="#"><i className="feather-more-vertical" /></a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center gap-3">
                                                        <div className="avatar-image">
                                                            <img src="https://i.pravatar.cc/100?img=6" alt="image" className="img-fluid" />
                                                        </div>
                                                        <a href="#">
                                                            <span className="d-block">Valentine Maton</span>
                                                            <span className="fs-12 d-block fw-normal text-muted">alenine.aton@gmail.com</span>
                                                        </a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span className="badge bg-gray-200 text-dark">Sent</span>
                                                </td>
                                                <td>11/06/2023 10:53</td>
                                                <td>
                                                    <span className="badge bg-soft-success text-success">Completed</span>
                                                </td>
                                                <td className="text-end">
                                                    <a href="#"><i className="feather-more-vertical" /></a>
                                                </td>
                                            </tr>
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
                    <div className="col-xxl-4">
                        <div className="card stretch stretch-full">
                            <div className="card-header">
                                <h5 className="card-title">Upcoming Schedule</h5>
                            </div>
                            <div className="card-body">
                                <div className="p-3 border border-dashed rounded-3 mb-3">
                                    <div className="d-flex justify-content-between">
                                        <div className="d-flex align-items-center gap-3">
                                            <div className="wd-50 ht-50 bg-soft-primary text-primary lh-1 d-flex align-items-center justify-content-center flex-column rounded-2 schedule-date">
                                                <span className="fs-18 fw-bold mb-1 d-block">20</span>
                                                <span className="fs-10 fw-semibold text-uppercase d-block">Dec</span>
                                            </div>
                                            <div className="text-dark">
                                                <a href="#" className="fw-bold mb-2 text-truncate-1-line">React Dashboard Design</a>
                                                <span className="fs-11 fw-normal text-muted text-truncate-1-line">11:30am - 12:30pm</span>
                                            </div>
                                        </div>
                                        <div className="img-group lh-0 ms-3 justify-content-start d-none d-sm-flex">
                                            <a href="#" className="avatar-image avatar-md" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Janette Dalton">
                                                <img src="https://i.pravatar.cc/100?img=2" className="img-fluid" alt="image" />
                                            </a>
                                            <a href="#" className="avatar-image avatar-md" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Michael Ksen">
                                                <img src="https://i.pravatar.cc/100?img=3" className="img-fluid" alt="image" />
                                            </a>
                                            <a href="#" className="avatar-image avatar-md" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Socrates Itumay">
                                                <img src="https://i.pravatar.cc/100?img=4" className="img-fluid" alt="image" />
                                            </a>
                                            <a href="#" className="avatar-image avatar-md" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Marianne Audrey">
                                                <img src="https://i.pravatar.cc/100?img=6" className="img-fluid" alt="image" />
                                            </a>
                                            <a href="#" className="avatar-text avatar-md" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Explorer More">
                                                <i className="feather-more-horizontal" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-3 border border-dashed rounded-3 mb-3">
                                    <div className="d-flex justify-content-between">
                                        <div className="d-flex align-items-center gap-3">
                                            <div className="wd-50 ht-50 bg-soft-warning text-warning lh-1 d-flex align-items-center justify-content-center flex-column rounded-2 schedule-date">
                                                <span className="fs-18 fw-bold mb-1 d-block">30</span>
                                                <span className="fs-10 fw-semibold text-uppercase d-block">Dec</span>
                                            </div>
                                            <div className="text-dark">
                                                <a href="#" className="fw-bold mb-2 text-truncate-1-line">Admin Design Concept</a>
                                                <span className="fs-11 fw-normal text-muted text-truncate-1-line">10:00am - 12:00pm</span>
                                            </div>
                                        </div>
                                        <div className="img-group lh-0 ms-3 justify-content-start d-none d-sm-flex">
                                            <a href="#" className="avatar-image avatar-md" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Janette Dalton">
                                                <img src="https://i.pravatar.cc/100?img=2" className="img-fluid" alt="image" />
                                            </a>
                                            <a href="#" className="avatar-image avatar-md" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Michael Ksen">
                                                <img src="https://i.pravatar.cc/100?img=3" className="img-fluid" alt="image" />
                                            </a>
                                            <a href="#" className="avatar-image avatar-md" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Marianne Audrey">
                                                <img src="https://i.pravatar.cc/100?img=5" className="img-fluid" alt="image" />
                                            </a>
                                            <a href="#" className="avatar-image avatar-md" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Marianne Audrey">
                                                <img src="https://i.pravatar.cc/100?img=6" className="img-fluid" alt="image" />
                                            </a>
                                            <a href="#" className="avatar-text avatar-md" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Explorer More">
                                                <i className="feather-more-horizontal" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-3 border border-dashed rounded-3 mb-3">
                                    <div className="d-flex justify-content-between">
                                        <div className="d-flex align-items-center gap-3">
                                            <div className="wd-50 ht-50 bg-soft-success text-success lh-1 d-flex align-items-center justify-content-center flex-column rounded-2 schedule-date">
                                                <span className="fs-18 fw-bold mb-1 d-block">17</span>
                                                <span className="fs-10 fw-semibold text-uppercase d-block">Dec</span>
                                            </div>
                                            <div className="text-dark">
                                                <a href="#" className="fw-bold mb-2 text-truncate-1-line">Standup Team Meeting</a>
                                                <span className="fs-11 fw-normal text-muted text-truncate-1-line">8:00am - 9:00am</span>
                                            </div>
                                        </div>
                                        <div className="img-group lh-0 ms-3 justify-content-start d-none d-sm-flex">
                                            <a href="#" className="avatar-image avatar-md" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Janette Dalton">
                                                <img src="https://i.pravatar.cc/100?img=2" className="img-fluid" alt="image" />
                                            </a>
                                            <a href="#" className="avatar-image avatar-md" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Michael Ksen">
                                                <img src="https://i.pravatar.cc/100?img=3" className="img-fluid" alt="image" />
                                            </a>
                                            <a href="#" className="avatar-image avatar-md" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Socrates Itumay">
                                                <img src="https://i.pravatar.cc/100?img=4" className="img-fluid" alt="image" />
                                            </a>
                                            <a href="#" className="avatar-image avatar-md" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Marianne Audrey">
                                                <img src="https://i.pravatar.cc/100?img=5" className="img-fluid" alt="image" />
                                            </a>
                                            <a href="#" className="avatar-text avatar-md" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Explorer More">
                                                <i className="feather-more-horizontal" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-3 border border-dashed rounded-3 mb-2">
                                    <div className="d-flex justify-content-between">
                                        <div className="d-flex align-items-center gap-3">
                                            <div className="wd-50 ht-50 bg-soft-danger text-danger lh-1 d-flex align-items-center justify-content-center flex-column rounded-2 schedule-date">
                                                <span className="fs-18 fw-bold mb-1 d-block">25</span>
                                                <span className="fs-10 fw-semibold text-uppercase d-block">Dec</span>
                                            </div>
                                            <div className="text-dark">
                                                <a href="#" className="fw-bold mb-2 text-truncate-1-line">Zoom Team Meeting</a>
                                                <span className="fs-11 fw-normal text-muted text-truncate-1-line">03:30pm - 05:30pm</span>
                                            </div>
                                        </div>
                                        <div className="img-group lh-0 ms-3 justify-content-start d-none d-sm-flex">
                                            <a href="#" className="avatar-image avatar-md" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Janette Dalton">
                                                <img src="https://i.pravatar.cc/100?img=2" className="img-fluid" alt="image" />
                                            </a>
                                            <a href="#" className="avatar-image avatar-md" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Socrates Itumay">
                                                <img src="https://i.pravatar.cc/100?img=4" className="img-fluid" alt="image" />
                                            </a>
                                            <a href="#" className="avatar-image avatar-md" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Marianne Audrey">
                                                <img src="https://i.pravatar.cc/100?img=5" className="img-fluid" alt="image" />
                                            </a>
                                            <a href="#" className="avatar-image avatar-md" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Marianne Audrey">
                                                <img src="https://i.pravatar.cc/100?img=6" className="img-fluid" alt="image" />
                                            </a>
                                            <a href="#" className="avatar-text avatar-md" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Explorer More">
                                                <i className="feather-more-horizontal" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <a href="#" className="card-footer fs-11 fw-bold text-uppercase text-center py-4">Upcomming Schedule</a>
                        </div>
                    </div>
                    <div className="col-xxl-4">
                        <div className="card stretch stretch-full">
                            <div className="card-header">
                                <h5 className="card-title">Project Status</h5>
                            </div>
                            <div className="card-body custom-card-action">
                                <div className="mb-3">
                                    <div className="mb-4 pb-1 d-flex">
                                        <div className="d-flex w-50 align-items-center me-3">
                                            <img src="/images/brand/app-store.png" alt="laravel-logo" className="me-3" width={35} />
                                            <div>
                                                <a href="#" className="text-truncate-1-line">Apps Development</a>
                                                <div className="fs-11 text-muted">Applications</div>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-grow-1 align-items-center">
                                            <div className="progress w-100 me-3 ht-5">
                                                <div className="progress-bar bg-danger" role="progressbar" style={{ width: '54%' }} aria-valuenow={54} aria-valuemin={0} aria-valuemax={100} />
                                            </div>
                                            <span className="text-muted">54%</span>
                                        </div>
                                    </div>
                                    <hr className="border-dashed my-3" />
                                    <div className="mb-4 pb-1 d-flex">
                                        <div className="d-flex w-50 align-items-center me-3">
                                            <img src="/images/brand/figma.png" alt="figma-logo" className="me-3" width={35} />
                                            <div>
                                                <a href="#" className="text-truncate-1-line">Dashboard Design</a>
                                                <div className="fs-11 text-muted">App UI Kit</div>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-grow-1 align-items-center">
                                            <div className="progress w-100 me-3 ht-5">
                                                <div className="progress-bar bg-primary" role="progressbar" style={{ width: '86%' }} aria-valuenow={86} aria-valuemin={0} aria-valuemax={100} />
                                            </div>
                                            <span className="text-muted">86%</span>
                                        </div>
                                    </div>
                                    <hr className="border-dashed my-3" />
                                    <div className="mb-4 pb-1 d-flex">
                                        <div className="d-flex w-50 align-items-center me-3">
                                            <img src="/images/brand/facebook.png" alt="vue-logo" className="me-3" width={35} />
                                            <div>
                                                <a href="#" className="text-truncate-1-line">Facebook Marketing</a>
                                                <div className="fs-11 text-muted">Marketing</div>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-grow-1 align-items-center">
                                            <div className="progress w-100 me-3 ht-5">
                                                <div className="progress-bar bg-success" role="progressbar" style={{ width: '90%' }} aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} />
                                            </div>
                                            <span className="text-muted">90%</span>
                                        </div>
                                    </div>
                                    <hr className="border-dashed my-3" />
                                    <div className="mb-4 pb-1 d-flex">
                                        <div className="d-flex w-50 align-items-center me-3">
                                            <img src="/images/brand/github.png" alt="react-logo" className="me-3" width={35} />
                                            <div>
                                                <a href="#" className="text-truncate-1-line">React Dashboard Github</a>
                                                <div className="fs-11 text-muted">Dashboard</div>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-grow-1 align-items-center">
                                            <div className="progress w-100 me-3 ht-5">
                                                <div className="progress-bar bg-info" role="progressbar" style={{ width: '37%' }} aria-valuenow={37} aria-valuemin={0} aria-valuemax={100} />
                                            </div>
                                            <span className="text-muted">37%</span>
                                        </div>
                                    </div>
                                    <hr className="border-dashed my-3" />
                                    <div className="d-flex">
                                        <div className="d-flex w-50 align-items-center me-3">
                                            <img src="/images/brand/paypal.png" alt="sketch-logo" className="me-3" width={35} />
                                            <div>
                                                <a href="#" className="text-truncate-1-line">Paypal Payment Gateway</a>
                                                <div className="fs-11 text-muted">Payment</div>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-grow-1 align-items-center">
                                            <div className="progress w-100 me-3 ht-5">
                                                <div className="progress-bar bg-warning" role="progressbar" style={{ width: '29%' }} aria-valuenow={29} aria-valuemin={0} aria-valuemax={100} />
                                            </div>
                                            <span className="text-muted">29%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <a href="#" className="card-footer fs-11 fw-bold text-uppercase text-center">Upcomming Projects</a>
                        </div>
                    </div>
                    <div className="col-xxl-4">
                        <div className="card stretch stretch-full">
                            <div className="card-header">
                                <h5 className="card-title">Team Progress</h5>
                            </div>
                            <div className="card-body custom-card-action">
                                <div className="hstack justify-content-between border border-dashed rounded-3 p-3 mb-3">
                                    <div className="hstack gap-3">
                                        <div className="avatar-image">
                                            <img src="https://i.pravatar.cc/100?img=1" alt="image" className="img-fluid" />
                                        </div>
                                        <div>
                                            <a href="#">Alexandra Della</a>
                                            <div className="fs-11 text-muted">Frontend Developer</div>
                                        </div>
                                    </div>
                                    <div className="team-progress-1" />
                                </div>
                                <div className="hstack justify-content-between border border-dashed rounded-3 p-3 mb-3">
                                    <div className="hstack gap-3">
                                        <div className="avatar-image">
                                            <img src="https://i.pravatar.cc/100?img=2" alt="image" className="img-fluid" />
                                        </div>
                                        <div>
                                            <a href="#">Archie Cantones</a>
                                            <div className="fs-11 text-muted">UI/UX Designer</div>
                                        </div>
                                    </div>
                                    <div className="team-progress-2" />
                                </div>
                                <div className="hstack justify-content-between border border-dashed rounded-3 p-3 mb-3">
                                    <div className="hstack gap-3">
                                        <div className="avatar-image">
                                            <img src="https://i.pravatar.cc/100?img=3" alt="image" className="img-fluid" />
                                        </div>
                                        <div>
                                            <a href="#">Malanie Hanvey</a>
                                            <div className="fs-11 text-muted">Backend Developer</div>
                                        </div>
                                    </div>
                                    <div className="team-progress-3" />
                                </div>
                                <div className="hstack justify-content-between border border-dashed rounded-3 p-3 mb-2">
                                    <div className="hstack gap-3">
                                        <div className="avatar-image">
                                            <img src="https://i.pravatar.cc/100?img=4" alt="image" className="img-fluid" />
                                        </div>
                                        <div>
                                            <a href="#">Kenneth Hune</a>
                                            <div className="fs-11 text-muted">Digital Marketer</div>
                                        </div>
                                    </div>
                                    <div className="team-progress-4" />
                                </div>
                            </div>
                            <a href="#" className="card-footer fs-11 fw-bold text-uppercase text-center">Update 30 Min Ago</a>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}

export default Home;