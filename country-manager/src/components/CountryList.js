import React, { useState } from 'react';
import StateList from './StateList';
import '../styles/CountryList.css';

function CountryList({ countries, setCountries }) {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const addCountry = () => {
    const countryName = prompt('Enter country name:');
    if (countryName) {
      setCountries([...countries, { name: countryName, states: [] }]);
    }
  };

  const editCountry = (index) => {
    const newName = prompt('Enter new country name:', countries[index].name);
    if (newName && window.confirm(`Are you sure you want to rename this country to "${newName}"?`)) {
      const newCountries = [...countries];
      newCountries[index].name = newName;
      setCountries(newCountries);
    }
  };
  

  const deleteCountry = (index) => {
    if (window.confirm('Are you sure you want to delete this country?')) {
      setCountries(countries.filter((_, i) => i !== index));
    }
  };

  return (
    <div className="country-container">
      <h1 className='manager-heading'>Country, State, and City Manager</h1>
      <button onClick={addCountry}>Add Country</button>
      <ul className="country-list">
        {countries.map((country, index) => (
          <li key={index} className="country-item">

            <div className='country-item-in'>
            <h3>{country.name}</h3>
            <div>
            <button onClick={() => toggleExpand(index)}>
              {expandedIndex === index ? "Collapse" : "Expand"}
            </button>
            <button onClick={() => editCountry(index)}>Edit</button>
            <button onClick={() => deleteCountry(index)}>Delete</button>
            </div>
            </div>
            {expandedIndex === index && (
              <StateList
                country={country}
                updateCountry={(updatedCountry) => {
                  const newCountries = [...countries];
                  newCountries[index] = updatedCountry;
                  setCountries(newCountries);
                }}
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CountryList;
