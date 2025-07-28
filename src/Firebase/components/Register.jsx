import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../firebase';
import { doc, setDoc } from 'firebase/firestore';

const Register = () => {
  const [email, setEmail]     = useState('');
  const [password, setPassword] = useState('');
  const [error, setError]     = useState('');
  const [success, setSuccess]   = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await setDoc(doc(db, 'users', user.uid), {
        uid: user.uid,
        email: user.email,
        createdAt: new Date().toISOString()
      });

      setSuccess('Успешно зарегистрировано!');
      setError('');
      setEmail('');
      setPassword('');
    } catch (err) {
      setError('Ошибка регистрации: ' + err.message);
      setSuccess('');
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: 'auto' }}>
      <h2>📝 Регистрация</h2>
      <form onSubmit={handleRegister}>
        <input type="email" placeholder="Email" value={email} required onChange={e => setEmail(e.target.value)} style={{width: '100%', marginBottom: 10}} />
        <input type="password" placeholder="Пароль" value={password} required onChange={e => setPassword(e.target.value)} style={{width: '100%', marginBottom: 10}} />
        <button type="submit">Зарегистрироваться</button>
      </form>
      {error && <p style={{color: 'red'}}>{error}</p>}
      {success && <p style={{color: 'green'}}>{success}</p>}
    </div>
  );
};

export default Register;
