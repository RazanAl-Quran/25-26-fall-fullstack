import express from "express";
import dotenv from "dotenv";

const app = express();
dotenv.config();

const PORT = process.env.PORT;

// Endpoints
// localhost:5000/
app.get('/',(request,response)=>{
    response.send("Server is alive");
})

// localhost:5000/test
app.get('/test',(request,response)=>{
    response.json({ test: "test test" })
})


// Not found Route
app.use((req,res)=>{
    res.status(404).json({ message: "🚫 Route not found" });
})



app.listen(PORT,()=>{
    console.log(`Listening on PORT ${PORT}`);
});