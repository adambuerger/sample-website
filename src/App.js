import './css/App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Layout from './components/Layout.tsx'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import About from './pages/About.tsx'
import Home from './pages/Home.tsx'
import Contact from './pages/Contact.tsx'


function App() {
  return (
    <div className="App" id="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
