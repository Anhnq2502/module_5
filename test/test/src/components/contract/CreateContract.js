import {useNavigate} from "react-router-dom";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import * as contractService from "../../services/contract/contractService";
import {ColorRing} from "react-loader-spinner";
import {useEffect, useState} from "react";
import * as typeService from "../../services/type/typeService";


export function CreateContract() {
    const navigate = useNavigate()
    const [listTypes, setListTypes] = useState([])
    useEffect(() => {
        const listType = async () => {
            const result = await typeService.findAllType()
            setListTypes(result)
            console.log(result)
        }
        listType()
    },[])
    useEffect(() => {
        document.title = "Create"
    }, []);
    return (
        <Formik
            initialValues={{
                name: "",
                email: "",
                phone: "",
                typeId: 1
            }}
            validationSchema={Yup.object({
                name: Yup.string()
                    .required("Nhập họ tên"),
                email: Yup.string()
                    .required("Nhập email")
                    .matches(/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/),
                phone: Yup.string()
                    .required("Nhập số điện thoại")
            })}
            onSubmit={(values, {setSubmitting}) => {
                const create = async () =>{
                    values.typeId = parseInt(values.typeId)
                    console.log(values)
                    await contractService.save(values)
                    setSubmitting(false)
                    alert("Thêm mới thành công")
                    navigate('/')
                }
                create()
            }
            }>
            {
                ({isSubmitting}) => (
                    <div className="container">
                        <h1>Create contract</h1>
                        <Form>
                            <div className="mb-3">
                                <label htmlFor='name' className="form-label">Name</label>
                                <Field type="text" className="form-control" id="name"
                                       name="name"/>
                                <ErrorMessage name="name" component="span"
                                              className="form-err"></ErrorMessage>
                            </div>
                            <div className="mb-3">
                                <label htmlFor='email' className="form-label">Email</label>
                                <Field type="email" className="form-control" id="email"
                                       name="email"/>
                                <ErrorMessage name="email" component="span"
                                              className="form-err"></ErrorMessage>
                            </div>
                            <div className="mb-3">
                                <label htmlFor='phone' className="form-label">Phone</label>
                                <Field type="text" className="form-control" id="phone"
                                       name="phone"/>
                                <ErrorMessage name="phone" component="span"
                                              className="form-err"></ErrorMessage>
                            </div>
                            <div className="mb-3">
                                <label htmlFor='type' className="form-check">Type</label>
                                <Field as='select' name="typeId">
                                    {listTypes.map((listType,index) => (
                                        <option value={listType.id}>{listType.typeName}</option>
                                    ))}
                                </Field>
                            </div>
                            {
                                isSubmitting ?
                                    <ColorRing
                                        visible={true}
                                        height="80"
                                        width="80"
                                        ariaLabel="blocks-loading"
                                        wrapperStyle={{}}
                                        wrapperClass="blocks-wrapper"
                                        colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                                    />
                                    :
                                    <button type="submit" className="btn btn-primary">Submit</button>
                            }
                        </Form>
                    </div>
                )
            }

        </Formik>
    )
}