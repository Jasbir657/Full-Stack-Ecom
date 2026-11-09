import api from "../../../config/API/Api"

export const getProducts = async(accessToken) =>{
try {
    
    const response = await api.get("/products/getAllProducts" , {
        headers : {
            Authorization : `Bearer ${accessToken}`
        }
    })

    console.log(response);    
    return response.data

} catch (error) {
    
    console.log(error.message);
    throw error
    
}
}