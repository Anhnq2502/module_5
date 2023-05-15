// import {useNavigate} from "react-router-dom";
// import {ErrorMessage, Field, Form, Formik} from "formik";
// import * as Yup from 'yup';
// import * as userService from "../../services/user/userService";
// import {toast} from "react-toastify";
// import {ColorRing} from "react-loader-spinner";
//
// export function UserCreate(){
//     const navigate = useNavigate();
//     return(
//         <>
//             <Formik
//                 initialValues={{
//                     name: '',
//                     username: '',
//                     email: '',
//                     address: {
//                         street: ''
//                     },
//                 }}
//                 validationSchema={Yup.object({
//                     name: Yup.string()
//                         .required("Nhập tên"),
//                     username: Yup.string()
//                         .required("Nhập tên"),
//                     email: Yup.string()
//                         .required("Nhập email")
//                         .matches(/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/),
//                     street: Yup.string()
//                         .required("Nhập tên đường")
//                 })}
//                 onSubmit={(values, {setSubmitting}) => {
//                     console.log(values)
//                     const create = async() => {
//                         values.address.street = values.street
//                         delete values.street
//                         await userService.save(values)
//                         setSubmitting(false)
//                         toast("Ok")
//                         alert("Ok")
//                         navigate('/')
//                     }
//                     create()
//
//                 }
//                 }>
//                 {
//                     ({isSubmitting}) => (
//                         <div className="container">
//                             <h1>Create user</h1>
//                             <Form>
//                                 <div className="mb-3">
//                                     <label htmlFor='name' className="form-label">Name</label>
//                                     <Field type="text" className="form-control" id="name"
//                                            name="name"/>
//                                     <ErrorMessage name="name" component="span"
//                                                   className="form-err"></ErrorMessage>
//                                 </div>
//                                 <div className="mb-3">
//                                     <label htmlFor='username' className="form-label">User name</label>
//                                     <Field type="text" className="form-control" id="username"
//                                            name="username"/>
//                                     <ErrorMessage name="username" component="span"
//                                                   className="form-err"></ErrorMessage>
//                                 </div>
//                                 <div className="mb-3">
//                                     <label htmlFor='email' className="form-label">Email</label>
//                                     <Field type="text" className="form-control" id="email"
//                                            name="email"/>
//                                     <ErrorMessage name="email" component="span"
//                                                   className="form-err"></ErrorMessage>
//                                 </div>
//                                 <div className="mb-3">
//                                     <label htmlFor='street' className="form-label">Street</label>
//                                     <Field type="text" className="form-control" id="street"
//                                            name="street"/>
//                                     <ErrorMessage name="street" component="span"
//                                                   className="form-err"></ErrorMessage>
//                                 </div>
//                                 {
//                                     isSubmitting ?
//                                         <ColorRing
//                                             visible={true}
//                                             height="80"
//                                             width="80"
//                                             ariaLabel="blocks-loading"
//                                             wrapperStyle={{}}
//                                             wrapperClass="blocks-wrapper"
//                                             colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
//                                         />
//                                         :
//                                         <button type="submit" className="btn btn-primary">Submit</button>
//                                 }
//                             </Form>
//                         </div>
//                     )
//                 }
//             </Formik>
//         </>
//     )
// }
//
