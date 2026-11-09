import { useProducts } from "../hook/ProductsHooks";
import Navbar from "../../../Shared/Navbar";
import { ShoppingBag, Search, SlidersHorizontal } from "lucide-react";


const ProductsPage = () => {


    const {products} = useProducts()


    return (
        <div className="min-h-screen bg-gray-50">

            <Navbar />

            <div className="max-w-7xl mx-auto px-6 py-12">

                {/* Heading */}
                <div className="mb-10">
                    <p className="text-blue-600 font-semibold uppercase tracking-widest text-sm">
                        Our Collection
                    </p>

                    <h1 className="text-4xl font-bold text-gray-900 mt-3">
                        Explore Products
                    </h1>

                    <p className="text-gray-500 mt-3">
                        Discover products that match your lifestyle.
                    </p>
                </div>

                {/* Search and Filter */}
                <div className="flex flex-col md:flex-row gap-4 justify-between mb-10">

                    <div className="relative w-full md:w-96">
                        <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />

                        <input
                            type="text"
                            placeholder="Search products..."
                            className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-xl outline-none focus:border-blue-500"
                        />
                    </div>

                    <button className="flex items-center justify-center gap-2 px-5 py-3 bg-white border border-gray-200 rounded-xl text-gray-700">
                        <SlidersHorizontal size={19} />
                        Filters
                    </button>

                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">

                    {products.map((product) => (

                        <div
                            key={product.id}
                            className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition duration-300 group"
                        >

                            <div className="h-64 overflow-hidden bg-gray-100">

                                   <img
                                    src={product.images[0]}
                                    alt={product.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                                />
                            
                              

                            </div>

                            <div className="p-5">

                                <p className="text-sm text-blue-600 font-medium">
                                    {product.category}
                                </p>

                                <h2 className="text-lg font-semibold text-gray-900 mt-2">
                                    {product.description}
                                </h2>

                                <div className="flex justify-between items-center mt-5">

                                    <span className="text-xl font-bold text-gray-900">
                                        ₹{product.price.amount}
                                    </span>

                                    <button className="bg-gray-950 text-white p-3 rounded-xl hover:bg-blue-600 transition">
                                        <ShoppingBag size={19} />
                                    </button>

                                </div>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </div>
    );
};

export default ProductsPage;