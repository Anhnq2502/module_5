import {Component} from "react";
import "./create-customer.css";

export class CreateCustomer extends Component {
    render() {
        return (
            <div>
                <>
                    <meta charSet="utf-8" />
                    <meta
                        name="viewport"
                        content="width=device-width, user-scalable=no, initial-scale=1"
                    />
                    <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                    <title>Create customer</title>
                    <link
                        rel="stylesheet"
                        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
                        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
                        crossOrigin="anonymous"
                    />
                    <link rel="stylesheet" href="create-customer.css" />
                    <section className="vh-100 gradient-custom">
                        <div className="container py-5 h-100">
                            <div className="row justify-content-center align-items-center h-100">
                                <div className="col-12 col-lg-9 col-xl-7">
                                    <div
                                        className="card shadow-2-strong card-registration"
                                        style={{ borderRadius: 15 }}
                                    >
                                        <div className="card-body p-4 p-md-5">
                                            <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">New customer</h3>
                                            <form>
                                                <div className="row">
                                                    <div className="col-md-6 mb-4">
                                                        <div className="form-outline">
                                                            <input
                                                                type="text"
                                                                id="firstName"
                                                                required=""
                                                                className="form-control form-control-lg"
                                                            />
                                                            <label className="form-label" htmlFor="firstName">
                                                                Full name
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 mb-4">
                                                        <div className="form-outline">
                                                            <input
                                                                type="number"
                                                                id="lastName"
                                                                required=""
                                                                className="form-control form-control-lg"
                                                            />
                                                            <label className="form-label" htmlFor="lastName">
                                                                ID number
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6 mb-4 d-flex align-items-center">
                                                        <div className="form-outline datepicker w-100">
                                                            <input
                                                                type="date"
                                                                className="form-control form-control-lg"
                                                                id="birthdayDate"
                                                                required=""
                                                            />
                                                            <label htmlFor="birthdayDate" className="form-label">
                                                                Birthday
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 mb-4">
                                                        <h6 className="mb-2 pb-1">Gender: </h6>
                                                        <div className="form-check form-check-inline">
                                                            <input
                                                                className="form-check-input"
                                                                type="radio"
                                                                name="inlineRadioOptions"
                                                                id="femaleGender"
                                                                defaultValue="option1"
                                                                defaultChecked=""
                                                            />
                                                            <label
                                                                className="form-check-label"
                                                                htmlFor="femaleGender"
                                                            >
                                                                Female
                                                            </label>
                                                        </div>
                                                        <div className="form-check form-check-inline">
                                                            <input
                                                                className="form-check-input"
                                                                type="radio"
                                                                name="inlineRadioOptions"
                                                                id="maleGender"
                                                                defaultValue="option2"
                                                            />
                                                            <label className="form-check-label" htmlFor="maleGender">
                                                                Male
                                                            </label>
                                                        </div>
                                                        <div className="form-check form-check-inline">
                                                            <input
                                                                className="form-check-input"
                                                                type="radio"
                                                                name="inlineRadioOptions"
                                                                id="otherGender"
                                                                defaultValue="option3"
                                                            />
                                                            <label className="form-check-label" htmlFor="otherGender">
                                                                Other
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6 mb-4 pb-2">
                                                        <div className="form-outline">
                                                            <input
                                                                type="email"
                                                                id="emailAddress"
                                                                required=""
                                                                className="form-control form-control-lg"
                                                            />
                                                            <label className="form-label" htmlFor="emailAddress">
                                                                Email
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 mb-4 pb-2">
                                                        <div className="form-outline">
                                                            <input
                                                                type="tel"
                                                                id="phoneNumber"
                                                                required=""
                                                                className="form-control form-control-lg"
                                                            />
                                                            <label className="form-label" htmlFor="phoneNumber">
                                                                Phone Number
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6 mb-4 pb-2">
                                                        <div className="form-outline">
                                                            <input
                                                                type="text"
                                                                id="address"
                                                                required=""
                                                                className="form-control form-control-lg"
                                                            />
                                                            <label className="form-label" htmlFor="address">
                                                                Address
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 mb-4 pb-2">
                                                        <select className="select form-control-lg">
                                                            <option value={1}>Diamond</option>
                                                            <option value={2}>Platinum</option>
                                                            <option value={3}>Gold</option>
                                                            <option value={4}>Silver</option>
                                                            <option value={5}>Member</option>
                                                        </select>
                                                        <label className="form-label select-label">
                                                            Customer type
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="mt-4 pt-2">
                                                    <input
                                                        className="btn btn-primary btn-lg"
                                                        type="submit"
                                                        defaultValue="add"
                                                    />
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </>

            </div>
        );
    }
}
