import React, { useEffect, useState } from 'react';
import { db, auth } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';

const UserList = ({ onSelectUser }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (currentUser) => {
      if (!currentUser) return;
      const snapshot = await getDocs(collection(db, 'users'));
      const allUsers = snapshot.docs.map(doc => doc.data());
      const filtered = allUsers.filter(user => user.uid !== currentUser.uid);
      setUsers(filtered);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      <h3>Выберите пользователя:</h3>
      {users.length === 0 && <p>Пользователей нет</p>}
      {users.map(user => (
        <div key={user.uid}>
          <button onClick={() => onSelectUser(user)}>{user.email}</button>
        </div>
      ))}
    </div>
  );
};

export default UserList;
