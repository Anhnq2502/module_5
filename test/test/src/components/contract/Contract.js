import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import * as contractService from "../../services/contract/contractService";
import axios from "axios";
import * as typeService from "../../services/type/typeService";

export function Contract() {
    const [contracts, setContracts] = useState([])
    const [contractList, setContractList] = useState([])
    const [value, setValue] = useState("")
    const [sortValue, setSortValue] = useState("")
    const sortOptions = ["name", "email", "phone"]
    const [types, setTypes] = useState([])
    useEffect(() => {
        const list = async () => {
            const contracts = await contractService.findAll()
            setContractList(contracts)
            console.log(contracts)
        }
        list()
    }, [contracts])
    useEffect(() => {
        const listType = async () => {
            const types = await typeService.findAllType()
            setTypes(types)
        }
        listType()
    },[])
    useEffect(() => {
        document.title = "List"
    }, []);

    const handleDelete = async () => {
        await contractService.remove(contracts.id);
        const result = await contractService.findAll();
        setContracts(result)
        alert("Xoá "  + contracts.name  + " thành công")
    }
    const handleSearch = async (e) => {
        e.preventDefault()
        return await axios.get(`http://localhost:8080/contracts?q=${value}`)
            .then((res) => {
                setContractList(res.data);
                setValue("")
            })
            .catch((err) => console.log(err))
    }
    const handleSort = async (e) => {
        let value = e.target.value;
        setSortValue(value)
        return await axios.get(`http://localhost:8080/contracts?_sort=${value}&_order=asc`)
            .then((res) => {
                setContractList(res.data);
            })
            .catch((err) => console.log(err))
    }
    const getData = async (id) => {
        const data = await contractService.getContract(id);
        setContracts(data)
    }
    const handleSearchType = async (e) => {
        return await  axios.get(`http://localhost:8080/contracts?typeId_like=${e}`)
            .then((res)=> {
                setContractList(res.data);
            })
            .catch((err) => console.log(err))
    }
    return (
        <>
            <form style={{
                margin: "auto",
                padding: "15px",
                maxWidth: "400px",
                alignContent: "center"
            }}
                  className="d-flex input-group w-auto"
                  onSubmit={handleSearch}
            >
                <input
                    type="text"
                    className="form-control"
                    placeholder="Tìm kiếm"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                <button type="submit">Tìm kiếm</button>
            </form>
            <form>
                <div className="row">
                    <div className="col-1">
                        <h5>Tìm kiếm theo loại</h5>
                    </div>
                    <div className="col-9">
                        <select style={{width: "15%", borderRadius: "2px", height: "35px"}}
                                onChange={(e) => handleSearchType(e.target.value)}
                        >
                            {types.map((type,index) => (
                                <option value={type.id}>{type.typeName}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </form>
            <div className="row">
                <div className="col-1">
                    <h5>Sắp xếp:</h5>
                </div>
                <div className="col-9">
                    <select style={{width: "15%", borderRadius: "2px", height: "35px"}}
                            onChange={handleSort}
                            value={sortValue}
                    >
                        <option>Chọn loại sắp xếp</option>
                        {sortOptions.map((item, index) => (
                            <option value={item} key={index}>
                                {item}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="container">
                <h1 className="text-center">List Contract</h1>
                {/*<button type="submit" onClick={() => handleSort()} className="btn btn-primary"></button>*/}
                <table className="table">
                    <thead>
                    <tr style={{background: "black", color: "white"}}>
                        <td>No</td>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Phone</td>
                        <td>Type</td>
                        <td className="text-center">Action</td>
                    </tr>
                    </thead>
                    {contractList.length === 0 ? (
                        <tbody>
                        <tr>
                            <td className="text-center">Không có dữ liệu</td>
                        </tr>
                        </tbody>
                    ) : (contractList.map((contract, index) => (
                        <tbody key={index}>
                        <tr>
                            <td>{index + 1}</td>
                            <td>{contract.name}</td>
                            <td>{contract.email}</td>
                            <td>{contract.phone}</td>
                            <td>{types.find((types) => types.id == contract.typeId)?.typeName}</td>
                            <td className="d-flex justify-content-center">
                                <Link to={`/edit/${contract.id}`}>
                                    <button type="submit" className="btn btn-primary me-3">Edit</button>
                                </Link>
                                <button type="submit" className="btn btn-danger" data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        onClick={() => getData(contract.id)}
                                >Delete
                                </button>
                            </td>
                        </tr>
                        </tbody>
                    )))}
                </table>
            </div>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Delete</h5>
                        </div>
                        <div className="modal-body">
                            <span>Bạn có muốn xóa</span> <span style={{color: 'red'}} className="font-monospace">{contracts?.name}?</span>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary"
                                    data-bs-dismiss="modal">Cancel
                            </button>
                            <button onClick={() => handleDelete()} type="button" className="btn btn-danger"
                                    data-bs-dismiss="modal">OK
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}