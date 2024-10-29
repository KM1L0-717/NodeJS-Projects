import express from "express";
import cors from "cors";
import studentRoutes from "./routes/studentRoutes"

//Declare
const app = express();
const port = 3000;

//middleWare
app.use(cors());
app.use(express());

//routes
app.use("/api-v1", studentRoutes)

app.listen(port, ()=>{
    console.log(`Listener Server http://localhost:${port}`);
})