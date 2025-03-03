import React from 'react';
import '../styles/CityList.css';

function CityList({ state, updateState }) {
  const addCity = () => {
    const cityName = prompt('Enter city name:');
    if (cityName) {
      updateState({ ...state, cities: [...state.cities, cityName] });
    }
  };

  const deleteCity = (index) => {
    if (window.confirm('Are you sure you want to delete this city?')) {
      updateState({ ...state, cities: state.cities.filter((_, i) => i !== index) });
    }
  };

  return (
    <div className="city-container">
     <div>
      <h4>Cities</h4>
      <button onClick={addCity}>Add City</button>
      </div>
      <ul className="city-list">
        {state.cities.map((city, index) => (
          <li key={index} className="city-item">
            {city}
            <button onClick={() => deleteCity(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CityList;
