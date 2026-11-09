import {
PackagePlus,
ImagePlus,
X,
Plus,
Trash2,
Layers,
Tag,
Boxes,
FileText,
Upload,
CheckCircle2,
} from "lucide-react";
import useAdmin from "../hooks/useAdmin";
import { NavLink } from "react-router";

const AdminProductPage = () => {
    const {
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
    } = useAdmin()


const inputClass =
"w-full rounded-xl border border-white/10 bg-[#080e1b] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-emerald-400/60 focus:ring-2 focus:ring-emerald-400/10";

const labelClass =
"mb-2.5 block text-sm font-medium text-slate-300";

return ( <div className="relative min-h-screen overflow-hidden bg-[#030712] px-4 py-8 text-white sm:px-8 lg:px-12">

  {/* Background Effects */}
  <div className="pointer-events-none fixed -left-40 top-20 h-96 w-96 rounded-full bg-blue-600/10 blur-[130px]" />
  <div className="pointer-events-none fixed -right-40 bottom-0 h-96 w-96 rounded-full bg-emerald-500/10 blur-[130px]" />

  <div className="relative z-10 mx-auto max-w-6xl">

    {/* Header */}
    <header className="mb-10 flex flex-wrap items-center justify-between gap-5">

      <div className="flex items-center gap-4">
        <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-3">
          <PackagePlus className="h-7 w-7 text-emerald-400" />
        </div>

        <div>
          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Product Management
          </h1>
          <p className="mt-1 text-sm text-slate-400">
            Create and manage your store products.
          </p>
        </div>
      </div>

<div className="flex gap-4">
      <NavLink to={"/home"} className="flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-4 py-2 text-sm text-emerald-400">
        Home
      </NavLink>

      <NavLink to={"/admin/updateProductsList"} className="flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-4 py-2 text-sm text-emerald-400">
        <CheckCircle2 className="h-4 w-4" />
        Update Products
      </NavLink>
</div>

    </header>

    {/* Main Form */}
    <form
      onSubmit={formSubmit}
      className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] shadow-2xl shadow-blue-950/20 backdrop-blur-2xl"
    >

      {/* Form Header */}
      <div className="border-b border-white/10 px-6 py-6 sm:px-9">
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-blue-500/10 p-2.5">
            <Layers className="h-5 w-5 text-blue-400" />
          </div>

          <div>
            <h2 className="text-lg font-semibold">
              Create New Product
            </h2>
            <p className="text-xs text-slate-500">
              Add product information and inventory details.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-10 p-6 sm:p-9">

        {/* Product Images */}
        <section>
          <div className="mb-5 flex items-center justify-between">
            <div>
              <h3 className="flex items-center gap-2 font-semibold">
                <ImagePlus className="h-5 w-5 text-emerald-400" />
                Product Images
              </h3>
              <p className="mt-1 text-xs text-slate-500">
                Upload up to 5 images. PNG, JPG, WEBP.
              </p>
            </div>

            <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-300">
              {images.length}/5 Images
            </span>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">

            {images.map((image, index) => (
              <div
                key={`${image.name}-${index}`}
                className="group relative aspect-square overflow-hidden rounded-2xl border border-white/10 bg-black/30"
              >
                <img
                  src={URL.createObjectURL(image)}
                  alt={`Product ${index + 1}`}
                  className="h-full w-full object-cover"
                />

                <button
                  type="button"
                  onClick={() => removeImage(index)}
                  className="absolute right-2 top-2 rounded-lg bg-red-500/90 p-1.5 text-white opacity-100 transition hover:bg-red-600 sm:opacity-0 sm:group-hover:opacity-100"
                >
                  <X className="h-4 w-4" />
                </button>

                <span className="absolute bottom-2 left-2 rounded-md bg-black/70 px-2 py-1 text-xs">
                  Image {index + 1}
                </span>
              </div>
            ))}

            {images.length < 5 && (
              <label className="flex aspect-square cursor-pointer flex-col items-center justify-center rounded-2xl border border-dashed border-emerald-400/30 bg-emerald-400/[0.03] transition hover:border-emerald-400 hover:bg-emerald-400/[0.08]">

                <Upload className="mb-3 h-7 w-7 text-emerald-400" />

                <span className="text-sm font-medium text-slate-300">
                  Upload Image
                </span>

                <span className="mt-1 text-xs text-slate-500">
                  {5 - images.length} remaining
                </span>

                <input
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleImageChange}
                  className="hidden"
                />
              </label>
            )}

          </div>
        </section>

        {/* Product Information */}
        <section>
          <h3 className="mb-5 flex items-center gap-2 font-semibold">
            <FileText className="h-5 w-5 text-blue-400" />
            Product Information
          </h3>

          <div className="space-y-5">

            <div>
              <label className={labelClass}>
                Product Title
              </label>

              <input
                type="text"
                name="title"
                value={product.title}
                onChange={handleProductChange}
                placeholder="Enter product title"
                required
                minLength={2}
                maxLength={100}
                className={inputClass}
              />
            </div>

            <div>
              <label className={labelClass}>
                Product Description
              </label>

              <textarea
                name="description"
                value={product.description}
                onChange={handleProductChange}
                placeholder="Describe your product..."
                required
                rows={5}
                className={`${inputClass} resize-none`}
              />
            </div>

          </div>
        </section>

        {/* Product Sizes */}
        <section>
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3">

            <div>
              <h3 className="flex items-center gap-2 font-semibold">
                <Boxes className="h-5 w-5 text-emerald-400" />
                Product Sizes & Stock
              </h3>

              <p className="mt-1 text-xs text-slate-500">
                Add sizes and their available stock quantities.
              </p>
            </div>

            <button
              type="button"
              onClick={addSize}
              className="flex items-center gap-2 rounded-xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-2.5 text-sm font-medium text-emerald-400 transition hover:bg-emerald-400/20"
            >
              <Plus className="h-4 w-4" />
              Add Size
            </button>

          </div>

          <div className="space-y-3">

            {sizes.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-1 gap-3 rounded-2xl border border-white/10 bg-black/20 p-4 sm:grid-cols-[1fr_1fr_auto]"
              >

                <div>
                  <label className="mb-2 block text-xs text-slate-400">
                    Size (String)
                  </label>

                  <input
                    type="text"
                    value={item.size}
                    onChange={(e) =>
                      handleSizeChange(index, "size", e.target.value)
                    }
                    placeholder="e.g. S, M, L, XL"
                    required
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs text-slate-400">
                    Stock (Number)
                  </label>

                  <input
                    type="number"
                    min="0"
                    step="1"
                    value={item.stock}
                    onChange={(e) =>
                      handleSizeChange(index, "stock", e.target.value)
                    }
                    placeholder="e.g. 50"
                    required
                    className={inputClass}
                  />
                </div>

                <button
                  type="button"
                  disabled={sizes.length === 1}
                  onClick={() => removeSize(index)}
                  className="self-end rounded-xl border border-red-400/20 bg-red-400/5 p-3.5 text-red-400 transition hover:bg-red-400/15 disabled:cursor-not-allowed disabled:opacity-30"
                >
                  <Trash2 className="h-5 w-5" />
                </button>

              </div>
            ))}

          </div>
        </section>

        {/* Pricing */}
        <section>
          <h3 className="mb-5 flex items-center gap-2 font-semibold">
            <Tag className="h-5 w-5 text-blue-400" />
            Product Pricing
          </h3>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

            <div>
              <label className={labelClass}>
                Price Amount
              </label>

              <input
                type="number"
                name="amount"
                value={product.amount}
                onChange={handleProductChange}
                placeholder="Enter amount"
                min="0.01"
                step="0.01"
                required
                className={inputClass}
              />
            </div>

            <div>
              <label className={labelClass}>
                Currency
              </label>

              <select
                name="currency"
                value={product.currency}
                onChange={handleProductChange}
                className={inputClass}
              >
                <option value="INR">INR (₹) - Indian Rupee</option>
                <option value="USD">USD ($) - US Dollar</option>
              </select>
            </div>

          </div>

          <div className="mt-5 rounded-xl border border-blue-400/10 bg-blue-400/[0.04] p-4">
            <p className="text-xs text-slate-400">
              Product Price Preview
            </p>

            <h3 className="mt-1 text-2xl font-bold text-emerald-400">
              {product.currency === "INR" ? "₹" : "$"}
              {Number(product.amount || 0).toLocaleString("en-IN")}
            </h3>

            <p className="mt-1 text-xs text-slate-500">
              Currency: {product.currency}
            </p>
          </div>
        </section>

      </div>

      {/* Footer Actions */}
      <div className="flex flex-col-reverse justify-between gap-4 border-t border-white/10 bg-black/20 px-6 py-6 sm:flex-row sm:items-center sm:px-9">

        <p className="text-xs text-slate-500">
          Make sure all product details are correct.
        </p>

        <button
          type="submit"
          className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-400 px-8 py-3.5 font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:-translate-y-0.5 hover:shadow-emerald-500/20"
        >
          <PackagePlus className="h-5 w-5" />
          Create Product
        </button>

      </div>

    </form>

  </div>
</div>


);
};

export default AdminProductPage;
