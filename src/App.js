import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Header from './content/Header';
import HomePageBody from './content/HomePageBody';
import Gallery from './content/Gallery';

function App() {
  return (
    <Router>
      <Routes>
        {/* Each "Route" represents a new page */}
        <Route exact path="/" element={<><Header/><HomePageBody/></>}></Route>

        <Route exact path="/gallery" element={<Gallery/>}></Route>

      </Routes>


    </Router>

    
  );
}

export default App;
