import React, { useState } from 'react';
import CityList from './CityList';
import '../styles/StateList.css';

function StateList({ country, updateCountry }) {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const addState = () => {
    const stateName = prompt('Enter state name:');
    if (stateName) {
      updateCountry({ ...country, states: [...country.states, { name: stateName, cities: [] }] });
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
            <button onClick={() => deleteState(index)}>Delete</button>
            </div>
            </div>
            <div>
            {expandedIndex === index && <CityList state={state} />}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StateList;
