import { useState, useEffect } from "react";
import { getProducts } from "../Api/ProductApi";
import { useSelector } from "react-redux";

export const useProducts = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const {user} = useSelector((state)=> state.auth)

    const accessToken = user?.data?.accessToken

    const fetchProducts = async () => {
        try {
            const response = await getProducts(accessToken);

            setProducts(response.data.products);

        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

     useEffect(() => {
        if(accessToken){
            fetchProducts()
        }
    }, [accessToken])


  

    return {
        products,
        loading,
        accessToken,
       setProducts
    };
};