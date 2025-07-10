import React, { useState } from 'react'

const FeedbackForm = ({ onAdd }) => {
  const [name, setName] = useState('')
  const [comment, setComment] = useState('')
  const [rating, setRating] = useState('5') // default

  const handleSubmit = (e) => {
    e.preventDefault()
    if (name.trim() && comment.trim()) {
      onAdd({ id: Date.now(), name, comment, rating })
      setName('')
      setComment('')
      setRating('5')
    }
  }

  return (
    <form className="feedback-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Атыңыз"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <textarea
        placeholder="Пікіріңізді жазыңыз..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      ></textarea>

      <label>
        Баға (1-5): 
        <select value={rating} onChange={(e) => setRating(e.target.value)}>
          <option value="1">1 - Нашар</option>
          <option value="2">2 - Орташа</option>
          <option value="3">3 - Жақсы</option>
          <option value="4">4 - Өте жақсы</option>
          <option value="5">5 - Керемет</option>
        </select>
      </label>

      <button type="submit">Жіберу</button>
    </form>
  )
}

export default FeedbackForm
