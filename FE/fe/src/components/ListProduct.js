import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import * as productService from "../services/productService";
import * as typeService from "../services/typeService";

export function ListProduct() {
    const [products, setProducts] = useState([])
    const [productList, setProductList] = useState([])
    const [value, setValue] = useState("")
    const [sortValue, setSortValue] = useState("")
    const sortOptions = ["quantity", "date", "code"]
    const [types, setTypes] = useState([])
    useEffect(() => {
        const list = async () => {
            const products = await productService.findAllProduct()
            setProductList(products)
            console.log(products)
        }
        list()
    }, [products])
    useEffect(() => {
        document.title = "List"
    }, []);
    useEffect(() => {
        const listType = async () => {
            const types = await typeService.findAllType()
            setTypes(types)
        }
        listType()
    }, [])

    // const handleSearch = async (e) => {
    //     e.preventDefault()
    //     return await axios.get(`http://localhost:8080/product?q=${value}`)
    //         .then((res) => {
    //             setProductList(res.data);
    //         })
    //         .catch((err) => console.log(err))
    // }
    // const handleSort = async (e) => {
    //     let value = e.target.value;
    //     setSortValue(value)
    //     return await axios.get(`http://localhost:8080/product?_sort=${value}&_order=asc`)
    //         .then((res) => {
    //             setProductList(res.data);
    //         })
    //         .catch((err) => console.log(err))
    // }
    // const handleSearchType = async (e) => {
    //     return await axios.get(`http://localhost:8080/product?typeId_like=${e}`)
    //         .then((res) => {
    //             setProductList(res.data);
    //         })
    //         .catch((err) => console.log(err))
    // }
    return (
        <>
            {/*<form style={{*/}
            {/*    margin: "auto",*/}
            {/*    padding: "15px",*/}
            {/*    maxWidth: "400px",*/}
            {/*    alignContent: "center"*/}
            {/*}}*/}
            {/*      className="d-flex input-group w-auto"*/}
            {/*      onSubmit={handleSearch}*/}
            {/*>*/}
            {/*    <input*/}
            {/*        type="text"*/}
            {/*        className="form-control"*/}
            {/*        placeholder="Search"*/}
            {/*        value={value}*/}
            {/*        onChange={(e) => setValue(e.target.value)}*/}
            {/*    />*/}
            {/*    <button type="submit">Search</button>*/}
            {/*</form>*/}
            {/*<form>*/}
            {/*    <div style={{marginLeft:"8%",maxWidth:"80%"}} className="row">*/}
            {/*        <div className="col-1">*/}
            {/*            <h5>Find by type: </h5>*/}
            {/*        </div>*/}
            {/*        <div className="col-9">*/}
            {/*            <select style={{width: "15%", borderRadius: "2px", height: "35px"}}*/}
            {/*                    onChange={(e) => handleSearchType(e.target.value)}*/}
            {/*            >*/}
            {/*                {types.map((type, index) => (*/}
            {/*                    <option value={type.id}>{type.typeName}</option>*/}
            {/*                ))}*/}
            {/*            </select>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</form>*/}
            {/*<div style={{marginLeft:"8%",maxWidth:"80%"}} className="row">*/}
            {/*    <div className="col-1">*/}
            {/*        <h5>Sort By:</h5>*/}
            {/*    </div>*/}
            {/*    <div className="col-9">*/}
            {/*        <select style={{width: "15%", borderRadius: "2px", height: "35px"}}*/}
            {/*                onChange={handleSort}*/}
            {/*                value={sortValue}*/}
            {/*        >*/}
            {/*            <option>Choose type</option>*/}
            {/*            {sortOptions.map((item, index) => (*/}
            {/*                <option value={item} key={index}>*/}
            {/*                    {item}*/}
            {/*                </option>*/}
            {/*            ))}*/}
            {/*        </select>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <div className="container">
                <h1 className="text-center">List Product</h1>
                {/*<button type="submit" onClick={() => handleSort()} className="btn btn-primary"></button>*/}
                <table className="table">
                    <thead>
                    <tr style={{background: "black", color: "white"}}>
                        <td>No</td>
                        <td>Code</td>
                        <td>Name</td>
                        <td>Date</td>
                        <td>Quantity</td>
                        <td>Type</td>
                        <td className="text-center">Action</td>
                    </tr>
                    </thead>
                    {productList.length === 0 ? (
                        <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td className="text-center"><span style={{fontSize: '40px', color:'red'}}>Không tìm thấy sản phẩm</span></td>
                        </tr>
                        </tbody>
                    ) : (productList.map((product, index) => (
                        <tbody key={index}>
                        <tr>
                            <td>{index + 1}</td>
                            <td>{product.productCode}</td>
                            <td>{product.productName}</td>
                            <td>{product.dateAdd}</td>
                            <td>{product.quantity}</td>
                            <td>{product.type.typeName}</td>
                            <td className="d-flex justify-content-center">
                                <Link to={`/edit/${product.productId}`}>
                                    <button type="submit" className="btn btn-primary">Edit</button>
                                </Link>
                            </td>
                        </tr>
                        </tbody>
                    )))}
                </table>
            </div>
        </>
    )
}