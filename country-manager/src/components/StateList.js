import React, { useState } from 'react';
import CityList from './CityList';
import '../styles/StateList.css';

function StateList({ country, updateCountry }) {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const updateState = (index, updatedState) => {
    const newStates = [...country.states];
    newStates[index] = updatedState;
    updateCountry({ ...country, states: newStates });
  };

  const addState = () => {
    const stateName = prompt('Enter state name:');
    if (stateName) {
      updateCountry({ ...country, states: [...country.states, { name: stateName, cities: [] }] });
    }
  };

  const editState = (index) => {
    const newName = prompt('Enter new state name:', country.states[index].name);
    if (newName && window.confirm(`Are you sure you want to rename this state to "${newName}"?`)) {
      const newStates = [...country.states];
      newStates[index].name = newName;
      updateCountry({ ...country, states: newStates });
    }
  };
  

  const deleteState = (index) => {
    if (window.confirm('Are you sure you want to delete this state?')) {
      updateCountry({ ...country, states: country.states.filter((_, i) => i !== index) });
    }
  };

  return (
    <div className="state-container">
        <div className='state-top-container'>
      <h3>States</h3>
      <button onClick={addState}>Add State</button>
      </div>
      <ul className="state-list">
        {country.states.map((state, index) => (
          <li key={index} className="state-item">
            <div className='state-item-in'>
            <h3>{state.name}</h3>
            <div>
            <button onClick={() => toggleExpand(index)}>
              {expandedIndex === index ? "Collapse" : "Expand"}
            </button>
            <button onClick={() => editState(index)}>Edit</button>
            <button onClick={() => deleteState(index)}>Delete</button>
            </div>
            </div>
            <div className='cityList-container'>
            {expandedIndex === index && <CityList state={state}  updateState={(updatedState) => updateState(index, updatedState)}/>}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StateList;
