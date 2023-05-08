import {Component} from "react";
import {Form, Formik} from "formik";
import * as Yup from 'yup';
import {toast} from "react-toastify";


export class CreateContract extends Component {
    render() {
        return (
            <div>
                <>
                    <meta charSet="UTF-8"/>
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                    <link
                        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
                        rel="stylesheet"
                        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
                        crossOrigin="anonymous"
                    />
                    <link rel="stylesheet" href="/case_study/prototype/style.css"/>
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
                        style={{backgroundColor: "rgb(45, 111, 99)"}}
                    >
                        <div className="container-fluid" style={{paddingLeft: "4%"}}>
                            <button
                                className="navbar-toggler"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span className="navbar-toggler-icon"/>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item" style={{height: 50}}>
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
                        <div className="position-absolute facility-title">CONTRACT</div>
                    </div>
                    {/* contract */}
                    <Formik
                        initialValues={{
                            firstName: '',
                            lastName: '',
                            email: '',
                            countryRegion: '',
                            address: '',
                            city: '',
                            postalCode: '',
                            countryCode: '',
                            phoneNumber: ''
                        }}
                        validationSchema={Yup.object({
                                firstName: Yup.string()
                                    .required("Nhập họ"),
                                lastName: Yup.string()
                                    .required("Nhập tên"),
                                email: Yup.string
                                    .required("Nhập email")
                                    .matches(/^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/, "Cần nhập đúng định dạng email"),
                                countryRegion: Yup.string()
                                    .required("Nhập khu vực"),
                                address: Yup.string()
                                    .required("Nhập địa chỉ"),
                                city: Yup.string()
                                    .required("Nhập thành phố"),
                                postalCode: Yup.number()
                                    .required("Nhập mã bưu điện")
                                    .min(0),
                                countryCode: Yup.number()
                                    .required("Nhập mã quốc gia")
                                    .min(0),
                                phoneNumber: Yup.string()
                                    .required("Nhập số điện thoại")
                                    .matches(/^[0-9\-\+]{9,15}$/, "Bạn cần nhập đúng số điện thoại"),
                            }
                        )}
                        onSubmit={(values, {setSubmitting}) => {
                            setTimeout(() => {
                                setSubmitting(false)
                                toast(`Hợp đồng ${values.lastName} tạo thành công`)

                            }, 1000)
                        }
                        }
                    >
                        <Form>
                        <div className="container" style={{marginTop: 80}}>
                            <h1 className="reservation mb-5">Complete your reservation</h1>
                            <div className="row" style={{height: 1350}}>
                                <div className="col-8">
                                    <h2 className="mb-3" style={{fontWeight: 500, fontSize: 20}}>
                                        You selected an DMT One Reward member rate.
                                    </h2>
                                    <div className="row mb-3">
                                        <div className="col-6">
                                            <label htmlFor="firstName">First Name</label>
                                            <input
                                                style={{borderRadius: 5}}
                                                id="firstName"
                                                type="text"
                                                className="form-control"
                                                aria-label="Username"
                                                aria-describedby="addon-wrapping"
                                            />
                                        </div>
                                        <div className="col-6">
                                            <label htmlFor="lastName">Last Name</label>
                                            <input
                                                style={{borderRadius: 5}}
                                                id="lastName"
                                                type="text"
                                                className="form-control"
                                                aria-label="Username"
                                                aria-describedby="addon-wrapping"
                                            />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-12">
                                            <label htmlFor="email">Email Address</label>
                                            <input
                                                style={{borderRadius: 5}}
                                                id="email"
                                                type="email"
                                                className="form-control"
                                                aria-label="Username"
                                                aria-describedby="addon-wrapping"
                                            />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-12">
                                            <label htmlFor="countryRegion">Country/Region</label>
                                            <input
                                                style={{borderRadius: 5}}
                                                id="countryRegion"
                                                type="text"
                                                className="form-control"
                                                aria-label="Username"
                                                aria-describedby="addon-wrapping"
                                            />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-12">
                                            <label htmlFor="address">Address</label>
                                            <input
                                                style={{borderRadius: 5}}
                                                id="address"
                                                type="text"
                                                className="form-control"
                                                aria-label="Username"
                                                aria-describedby="addon-wrapping"
                                            />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-12">
                                            <label htmlFor="city">City/Town</label>
                                            <input
                                                style={{borderRadius: 5}}
                                                id="city"
                                                type="text"
                                                className="form-control"
                                                aria-label="Username"
                                                aria-describedby="addon-wrapping"
                                            />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-12">
                                            <label htmlFor="postalCode">Postal Code</label>
                                            <input
                                                style={{borderRadius: 5}}
                                                id="postalCode"
                                                type="text"
                                                className="form-control"
                                                aria-label="Username"
                                                aria-describedby="addon-wrapping"
                                            />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-6">
                                            <label htmlFor="countryCode">Country/Region Code</label>
                                            <input
                                                style={{borderRadius: 5}}
                                                id="countryCode"
                                                type="text"
                                                className="form-control"
                                                aria-label="Username"
                                                aria-describedby="addon-wrapping"
                                            />
                                        </div>
                                        <div className="col-6">
                                            <label htmlFor="phoneNumber">Phone Number</label>
                                            <input
                                                style={{borderRadius: 5}}
                                                id="phoneNumber"
                                                type="text"
                                                className="form-control"
                                                aria-label="Username"
                                                aria-describedby="addon-wrapping"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-5">
                                    <h1
                                        className="my-3 py-3"
                                        style={{fontWeight: 500, fontSize: 30, fontFamily: "sans-serif"}}
                                    >
                                        Terms and Conditions
                                    </h1>
                                    <p className="mb-3">
                                        By booking, I certify that I have read and accept the{" "}
                                        <span style={{color: "#73a093", textDecoration: "underline"}}>
            Terms of Use
          </span>{" "}
                                        and{" "}
                                        <span style={{color: "#73a093", textDecoration: "underline"}}>
            Privacy Statement
          </span>{" "}
                                        and I have read and understand the Rate Description and Rate Rules for
                                        my reservation.
                                    </p>
                                    <p className="mb-3">
                                        I am at least 18 years of age and at least one guest in my party will
                                        meet the minimum check-in age requirement for the hotel upon arrival.
                                    </p>
                                    <p className="mb-3">*Minimum Check-In Age: 18</p>
                                    <p className="mb-3">
                                        By joining IHG One Rewards, I certify that I have read and accept the{" "}
                                        <span style={{color: "#73a093", textDecoration: "underline"}}>
            DMT One Rewards Membership Terms and Conditions
          </span>
                                        ,{" "}
                                        <span style={{color: "#73a093", textDecoration: "underline"}}>
            Privacy Statement
          </span>{" "}
                                        and{" "}
                                        <span style={{color: "#73a093", textDecoration: "underline"}}>
            VietNam Notice of Financial Incentive
          </span>
                                        .
                                    </p>
                                </div>
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                    style={{
                                        width: "30%",
                                        height: "5%",
                                        backgroundColor: "#4ea58e",
                                        border: "none"
                                    }}
                                >
                                    BOOK RESERVATION
                                </button>
                            </div>
                            <div className="col-4">
                                <div className="mb-3">
                                    <img
                                        src="https://cdn1.ivivu.com/iVivu/2019/11/28/13/two-bedroom-pool-villa-cr-800x450.jpg"
                                        alt=""
                                    />
                                    <h2 className="mt-3" style={{fontWeight: 500, fontSize: 20}}>
                                        Furama Resort Da Nang
                                    </h2>
                                    <p className="mt-2" style={{fontFamily: "sans-serif"}}>
                                        280 Tran Hung Dao, An Hai Tay, Son Tra Peninsula, Da Nang
                                    </p>
                                </div>
                                <hr/>
                                <div className="mb-3">
                                    <div className="row mt-4" style={{fontWeight: 500, fontSize: 18}}>
                                        <div className="col-6">
                                            <h1>Total Price</h1>
                                        </div>
                                        <div className="col-6">
                                            <h1 style={{textAlign: "right"}}>300$</h1>
                                        </div>
                                    </div>
                                    <div className="row mt-4" style={{fontSize: 15}}>
                                        <div className="col-6">
                                            <h1 style={{fontWeight: 500}}>Dates</h1>
                                        </div>
                                        <div className="col-6">
                                            <h1 style={{textAlign: "right"}}>May 10-11,2023</h1>
                                        </div>
                                    </div>
                                </div>
                                <hr style={{border: ".5px solid rgb(70, 69, 69)"}}/>
                                <div className="mb-3">
                                    <div className="row mt-4" style={{fontSize: 15}}>
                                        <div className="col-6">
                                            <h1 style={{fontWeight: 500}}>Reservation</h1>
                                        </div>
                                        <div className="col-6">
                                            <h1 style={{textAlign: "right"}}>1 Room, 2 Guests</h1>
                                        </div>
                                    </div>
                                </div>
                                <hr style={{border: ".5px solid rgb(70, 69, 69)"}}/>
                                <div className="mb-3">
                                    <div className="row mt-4" style={{fontSize: 15}}>
                                        <div className="col-6">
                                            <h1 style={{fontWeight: 500}}>Room Type</h1>
                                        </div>
                                        <div className="col-6">
                                            <h1 style={{textAlign: "right"}}>1 King Resort Classic Ocean</h1>
                                        </div>
                                    </div>
                                </div>
                                <hr style={{border: "2px solid black"}}/>
                                <div className="mb-3">
                                    <div className="row mt-4" style={{fontSize: 15}}>
                                        <div className="col-6">
                                            <h1 style={{fontWeight: 500}}>1 night stay</h1>
                                        </div>
                                        <div className="col-6">
                                            <h1 style={{textAlign: "right"}}>300$</h1>
                                        </div>
                                    </div>
                                </div>
                                <hr style={{border: ".5px solid rgb(70, 69, 69)"}}/>
                                <div className="mb-3">
                                    <div className="row mt-4" style={{fontSize: 15}}>
                                        <div className="col-6">
                                            <h1 style={{fontWeight: 500}}>Average Nightly Rate</h1>
                                        </div>
                                        <div className="col-6">
                                            <h1 style={{textAlign: "right"}}>300$</h1>
                                        </div>
                                    </div>
                                </div>
                                <hr style={{border: ".5px solid rgb(70, 69, 69)"}}/>
                                <div className="mb-3">
                                    <div className="row mt-4" style={{fontSize: 15}}>
                                        <div className="col-6">
                                            <h1 style={{fontWeight: 500}}>Taxes</h1>
                                        </div>
                                        <div className="col-6">
                                            <h1 style={{textAlign: "right"}}>30$</h1>
                                        </div>
                                    </div>
                                </div>
                                <hr style={{border: ".5px solid rgb(70, 69, 69)"}}/>
                                <div className="mb-3">
                                    <div className="row mt-4" style={{fontSize: 15}}>
                                        <div className="col-6">
                                            <h1 style={{fontWeight: 600, fontSize: 20}}>Total Price</h1>
                                        </div>
                                        <div className="col-6">
                                            <h1 style={{textAlign: "right"}}>330$</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </Form>
                    </Formik>
                        {/* footer */}
                        <footer className="relative pt-8 pb-6" style={{backgroundColor: "#addccf"}}>
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
                                                <i className="fab fa-twitter"/>
                                            </button>
                                            <button
                                                className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                                                type="button"
                                            >
                                                <i className="fab fa-facebook-square"/>
                                            </button>
                                            <button
                                                className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                                                type="button"
                                            >
                                                <i className="fab fa-dribbble"/>
                                            </button>
                                            <button
                                                className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                                                type="button"
                                            >
                                                <i className="fab fa-github"/>
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
                                <hr className="my-6 border-blueGray-300"/>
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
