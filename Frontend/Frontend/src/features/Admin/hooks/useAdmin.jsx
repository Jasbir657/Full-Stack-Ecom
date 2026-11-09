import { useSelector } from "react-redux"
import  {useForm} from "react-hook-form"
import { useState } from "react"
import { deleteProductapi, registerProductapi, updateProductapi } from "../api/AdminApi";
import { toast } from "react-toastify";
import { useProducts } from "../../Products/hook/ProductsHooks";
import { useNavigate } from "react-router";

export const useAdmin = () => {

const { user } = useSelector((state) => state.auth)

const {setProducts} = useProducts()

const [selectedProduct, setSelectedProduct] = useState(null);
const [showDelete, setShowDelete] = useState(null);

const navigate = useNavigate()

const accessToken = user?.data?.accessToken

let {   register ,
         handleSubmit ,
         formState : {errors},
         reset
        } = useForm()

const [images, setImages] = useState([]);
const [sizes, setSizes] = useState([
{ size: "", stock: "" },
]);

const [product, setProduct] = useState({
title: "",
description: "",
amount: "",
currency: "INR",
});

const handleProductChange = (e) => {
const { name, value } = e.target;

setProduct((prev) => ({
  ...prev,
  [name]: value,
}));

};
// Handle Images
const handleImageChange = (e) => {
const selectedFiles = Array.from(e.target.files);


if (images.length + selectedFiles.length > 5) {
  alert("You can upload maximum 5 images.");
  e.target.value = "";
  return;
}

const validFiles = selectedFiles.filter((file) =>
  file.type.startsWith("image/")
);

if (validFiles.length !== selectedFiles.length) {
  alert("Only image files are allowed.");
}

setImages((prev) => [...prev, ...validFiles]);
e.target.value = "";
};

const removeImage = (index) => {
setImages((prev) =>
prev.filter((_, i) => i !== index)
);
};

// Handle Sizes
const handleSizeChange = (index, field, value) => {
setSizes((prev) =>
prev.map((item, i) =>
i === index
? { ...item, [field]: value }
: item
)
);
};

const addSize = () => {
setSizes((prev) => [
...prev,
{ size: "", stock: "" },
]);
};

const removeSize = (index) => {
setSizes((prev) =>
prev.filter((_, i) => i !== index)
);
};



// Submit Form
const formSubmit = async(e) => {
e.preventDefault();


if (images.length === 0) {
  alert("Please upload at least one product image.");
  return;
}

const hasInvalidSize = sizes.some(
  (item) =>
    !item.size.trim() ||
    item.stock === "" ||
    Number(item.stock) < 0
);

if (hasInvalidSize) {
  alert("Please enter valid size and stock details.");
  return;
}

const formData = new FormData();

images.forEach((image) => {
  formData.append("images", image);
});

formData.append("title", product.title);
formData.append("description", product.description);

formData.append(
  "sizes",
  JSON.stringify(
    sizes.map((item) => ({
      size: item.size.trim(),
      stock: Number(item.stock),
    }))
  )
);

formData.append(
  "price",
  JSON.stringify({
    amount: Number(product.amount),
    currency: product.currency,
  })
);

console.log("Product FormData prepared", formData);

// Connect your createProduct API here.
console.log("Sizes:", JSON.stringify(sizes))
console.log("Price:", JSON.stringify({
    amount: Number(product.amount),
    currency: product.currency}))


    for (const [key, value] of formData.entries()) {
    console.log(key, value)
}

await registerProductapi(formData , accessToken)

if(registerProductapi){
 setProduct({
  title: "",
  description: "",
  amount: "",
  currency: "INR",
});

setSizes([
  { size: "", stock: "" },
]);

setImages([]);
  toast.success("Products Created")
}
};


// To Delete The Products

    const onDelete = async (id)=> {

        try {
            
            const response = await deleteProductapi(id , accessToken)

            console.log(response.message);
            
            setShowDelete(null)


            setProducts((prev) =>
              prev.filter((product) => product._id !== id)
             );
            toast.success("Product Deleted")
            navigate("/admin")
           

            return response.data


        } catch (error) {
            return error.message
            
        }
   
     }


     //  TO UPdate the Products


    const onUpdate = async (id, updatedData) => {
  try {
    const response = await updateProductapi(
      id,
      updatedData,
      accessToken
    );

    console.log(response.message);

    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product._id === id
          ? response.product
          : product
      )
    );
        toast.success("Product Updated")
        navigate("/admin")

    setSelectedProduct(null);

  } catch (error) {
    console.log(error.response?.data || error.message);
  }
};


  return {
    accessToken,
    register,
    handleSubmit,
    errors,
    reset,
    handleProductChange,
    handleImageChange,
    images,
    removeImage,
    product,
    sizes,
    formSubmit,
    handleSizeChange,
    addSize,
    removeSize,
    onDelete,
    setShowDelete,
    showDelete,
    setSelectedProduct,
    selectedProduct,
    onUpdate
    
  }
}

export default useAdmin