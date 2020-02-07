import React, { useEffect, useState } from 'react';
import fetchPeople from '../../api/';

const People = () => {
  const [peopleResult, setPeopleResult] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      const init = async () => {
        try {
          const result = await fetchPeople();
          setPeopleResult(result);
          setLoading(false);
        } catch (err) {
          console.error('Got error', err);
        }  
      }

      init(); 
  }, []);

  const addPerson = () => {
    const newPerson = {
      id: 4,
      name: 'Tom Cruize',
      title: 'actor'
    };

    setPeopleResult([...peopleResult, newPerson]);
  };

  return loading
    ? <div>Loading..</div>
    : (
        <div className="people-wrapper">
        {peopleResult.map((person, index) => (
          <div className="person" key={`person_${index}`}>
            <div>Id: {person.id}</div>
            <div>Name: {person.name}</div>
          </div>
        ))}

        <button onClick={addPerson}>Add person</button>
      </div>
    )
};

export default People;
