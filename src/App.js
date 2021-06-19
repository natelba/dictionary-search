import logo from "./logo.png";
import './App.css';
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        <img src={logo} className="App-logo img-fluid" alt="logo" />
        Hello
      </header>
      <main>
      <Dictionary />
      </main>
      <footer className="App-footer">
        <small>Coded by Natalia Guardia and is <a href="https://github.com/natelba/dictionary-app">Open-Sourced</a></small>
      </footer>
      </div>
    </div>
  );  
}

