import { uploadFiles } from "../Services/Storage.services.js";
import productModel from "../Model/product.model.js";

export const createProduct = async(req , res)=> {

    try {
                console.log(req.body);
                console.log(req.files);

                const filesUrl  = []

                for( let i = 0 ; i < req.files.length ; i++){
                    
                   const response = await uploadFiles({

                     buffer : req.files [i].buffer,
                    fileName:  req.files[i].originalname

                   })
                   console.log(res);
                   
                   filesUrl.push(response.url)
                }
                
                console.log(filesUrl);
                

                const product = await productModel.create({
                    title : req.body.title,
                    description : req.body.description,
                    price : {
                        amount : req.body.price.amount,
                        currency : req.body.price.currency
                    },
                    images : filesUrl,
                    sizes : req.body.sizes ,
                    seller : req.user.userId 
                })

        res.status(201).json({
            message : "Product created",
            data : {
                product
            }
        })

    } catch (error) {
        
        res.status(400).json({
            message : " error in create product api",
            errors : error.message
        })
    }
}

export async function listAllProducts (req , res) {

    try {
         
        const products = await productModel.find()

          res.status(200).json({
            message : "All Producs Fetched",
            data : {
                products
            }
          })
    } catch (error) {
        
        res.status(400).json({
            message : "Error is fetching products list",
            error : error.message
        })
    }
}

export async function  DeleteProducts (req , res) {

    try {

      const id = req.params.id

    const product =  productModel.findById(id)

    if(!product) {
        return res.status(404).json({
            message : "Product Not found"
        })
    }

    await productModel.findByIdAndDelete(id)
    
     return res.status(200).json({
      message: "Product deleted successfully",
      productId: id,
    });


    } catch (error) {
        res.status(500).json({
            message : "Deleting Products Failed",
            error : error.message
        })
    }

}

export async function updateProducts (req , res ) {

    try {
        
        const id = req.params.id

        const updatedData = req.body

        const product = productModel.findById(id)

        if(!product){
            return res.status(404).json({
                message : "No product found to update",
            })
        }

        const updatedProduct = await productModel.findByIdAndUpdate(id , updatedData)
        
        return res.status(200).json({
        message: "Product updated successfully",
        product : updatedProduct
        
       });

    } catch (error) {

        return res.status(500).json({
            message : "Updating Product Failed",
            error : error.message
        })
    }
}
