import React, {useState} from "react";
import {Form, Formik} from "formik";
import "./MedicalForm.css";

export function MedicalForm() {
    const REGEX = {
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
    };
    const [form, setForm] = useState({});

    function handleChange(event) {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        });
    }

    function handleValidate() {
        const errors = {};
        if (!form.name) {
            errors.name = "Required";
        }
        if (!form.email) {
            errors.email = "Required";
        } else if (!REGEX.email.test(form.email)) {
            errors.email = "Invalid email address";
        }
        if (!form.idCard) {
            errors.idCard = "Required";
        }
        if (!form.dayOfBirth) {
            errors.dayOfBirth = "Required";
        } else if (form.dayOfBirth < 1900) {
            errors.dayOfBirth = "Năm sinh phải lớn hơn 1900";
        }
        if (!form.nationality) {
            errors.nationality = "Required";
        }
        if (!form.province) {
            errors.province = "Required";
        }
        if (!form.district) {
            errors.district = "Required";
        }
        if (!form.ward) {
            errors.ward = "Required"
        }
        if (!form.address) {
            errors.address = "Required"
        }
        if (!form.phone) {
            errors.phone = "Required"
        }
        return errors;
    }

    function handleSubmit() {
        alert("Khai báo thành công");
    }

    return (
        <div>
            <h1 style={{ textAlign: "center" }}>Tờ khai y tế</h1>
            <Formik
                initialValues={form}
                validate={handleValidate}
                onSubmit={handleSubmit}
            >
                {({errors, handleSubmit}) => (
                    <Form onSubmit={handleSubmit}>
                        <div className={`custom-input ${
                            errors.name ? "custom-input-error" : ""
                        }`}
                        >
                            <label>Họ và tên</label>
                            <input
                                type="text"
                                name="name"
                                value={form.name || ""}
                                onChange={handleChange}
                            />
                            <p className="error">{errors.name}</p>
                        </div>

                        <div className={`custom-input ${
                            errors.name ? "custom-input-error" : ""
                        }`}
                        >
                            <label>Số hộ chiếu / CMND</label>
                            <input
                                type="number"
                                name="idCard"
                                value={form.idCard || ""}
                                onChange={handleChange}
                            />
                            <p className="error">{errors.idCard}</p>
                        </div>

                        <div className={`custom-input ${
                            errors.dayOfBirth ? "custom-input-error" : ""
                        }`}
                        >
                            <label>Năm sinh</label>
                            <input
                                type="number"
                                name="dayOfBirth"
                                value={form.dayOfBirth || ""}
                                onChange={handleChange}
                            />
                            <p className="error">{errors.dayOfBirth}</p>
                        </div>

                        <div className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="inlineRadioOptions"
                                id="inlineRadio1"
                                defaultValue="option1"
                            />
                            <label className="form-check-label" htmlFor="inlineRadio1">
                                Nam
                            </label>
                            <input
                                className="form-check-input"
                                type="radio"
                                name="inlineRadioOptions"
                                id="inlineRadio2"
                                defaultValue="option2"
                            />
                            <label className="form-check-label" htmlFor="inlineRadio2">
                                Nữ
                            </label>
                        </div>

                        <div className={`custom-input ${
                            errors.nationality ? "custom-input-error" : ""
                        }`}
                        >
                            <label>Quốc tịch</label>
                            <input
                                type="text"
                                name="nationality"
                                value={form.nationality || ""}
                                onChange={handleChange}
                            />
                            <p className="error">{errors.nationality}</p>
                        </div>

                        <div className={`custom-input ${
                            errors.nationality ? "custom-input-error" : ""
                        }`}
                        >
                            <label>Công ty làm việc</label>
                            <input
                                type="text"
                                name="nationality"
                                value={form.nationality || ""}
                                onChange={handleChange}
                            />
                            <p className="error">{errors.nationality}</p>
                        </div>

                        <div className={`custom-input ${
                            errors.nationality ? "custom-input-error" : ""
                        }`}
                        >
                            <label>Bộ phận làm việc</label>
                            <input
                                type="text"
                                name="nationality"
                                value={form.nationality || ""}
                                onChange={handleChange}
                            />
                            <p className="error">{errors.nationality}</p>
                        </div>

                        <h1>Địa chỉ liên lạc tại Việt Nam</h1>

                        <div className={`custom-input ${
                            errors.province ? "custom-input-error" : ""
                        }`}
                        >
                            <label>Tỉnh thành</label>
                            <input
                                type="text"
                                name="province"
                                value={form.province || ""}
                                onChange={handleChange}
                            />
                            <p className="error">{errors.province}</p>
                        </div>

                        <div className={`custom-input ${
                            errors.district ? "custom-input-error" : ""
                        }`}
                        >
                            <label>Quận / huyện</label>
                            <input
                                type="text"
                                name="district"
                                value={form.district || ""}
                                onChange={handleChange}
                            />
                            <p className="error">{errors.district}</p>
                        </div>

                        <div className={`custom-input ${
                            errors.ward ? "custom-input-error" : ""
                        }`}
                        >
                            <label>Phường / xã</label>
                            <input
                                type="text"
                                name="ward"
                                value={form.ward || ""}
                                onChange={handleChange}
                            />
                            <p className="error">{errors.ward}</p>
                        </div>

                        <div className={`custom-input ${
                            errors.address ? "custom-input-error" : ""
                        }`}
                        >
                            <label>Số nhà</label>
                            <input
                                type="text"
                                name="address"
                                value={form.address || ""}
                                onChange={handleChange}
                            />
                            <p className="error">{errors.address}</p>
                        </div>

                        <div className={`custom-input ${
                            errors.phone ? "custom-input-error" : ""
                        }`}
                        >
                            <label>Điện thoại</label>
                            <input
                                type="number"
                                name="phone"
                                value={form.phone || ""}
                                onChange={handleChange}
                            />
                            <p className="error">{errors.phone}</p>
                        </div>

                        <div
                            className={`custom-input ${
                                errors.email ? "custom-input-error" : ""
                            }`}
                        >
                            <label>Email</label>
                            <input
                                type="email"
                                name="email"
                                value={form.email || ""}
                                onChange={handleChange}
                            />
                            <p className="error">{errors.email}</p>
                        </div>

                        <button type={"submit"}>Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}