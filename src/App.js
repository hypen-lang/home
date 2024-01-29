import logo from './logo.svg';
import roadmap from './roadmap.svg';
import './App.css';
import Marquee from "react-fast-marquee";
import CodeEditor from "./Editor";
import {Line} from "./Line";

function App() {
  return (
    <div className="App">
        <Line></Line>

        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Time for something completely new.<br></br>Coming 2024
        </p>
      </header>
      <main>
        <CodeEditor></CodeEditor>
          <Line></Line>
      </main>
        <footer>
            <img src={roadmap} className="App-roadmap" alt="logo" />
        </footer>
    </div>
  );
}

export default App;
