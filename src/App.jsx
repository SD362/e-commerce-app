import './App.css'
import SearchBar from './componencts/Molecules/SearchBar'
import Footer from './componencts/Organisms/Footer';
import Header from './componencts/Organisms/Header';
import Home from './Pages/Home';

function App() {
  return (
    <>
      <div className='app-container'>
        <Header/>
          <main className='content'>
            <Home/>
          </main>
        <Footer/>
      </div>
    </>
  )
}

export default App;