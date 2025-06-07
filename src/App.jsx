import Info from '/src/Info.jsx'
import About from '/src/About.jsx'
import Interests from '/src/Interests.jsx'
import Footer from '/src/Footer.jsx'

export default function App() {
  return (
    <>
    <main>
      <div className="CardContainer">
        <Info />
        <About />
        <Interests />
      </div>
      <Footer />
    </main>
    </>
  )
}

