function Card(props){
    return(
        <div className="w-md bg-white hover:bg-gray-100 rounded-lg shadow-sm overflow-hidden m-2 border border-gray-300 inline-block cursor-pointer hover:scale-105 ease-in-out duration-300">
            <img 
                className="w-full h-60 object-cover mx-auto rounded-t-lg" 
                src={props.imagePath} alt="card picture" 
            />
            <div className="h-40 p-6 text-center bg-gradient-to-t from-purple-200 to-blue-300">
                <h2 className="text-xl font-semibold mb-2">{props.name}</h2>
                <p className="text-gray-700 text-base">
                    {props.name} {props.description}
                </p>
            </div>        
        </div>
        
    )
}

export default Card;