import express from "express"
import authRouter from "../Routes/router.js"
import cookieparser from "cookie-parser"
import productRoutes from "../Routes/Product.route.js"
import addToCartRouter from "../Routes/Cart.route.js"
import cors from "cors"

const app = express()

app.use(express.json())
app.use(cookieparser())
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));

app.use("/api/auth" , authRouter)

app.use("/api/products" , productRoutes)

app.use("/api/addToCart" ,  addToCartRouter)

export default app
