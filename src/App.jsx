import Header from "./components/Header"
import Body from "./components/Body"
import Fotter from "./components/Fotter"
import './index.css';


function App() {
  

  return (
    <>
      <div className="bg-amber-100 min-h-screen px-6 py-3 flex flex-col gap-16 md:px-10 md:py-7 md:justify-between lg:px-16 lg:py-10"  >
        <Header/>
        <Body/>
        <Fotter/>
        
      </div>
      </>
  )
}

export default App
