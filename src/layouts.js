import './App.css';
import Headers from './Components/Header'
import { Outlet } from "react-router-dom";
function App() {
  return (
    <>
    <Headers/>
    <Outlet/>
    </>
  );
}

export default App;
