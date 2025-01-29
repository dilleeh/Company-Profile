import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Sidebar from "../../components/header/Sidebar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {
        const response = await axios.get("http://localhost:5000/products");
        setProducts(response.data);
    };

    const deleteProduct = async (productId) => {
        try {
            await axios.delete(`http://localhost:5000/products/${productId}`);
            getProducts();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <div className=" bg-[#F8F9FC] h-[100vh] p-5">
                <div>
                    <Sidebar />
                </div>
                <div className="py-10 px-10 mt-5 w-full ">
                    <Link to="/admin/addproduct" className="btn btn-sm bg-[#181823] btn-square">
                        <FontAwesomeIcon icon={faPlus} className='text-md text-white' />
                    </Link>
                    <table className="min-w-full mt-5">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="p-2 text-center text-xs font-medium bg-white uppercase tracking-wider">name</th>
                                <th className="p-2 text-center text-xs font-medium bg-white uppercase tracking-wider">photo</th>
                                <th className="p-2 text-center text-xs font-medium bg-white uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {products.map((product) => (
                                <tr key={product.id}>
                                    <td className="p-2 text-center">{product.name}</td>
                                    <td className="p-2 text-center">
                                        <div className="flex justify-center items-center">
                                            <img src={product.url} alt="Product" className="h-20 object-cover" />
                                        </div>
                                    </td>
                                    <td className="p-2 text-center text-sm">
                                        <Link to={`edit/${product.id}`} className="text-green-500 hover:text-green-700 text-lg">
                                            <FontAwesomeIcon icon={faPenToSquare} />
                                        </Link>
                                        <button onClick={() => deleteProduct(product.id)} className="text-red-500 hover:text-red-700 text-lg ml-2">
                                            <FontAwesomeIcon icon={faTrashCan} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                </div>
            </div>
        </>
    );
};

export default ProductList;