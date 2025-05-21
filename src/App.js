
import './App.css';
import image from './sad-image.jpg'


function click(){
  alert("Fuck You")
}

function App() {
  return (
    <div className="App">
      <h1>Click the fucking button dumbass</h1>
      <div className='container'>
        <img src={image} className="sad" alt="logo" />

      </div>
      <button onClick={click}>Are you sad?</button>
    </div>
  );
}

export default App;
