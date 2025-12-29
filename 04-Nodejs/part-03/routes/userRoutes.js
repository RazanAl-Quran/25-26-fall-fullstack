import express from "express";
import pgclient from "../db.js";


const userRoutes = express.Router();


// req url >> // localhost:3000/api/users/ >> GET
userRoutes.get('/', async (req, res) => {
    try {
        const result = await pgclient.query("SELECT * FROM users");
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ error: "error in getting the users data" });
    }

})


// req url >> // localhost:3000/api/users/2 >> GET
userRoutes.get('/:id', async (req, res) => {
    try {
        const result = await pgclient.query("SELECT * FROM users WHERE id = $1", [req.params.id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ message: "User not found" });
        }
        res.json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: "Internal server error" });
    }


})

// req url >> // localhost:3000/api/users/ >> POST 

// POST ==>> {name:"Sherry", age:"7"}
userRoutes.post('/', async(req, res) => {
    // 1- get the new user's data from the post
    const { name, age } = req.body; //object destructuring
    // const name = req.body.name;

    // 2- send a req to db to insert these data
    try {
        const result = await pgclient.query(
            "INSERT INTO users (name, age) VALUES ($1, $2) RETURNING *", [name, age] 
        );
        // send a response with all users again with the new user data
        res.status(201).json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err });
    }
})


export default userRoutes;