import { useState } from "react";
import { Link } from "react-router";
import useAuthHook from "../../hooks/useAuth";
import {
ShoppingBag,
Mail,
LockKeyhole,
Eye,
EyeOff,
ArrowRight,
Truck,
ShieldCheck,
Headset,
Sparkles,
} from "lucide-react";

const LoginPage = () => {
const [showPassword, setShowPassword] = useState(false);
let {register , handleSubmit , errors , reset , loginForm} = useAuthHook() 


return ( <div className="relative min-h-screen overflow-hidden bg-[#030712] text-white">

  {/* Background Glow Effects */}
  <div className="pointer-events-none absolute -left-40 top-5 h-96 w-96 rounded-full bg-blue-600/20 blur-[130px]" />
  <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-emerald-500/20 blur-[130px]" />

  {/* Navbar */}
  <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-7 lg:px-12">

    <Link to="/" className="flex items-center gap-3">
      <div className="rounded-xl border border-emerald-400/30 bg-emerald-400/10 p-2.5">
        <ShoppingBag className="h-7 w-7 text-emerald-400" />
      </div>

      <div>
        <h1 className="text-2xl font-bold tracking-tight">
          Shop<span className="text-emerald-400">Ease</span>
        </h1>
        <p className="text-xs tracking-wide text-slate-400">
          SHOP SMARTER. LIVE BETTER.
        </p>
      </div>
    </Link>

    <div className="hidden items-center gap-2 text-sm sm:flex">
      <span className="text-slate-400">New to ShopVerse?</span>
      <Link
        to="/register"
        className="font-semibold text-emerald-400 transition hover:text-emerald-300"
      >
        Create account <ArrowRight className="ml-1 inline h-4 w-4" />
      </Link>
    </div>
  </nav>

  {/* Main Content */}
  <main className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 px-6 pb-16 pt-8 lg:grid-cols-2 lg:gap-20 lg:px-12 lg:pb-24 lg:pt-12">

    {/* Left Section */}
    <section className="hidden lg:block">

      <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-4 py-2 text-sm text-emerald-300">
        <Sparkles className="h-4 w-4" />
        Your next favorite thing awaits
      </div>

      <h2 className="max-w-xl text-5xl font-bold leading-tight xl:text-6xl">
        Your Next
        <span className="mt-2 block bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">
          Favorite Thing
        </span>
        Is Just a Login Away.
      </h2>

      <p className="mt-6 max-w-lg text-lg leading-8 text-slate-400">
        Discover amazing products, exclusive deals, and a seamless
        shopping experience — all in one place.
      </p>

      {/* Benefits */}
      <div className="mt-12 space-y-7">

        <div className="flex items-center gap-4">
          <div className="rounded-2xl border border-blue-400/20 bg-blue-400/10 p-3.5">
            <Truck className="h-6 w-6 text-blue-400" />
          </div>
          <div>
            <h3 className="font-semibold">Fast & Reliable Delivery</h3>
            <p className="mt-1 text-sm text-slate-400">
              Your favorite products, delivered to your door.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-3.5">
            <ShieldCheck className="h-6 w-6 text-emerald-400" />
          </div>
          <div>
            <h3 className="font-semibold">Secure Shopping</h3>
            <p className="mt-1 text-sm text-slate-400">
              Shop confidently with a secure experience.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-3.5">
            <Headset className="h-6 w-6 text-cyan-400" />
          </div>
          <div>
            <h3 className="font-semibold">Here When You Need Us</h3>
            <p className="mt-1 text-sm text-slate-400">
              We're here to help make shopping easier.
            </p>
          </div>
        </div>

      </div>

      {/* Decorative Shopping Card */}
      <div className="relative mt-12 max-w-md overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">

        <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-emerald-400/10 blur-3xl" />

        <div className="relative flex items-center gap-5">
          <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/20 to-emerald-400/20">
            <ShoppingBag className="h-10 w-10 text-emerald-400" />
          </div>

          <div>
            <p className="text-sm text-slate-400">
              A world of products
            </p>
            <h3 className="mt-1 text-xl font-semibold">
              Endless Possibilities.
            </h3>
            <p className="mt-2 text-sm text-emerald-400">
              Find something you'll love →
            </p>
          </div>
        </div>
      </div>

    </section>

    {/* Right Section — Login Form */}
    <section className="mx-auto w-full max-w-md mb-40">

      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-7 shadow-2xl shadow-blue-950/30 backdrop-blur-2xl sm:p-10">

        {/* Card Glow */}
        <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-emerald-500/10 blur-3xl" />

        <div className="relative">

          {/* Heading */}
          <div className="mb-5 text-center">

            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-emerald-400/20 bg-gradient-to-br from-blue-500/20 to-emerald-400/20 shadow-lg shadow-emerald-500/5">
              <ShoppingBag className="h-8 w-8 text-emerald-400" />
            </div>

            <h2 className="text-3xl font-bold tracking-tight">
              Welcome Back
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-400">
              Sign in to your account and continue shopping.
            </p>
          </div>

          {/* Login Form */}
          <form
            onSubmit={handleSubmit((data)=>{
              console.log(data);
              loginForm(data)
               reset()
            })}
            className="space-y-5"
          >
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-slate-300"
              >
                Email Address
              </label>

              <div className="group flex items-center gap-3 rounded-xl border border-white/10 bg-black/20 px-4 transition focus-within:border-emerald-400/60 focus-within:ring-2 focus-within:ring-emerald-400/10">
                <Mail className="h-5 w-5 shrink-0 text-slate-500 transition group-focus-within:text-emerald-400" />

                <input
                  id="email"
                  type="email"
                  name="email"
                  {...register("email", {
                    required : "Email is required",
                    pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid Email address"
                   }
                  })}
                  placeholder="you@example.com"
                  autoComplete="email"
                  className="w-full bg-transparent py-4 text-sm text-white outline-none placeholder:text-slate-600"
                />
              </div>
              
              {errors.email && ( 
                <p className="text-red-600 font-bold">{errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <div className="mb-2 flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-slate-300"
                >
                  Password
                </label>

                <button
                  type="button"
                  className="text-xs font-medium text-emerald-400 transition hover:text-emerald-300"
                >
                  Forgot password?
                </button>
              </div>

              <div className="group flex items-center gap-3 rounded-xl border border-white/10 bg-black/20 px-4 transition focus-within:border-emerald-400/60 focus-within:ring-2 focus-within:ring-emerald-400/10">
                <LockKeyhole className="h-5 w-5 shrink-0 text-slate-500 transition group-focus-within:text-emerald-400" />

                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  {...register("password",{
                    required : "Password is required",
                  })}
                  placeholder="Enter your password"
                  autoComplete="current-password"
                
                  className="w-full bg-transparent py-4 text-sm text-white outline-none placeholder:text-slate-600"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className="text-slate-500 transition hover:text-emerald-400"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
              {errors.password && (
                  <p className="text-red-600 font-bold">{errors.password.message}</p>
                )}
            </div>

            {/* Remember Me */}
            <div className="flex items-center justify-between gap-3 pt-1">
              <label className="flex cursor-pointer items-center gap-2.5 text-sm text-slate-400">
                <input
                  type="checkbox"
                  name="remember"
                  className="h-4 w-4 cursor-pointer accent-emerald-400"
                />
                Remember me
              </label>

              <span className="text-xs text-slate-500">
                Secure login
              </span>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-400 py-4 font-semibold text-white shadow-lg shadow-blue-500/20 transition duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-emerald-500/20 active:translate-y-0"
            >
              Sign In
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>

          </form>

          {/* Divider */}
          <div className="my-7 flex items-center gap-4">
            <div className="h-px flex-1 bg-white/10" />
            <span className="text-xs text-slate-500">
              YOUR SHOPPING JOURNEY STARTS HERE
            </span>
            <div className="h-px flex-1 bg-white/10" />
          </div>

          {/* Register Link */}
          <p className="text-center text-sm text-slate-400">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="font-semibold text-emerald-400 transition hover:text-emerald-300"
            >
              Create one <ArrowRight className="ml-1 inline h-4 w-4" />
            </Link>
          </p>

        </div>
      </div>

      <p className="mt-6 text-center text-xs leading-6 text-slate-500">
        By continuing, you agree to our{" "}
        <a href="#" className="text-slate-400 transition hover:text-emerald-400">
          Terms of Service
        </a>{" "}
        and{" "}
        <a href="#" className="text-slate-400 transition hover:text-emerald-400">
          Privacy Policy
        </a>.
      </p>

    </section>
  </main>
</div>


);
};

export default LoginPage;
