import logo from './logo.svg';
import './App.css';
import { Outlet } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         你好
        </p>
        <hr />
        <Outlet/>
      </header>
    </div>
  );
}
export default App;
