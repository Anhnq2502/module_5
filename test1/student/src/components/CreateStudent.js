import {useNavigate} from "react-router-dom";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup"
import * as studentService from "../services/studentService";
import {ColorRing} from "react-loader-spinner";

export function CreateStudent() {
    const navigate = useNavigate()
    return (
        <Formik
            initialValues={{
                name: "",
                age: 0,
                class: "C1122G1"
            }}
            validationSchema={Yup.object({
                name: Yup.string()
                    .required("Nhập tên vào thần đằng"),
                age: Yup.number().integer("Chỉ được nhập số nguyên")
                    .required("Nhập số tuổi vào thần đằng")
                    .min(0, "Nhập tuổi phải lớn hơn 0 thần đằng"),
                class: Yup.string()
                    .required("Nhập lớp vào thần đằng")
            })}
            onSubmit={(values, {setSubmitting}) => {
                console.log(values)
                const creatStudent = async () => {
                    await studentService.save(values)
                    setSubmitting(false)
                    alert("Thêm mới thành công")
                    navigate('/')
                }
                creatStudent()
            }
            }>
            {
                ({isSubmitting}) => (
                    <div className="container">
                        <h1>Tạo mới học sinh</h1>
                        <Form>
                            <div className="mb-3">
                                <label htmlFor='name' className="form-label">Tên</label>
                                <Field type="text" className="form-control" id="name"
                                       name="name"/>
                                <ErrorMessage name="name" component="span"
                                              className="form-err"></ErrorMessage>
                            </div>
                            <div className="mb-3">
                                <label htmlFor='email' className="form-label">Tuổi</label>
                                <Field type="number" className="form-control" id="age"
                                       name="age"/>
                                <ErrorMessage name="age" component="span"
                                              className="form-err"></ErrorMessage>
                            </div>
                            <div className="mb-3">
                                <label htmlFor='class' className="form-label">Lớp</label>
                                <Field type="text" className="form-control" id="class"
                                       name="class"/>
                                <ErrorMessage name="class" component="span"
                                              className="form-err"></ErrorMessage>
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