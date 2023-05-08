import {useNavigate} from "react-router-dom";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from 'yup';
import * as bookService from "../services/bookService";
import {toast} from "react-toastify";
import {ColorRing} from "react-loader-spinner";

export function BookCreate() {
    const navigate = useNavigate();
    return (
        <>
            <Formik
                initialValues={{
                    tittle: '',
                    quantity: ''
                }}
                validationSchema={Yup.object({
                    title: Yup.string()
                        .required("Nhập tiêu đề"),
                    quantity: Yup.number()
                        .required("Nhập số lượng")
                        .min(0)
                })}
                onSubmit={(values, {setSubmitting}) =>{
                    const create = async ()=>{
                        await bookService.save(values)
                        setSubmitting(false)
                        toast(`Book ${values.tittle} create OK`)
                        navigate('/')
                    }
                    create();
                }
                }>
                {
                    ({isSubmitting}) =>(
                        <div className="container">
                            <h1>Create book</h1>
                            <Form>
                                <div className="mb-3">
                                    <label htmlFor='bookTittle' className="form-label">Tittle</label>
                                    <Field type="text" className="form-control" id="bookTittle" name="bookTittle"></Field>
                                    <ErrorMessage name="bookTittle" component="span" className="form-err"></ErrorMessage>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor='bookQuantity' className="form-label">Quantity</label>
                                    <Field type="number" className="form-control" id="bookQuantity" name="bookQuantity"></Field>
                                    <ErrorMessage name="bookQuantity" component="span" className="form-err"></ErrorMessage>
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
                                            colors={['#e15b64','#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                                            />
                                        :
                                        <button type="submit" className="btn btn-primary">Submit</button>
                                }
                            </Form>
                        </div>
                    )
                }
            </Formik>
        </>
    )
}