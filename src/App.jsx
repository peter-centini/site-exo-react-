import './App.css';
import Navbar from './components/navbar/Navbar';
import Animallist from './components/animal-cards-home/AnimalList';
import Footer from './components/footer/Footer';





function App() {
  return (
    <div className="App">
      <Navbar />
      <Animallist />
      <Footer />

    </div>
  );
}

export default App;
