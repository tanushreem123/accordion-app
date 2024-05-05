import logo from './logo.svg'
import React, { useState } from 'react'
import './App.css'
import SingleQuestion from './Question'
import data from './data'

function App() {
  const [questions, setQuestions] = useState(data)
  return (
    <main>
      <div className="App">
        <div className="container">
          <h3>questions and Answer about Login</h3>
          <section className="info">
            {questions.map((question) => {
              return (
                <SingleQuestion
                  key={question.id}
                  {...question}
                ></SingleQuestion>
              )
            })}
          </section>
        </div>

        {/* <Question /> */}
      </div>
    </main>
  )
}

export default App
