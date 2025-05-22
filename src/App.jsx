import Dictionary from "./Dictionary/dictionary"
import './App.css'
import letterA from './assets/letter-a-text.svg'
function App() {

  return (
    <>
      <div className="container d-flex flex-column min-vh-100 mw-75">
        <main className="flex-grow-1">
          <header>The Dictionary</header>
          <Dictionary defaultKeyword="dictionary" />
        </main>
        <footer className="text-center text-capitalize m-3">coded by Hasti</footer>
      </div>

    </>
  )
}

export default App
