
import Footer from './Footer.jsx'
import Buttons from './Buttons.jsx'
import * as data from './moduleData.js'
import Slajder from './Slajder.jsx'

function App() {

  return(
    <>
      
      <div>
        <h1 className='ml-7 mt-18 mb-6'>Mathematische & ingenieurwissenschaftliche Grundlagen</h1>
        <Slajder data={data.category1}></Slajder>
        <Buttons></Buttons>
      </div>

      <div>
        <h1 className='ml-7 mt-18 mb-6'>Computersysteme und Hardwarenahes</h1>
        <Slajder data={data.category2}></Slajder>
        <Buttons></Buttons>
      </div>

      <div>
        <h1 className='ml-7 mt-18 mb-6'>Programmierung & Software</h1>
        <Slajder data={data.category3}></Slajder>
        <Buttons></Buttons>
      </div>

      <div>
      <h1 className='ml-7 mt-18 mb-6'>Medieninformatik & Usability</h1>
        <Slajder data={data.category4}></Slajder>
        <Buttons></Buttons>
      </div>

      <div>
        <h1 className='ml-7 mt-18 mb-6'>Kommunikationswissenschaft</h1>
        <Slajder data={data.category5}></Slajder>
        <Buttons></Buttons>
      </div>

      <div>
        <h1 className='ml-7 mt-18 mb-6'>Wissenschaftliche Methoden</h1>
        <Slajder data={data.category6}></Slajder>
        <Buttons></Buttons>
      </div>

      <div>
        <h1 className='ml-7 mt-18 mb-6'>Interdisziplinäre Projekte</h1>
        <Slajder data={data.category7}></Slajder>
        <Buttons></Buttons>
      </div>

      <div>
        <h1 className='ml-7 mt-18 mb-6'>Sonstiges</h1>
        <Slajder data={data.category10}></Slajder>
        <Buttons></Buttons>
      </div>

      <Footer></Footer>
    </>
  )
}

export default App
