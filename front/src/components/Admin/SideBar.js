import React from 'react';
import {Link} from "react-router-dom";

function SideBar(props) {
    return (
        <div>
            <aside className="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3   bg-gradient-dark" id="sidenav-main">
                <div className="sidenav-header">
                    <i className="fas fa-times p-3 cursor-pointer text-white opacity-5 position-absolute end-0 top-0 d-none d-xl-none" aria-hidden="true" id="iconSidenav"></i>
                    <a className="navbar-brand m-0" href=" https://demos.creative-tim.com/material-dashboard/pages/dashboard " target="_blank">
                        <img src="../assets/img/logo-ct.png" className="navbar-brand-img h-100" alt="main_logo"/>
                            <span className="ms-1 font-weight-bold text-white">Material Dashboard 2</span>
                    </a>
                </div>
                <hr className="horizontal light mt-0 mb-2"/>
                    <div className="collapse navbar-collapse  w-auto " id="sidenav-collapse-main">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link text-white " to="/adminItemList">
                                    <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                        <i className="material-icons opacity-10">dashboard</i>
                                    </div>

                                        <span className="nav-link-text ms-1">Menu</span>
                                    </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white bg-gradient-primary" to="/adminContactList">
                                    <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                        <i className="material-icons opacity-10">contacts</i>
                                    </div>
                                    <span className="nav-link-text ms-1">Contacts</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white " href="../pages/billing.html">
                                    <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                        <i className="material-icons opacity-10">receipt_long</i>
                                    </div>
                                    <span className="nav-link-text ms-1">Billing</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white " href="../pages/virtual-reality.html">
                                    <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                        <i className="material-icons opacity-10">view_in_ar</i>
                                    </div>
                                    <span className="nav-link-text ms-1">Virtual Reality</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white " href="../pages/rtl.html">
                                    <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                        <i className="material-icons opacity-10">format_textdirection_r_to_l</i>
                                    </div>
                                    <span className="nav-link-text ms-1">RTL</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white " href="../pages/notifications.html">
                                    <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                        <i className="material-icons opacity-10">notifications</i>
                                    </div>
                                    <span className="nav-link-text ms-1">Notifications</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="sidenav-footer position-absolute w-100 bottom-0 ">
                        <div class="mx-3">
                            <a class="btn btn-outline-primary mt-4 w-100" href="https://www.creative-tim.com/learning-lab/bootstrap/overview/material-dashboard?ref=sidebarfree" type="button">Documentation</a>
                            <a class="btn bg-gradient-primary w-100" href="https://www.creative-tim.com/product/material-dashboard-pro?ref=sidebarfree" type="button">Upgrade to pro</a>
                        </div>
                    </div>
            </aside>
        </div>
    );
}

export default SideBar;