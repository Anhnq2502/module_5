import {Component} from "react";

export class Header extends Component {
    render() {
        return (
            <div>
                <nav
                    className="navbar navbar-expand-lg fixed-top py-0"
                    style={{ backgroundColor: "rgb(45, 111, 99)" }}
                >
                    <div className="container-fluid" style={{ paddingLeft: "4%" }}>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item" style={{ height: 50 }}>
                                    <a
                                        className="nav-link active furama py-0 d-flex justify-content-center align-items-center px-3"
                                        aria-current="page"

                                    >
                                        Furama
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link furama py-0 d-flex justify-content-center align-items-center px-3"
                                    >
                                        Facilities
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link furama py-0 d-flex justify-content-center align-items-center px-3"

                                    >
                                        Cuisines
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link furama py-0 d-flex justify-content-center align-items-center px-3"

                                    >
                                        Entertainment
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link furama py-0 d-flex justify-content-center align-items-center px-3"

                                    >
                                        Offer
                                    </a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a
                                        className="nav-link dropdown-toggle furama py-0 d-flex justify-content-center align-items-center px-3"

                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        Manager
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <a className="dropdown-item" >
                                                Employee
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" >
                                                Customer
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

            </div>
        );
    }
}
