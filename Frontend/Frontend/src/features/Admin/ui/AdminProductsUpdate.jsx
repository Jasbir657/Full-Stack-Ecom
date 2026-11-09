import { Pencil, Trash2, Plus, X } from "lucide-react";
import { useProducts } from "../../Products/hook/ProductsHooks";
import EditProductModal from "./EditProductModel";
import useAdmin from "../hooks/useAdmin";
import { NavLink } from "react-router";

const AdminProductsUpdate = () => {

  const { products } = useProducts();

  const {
    showDelete,
    setShowDelete,
    onDelete,
    selectedProduct,
    setSelectedProduct,
    onUpdate
  } = useAdmin();

  return (
    <div className="min-h-screen bg-gray-100 p-3 sm:p-5 md:p-6">

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6 sm:mb-8">

        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Products
          </h1>

          <p className="text-gray-500 mt-1 text-sm sm:text-base">
            Manage your store products
          </p>
        </div>

 <div className="flex gap-4">
       <NavLink to={"/home"} className="flex items-center justify-center gap-2 bg-blue-600 text-white px-2 sm:px-3 py-3 rounded-xl hover:bg-blue-700 transition w-full sm:w-auto">
        Home
       </NavLink>

        <NavLink
          to={"/admin"}
          className="flex items-center justify-center gap-2 bg-blue-600 text-white px-4 sm:px-5 py-3 rounded-xl hover:bg-blue-700 transition w-full sm:w-auto"
        >
          <Plus size={18} />
          Add Product
        </NavLink>
 </div>
      </div>

      {/* Product Table */}
      <div className="bg-white rounded-2xl shadow-sm overflow-x-auto">

        <table className="w-full min-w-[850px] text-left">

          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="p-4">Product</th>
              <th className="p-4">Price</th>
              <th className="p-4">Sizes / Stock</th>
              <th className="p-4">Images</th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>

          <tbody>
            {products.map((product) => (

              <tr
                key={product._id}
                className="border-b hover:bg-gray-50"
              >

                {/* Product */}
                <td className="p-4">
                  <div className="flex items-center gap-3 sm:gap-4">

                    <img
                      src={product.images?.[0]}
                      alt={product.title}
                      className="w-12 h-12 sm:w-16 sm:h-16 object-cover rounded-lg shrink-0"
                    />

                    <div className="min-w-0">
                      <h3 className="font-semibold text-gray-900 text-sm sm:text-base">
                        {product.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-gray-500 max-w-xs truncate">
                        {product.description}
                      </p>
                    </div>

                  </div>
                </td>

                {/* Price */}
                <td className="p-4 font-semibold whitespace-nowrap">
                  {product.price?.currency} {product.price?.amount}
                </td>

                {/* Sizes */}
                <td className="p-4">
                  <div className="flex flex-wrap gap-2">

                    {product.sizes?.map((item) => (
                      <span
                        key={item.size}
                        className="bg-gray-100 px-2 py-1 rounded text-xs whitespace-nowrap"
                      >
                        {item.size}: {item.stock}
                      </span>
                    ))}

                  </div>
                </td>

                {/* Images */}
                <td className="p-4">
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm whitespace-nowrap">
                    {product.images?.length || 0} / 5
                  </span>
                </td>

                {/* Actions */}
                <td className="p-4">
                  <div className="flex gap-2">

                    <button
                      onClick={() => setSelectedProduct(product)}
                      className="p-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition"
                    >
                      <Pencil size={18} />
                    </button>

                    <button
                      onClick={() => setShowDelete(product)}
                      className="p-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition"
                    >
                      <Trash2 size={18} />
                    </button>

                  </div>
                </td>

              </tr>

            ))}

          </tbody>

        </table>
      </div>

      {/* Edit Modal */}
      {selectedProduct && (
        <EditProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onUpdate={onUpdate}
        />
      )}

      {/* Delete Confirmation */}
      {showDelete && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-3 sm:p-4 z-50">

          <div className="bg-white rounded-2xl p-5 sm:p-6 w-full max-w-md">

            <h2 className="text-xl font-bold">
              Delete Product?
            </h2>

            <p className="text-gray-500 mt-2 text-sm sm:text-base">
              Are you sure you want to delete
              <strong> {showDelete.title}</strong>?
            </p>

            <div className="flex justify-end gap-3 mt-6">

              <button
                onClick={() => setShowDelete(null)}
                className="px-4 py-2 rounded-lg border hover:bg-gray-100 transition text-sm sm:text-base"
              >
                Cancel
              </button>

              <button
                onClick={() => {
                  onDelete(showDelete._id);
                }}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition text-sm sm:text-base"
              >
                Delete
              </button>

            </div>

          </div>

        </div>
      )}

    </div>
  );
};

export default AdminProductsUpdate;