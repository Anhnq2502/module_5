import React from "react";
import {useState} from "react";

export default function MyForm() {
    const MESSAGE_ERROR = {
        userName: "Name error",
        email: "Email error",
        phone: "Phone error",
    };
    const REGEX = {
        userName: /^[a-zA-Z]{2,}$/,
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        phone: /^[0-9\-\+]{9,15}$/
    };

    const [form, setForm] = useState({});

    function handleChange(event) {
        let error = "";
        setForm({
            ...form,
            [event.target.name]: {value: event.target.value, error: error}
        });
    }

    function handleSubmit() {
        const isFilled =
            form.userName &&
            form.userName.value &&
            form.email &&
            form.email.value &&
            form.phone &&
            form.phone.value;
        const isError =
            isFilled &&
            (form.userName.error ||
                form.email.error ||
                form.phone.error);
        alert(
            isFilled && !isError
                ? "Add contact successfully!!!"
                : "Please fill out all the fields!!!"
        );
    }

    return (
        <div>
            <h1>Contact form</h1>
            <form>
                <div
                    className={`custom-input ${form.userName &&
                    form.userName.error &&
                    "custom-input-error"}`}
                >
                    <label>Name </label>
                    <input
                        name="userName"
                        value={(form.userName && form.userName.value) || ""}
                        onChange={handleChange}
                    />
                    {form.userName && form.userName.error && (
                        <p className="error">{form.userName.error}</p>
                    )}
                </div>
                <div
                    className={`custom-input ${form.email &&
                    form.email.error &&
                    "custom-input-error"}`}
                >
                    <label>Email </label>
                    <input
                        name="email"
                        value={(form.email && form.email.value) || ""}
                        onChange={handleChange}
                    />
                    {form.email && form.email.error && (
                        <p className="error">{form.email.error}</p>
                    )}
                </div>
                <div
                    className={`custom-input ${form.phone &&
                    form.phone.error &&
                    "custom-input-error"}`}
                >
                    <label>Phone </label>
                    <input
                        type="number"
                        name="phone"
                        value={(form.phone && form.phone.value) || ""}
                        onChange={handleChange}
                    />
                    {form.phone && form.phone.error && (
                        <p className="error">{form.phone.error}</p>
                    )}
                </div>
                <div
                    className={`custom-input ${form.message &&
                    form.message.error &&
                    "custom-input-error"}`}
                >
                    <label>Message </label>
                    <input
                        type="text"
                        name="message"
                        value={(form.message && form.message.value) || ""}
                        onChange={handleChange}
                    />
                    {form.message && form.message.error && (
                        <p className="error">{form.message.error}</p>
                    )}
                </div>
                <button type="button" onClick={handleSubmit}>
                    Submit
                </button>
            </form>
        </div>
    );
}