
import Footer from './Footer.jsx'
import Card from './Card.jsx'
import * as data from './moduleData.js'
import {MdChevronLeft, MdChevronRight} from 'react-icons/md'

function App() {

  const slideLeft = (e) => {
    var slider = e.currentTarget.parentElement.querySelector('.slajder')
    slider.scrollLeft -= 500
  }

  const slideRight = (e) => {
    var slider = e.currentTarget.parentElement.querySelector('.slajder')
    slider.scrollLeft += 500
  }

  return(
    <>
      
      <h1 className='text-center mt-18 mb-6'>Mathematische & ingenieurwissenschaftliche Grundlagen</h1>
      <div className='relative flex items-center w-screen'>
        <MdChevronLeft size={60} onClick={(e)=>slideLeft(e)} className='opacity-50 hover:opacity-100 cursor-pointer' />
        <div className='slajder w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth hide-scrollbar'>
          {data.category1.map((item)=>(
            <Card imagePath={item.img} name={item.name} description={item.description}></Card>
          ))}
        </div>
        <MdChevronRight size={60} onClick={(e)=>slideRight(e)} className='opacity-50 hover:opacity-100 cursor-pointer' />
      </div>

      <h1 className='text-center mt-18 mb-6'>Computersysteme und Hardwarenahes</h1>
      <div className='relative flex items-center w-screen'>
        <MdChevronLeft size={60} onClick={(e)=>slideLeft(e)} className='opacity-50 hover:opacity-100 cursor-pointer' />
        <div id='slider1' className='slajder w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth hide-scrollbar'>
          {data.category2.map((item)=>(
            <Card imagePath={item.img} name={item.name} description={item.description}></Card>
          ))}
        </div>
        <MdChevronRight size={60} onClick={(e)=>slideRight(e)} className='opacity-50 hover:opacity-100 cursor-pointer' />
      </div>

      <h1 className='text-center mt-18 mb-6'>Programmierung & Software</h1>
      <div className='relative flex items-center w-screen'>
        <MdChevronLeft size={60} onClick={(e)=>slideLeft(e)} className='opacity-50 hover:opacity-100 cursor-pointer' />
        <div id='slider1' className='slajder w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth hide-scrollbar'>
          {data.category3.map((item)=>(
            <Card imagePath={item.img} name={item.name} description={item.description}></Card>
          ))}
        </div>
        <MdChevronRight size={60} onClick={(e)=>slideRight(e)} className='opacity-50 hover:opacity-100 cursor-pointer' />
      </div>

      <h1 className='text-center mt-18 mb-6'>Medieninformatik & Usability</h1>
      <div className='relative flex items-center w-screen'>
        <MdChevronLeft size={60} onClick={(e)=>slideLeft(e)} className='opacity-50 hover:opacity-100 cursor-pointer' />
        <div id='slider1' className='slajder w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth hide-scrollbar'>
          {data.category4.map((item)=>(
            <Card imagePath={item.img} name={item.name} description={item.description}></Card>
          ))}
        </div>
        <MdChevronRight size={60} onClick={(e)=>slideRight(e)} className='opacity-50 hover:opacity-100 cursor-pointer' />
      </div>

      <h1 className='text-center mt-18 mb-6'>Kommunikationswissenschaft</h1>
      <div className='relative flex items-center w-screen'>
        <MdChevronLeft size={60} onClick={(e)=>slideLeft(e)} className='opacity-50 hover:opacity-100 cursor-pointer' />
        <div id='slider1' className='slajder w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth hide-scrollbar'>
          {data.category5.map((item)=>(
            <Card imagePath={item.img} name={item.name} description={item.description}></Card>
          ))}
        </div>
        <MdChevronRight size={60} onClick={(e)=>slideRight(e)} className='opacity-50 hover:opacity-100 cursor-pointer' />
      </div>

      <h1 className='text-center mt-18 mb-6'>Wissenschaftliche Methoden</h1>
      <div className='relative flex items-center w-screen'>
        <MdChevronLeft size={60} onClick={(e)=>slideLeft(e)} className='opacity-50 hover:opacity-100 cursor-pointer' />
        <div id='slider1' className='slajder w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth hide-scrollbar'>
          {data.category6.map((item)=>(
            <Card imagePath={item.img} name={item.name} description={item.description}></Card>
          ))}
        </div>
        <MdChevronRight size={60} onClick={(e)=>slideRight(e)} className='opacity-50 hover:opacity-100 cursor-pointer' />
      </div>

      <h1 className='text-center mt-18 mb-6'>Interdisziplinäre Projekte</h1>
      <div className='relative flex items-center w-screen'>
        <MdChevronLeft size={60} onClick={(e)=>slideLeft(e)} className='opacity-50 hover:opacity-100 cursor-pointer' />
        <div id='slider1' className='slajder w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth hide-scrollbar'>
          {data.category7.map((item)=>(
            <Card imagePath={item.img} name={item.name} description={item.description}></Card>
          ))}
        </div>
        <MdChevronRight size={60} onClick={(e)=>slideRight(e)} className='opacity-50 hover:opacity-100 cursor-pointer' />
      </div>

      <h1 className='text-center mt-18 mb-6'>Sonstiges</h1>
      <div className='relative flex items-center w-screen'>
        <MdChevronLeft size={60} onClick={(e)=>slideLeft(e)} className='opacity-50 hover:opacity-100 cursor-pointer' />
        <div id='slider1' className='slajder w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth hide-scrollbar'>
          {data.category10.map((item)=>(
            <Card imagePath={item.img} name={item.name} description={item.description}></Card>
          ))}
        </div>
        <MdChevronRight size={60} onClick={(e)=>slideRight(e)} className='opacity-50 hover:opacity-100 cursor-pointer' />
      </div>


      <Footer></Footer>
    </>
  )
}

export default App
