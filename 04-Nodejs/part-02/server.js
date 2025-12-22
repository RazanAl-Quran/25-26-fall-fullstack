import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";
// import userRoutes from 'routes/userRoutes.js';

const app = express();
dotenv.config();
const PORT = process.env.PORT;

// middlewares
app.use(cors()); // open for everyone

// app.use(cors({
//   origin: 'http://localhost:5173' // only allow my React app
// }));


// Routes
// localhost:3000/api/users
app.use("/api/users",userRoutes);


// end points
// req url >> localhost:3000/
app.get('/', (req, res) => {
    res.send("home route is alive!!")
})


// req url >> localhost:3000/test
app.get('/test', (req, res) => {
    res.json({ test: "test test" })

})



app.use((req, res) => {
    res.status(404).json({ message: "🚫 Route not found" });
});


app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);

});


