import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [backImage, setBackImage] = useState("Goa1.JPG");
  const [text, setText] = useState();

  const lyrics = [
    "Can I call you baby?",
    "Can you be my friend?",
    "Can you be my lover up until the very end?",
    "Let me show you love, oh, I don't pretend",
    "Stick by my side even when the world is givin' in, yeah",
    "Oh, oh, oh, don't Don't you worry",
    "I'll be there, whenever you want me",
    "I need somebody who can love me at my worst",
    "No, I'm not perfect, but I hope you see my worth",
    "'Cause it's only you, nobody new, I put you first",
    "And for you, girl, I swear I'll do the worst",
    "If you stay forever, let me hold your hand",
    "I can fill those places in your heart no else can",
    "Let me show you love, oh, I don't pretend, yeah",
    "I'll be right here, baby, you know I'll sink or swim",
    "Oh, oh, oh, don't",
    "Don't you worry",
    "I'll be there, whenever you want me",
    "I need somebody who can love me at my worst",
    "No, I'm not perfect, but I hope you see my worth, yeah",
    "'Cause it's only you, nobody new, I put you first (put you first)",
    "And for you, girl, I swear I'll do the worst",
    "I need somebody who can love me at my worst",
    "No, I'm not perfect, but I hope you see my worth",
    "'Cause it's only you, nobody new, I put you first",
    "And for you, girl, I swear I'll do the worst",
  ];

  const startHandler = () => {
    document.querySelector(".audio-file").play();
    setTimeout(() => {
      setText(lyrics[0]);
      setBackImage("Goa2.JPG");
    }, 11000);

    setTimeout(() => {
      setText(lyrics[1]);
    }, 13500);

    setTimeout(() => {
      setText(lyrics[2]);
      setBackImage("Goa3.JPG");
    }, 16000);

    setTimeout(() => {
      setText(lyrics[3]);
    }, 22000);

    setTimeout(() => {
      setText(lyrics[4]);
    }, 27500);

    setTimeout(() => {
      setText(lyrics[5]);
      setBackImage("Goa4.JPG");
    }, 32000);

    setTimeout(() => {
      setText(lyrics[6]);
    }, 38000);

    setTimeout(() => {
      setText(lyrics[7]);
      setBackImage("Goa5.JPG");
    }, 43000);

    setTimeout(() => {
      setText(lyrics[8]);
    }, 48000);

    setTimeout(() => {
      setText(lyrics[9]);
      setBackImage("Goa5.JPG");
    }, 52000);

    setTimeout(() => {
      setText(lyrics[10]);
    }, 55000);

    setTimeout(() => {
      setText(lyrics[11]);
    }, 58000);

    setTimeout(() => {
      setText("THANKS FOR BEING MINE....!!!");
      setBackImage("Last.JPG");
    }, 64000);

    setTimeout(() => {
      document.querySelector(".audio-file").pause();
    }, 72000);

    // setTimeout(() => {
    //   setText(lyrics[2]);
    // }, 15000);
    // setTimeout(() => {
    //   setText(lyrics[2]);
    // }, 15000);
    // setTimeout(() => {
    //   setText(lyrics[2]);
    // }, 15000);
    // setTimeout(() => {
    //   setText(lyrics[2]);
    // }, 15000);
    // setTimeout(() => {
    //   setText(lyrics[2]);
    // }, 15000);
    // setTimeout(() => {
    //   setText(lyrics[2]);
    // }, 15000);
    // setTimeout(() => {
    //   setText(lyrics[2]);
    // }, 15000);
  };

  return (
    <div
      className="App"
      style={{
        width: "100vw",
        height: "100vh",
        backgroundSize: "100% auto",
        backgroundImage: `url(${backImage})`,
      }}
    >
      <button
        style={{
          fontSize: "3rem",
          backgroundColor: "rgba(100,100,100,0.1)",
          borderRadius: "15px",
          marginTop: "20px",
        }}
        onClick={startHandler}
      >
        Start
      </button>
      <div
        style={{
          fontFamily: "sans-serif",
          fontSize: "2rem",
          fontStyle: "italic",
          marginTop: "30px",
        }}
      >
        {text}
      </div>
    </div>
  );
}

export default App;
