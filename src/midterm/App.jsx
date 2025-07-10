import React, { useState } from 'react'
import FeedbackForm from './FeedbackForm'
import FeedbackList from './FeedbackList'
import './App.css'

const App = () => {
  const [feedbacks, setFeedbacks] = useState([])

  const addFeedback = (newFeedback) => {
    setFeedbacks([newFeedback, ...feedbacks])
  }

  return (
    <div className="app">
      <h1>📢 Student Feedback App</h1>
      <FeedbackForm onAdd={addFeedback} />
      <FeedbackList feedbacks={feedbacks} />
    </div>
  )
}

export default App
