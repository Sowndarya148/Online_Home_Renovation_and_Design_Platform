

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/'; // cors-anywhere proxy URL

const DataComponent = () => {
  const [data, setData] = useState([]);

  // Fetch data from the backend when the component mounts
  useEffect(() => {
    fetchData();
  }, []);

  // Function to fetch data from the backend
  const fetchData = async () => {
    try {
      const response = await axios.get(`${CORS_PROXY}http://homerenovationn.com/api/data`);
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Function to add data to the backend
  const addData = async () => {
    try {
      const newData = 'New Data'; // Replace 'New Data' with the data you want to add
      await axios.post(`${CORS_PROXY}http://your-backend-domain.com/api/data`, { data: newData });
      fetchData(); // After adding data, fetch updated data from the backend
    } catch (error) {
      console.error('Error adding data:', error);
    }
  };

  return (
    <div>
      <h1>Sample Frontend</h1>
      <button onClick={fetchData}>Fetch Data</button>
      <button onClick={addData}>Add Data</button>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default DataComponent;
