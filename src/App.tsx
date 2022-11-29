import React, { useState } from 'react';
import AddToList from './components/AddToList';
import List from './components/List';


export interface StateType {
  people: {
    name: string,
    age: number,
    url: string,
    note: string
  }[]
}

const App = () => {
  const [people, setPeople] = useState<StateType["people"]>([{
    name: 'Brad Pit',
    age: 47,
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUiE65Lt-WwpwYCFVEjMfLDuy0k2U6NLB13A&usqp=CAU',
    note: 'Hi im Brad Pit'
  }])

  
  return (
      <div id="App">
        <h1>People invited to my Party</h1>
        <List people={people} />
        <AddToList people={people} setPeople={setPeople} />
      </div>
  );
}

export default App;
