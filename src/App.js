
function App() {

if('SpeechRecognition' in window || 'webkitSpeechRecognition' in window){
  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();

}

  return (
    <>

    <div className="flex flex-col  items-center mt-36 ">
    <h1 className="text-3xl font-bold mb-10  ">Speech to Text convertor</h1>
    <textarea className="p-2 border-2 border-black w-[60%] h-48" placeholder="Hello there..."></textarea>
    <button className="mt-10 bg-green-500 p-2 text-white text-xl rounded-md ">Start Recording</button>
      
    </div>
    </>
  );
}

export default App;
