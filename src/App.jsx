import React, { useState } from 'react';
import './App.css';
import groupPhoto from './assets/group-photo.JPG';
// src/index.js or src/App.js
import 'animate.css';

import quotes from './quotes';

const App = () => {
    const [quote, setQuote] = useState(quotes[Math.floor(Math.random() * quotes.length)]);

    const changeQuote = () => {
        const newQuote = quotes[Math.floor(Math.random() * quotes.length)];
        setQuote(newQuote);
    };

    return (
        <div className="app">
            <audio autoPlay loop>
                <source src="/diwali-music.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>
            <h1>Happy Diwali!</h1>
            <img src={groupPhoto} alt="Group" className="group-photo" />
            <p className="quote">{quote}</p>
            <p>Wishing you and your family a joyous Diwali!...(SURYA YADAV)</p>
            <button className="button" onClick={changeQuote}>Get Another Quote</button>
            
        </div>
    );
};

export default App;
