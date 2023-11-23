import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Services from './components/Services';
import UnderConstructionPage from './components/UnderConstruction';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}/>
        <Route path="about" element={<About />}/>
        <Route path="services" element={<Services />}/>
        <Route path="contact" element={<Contact />}/>
        <Route path="education" element={<UnderConstructionPage />}/>
        <Route path="work" element={<UnderConstructionPage />}/>

      </Route>
    </Routes>
    </>
  );
}

export default App;
