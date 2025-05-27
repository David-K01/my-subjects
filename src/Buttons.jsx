function Buttons(){
    
    const slideLeft = (e) => {
        var slider = e.currentTarget.parentElement.parentElement.querySelector('div').querySelector('.slajder')
        slider.scrollLeft -= 534
    }

    const slideRight = (e) => {
        var slider = e.currentTarget.parentElement.parentElement.querySelector('div').querySelector('.slajder')
        slider.scrollLeft += 534
    }

    return(
        <div className="slider-with-title__nav flex items-center justify-center">
          <button onClick={(e)=>slideLeft(e)} className="slider-with-title__prev m-1 w-12 h-12 border border-gray-400 rounded-full flex items-center justify-center bg-white hover:bg-purple-200 cursor-pointer" aria-label="Prev item">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M7.20537 6.37206L3.87204 9.70539L3.57741 10L3.87204 10.2946L7.20537 13.628L7.79462 13.0387L5.17259 10.4167H17.0833V9.58335H5.17259L7.79462 6.96131L7.20537 6.37206Z"></path>
            </svg>
          </button> 
          <button onClick={(e)=>slideRight(e)} className="slider-with-title__next m-1 w-12 h-12 border border-gray-400 rounded-full flex items-center justify-center bg-white hover:bg-purple-200 cursor-pointer" aria-label="Next item">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M13.4554 6.37206L16.7887 9.70539L17.0833 10L16.7887 10.2946L13.4554 13.628L12.8661 13.0387L15.4881 10.4167H3.57739V9.58335H15.4881L12.8661 6.96131L13.4554 6.37206Z"></path>
            </svg>
          </button>
        </div>
    )
}

export default Buttons;