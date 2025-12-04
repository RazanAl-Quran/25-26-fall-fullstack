import React from 'react';

const PeopleList = ({ people }) => {
  return (
    <div>
      <ul>
        {people.map((person, idx) => {
          const emoji = person.gender === "Male" ? "👨" : "👩";
          return (
          <li>
            {emoji} <strong>{person.username}</strong> — Height: {person.height}, Favorite Pet: {person.favoritePet}
          </li>
        );
        })}
      </ul>
    </div>
  );
}

export default PeopleList;
