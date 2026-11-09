import { Link, NavLink, useNavigate } from "react-router";
import { useSelector } from "react-redux";
import {
    ShoppingBag,
    User,
    LogOut,
    Search,
    ShieldUserIcon
} from "lucide-react";

const Navbar = () => {

    // const dispatch = useDispatch();
    const navigate = useNavigate();

    const { user } = useSelector((state) => state.auth);

    const handleLogout = () => {
        navigate("/");
    };

    return (
        <nav className="w-full bg-white border-b border-gray-200">

            <div className="max-w-7xl mx-auto px-4 py-6 flex items-center justify-between">

                {/* Logo */}
                <Link to="/home" className="text-2xl font-bold text-gray-900">
                    Shop<span className="text-blue-600">Ease.</span>
                </Link>

                {/* Navigation Links */}
                <div className= "hidden md:flex items-center gap-6">

                    <NavLink to="/home" end className={({isActive})=>isActive ? "text-blue-600 transition" :  "text-gray-600 font-medium"}  >
                        Home
                    </NavLink>

                    <NavLink to="/home/products"className={({isActive})=>isActive ? "text-blue-600 transition" :  "text-gray-600 font-medium"}>
                        Products
                    </NavLink>

                    <NavLink to="/home/about" className={({isActive})=>isActive ? "text-blue-600 transition" :  "text-gray-600 font-medium"}>
                        About
                    </NavLink>
                    
                    

                </div>

                {/* Right Side */}
                <div className="flex items-center gap-7">

                    <NavLink to="/admin" className="text-gray-600 font-medium hover:text-red-600 flex items-center">
                     <ShieldUserIcon size={20}/> ADMIN
                    </NavLink>

                    <button className="relative text-gray-600 hover:text-blue-600">
                        <ShoppingBag size={22} />
                        <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                            0
                        </span>
                    </button>

                    <div className="hidden sm:flex items-center gap-2 text-gray-700">
                        <User size={20} />
                        <span className="text-sm">
                            {user?.name || "My Account"}
                        </span>
                    </div>
                    
                    
                    
                    <button
                        onClick={handleLogout}
                        className="flex items-center gap-2 text-red-500 hover:text-red-700"
                    >
                        <LogOut size={19} />
                        <span className="hidden sm:block text-sm">Logout</span>
                    </button>
                    
                </div>

            </div>

        </nav>
    );
};

export default Navbar;