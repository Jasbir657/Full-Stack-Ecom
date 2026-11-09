import { config } from "dotenv";
import app from "./Src/app/app.js";
import connectDb from "./Src/config/db.js";

await connectDb()

app.listen(config.PORT , ()=>{
    console.log("Server is running on port 3000");
    
})

