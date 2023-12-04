
import './App.css';
import Mynav from './components/Mynav';
import Form from './components/Form';
import Footer from './components/Footer';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Section4 from './components/Section4';
import Section5 from './components/Section5';



function App() {
  return (
    <div className="App">
      <Mynav />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
