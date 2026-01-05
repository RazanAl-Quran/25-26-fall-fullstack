import React from 'react';
import { useState } from 'react';

const AddUserForm = ({ onAdd }) => {

    const [name, setName] = useState("");
    const [age, setAge] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd({ name, age });
        // onAdd({  name, "age": pasrseInt(age) });
        setName("");
        setAge("");

    }


    return (
        <div>
            <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
                <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="number" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} style={{ marginLeft: "10px" }} />
                <button type="submit" style={{ marginLeft: "10px" }}>Add User</button>
            </form>
        </div>
    );
}

export default AddUserForm;
