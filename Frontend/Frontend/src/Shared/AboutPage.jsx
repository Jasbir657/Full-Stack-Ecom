import Navbar from "./Navbar";
import {
    ShieldCheck,
    Truck,
    Heart,
    Users,
    Target,
    Award
} from "lucide-react";

const AboutPage = () => {

    return (
        <div className="min-h-screen bg-white">

            <Navbar />

            {/* Hero */}
            <section className="bg-gray-950 text-white py-24 px-6">

                <div className="max-w-7xl mx-auto text-center">

                    <p className="text-blue-400 uppercase tracking-widest font-semibold text-sm">
                        About ShopEase
                    </p>

                    <h1 className="text-4xl md:text-6xl font-bold mt-5 leading-tight">
                        Shopping Made
                        <span className="text-blue-400"> Simple.</span>
                    </h1>

                    <p className="text-gray-400 max-w-2xl mx-auto mt-6 text-lg leading-relaxed">
                        We believe shopping should be simple, convenient
                        and enjoyable. Our goal is to bring quality products
                        and a seamless shopping experience together.
                    </p>

                </div>

            </section>

            {/* Our Story */}
            <section className="max-w-7xl mx-auto px-6 py-20">

                <div className="grid md:grid-cols-2 gap-14 items-center">

                    <div className="rounded-3xl overflow-hidden h-96">

                        <img
                            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1000"
                            alt="Our Store"
                            className="w-full h-full object-cover"
                        />

                    </div>

                    <div>

                        <p className="text-blue-600 font-semibold uppercase tracking-widest text-sm">
                            Our Story
                        </p>

                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4">
                            More Than Just An Online Store
                        </h2>

                        <p className="text-gray-500 mt-6 leading-relaxed">
                            ShopEase was created with a simple vision:
                            to make quality shopping accessible to everyone.
                            We bring together carefully selected products
                            across different categories.
                        </p>

                        <p className="text-gray-500 mt-4 leading-relaxed">
                            From fashion and accessories to electronics,
                            we aim to make discovering your favourite
                            products easier than ever.
                        </p>

                    </div>

                </div>

            </section>

            {/* Mission and Vision */}
            <section className="bg-gray-50 py-20 px-6">

                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">

                    <div className="bg-white p-10 rounded-3xl border border-gray-100">

                        <Target size={35} className="text-blue-600" />

                        <h2 className="text-2xl font-bold mt-6">
                            Our Mission
                        </h2>

                        <p className="text-gray-500 mt-4 leading-relaxed">
                            To provide customers with quality products,
                            convenient shopping and an experience they
                            can trust.
                        </p>

                    </div>

                    <div className="bg-white p-10 rounded-3xl border border-gray-100">

                        <Award size={35} className="text-blue-600" />

                        <h2 className="text-2xl font-bold mt-6">
                            Our Vision
                        </h2>

                        <p className="text-gray-500 mt-4 leading-relaxed">
                            To build a shopping platform where quality,
                            accessibility and customer satisfaction
                            come first.
                        </p>

                    </div>

                </div>

            </section>

            {/* Values */}
            <section className="max-w-7xl mx-auto px-6 py-20">

                <div className="text-center mb-12">

                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        What We Stand For
                    </h2>

                    <p className="text-gray-500 mt-3">
                        The values behind everything we do.
                    </p>

                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">

                    {[
                        {
                            icon: <ShieldCheck size={30} />,
                            title: "Trust",
                            desc: "Building relationships through transparency."
                        },
                        {
                            icon: <Heart size={30} />,
                            title: "Customer First",
                            desc: "Your satisfaction is our priority."
                        },
                        {
                            icon: <Truck size={30} />,
                            title: "Convenience",
                            desc: "Making shopping easier and faster."
                        },
                        {
                            icon: <Users size={30} />,
                            title: "Community",
                            desc: "Creating a better shopping experience for everyone."
                        }
                    ].map((item, index) => (

                        <div
                            key={index}
                            className="p-7 rounded-2xl border border-gray-100 hover:shadow-lg transition"
                        >

                            <div className="text-blue-600">
                                {item.icon}
                            </div>

                            <h3 className="text-xl font-bold mt-5">
                                {item.title}
                            </h3>

                            <p className="text-gray-500 mt-3 text-sm leading-relaxed">
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

export default AboutPage;