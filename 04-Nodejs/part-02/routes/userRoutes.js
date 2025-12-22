import express from "express";

const userRoutes = express.Router();


let users = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 }
];


// req url >> // localhost:3000/api/users/ >> GET
userRoutes.get('/', (req, res) => {
    // send req to DB to get all users
    res.send(users);
})


// req url >> // localhost:3000/api/users/2 >> GET
userRoutes.get('/:id', (req, res) => {
    // send req to DB to get user with id 2

    const userid = req.params.id;
    const user = users.find((user) => {
        if (user.id == userid) {
            return user;
        }
    });

    if(user) {
        res.send(user)
    } else {
        res.send('user not found');
    }


})


export default userRoutes;