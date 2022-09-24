import './App.css';
import Home from './Components/Home';
import Details from './Components/Details';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='details/:id' element={<Details />} />
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
