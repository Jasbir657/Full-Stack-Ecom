import { useState } from "react";
import { X } from "lucide-react";

const EditProductModal = ({ product ,onClose, onUpdate }) => {


  const [formData, setFormData] = useState({
  title: product?.title ?? "",
  description: product?.description ?? "",
  amount: product?.price?.amount ?? 0,
  currency: product?.price?.currency ?? "INR",
  sizes: product?.sizes ?? [],
  images: product?.images ?? [],
});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSizeChange = (size, stock) => {
    setFormData((prev) => ({
      ...prev,
      sizes: prev.sizes.map((item) =>
        item.size === size
          ? { ...item, stock: Number(stock) }
          : item
      ),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onUpdate(product._id, {
      title: formData.title,
      description: formData.description,
      Price: {
        amount: Number(formData.amount),
        currency: formData.currency,
      },
      sizes: formData.sizes,
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex justify-center items-center p-4">

      <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">

        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b">

          <h2 className="text-2xl font-bold">
            Update Product
          </h2>

          <button onClick={onClose}>
            <X />
          </button>

        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-5">

          {/* Title */}
          <div>
            <label className="block mb-2 font-medium">
              Product Title
            </label>

            <input
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full border rounded-lg p-3"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="block mb-2 font-medium">
              Description
            </label>

            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full border rounded-lg p-3"
              rows={4}
            />
          </div>

          {/* Price */}
          <div className="grid grid-cols-2 gap-4">

            <div>
              <label className="block mb-2 font-medium">
                Amount
              </label>

              <input
                type="number"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                className="w-full border rounded-lg p-3"
                min="0"
                required
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Currency
              </label>

              <select
                name="currency"
                value={formData.currency}
                onChange={handleChange}
                className="w-full border rounded-lg p-3"
              >
                <option value="INR">INR</option>
                <option value="USD">USD</option>
              </select>
            </div>

          </div>

          {/* Sizes */}
          <div>
            <label className="block mb-3 font-medium">
              Sizes & Stock
            </label>

            <div className="grid grid-cols-3 gap-3">

              {formData.sizes.map((item) => (

                <div key={item.size} className="border rounded-lg p-3">

                  <p className="font-semibold mb-2">
                    {item.size}
                  </p>

                  <input
                    type="number"
                    value={item.stock}
                    min="0"
                    onChange={(e) =>
                      handleSizeChange(item.size, e.target.value)
                    }
                    className="w-full border rounded p-2"
                  />

                </div>

              ))}

            </div>
          </div>

          {/* Images */}
          <div>
            <label className="block mb-3 font-medium">
              Product Images
            </label>

            <div className="flex gap-3 flex-wrap">

              {formData.images?.map((image, index) => (

                <img
                  key={index}
                  src={image}
                  alt="Product"
                  className="w-20 h-20 object-cover rounded-lg border"
                />

              ))}

            </div>

            <p className="text-sm text-gray-500 mt-2">
              Maximum 5 images allowed.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-3 pt-4">

            <button
              type="button"
              onClick={onClose}
              className="border px-5 py-3 rounded-lg"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700"
            >
              Update Product
            </button>

          </div>

        </form>

      </div>

    </div>
  );
};

export default EditProductModal;