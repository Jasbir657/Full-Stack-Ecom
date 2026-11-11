import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router"
import LoadingPage from "../Shared/LoadingPage";

const MainProtected = () => {
  

  let {isAuthenticated , isLoading } = useSelector((state) => state.auth);  
  

if(isLoading){
  return <LoadingPage/>
}

if(isAuthenticated){
    
  return <Navigate to={"/home"}/>
}

  return (
    <div>
        <Outlet/>
    </div>
  )
}

export default MainProtected