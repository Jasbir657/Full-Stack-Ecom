import Api from "../../../config/API/Api"

export const getProducts = async(accessToken) =>{
try {
    
    const response = await Api.get("/products/getAllProducts" , {
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