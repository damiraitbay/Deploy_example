import React from 'react'

const FeedbackList = ({ feedbacks }) => {
  if (feedbacks.length === 0) return <p className="empty">Әлі пікір жоқ.</p>

  return (
    <ul className="feedback-list">
      {feedbacks.map((item) => (
        <li key={item.id}>
          <h3>{item.name}</h3>
          <p>{item.comment}</p>
          <p className="rating">Баға: <strong>{item.rating} / 5</strong></p>
        </li>
      ))}
    </ul>
  )
}

export default FeedbackList
