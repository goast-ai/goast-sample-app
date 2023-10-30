import reactLogo from './assets/react.svg'
import goastLogo from '/goast.svg'
import './App.css'
import DisplayUser from './DisplayUser'

function App() {
  return (
    <>
      <div>
        <a href="https://goast.ai" target="_blank">
          <img src={goastLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Goast + React</h1>
      <div className="card">
        <DisplayUser></DisplayUser>
      </div>
      <p className="read-the-docs">
        Click on the Goast logo to learn more
      </p>
    </>
  )
}

export default App
