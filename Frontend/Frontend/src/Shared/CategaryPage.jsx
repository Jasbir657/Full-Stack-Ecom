import Navbar from "./Navbar";
import { ArrowRight } from "lucide-react";


const CategaryPage = () => {

    const categories = []


    return (
        <div className="min-h-screen bg-gray-50">

            <Navbar />

            <section className="max-w-7xl mx-auto px-6 py-14">

                <div className="text-center mb-12">

                    <p className="text-blue-600 font-semibold uppercase tracking-widest text-sm">
                        Find Your Style
                    </p>

                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3">
                        Explore Categories
                    </h1>

                    <p className="text-gray-500 mt-4 max-w-xl mx-auto">
                        From everyday essentials to premium collections,
                        find everything you're looking for.
                    </p>

                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">

                    {categories.map((category) => (

                        <div
                            key={category.id}
                            className="relative h-80 rounded-2xl overflow-hidden group cursor-pointer"
                        >

                            <img
                                src={category.image}
                                alt={category.name}
                                className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                            <div className="absolute bottom-0 left-0 p-7 text-white">

                                <h2 className="text-2xl font-bold">
                                    {category.name}
                                </h2>

                                <p className="text-gray-200 mt-2 text-sm">
                                    {category.description}
                                </p>

                                <button className="flex items-center gap-2 mt-5 text-sm font-semibold hover:text-blue-400 transition">
                                    Explore Collection
                                    <ArrowRight size={18} />
                                </button>

                            </div>

                        </div>

                    ))}

                </div>

            </section>

        </div>
    );
};

export default CategaryPage;