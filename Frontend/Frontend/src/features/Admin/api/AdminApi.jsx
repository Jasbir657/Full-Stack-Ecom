import Api from "../../../config/API/Api"


export const registerProductapi  = async(data , accessToken) =>{

    try {
         const response = await Api.post("/products/createProduct" , data , {
            headers : {
                Authorization : `Bearer ${accessToken}`
            }
         })

         console.log(response);
         
         return response.data

    } catch (error) {

        return error.response.data
        
    }
}

export const deleteProductapi = async (id , accessToken)=>{

    try {
        
        const response = await Api.delete(`/products/deleteProducts/${id}`, {
            headers : {
                Authorization :  `Bearer ${accessToken}`
            },
        })

        return response.data

    } catch (error) {
        
        return error.response.message
    }
}

export const updateProductapi = async (id , data , accessToken)=>{

    try {

        const response = await Api.patch(`/products/updateProducts/${id}`, data , {
            headers : {
            Authorization : `Bearer ${accessToken}`
            }}
        )

        

        return response.data
        
    } catch (error) {
        console.log(error.message);
        

    }
}