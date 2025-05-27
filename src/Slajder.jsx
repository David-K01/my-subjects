import Card from './Card.jsx'

function Slajder (props) {
    return(
        <div className='relative flex items-center w-screen'>
          <div className='slajder flex items-center self-center w-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth hide-scrollbar'>
            {props.data.map((item)=>(
              <Card imagePath={item.img} name={item.name} description={item.description}></Card>
            ))}
          </div>
        </div>
    )
}

export default Slajder