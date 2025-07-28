import React, { useEffect, useState } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from './firebase';

import Register from './components/Register';
import Login from './components/Login';
import UserList from './components/UserList';
import PrivateChat from './components/PrivateChat';

const App = () => {
  const [user, setUser] = useState(null);
  const [isRegistering, setIsRegistering] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, setUser);
    return () => unsubscribe();
  }, []);

  if (!user) {
    return (
      <div style={{ maxWidth: 400, margin: 'auto' }}>
        {isRegistering ? (
          <>
            <Register />
            <p>Есть аккаунт? <button onClick={() => setIsRegistering(false)}>Войти</button></p>
          </>
        ) : (
          <>
            <Login />
            <p>Нет аккаунта? <button onClick={() => setIsRegistering(true)}>Регистрация</button></p>
          </>
        )}
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 600, margin: 'auto' }}>
      <button onClick={() => signOut(auth)} style={{ marginBottom: 10 }}>Выйти</button>
      {selectedUser ? (
        <PrivateChat selectedUser={selectedUser} onBack={() => setSelectedUser(null)} />
      ) : (
        <UserList onSelectUser={setSelectedUser} />
      )}
    </div>
  );
};

export default App;
