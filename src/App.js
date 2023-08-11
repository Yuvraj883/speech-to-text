import React, { useState } from "react";

function App() {
  const [recording, setRecording] = useState(false);
  const [transcript, setTranscript] = useState("");
  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  recognition.lang = 'en-US';
  recognition.interimResults= true;

  const startRecording = () => {
    if (recording) {
      recognition.stop();
      setRecording(false);
    } else {
      recognition.start();
      setRecording(true);
    }
  }

  recognition.onresult = (event) => {
    const text = event.results[0][0].transcript;
    setTranscript(text);
    console.log("Transcript:", event);
  }

  return (
    <>
      <div className="flex flex-col items-center mt-36">
        <h1 className="text-3xl font-bold mb-10">Speech to Text Converter</h1>
        <p className="p-2 border-2 border-black w-[60%] h-48">{transcript}</p>
        <button onClick={startRecording} className="mt-10 bg-green-500 p-2 text-white text-xl rounded-md ">
          {recording ? 'Recording...' : 'Start Recording'}
        </button>
      </div>
    </>
  );
}

export default App;
