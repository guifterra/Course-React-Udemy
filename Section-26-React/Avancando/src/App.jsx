import './App.css'
import night from './assets/night.jpg'
import Data from './components/Data'

function App() {

  return (
    <div className="App" style = {{ paddingBottom: "500px" }}>
      <h1>Avançando em React</h1>
      <img src="/img.jpg" alt="Imagem da Rua" />
      <img src={night} alt="Noite" />
      <Data />
    </div>
  )
}

export default App
