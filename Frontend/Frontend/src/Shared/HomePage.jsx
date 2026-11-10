import { NavLink } from "react-router";
import Navbar from "./Navbar";
import {
    ArrowRight,
    ShoppingBag,
    Truck,
    ShieldCheck,
    Headphones
} from "lucide-react";

const HomePage = () => {

    return (

        <div className="min-h-screen bg-gray-50">

            <Navbar />

            {/* Hero Section */}
            <section className="max-w-7xl mx-auto px-6 py-16">

                <div className="bg-gradient-to-r from-gray-950 to-blue-950 rounded-3xl p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 overflow-hidden">

                    <div className="max-w-xl">

                        <span className="text-blue-400 font-semibold tracking-widest uppercase text-sm">
                            New Collection 2026
                        </span>

                        <h1 className="text-4xl md:text-6xl font-bold text-white mt-5 leading-tight">
                            Upgrade Your
                            <span className="text-blue-400"> Lifestyle.</span>
                        </h1>

                        <p className="text-gray-300 mt-6 text-lg leading-relaxed">
                            Discover premium products, amazing deals
                            and everything you need in one place.
                        </p>

                        <NavLink to={"/home/products"} className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-7 py-3 rounded-xl flex items-center gap-3 transition">
                            Shop Now
                            <ArrowRight size={19} />
                        </NavLink>

                    </div>

                    <div className="hidden md:flex w-72 h-72 rounded-full bg-blue-500/20 border border-blue-400/30 items-center justify-center">

                        <ShoppingBag
                            size={130}
                            className="text-blue-400"
                        />

                    </div>

                </div>

            </section>

            {/* Categories */}
            <section className="max-w-7xl mx-auto px-6 py-8">

                <div className="flex justify-between items-center mb-8">

                    <div>
                        <h2 className="text-3xl font-bold text-gray-900">
                            Shop by Category
                        </h2>

                        <p className="text-gray-500 mt-2">
                            Explore our popular categories.
                        </p>
                    </div>

                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

                    {[
                        "Electronics",
                        "Fashion",
                        "Accessories",
                        "Footwear"
                    ].map((category, index) => (

                        <div
                            key={index}
                            className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition cursor-pointer"
                        >

                            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-5">
                                <ShoppingBag className="text-blue-600" />
                            </div>

                            <h3 className="font-semibold text-gray-900 text-lg">
                                {category}
                            </h3>

                            <p className="text-gray-500 text-sm mt-2">
                                Explore Collection
                            </p>

                        </div>

                    ))}

                </div>

            </section>

            {/* Benefits */}
            <section className="max-w-7xl mx-auto px-6 py-16">

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                    {[
                        {
                            icon: <Truck size={28} />,
                            title: "Free Shipping",
                            desc: "On orders above ₹999"
                        },
                        {
                            icon: <ShieldCheck size={28} />,
                            title: "Secure Payment",
                            desc: "100% secure transactions"
                        },
                        {
                            icon: <Headphones size={28} />,
                            title: "24/7 Support",
                            desc: "We're always here to help"
                        },
                        {
                            icon: <ShoppingBag size={28} />,
                            title: "Quality Products",
                            desc: "Premium products guaranteed"
                        }
                    ].map((item, index) => (

                        <div
                            key={index}
                            className="bg-white p-6 rounded-2xl border border-gray-200"
                        >

                            <div className="text-blue-600 mb-4">
                                {item.icon}
                            </div>

                            <h3 className="font-bold text-gray-900">
                                {item.title}
                            </h3>

                            <p className="text-gray-500 text-sm mt-2">
                                {item.desc}
                            </p>

                        </div>

                    ))}

                </div>

            </section>

            {/* Footer */}
            <footer className="bg-gray-950 text-gray-400 py-8">

                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-4">

                    <h2 className="text-white text-xl font-bold">
                        Shop<span className="text-blue-500">Ease.</span>
                    </h2>

                    <p className="text-sm">
                        © 2026 ShopEase. All rights reserved.
                    </p>

                </div>

            </footer>

        </div>

    );

};

export default HomePage;