import React, { useEffect, useState } from 'react';

const People = () => {
  const [peopleResult, setPeopleResult] = useState([]);
  const [loading, setLoading] = useState(true);

  const getPeople = () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve([
          { id: 1, name: 'James Bond' },
          { id: 2, name: 'James Dean' },
          { id: 3, name: 'Bruce Wayne' }
        ]);
      }, 2000);
    });
  };

  useEffect(() => {
    const callGetPeople = async () => {
      try {
        const result = await getPeople();
        setPeopleResult(result);
        setLoading(false);
      } catch (err) {
        console.error('Got error', err);
      }
    };

    callGetPeople();
  }, []);

  useEffect(() => {
    const title = peopleResult[peopleResult.length - 1]?.title || '';
    if (title) {
      console.log('title', title);
    }
  }, [peopleResult.length]);

  const addPerson = () => {
    const newPerson = {
      id: 4,
      name: 'Tom Cruize',
      title: 'actor'
    };

    setPeopleResult([...peopleResult, newPerson]);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="people-wrapper">
      {peopleResult.map((person, index) => (
        <div className="person" key={`person_${index}`}>
          <div>Id: {person.id}</div>
          <div>Name: {person.name}</div>
        </div>
      ))}

      <button onClick={addPerson}>Add person</button>
    </div>
  );
};

export default People;
