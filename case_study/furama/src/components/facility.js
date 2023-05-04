import {Component} from "react";

export class Facility extends Component {
    render() {
        return (
            <div>
                <>
                    <meta charSet="UTF-8" />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <link
                        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
                        rel="stylesheet"
                        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
                        crossOrigin="anonymous"
                    />
                    <link rel="stylesheet" href="/case_study/prototype/style.css" />
                    <link
                        rel="stylesheet"
                        href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css"
                    />
                    <link
                        rel="stylesheet"
                        href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"
                    />
                    <title>Facility</title>
                    {/* header */}
                    <nav
                        className="navbar navbar-expand-lg fixed-top py-0"
                        style={{ backgroundColor: "rgb(45, 111, 99)" }}
                    >
                        <div className="container-fluid" style={{ paddingLeft: "4%" }}>
                            <a
                                style={{ width: "5%", height: "5%" }}
                                className="navbar-brand py-0"
                                href="/case_study/case_study/prototype/index.html"
                            >
                                <img
                                    width="100%"
                                    height="5%"
                                    src="/case_study/prototype/img/FURAMA (1).png"
                                    alt=""
                                />
                            </a>
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
                                            href="/case_study/case_study/prototype/index.html"
                                        >
                                            Furama
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link furama py-0 d-flex justify-content-center align-items-center px-3"
                                            href="#"
                                        >
                                            Facilities
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link furama py-0 d-flex justify-content-center align-items-center px-3"
                                            href="#"
                                        >
                                            Cuisines
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link furama py-0 d-flex justify-content-center align-items-center px-3"
                                            href="#"
                                        >
                                            Entertainment
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link furama py-0 d-flex justify-content-center align-items-center px-3"
                                            href="#"
                                        >
                                            Offer
                                        </a>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a
                                            className="nav-link dropdown-toggle furama py-0 d-flex justify-content-center align-items-center px-3"
                                            href="#"
                                            role="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            Manager
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <a className="dropdown-item" href="#">
                                                    Employee
                                                </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="#">
                                                    Customer
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    {/* container */}
                    {/* banner */}
                    <div className="container-fluid px-0 mt-5 position-relative">
                        <img
                            src="https://furamavietnam.com/wp-content/uploads/2018/08/banner01.jpg?id=1433"
                            alt=""
                        />
                        <div className="position-absolute facility-title">FACILITIES</div>
                    </div>
                    <div>
                        {/* facility 1 */}
                        <div
                            className="row mx-0 container-fluid"
                            style={{ height: 500, fontFamily: "sans-serif" }}
                        >
                            <div className="col-4 d-flex justify-content-center align-items-center">
                                <div
                                    className="card"
                                    style={{ width: "100%", boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)" }}
                                >
                                    <img
                                        src="https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Suite-Feature-370x239.jpg"
                                        className="card-img-top"
                                        alt="..."
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title" style={{ fontWeight: "bold" }}>
                                            OCEAN SUITE
                                        </h5>
                                        <p className="card-text">
                                            Room size: 85.8 m<sup>2</sup>
                                        </p>
                                        <div className="d-flex justify-content-center">
                                            <a
                                                href="#"
                                                className="btn btn-primary mt-2 me-2"
                                                style={{ width: "20%" }}
                                            >
                                                Edit
                                            </a>
                                            <a
                                                href="#"
                                                className="btn btn-danger mt-2"
                                                style={{ width: "20%" }}
                                            >
                                                Delete
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4 d-flex justify-content-center align-items-center">
                                <div
                                    className="card"
                                    style={{ width: "100%", boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)" }}
                                >
                                    <img
                                        src="https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Studio-Suite-F-370x239.jpg"
                                        className="card-img-top"
                                        alt="..."
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title" style={{ fontWeight: "bold" }}>
                                            OCEAN STUDIO SUITE
                                        </h5>
                                        <p className="card-text">
                                            Room size: 40.1 m<sup>2</sup>
                                        </p>
                                        <div className="d-flex justify-content-center">
                                            <a
                                                href="#"
                                                className="btn btn-primary mt-2 me-2"
                                                style={{ width: "20%" }}
                                            >
                                                Edit
                                            </a>
                                            <a
                                                href="#"
                                                className="btn btn-danger mt-2"
                                                style={{ width: "20%" }}
                                            >
                                                Delete
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4 d-flex justify-content-center align-items-center">
                                <div
                                    className="card"
                                    style={{ width: "100%", boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)" }}
                                >
                                    <img
                                        src="https://furamavietnam.com/wp-content/uploads/2018/03/Furama_Ocean_Deluxe-2-450x291.jpg"
                                        className="card-img-top"
                                        alt="..."
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title" style={{ fontWeight: "bold" }}>
                                            OCEAN DELUXE
                                        </h5>
                                        <p className="card-text">
                                            Room size: 43.7 m<sup>2</sup>
                                        </p>
                                        <div className="d-flex justify-content-center">
                                            <a
                                                href="#"
                                                className="btn btn-primary mt-2 me-2"
                                                style={{ width: "20%" }}
                                            >
                                                Edit
                                            </a>
                                            <a
                                                href="#"
                                                className="btn btn-danger mt-2"
                                                style={{ width: "20%" }}
                                            >
                                                Delete
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* facility 2 */}
                        <div
                            className="row mx-0 container-fluid"
                            style={{ height: 500, fontFamily: "sans-serif" }}
                        >
                            <div className="col-4 d-flex justify-content-center align-items-center">
                                <div
                                    className="card"
                                    style={{ width: "100%", boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)" }}
                                >
                                    <img
                                        src="https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Lagoon-Superior-twin-bed-F-370x239.jpg"
                                        className="card-img-top"
                                        alt="..."
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title" style={{ fontWeight: "bold" }}>
                                            LAGOON SUPERIOR
                                        </h5>
                                        <p className="card-text">
                                            Room size: 40.1 m<sup>2</sup>
                                        </p>
                                        <div className="d-flex justify-content-center">
                                            <a
                                                href="#"
                                                className="btn btn-primary mt-2 me-2"
                                                style={{ width: "20%" }}
                                            >
                                                Edit
                                            </a>
                                            <a
                                                href="#"
                                                className="btn btn-danger mt-2"
                                                style={{ width: "20%" }}
                                            >
                                                Delete
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4 d-flex justify-content-center align-items-center">
                                <div
                                    className="card"
                                    style={{ width: "100%", boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)" }}
                                >
                                    <img
                                        src="https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Garden-Superior-TwinBed-1-F-370x239.jpg"
                                        className="card-img-top"
                                        alt="..."
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title" style={{ fontWeight: "bold" }}>
                                            GARDEN SUPERIOR
                                        </h5>
                                        <p className="card-text">
                                            Room size: 40.1 m<sup>2</sup>
                                        </p>
                                        <div className="d-flex justify-content-center">
                                            <a
                                                href="#"
                                                className="btn btn-primary mt-2 me-2"
                                                style={{ width: "20%" }}
                                            >
                                                Edit
                                            </a>
                                            <a
                                                href="#"
                                                className="btn btn-danger mt-2"
                                                style={{ width: "20%" }}
                                            >
                                                Delete
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4 d-flex justify-content-center align-items-center">
                                <div
                                    className="card"
                                    style={{ width: "100%", boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)" }}
                                >
                                    <img
                                        src="https://furamavietnam.com/wp-content/uploads/2018/03/Furama_Garden-Deluxe-5-450x291.jpg"
                                        className="card-img-top"
                                        alt="..."
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title" style={{ fontWeight: "bold" }}>
                                            GARDEN DELUXE
                                        </h5>
                                        <p className="card-text">
                                            Room size: 43.7 m<sup>2</sup>
                                        </p>
                                        <div className="d-flex justify-content-center">
                                            <a
                                                href="#"
                                                className="btn btn-primary mt-2 me-2"
                                                style={{ width: "20%" }}
                                            >
                                                Edit
                                            </a>
                                            <a
                                                href="#"
                                                className="btn btn-danger mt-2"
                                                style={{ width: "20%" }}
                                            >
                                                Delete
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* facility 3 */}
                        <div
                            className="row mx-0 container-fluid"
                            style={{ height: 500, fontFamily: "sans-serif" }}
                        >
                            <div className="col-4 d-flex justify-content-center align-items-center">
                                <div
                                    className="card"
                                    style={{ width: "100%", boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)" }}
                                >
                                    <img
                                        src="https://furamavietnam.com/wp-content/uploads/2018/03/Presidential-Suite-F-370x239.jpg"
                                        className="card-img-top"
                                        alt="..."
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title" style={{ fontWeight: "bold" }}>
                                            PRESIDENTIAL SUITE
                                        </h5>
                                        <p className="card-text">
                                            Room size: 130 m<sup>2</sup>
                                        </p>
                                        <div className="d-flex justify-content-center">
                                            <a
                                                href="#"
                                                className="btn btn-primary mt-2 me-2"
                                                style={{ width: "20%" }}
                                            >
                                                Edit
                                            </a>
                                            <a
                                                href="#"
                                                className="btn btn-danger mt-2"
                                                style={{ width: "20%" }}
                                            >
                                                Delete
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4 d-flex justify-content-center align-items-center">
                                <div
                                    className="card"
                                    style={{ width: "100%", boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)" }}
                                >
                                    <img
                                        src="https://furamavietnam.com/wp-content/uploads/2018/08/Vietnam_Danang_Furama_Villas_Beach_Pool_Villas-_Exterior-1-F-370x239.jpg"
                                        className="card-img-top"
                                        alt="..."
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title" style={{ fontWeight: "bold" }}>
                                            BEACH FRONT VILLAS
                                        </h5>
                                        <p className="card-text">
                                            Room size: 900 m<sup>2</sup>
                                        </p>
                                        <div className="d-flex justify-content-center">
                                            <a
                                                href="#"
                                                className="btn btn-primary mt-2 me-2"
                                                style={{ width: "20%" }}
                                            >
                                                Edit
                                            </a>
                                            <a
                                                href="#"
                                                className="btn btn-danger mt-2"
                                                style={{ width: "20%" }}
                                            >
                                                Delete
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4 d-flex justify-content-center align-items-center">
                                <div
                                    className="card"
                                    style={{ width: "100%", boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)" }}
                                >
                                    <img
                                        src="https://furamavietnam.com/wp-content/uploads/2018/08/Vietnam_Danang_Furama_Villas_Pool_Villas-F-370x239.jpg"
                                        className="card-img-top"
                                        alt="..."
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title" style={{ fontWeight: "bold" }}>
                                            POOL VILLAS
                                        </h5>
                                        <p className="card-text">
                                            Room size: 320 m<sup>2</sup>
                                        </p>
                                        <div className="d-flex justify-content-center">
                                            <a
                                                href="#"
                                                className="btn btn-primary mt-2 me-2"
                                                style={{ width: "20%" }}
                                            >
                                                Edit
                                            </a>
                                            <a
                                                href="#"
                                                className="btn btn-danger mt-2"
                                                style={{ width: "20%" }}
                                            >
                                                Delete
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* phân trang */}
                        <nav
                            className="d-flex justify-content-center"
                            aria-label="Page navigation example"
                        >
                            <ul className="pagination">
                                <li className="page-item">
                                    <a className="page-link" href="#">
                                        Previous
                                    </a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="#">
                                        1
                                    </a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="#">
                                        2
                                    </a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="#">
                                        3
                                    </a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="#">
                                        Next
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="row px-0 pt-5" style={{ height: 250 }}>
                        <div className="col-12">
                            <h2
                                className="d-flex justify-content-center"
                                style={{ color: "#cbbe73", fontSize: 27 }}
                            >
                                SERVICES &amp; FACILITIES
                            </h2>
                            <div className="d-flex justify-content-center">
                                <p className="text-center pt-3" style={{ width: "50%" }}>
                                    Whether you are looking for a short weekend break or a longer holiday,
                                    we offer a range of packages that will cater for all.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* footer */}
                    <footer className="relative pt-8 pb-6" style={{ backgroundColor: "#addccf" }}>
                        <div className="container mx-auto px-4">
                            <div className="flex flex-wrap text-left lg:text-left">
                                <div className="w-full lg:w-6/12 px-4">
                                    <h4 className="text-3xl fonat-semibold text-blueGray-700">
                                        How to Get to Us
                                    </h4>
                                    <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
                                        Find us on any of these platforms, we respond 1-2 business days.
                                    </h5>
                                    <div className="mt-6 lg:mb-0 mb-6">
                                        <button
                                            className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                                            type="button"
                                        >
                                            <i className="fab fa-twitter" />
                                        </button>
                                        <button
                                            className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                                            type="button"
                                        >
                                            <i className="fab fa-facebook-square" />
                                        </button>
                                        <button
                                            className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                                            type="button"
                                        >
                                            <i className="fab fa-dribbble" />
                                        </button>
                                        <button
                                            className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                                            type="button"
                                        >
                                            <i className="fab fa-github" />
                                        </button>
                                    </div>
                                </div>
                                <div className="w-full lg:w-6/12 px-4">
                                    <div className="flex flex-wrap items-top mb-6">
                                        <div className="w-full lg:w-4/12 px-4 ml-auto">
              <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                Useful Links
              </span>
                                            <ul className="list-unstyled">
                                                <li>
                                                    <a
                                                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                                        href="https://www.creative-tim.com/presentation?ref=njs-profile"
                                                    >
                                                        About Us
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                                        href="https://blog.creative-tim.com?ref=njs-profile"
                                                    >
                                                        Blog
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                                        href="https://www.github.com/creativetimofficial?ref=njs-profile"
                                                    >
                                                        Github
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                                        href="https://www.creative-tim.com/bootstrap-themes/free?ref=njs-profile"
                                                    >
                                                        Free Products
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="w-full lg:w-4/12 px-4">
              <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                Other Resources
              </span>
                                            <ul className="list-unstyled">
                                                <li>
                                                    <a
                                                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                                        href="https://github.com/creativetimofficial/notus-js/blob/main/LICENSE.md?ref=njs-profile"
                                                    >
                                                        MIT License
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                                        href="https://creative-tim.com/terms?ref=njs-profile"
                                                    >
                                                        Terms &amp; Conditions
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                                        href="https://creative-tim.com/privacy?ref=njs-profile"
                                                    >
                                                        Privacy Policy
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                                        href="https://creative-tim.com/contact-us?ref=njs-profile"
                                                    >
                                                        Contact Us
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr className="my-6 border-blueGray-300" />
                            <div className="flex flex-wrap items-center md:justify-between justify-center">
                                <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                                    <div className="text-sm text-blueGray-500 font-semibold py-1">
                                        Copyright © <span id="get-current-year">2023</span>
                                        <a
                                            href="https://www.creative-tim.com/product/notus-js"
                                            className="text-blueGray-500 hover:text-gray-800"
                                            target="_blank"
                                        >
                                            {" "}
                                            ReactJS by
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </footer>
                </>

            </div>
        );
    }
}
