import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const FriendDetail = (props) => {
  const { friendId } = useParams();
  const [ friend, setFriend ] = useState({});
  useEffect (() => {
    const url =`https://jsonplaceholder.typicode.com/users/${friendId}`;
    fetch(url)
    .then((response) => response.json())
    .then(data => setFriend(data))
  }, [])
  // const {name, email } = props.friend;

  return (
    <div>
      <i>This is friend detail Component: {friendId}</i>
      <h3>Name: {friend.name}</h3>
      <p>E-mail: {friend.email}</p>
      <p>Phone: {friend.phone}</p>
      <p>Website: {friend.website}</p>
    </div>
  );
};

export default FriendDetail;