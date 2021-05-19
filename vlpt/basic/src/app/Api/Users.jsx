import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Users() {
  // API로 요청을 할 때 3가지 상태 관리
  // 요청의 결과
  const [users, setUsers] = useState([]);
  // 로딩 상태
  const [loading, setLoading] = useState(false);
  // 에러
  const [error, setError] = useState();

  useEffect(() => {
    setError(null);
    setLoading(true);
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
      });
  }, []);

  if (error) {
    return <div>에러!</div>;
  }

  if (loading) {
    return <div>로딩 중..</div>;
  }

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>
          {user.username} ({user.name})
        </li>
      ))}
    </ul>
  );

};

export default Users;