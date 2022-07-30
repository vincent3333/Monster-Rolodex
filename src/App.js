import { useState, useEffect } from 'react';

import logo from './logo.svg';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

const App = () => {
  console.log('Rendered');
  const [searchField, setSearchField] = useState(''); //[value, setValue]
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => setMonsters(users));
  }, []);

  useEffect(() => {
    const newfilteredMonsters = monsters.filter( (monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    setFilteredMonsters(newfilteredMonsters);
  }, [monsters, searchField]);

  const  onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);

  }

  return (
    <div className="App">
    <h1 className='app-title'>Monsters Rolodex</h1>

    <SearchBox 
      onChangeHandler={onSearchChange} 
      placeholder='search monsters' 
      className='monster-search-box' />

      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
