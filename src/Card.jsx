function Card(props){
    return(
        <div className="card-container inline-block h-100 m-6">
            <div className="actual-card w-120 h-full">
                <div className="card-front w-full rounded-lg shadow-sm overflow-hidden border border-gray-300 cursor-pointer">
                        <img 
                            className="w-full h-60 object-cover rounded-t-lg" 
                            src={props.imagePath} alt="card picture" 
                        />
                        <div className="h-40 p-4 text-center bg-gradient-to-t from-purple-200 to-blue-300">
                            <h2 className="text-xl font-semibold mb-2">{props.name}</h2>
                            <p className="text-gray-700 text-base">
                                {props.name} {props.description}
                            </p>
                        </div>        
                </div>
                <div className="card-back bg-gray-100 w-full h-full rounded-lg shadow-sm overflow-hidden border border-red-500 cursor-pointer">
                    {props.name} {props.description}
                </div>
            </div>
        </div>

        
    )
}

export default Card;