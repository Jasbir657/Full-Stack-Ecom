const LoadingPage = () => {

  const shimmer =
    "relative overflow-hidden bg-gray-200 before:absolute before:inset-0 before:-translate-x-full before:animate-shimmer before:bg-gradient-to-r before:from-transparent before:via-white/70 before:to-transparent";

  return (
    <div className="min-h-screen bg-white">

      {/* Navbar */}
      <nav className="flex items-center justify-between px-5 md:px-10 py-5 border-b">

        <div className={`h-8 w-28 rounded-md ${shimmer}`}></div>

        <div className="hidden md:flex gap-8">
          <div className={`h-4 w-16 rounded ${shimmer}`}></div>
          <div className={`h-4 w-16 rounded ${shimmer}`}></div>
          <div className={`h-4 w-16 rounded ${shimmer}`}></div>
        </div>

        <div className="flex gap-3">
          <div className={`h-9 w-9 rounded-full ${shimmer}`}></div>
          <div className={`h-9 w-9 rounded-full ${shimmer}`}></div>
        </div>

      </nav>

      {/* Hero Section */}
      <section className="px-5 md:px-10 py-8">

        <div className={`w-full h-56 sm:h-72 md:h-96 rounded-2xl ${shimmer}`}></div>

      </section>

      {/* Categories */}
      <section className="px-5 md:px-10 py-6">

        <div className={`h-6 w-40 rounded mb-6 ${shimmer}`}></div>

        <div className="flex gap-5 overflow-hidden">

          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="flex flex-col items-center gap-3 shrink-0">

              <div className={`w-16 h-16 md:w-24 md:h-24 rounded-full ${shimmer}`}></div>

              <div className={`h-3 w-16 rounded ${shimmer}`}></div>

            </div>
          ))}

        </div>

      </section>

      {/* Products */}
      <section className="px-5 md:px-10 py-8">

        <div className={`h-6 w-44 rounded mb-6 ${shimmer}`}></div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">

          {Array.from({ length: 8 }).map((_, i) => (

            <div key={i} className="border border-gray-100 rounded-xl p-3">

              <div className={`aspect-square rounded-lg mb-4 ${shimmer}`}></div>

              <div className={`h-4 w-3/4 rounded mb-3 ${shimmer}`}></div>

              <div className={`h-3 w-full rounded mb-2 ${shimmer}`}></div>

              <div className={`h-5 w-1/3 rounded mt-4 ${shimmer}`}></div>

            </div>

          ))}

        </div>

      </section>

    </div>
  );
};

export default LoadingPage;