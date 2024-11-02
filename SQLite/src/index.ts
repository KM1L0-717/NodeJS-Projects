import express from "express";
import cors from "cors";
import studentRoutes from "./routes/studentRoutes"
import "reflect-metadata"
import { createConnection } from "typeorm";
import { error } from "console";

//Declare
const app = express();
const port = 3000;
createConnection().then(result=>{}).catch(error=>{console.error(error)})

//middleWare
app.use(cors());
app.use(express.json());

//routes
app.use("/api-v1", studentRoutes)

app.listen(port, ()=>{
    console.log(`Listener Server http://localhost:${port}`);
})