import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router"


const AdminOnly = () => {


    const auth = useSelector((state)=>state.auth)


    console.log("Auth State:", auth)
    console.log("User:", auth.user)
    console.log("Role:", auth.user?.role)

    const{user} = auth

    if (!user) {
        return <Navigate to={"/"}  />
    }

    if(auth.user.data.user.role !== "seller"){
        return <Navigate to={"/home"}/>
    }

  return <Outlet/>
}

export default AdminOnly