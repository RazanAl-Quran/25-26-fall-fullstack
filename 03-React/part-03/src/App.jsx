import { useEffect, useState } from "react";
import PeopleList from "./PeopleList";
import PeopleForm from "./PeopleForm";
import Digimons from "./Digimons";

function App() {
  const [people, setPeople] = useState([]);

  const addPerson = (newPerson) => {
    setPeople([...people, newPerson]);
  }


  // Mounting >>> First Render
  useEffect(() => {
    console.log("I have been called on First Render (Mounting)");

  }, []);

  // Updating >>> F
  useEffect(() => {
    console.log("I have been called on every change on people state");
  }, [people]);


  // Unmounting
  useEffect(() => {
    return () => {
      console.log("🧹 cleanup: runs on UNMOUNT");
    };
  });

  
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <PeopleForm addPerson={addPerson} />
      <PeopleList people={people} />
      <Digimons/>
    </div>
  );
}

export default App;