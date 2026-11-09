import { Link } from "react-router";
import {
ShoppingBag,
User,
Mail,
LockKeyhole,
Eye,
EyeOff,
ArrowRight,
ShieldCheck,
Sparkles,
} from "lucide-react";
import useAuthHook from "../../hooks/useAuth";
import { handleRegister } from "../../api/AuthApi";

const RegisterPage = () => {

const {register , handleSubmit , errors, reset, showPassword, setShowPassword, showConfirmPassword, setShowConfirmPassword} = useAuthHook()


return ( <div className="relative min-h-screen overflow-hidden bg-[#030712] text-white">

  {/* Background Glows */}
  <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-600/20 blur-[130px]" />
  <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-emerald-500/20 blur-[130px]" />

  {/* Navbar */}
  <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-7 lg:px-12">

    <Link to="/" className="flex items-center gap-3">
      <div className="rounded-xl border border-emerald-400/30 bg-emerald-400/10 p-2.5">
        <ShoppingBag className="h-7 w-7 text-emerald-400" />
      </div>

      <div>
        <h1 className="text-2xl font-bold tracking-tight">
          Shop<span className="text-emerald-400">Verse</span>
        </h1>
        <p className="text-xs tracking-wide text-slate-400">
          SHOP SMARTER. LIVE BETTER.
        </p>
      </div>
    </Link>

    <div className="hidden items-center gap-2 text-sm sm:flex">
      <span className="text-slate-400">Already a member?</span>
      <Link
        to="/"
        className="font-semibold text-emerald-400 transition hover:text-emerald-300"
      >
        Sign in <ArrowRight className="ml-1 inline h-4 w-4" />
      </Link>
    </div>
  </nav>

  {/* Main Content */}
  <main className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 px-6 pb-16 pt-6 lg:grid-cols-2 lg:gap-20 lg:px-12 lg:pb-20 lg:pt-8">

    {/* Left Section */}
    <section className="hidden lg:block">

      <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-4 py-2 text-sm text-emerald-300">
        <Sparkles className="h-4 w-4" />
        Your shopping journey begins here
      </div>

      <h2 className="max-w-xl text-5xl font-bold leading-tight xl:text-6xl">
        Discover More.
        <span className="mt-2 block bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">
          Shop Better.
        </span>
        Live Smarter.
      </h2>

      <p className="mt-6 max-w-lg text-lg leading-8 text-slate-400">
        Create your account and unlock a world of amazing products,
        exciting discoveries, and a shopping experience made for you.
      </p>

      {/* Benefits */}
      <div className="mt-12 space-y-7">

        <div className="flex items-center gap-4">
          <div className="rounded-2xl border border-blue-400/20 bg-blue-400/10 p-3.5">
            <ShoppingBag className="h-6 w-6 text-blue-400" />
          </div>
          <div>
            <h3 className="font-semibold">Everything in One Place</h3>
            <p className="mt-1 text-sm text-slate-400">
              Explore products that fit your lifestyle.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-3.5">
            <ShieldCheck className="h-6 w-6 text-emerald-400" />
          </div>
          <div>
            <h3 className="font-semibold">Shopping Made Secure</h3>
            <p className="mt-1 text-sm text-slate-400">
              Your account deserves a secure experience.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-3.5">
            <User className="h-6 w-6 text-cyan-400" />
          </div>
          <div>
            <h3 className="font-semibold">A Personalized Experience</h3>
            <p className="mt-1 text-sm text-slate-400">
              Make your next shopping experience yours.
            </p>
          </div>
        </div>

      </div>

      {/* Decorative Card */}
      <div className="relative mt-12 max-w-md overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">

        <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-emerald-400/10 blur-3xl" />

        <div className="relative flex items-center gap-5">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/20 to-emerald-400/20">
            <Sparkles className="h-8 w-8 text-emerald-400" />
          </div>

          <div>
            <p className="text-sm text-slate-400">
              A new beginning
            </p>
            <h3 className="mt-1 text-xl font-semibold">
              Your World of Shopping.
            </h3>
            <p className="mt-2 text-sm text-emerald-400">
              Create. Discover. Enjoy.
            </p>
          </div>
        </div>
      </div>

    </section>

    {/* Right Section — Registration Form */}
    <section className="mx-auto w-full max-w-md">

      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-7 shadow-2xl shadow-blue-950/30 backdrop-blur-2xl sm:p-9">

        {/* Card Glows */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-emerald-500/10 blur-3xl" />

        <div className="relative">

          {/* Heading */}
          <div className="mb-7 text-center">

            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-emerald-400/20 bg-gradient-to-br from-blue-500/20 to-emerald-400/20">
              <User className="h-7 w-7 text-emerald-400" />
            </div>

            <h2 className="text-3xl font-bold tracking-tight">
              Create Account
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-400">
              Join ShopVerse and start exploring.
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit((data)=>{
              handleRegister(data)
              console.log(data);
              reset()
            })}
            className="space-y-4"
          >

            {/* Full Name */}
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-slate-300"
              >
                Full Name
              </label>

              <div className="group flex items-center gap-3 rounded-xl border border-white/10 bg-black/20 px-4 transition focus-within:border-emerald-400/60 focus-within:ring-2 focus-within:ring-emerald-400/10">
                <User className="h-5 w-5 shrink-0 text-slate-500 transition group-focus-within:text-emerald-400" />

                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  autoComplete="name"
                  {...register("name",{
                    required : "Name is required",
                    minLength : 2
                  })}
                  minLength={2}
                  className="w-full bg-transparent py-3.5 text-sm text-white outline-none placeholder:text-slate-600"
                />
              </div>
              {errors.name && (<p className="text-red-700 font-bold">
                {errors.name.message}</p>)}
            </div>

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
                  className="w-full bg-transparent py-3.5 text-sm text-white outline-none placeholder:text-slate-600"
                />
              </div>
              {errors.email && (<p className="text-red-700 font-bold">
                {errors.email.message}</p>)}
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-medium text-slate-300"
              >
                Password
              </label>

              <div className="group flex items-center gap-3 rounded-xl border border-white/10 bg-black/20 px-4 transition focus-within:border-emerald-400/60 focus-within:ring-2 focus-within:ring-emerald-400/10">
                <LockKeyhole className="h-5 w-5 shrink-0 text-slate-500 transition group-focus-within:text-emerald-400" />

                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Create a password"
                  autoComplete="new-password"
                  {...register("password",{
                    required : "Password is required",
                    pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
                    message: 'Password must be at least 6 characters long and include an uppercase letter, lowercase letter, number, and special character',
                    },
                  })}
                  className="w-full bg-transparent py-3.5 text-sm text-white outline-none placeholder:text-slate-600"
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
              {errors.password && (<p className="text-red-700 font-bold">
                {errors.password.message}</p>)}
            </div>

            {/* Confirm Password */}
            <div>
              <label
                htmlFor="confirmPassword"
                className="mb-2 block text-sm font-medium text-slate-300"
              >
                Confirm Password
              </label>

              <div className="group flex items-center gap-3 rounded-xl border border-white/10 bg-black/20 px-4 transition focus-within:border-emerald-400/60 focus-within:ring-2 focus-within:ring-emerald-400/10">
                <LockKeyhole className="h-5 w-5 shrink-0 text-slate-500 transition group-focus-within:text-emerald-400" />

                <input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="Confirm your password"
                  autoComplete="new-password"
                  {...register("confirmpassword",{
                    required : "Password is required",
                    pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
                    message: 'Password must be at least 6 characters long and include an uppercase letter, lowercase letter, number, and special character',
                    },
                  })}
                  className="w-full bg-transparent py-3.5 text-sm text-white outline-none placeholder:text-slate-600"
                />

                <button
                  type="button"
                  onClick={() => setShowConfirmPassword((prev) => !prev)}
                  aria-label={showConfirmPassword ? "Hide password" : "Show password"}
                  className="text-slate-500 transition hover:text-emerald-400"
                >
                  {showConfirmPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
              {errors.confirmpassword && (<p className="text-red-700 font-bold">
                {errors.confirmpassword.message}</p>)}
            </div>

            {/* Terms */}
            <label className="flex cursor-pointer items-start gap-3 py-1 text-xs leading-5 text-slate-400">
              <input
                type="checkbox"
                name="terms"
                required
                className="mt-1 h-4 w-4 shrink-0 cursor-pointer accent-emerald-400"
              />
              <span>
                I agree to the{" "}
                <a
                  href="#"
                  className="font-medium text-emerald-400 hover:text-emerald-300"
                >
                  Terms of Service
                </a>{" "}
                and{" "}
                <a
                  href="#"
                  className="font-medium text-emerald-400 hover:text-emerald-300"
                >
                  Privacy Policy
                </a>.
              </span>
            </label>

            {/* Submit */}
            <button
              type="submit"
              className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-400 py-3.5 font-semibold text-white shadow-lg shadow-blue-500/20 transition duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-emerald-500/20 active:translate-y-0"
            >
              Create Account
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>

          </form>

          {/* Login Link */}
          <p className="mt-6 text-center text-sm text-slate-400">
            Already have an account?{" "}
            <Link
              to="/"
              className="font-semibold text-emerald-400 transition hover:text-emerald-300"
            >
              Sign in <ArrowRight className="ml-1 inline h-4 w-4" />
            </Link>
          </p>

        </div>
      </div>

      {/* Security Note */}
      <p className="mt-5 flex items-center justify-center gap-2 text-xs text-slate-500">
        <ShieldCheck className="h-4 w-4 text-emerald-400" />
        Your information deserves to stay secure.
      </p>

    </section>
  </main>
</div>


);
};

export default RegisterPage;
