const fetchPeople = () => {
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

  export default fetchPeople;

