import React, { useState, useEffect } from "react";

function App() {
  const [recording, setRecording] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [transcriptDisplay, setTranscriptDisplay] = useState("");
  const testString = "This is the test string and I am reading it";
  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  recognition.lang = 'en-US';
  recognition.interimResults = true;

  useEffect(() => {
    const transcriptWords = transcript.toLowerCase().split(" ");
    const testWords = testString.toLowerCase().split(" ");

    const matchedAndUnmatchedWords = transcriptWords.map((word, index) => {
      if (word === testWords[index]) {
        return <span key={index} style={{ color: "green" }}>{word} </span>;
      } else {
        return <span key={index} style={{ color: "red" }}>{word} </span>;
      }
    });

    // Update transcript display
    setTranscriptDisplay(matchedAndUnmatchedWords);
  }, [transcript]);

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
    console.log("Transcript:", text);
  }

  return (
    <>
      <div className="flex flex-col items-center mt-36">
        <h1 className="text-3xl font-bold mb-10">Speech to Text Converter</h1>
        <p
          className="p-2 border-2 border-black w-[60%] h-48"
          style={{ whiteSpace: "pre-line" }}
        >

          {

            testString

          }
          <br></br>
          {
            transcriptDisplay
          }
        </p>
        {/* <p
          id="matchedText"
          className="p-2 border-2 border-black w-[60%] h-48"
          style={{ whiteSpace: "pre-line" }}
        >
      
          {transcriptDisplay}
        </p> */}
        <button
          onClick={startRecording}
          className="mt-10 bg-green-500 p-2 text-white text-xl rounded-md "
        >
          {recording ? 'Recording...' : 'Start Recording'}
        </button>
      </div>
    </>
  );
}

export default App;
