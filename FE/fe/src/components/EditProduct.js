import {useNavigate, useParams} from "react-router-dom";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {ColorRing} from "react-loader-spinner";
import {useEffect, useState} from "react";
import * as productService from "../services/productService";
import * as typeService from "../services/typeService";


export function EditProduct() {
    const navigate = useNavigate()
    const [products, setProducts] = useState()
    const [listTypes, setListTypes] = useState([])
    const params = useParams()

    useEffect(() => {
        const search = async () => {
            const products = await productService.findProductById(params.id)
            setProducts(products)
            console.log(products)
        }
        search()
    }, [params.id])
    useEffect(() => {
        const listType = async () => {
            const result = await typeService.findAllType()
            setListTypes(result)
            console.log(result)
        }
        listType()
    }, [])
    useEffect(() => {
        document.title = "Edit"
    }, []);
    if (!products) {
        return null;
    }
    return (
        <>
            <div className="container" style={{marginLeft: "30%", maxWidth: "70%"}}>
                {products &&
                    <Formik
                        initialValues={{
                            productId: products?.productId,
                            productCode: products?.productCode,
                            productName: products?.productName,
                            dateAdd: products?.dateAdd,
                            quantity: products?.quantity,
                            typeId: products?.type.typeId,
                            typeName: products?.type.typeName
                        }}
                        validationSchema={Yup.object({
                            productCode: Yup.string()
                                .required("Nhập mã sản phẩm"),
                            productName: Yup.string()
                                .required("Nhập họ tên")
                                .max(100, "Tên sản phẩm không được quá 100 kí tự"),
                            dateAdd: Yup.string()
                                .required("Bạn cần nhập ngày"),
                            quantity: Yup.number().integer("Số lượng phải là số nguyên")
                                .required("Bạn cần nhập số lượng")
                                .min(0, "Số lượng phải lớn hơn 0"),
                            typeId: Yup.number().integer()
                                .required("Bạn cần phải chọn loại sản phẩm")
                        })}
                        onSubmit={(values, {setSubmitting}) => {
                            console.log(values)
                            const edit = async () => {
                                console.log(values)
                                values.type.typeId = parseInt(values.typeId)
                                delete values.typeId
                                await productService.updateProduct(values)
                                setSubmitting(false)
                                alert("Sửa mã " + products.productCode + " thành công")
                                navigate('/')
                            }
                            edit()
                        }
                        }>
                        {
                            ({isSubmitting}) => (
                                <div className="container">
                                    <h1>Edit product</h1>
                                    <Form>
                                        <div className="mb-3">
                                            <label htmlFor='code' className="form-label">Code:</label>
                                            <div className="col-3">
                                                <Field type="text" className="form-control" id="code"
                                                       name="productCode"/>
                                            </div>
                                            <ErrorMessage name="productCode" component="span"
                                                          className="form-err" style={{color: "red"}}></ErrorMessage>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor='name' className="form-label">Name:</label>
                                            <div className="col-3">
                                                <Field type="text" className="form-control" id="name"
                                                       name="productName"/>
                                            </div>
                                            <ErrorMessage name="productName" component="span"
                                                          className="form-err" style={{color: "red"}}></ErrorMessage>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor='date' className="form-label">Date:</label>
                                            <div className="col-3">
                                                <Field type="text" className="form-control" id="date"
                                                       name="dateAdd"/>
                                            </div>
                                            <ErrorMessage name="dateAdd" component="span"
                                                          className="form-err" style={{color: "red"}}></ErrorMessage>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor='quantity' className="form-label">Quantity:</label>
                                            <div className="col-3">
                                                <Field type="number" className="form-control" id="quantity"
                                                       name="quantity"/>
                                            </div>
                                            <ErrorMessage name="quantity" component="span"
                                                          className="form-err" style={{color: "red"}}></ErrorMessage>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor='type' className="form-label">Type:</label>
                                            <div className="col-3">
                                                <Field as='select' name="typeId" style={{width: "100%"}}>
                                                    {listTypes.map((listType) => (
                                                        <option value={listType.typeId}>{listType.typeName}</option>
                                                    ))}
                                                </Field>
                                            </div>
                                            <ErrorMessage name="typeId" component="span"
                                                          className="form-err" style={{color: "red"}}></ErrorMessage>
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
                }
            </div>
        </>
    )
}