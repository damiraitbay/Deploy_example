import React, { useEffect, useState } from 'react';
import { db, auth } from '../firebase';
import { collection, addDoc, onSnapshot, orderBy, query, serverTimestamp } from 'firebase/firestore';

const getChatId = (uid1, uid2) => [uid1, uid2].sort().join('_');

const PrivateChat = ({ selectedUser, onBack }) => {
  const currentUser = auth.currentUser;
  const chatId = getChatId(currentUser.uid, selectedUser.uid);

  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const q = query(collection(db, 'chats', chatId, 'messages'), orderBy('timestamp'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setMessages(snapshot.docs.map(doc => doc.data()));
    });
    return () => unsubscribe();
  }, [chatId]);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    await addDoc(collection(db, 'chats', chatId, 'messages'), {
      text: message,
      sender: currentUser.uid,
      receiver: selectedUser.uid,
      timestamp: serverTimestamp()
    });
    setMessage('');
  };

  return (
    <div>
      <button onClick={onBack}>⬅ Вернуться к списку</button>
      <h3>Чат с {selectedUser.email}</h3>
      <div style={{ maxHeight: 300, overflowY: 'auto', border: '1px solid #ccc', padding: 10, marginBottom: 10 }}>
        {messages.length === 0 && <p>Сообщений нет</p>}
        {messages.map((msg, idx) => (
          <div key={idx} style={{ textAlign: msg.sender === currentUser.uid ? 'right' : 'left' }}>
            <b>{msg.sender === currentUser.uid ? 'Вы' : selectedUser.email}:</b> {msg.text}
          </div>
        ))}
      </div>
      <form onSubmit={sendMessage}>
        <input
          value={message}
          onChange={e => setMessage(e.target.value)}
          placeholder="Введите сообщение..."
          style={{ width: '80%' }}
        />
        <button type="submit">Отправить</button>
      </form>
    </div>
  );
};

export default PrivateChat;
