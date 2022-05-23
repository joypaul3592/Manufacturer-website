import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Loading from "../Sheard/Loading";


function useProduct() {
    const [products, setProducts] = useState([]);

    useEffect(() => {

        const fetchData = async () => {
            const { data } = await axios.get(`http://localhost:5000/product`);
            if (!data?.success) return toast.error(data?.error);
            setProducts(data?.data);
        }
        fetchData()
    }, [products])


    if (!products) {
        return <Loading></Loading>
    }

    return [products, setProducts]

}
export default useProduct;