import './App.css';
import PersonCard from './Component/PersonCard';

// const person1 = 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PersonCard firstName= "Jane" lastName= "Doe" age= {45} hairColor= "Black" />
        <PersonCard firstName= "John" lastName= "Smith" age= {88} hairColor= "Brown" />
        <PersonCard firstName= "Millard" lastName= "Fillmore" age= {50} hairColor= "Brown" />
        <PersonCard firstName= "Maria" lastName= "Smith" age= {62} hairColor= "Brown" />
      </header>
    </div>
  );
}

export default App;
