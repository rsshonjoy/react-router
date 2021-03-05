import { useEffect, useState } from 'react/cjs/react.development';
import './App.css';
import Friend from './components/Friend/Friend';

function App() {
  const [friends, setFriend] = useState([]);
  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) =>response.json())
    .then(data =>setFriend(data))
  }, [])
  return (
    <div>
      <h1>Friends: {friends.length}</h1>
      {
        friends.map((friend) => <Friend friend={friend}></Friend>)
      }
    </div>
  );
}

export default App;
