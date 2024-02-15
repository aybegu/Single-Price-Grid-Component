import { useState } from 'react'


function App() {

  return (
    <div className="app">

      <main className="main">
        <div className="main--upper-part">
          <h2>Join our community</h2>
          <h4>30-day, hassle-free money back guarantee</h4>
          <p>Gain access to our full library of tutorials along with expert code reviews.
        Perfect for any developers who are serious about honing their skills.</p>
        </div>
        <div className="main--lower-part">
          <div className="main--lower-part-left">
            <h4>Monthly Subscription</h4>
            <div className="main--price">
              <h1>&#36;29</h1>
              <p>per month</p>
            </div>
            <p>Full access for less than &#36;1 a day</p>
            <button>Sign Up</button>
          </div>
          <div className="main--lower-part-right">
            <h4>Why Us</h4>
            <p>
              Tutorials by industry experts
              Peer &#36; expert code review
              Coding exercises
              Access to our GitHub repos
              Community forum
              Flashcard decks
              New videos every week
            </p>
          </div>
        </div>
      </main>
      <footer>
        <p class="attribution">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
          Coded by <a href="https://github.com/aybegu">Ayca Berfin Gurler</a>.
        </p>
      </footer>
    </div>
  )
}

export default App


