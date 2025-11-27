// import { log } from "console";
import { useState } from "react";

function People() {

    const [username, setUsername] = useState("");
    const [height, setHeight] = useState("");
    const [favoritePet, setFavoritePet] = useState("");
    const [gender, setGender] = useState("");

    const [people, setPeople] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newPerson = {
            username,
            height,
            favoritePet,
            gender,
        };

        console.log(newPerson);
        // setPeople(people.push(newPerson));

        setPeople([...people, newPerson]);

        // console.log(people);

        setUsername("");
        setHeight("");
        setFavoritePet("");
        setGender("");

    }




    return (
        <div style={{ textAlign: "center", marginTop: "40px" }}>
            <hr style={{ margin: "30px 0" }} />
            <h1>🚀 React Form </h1>

            <h2>Add a Person</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" value={username}
                    onChange={(e) => setUsername(e.target.value)} />

                <input type="text" placeholder="Height" value={height} style={{ marginLeft: "10px" }}
                    onChange={(e) => setHeight(e.target.value)} />

                <input type="text" placeholder="Favorite Pet" value={favoritePet} style={{ marginLeft: "10px" }}
                    onChange={(e) => setFavoritePet(e.target.value)}

                />

                <select value={gender} style={{ marginLeft: "10px" }}
                    onChange={(e) => setGender(e.target.value)}
                >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>

                <button type="submit" style={{ marginLeft: "10px" }}>
                    Add Person
                </button>
            </form>


            <ul>
                {people.map((item, idx) => {
                    return (
                        <li key={idx}>{item.username}</li>
                    )
                })}
            </ul>
        </div>
    );
}

export default People;
