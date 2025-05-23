function Card2(props){
    return(
        <div className="max-w-xs bg-white rounded-lg shadow-xl overflow-hidden m-4 border border-gray-300 inline-block cursor-pointer hover:scale-105 ease-in-out duration-300">
            <img 
                className="w-48 h-48 object-cover rounded-full mx-auto mt-6" 
                src={props.imagePath} alt="card picture" 
            />
            <div className="p-6 text-center">
                <h2 className="text-xl font-semibold mb-2">{props.name}</h2>
                <p className="text-gray-700 text-base">
                  Hey, I'm {props.name} and I like Apples
                </p>
            </div>        
        </div>
    )
}

export default Card2;