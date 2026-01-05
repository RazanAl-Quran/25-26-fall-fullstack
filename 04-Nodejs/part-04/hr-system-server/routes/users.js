import express from "express";
import pgClient from "../db.js";

const userRoutes = express.Router();

// localhost:5000/api/users
// GET
userRoutes.get("/", async (req, res) => {
    try {
        const result = await pgClient.query("SELECT * FROM users");
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ error: "Internal server error" });
    }
});

// localhost:5000/api/users/5
// GET
userRoutes.get("/:id", async (req, res) => {
    try {
        const result = await pgClient.query("SELECT * FROM users WHERE id = $1", [req.params.id]);
        if (result.rows.length === 0) {
            res.status(404).json({ message: "User not found" });
        }
        res.json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: "Internal server error" });
    }
});


// localhost:5000/api/users/
// POST
// body {name: , age: }

userRoutes.post("/", async (req, res) => {
    const { name, age } = req.body;
    // const name = req.body.name;
    // const age=req.body.age;
    console.log(req.body);

    try {
        const result = await pgClient.query(
            "INSERT INTO users (name, age) VALUES ($1, $2) RETURNING *", [name, age]
        );
        console.log(result.rows);

        res.status(200).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err });
    }

})

userRoutes.delete("/:id" ,async (req, res) => {
    try {
        const result = await pgClient.query("DELETE FROM users WHERE id = $1 RETURNING *", [req.params.id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ message: "User not found" });
        }
        res.json({ message: "User deleted", user: result.rows[0] });
    } catch (err) {
        res.status(500).json({ error: "Internal server error" });
    }
});

userRoutes.put("/:id", async (req, res) => {
    const { name, age } = req.body;
    try {
        const result = await pgClient.query("UPDATE users SET name = $1, age = $2 WHERE id = $3 RETURNING *",
            [name, age, req.params.id]
        );
        if (result.rows.length === 0) {
          return res.status(404).json({ message: "User not found" });
        }
        console.log(result.rows);

        res.json(result.rows[0]);
    } 
    catch (err) {
        res.status(500).json({ error: "Internal server error" });
    }
});


export default userRoutes;
