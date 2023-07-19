import { h } from 'preact';
import axios from 'axios';

const HTTPComponent = () => {
  const makeRequest = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      console.log('Response:', response.data);
    } catch (error) {
      //console.error('Error:', error);
    }
  };

  return (
    <div>
      <button onClick={makeRequest}>Make Request</button>
    </div>
  );
};

export default HTTPComponent;