import { FaHeart, FaBookmark, FaPlay } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"
import {MovieList} from "../data";
import { useState } from "react";



function MovieCard(){
    const [currentIndex , setCurrentIndex] = useState(3);

    const r = MovieList[currentIndex]

    const nextMovie =() =>{

        setCurrentIndex((r) =>
        r ===MovieList.length -1? 0 : r + 1)
    }

    return(
        <section>
            {/* //Moviecard */}
            <div className="flex gap-3 items-center justify-center p-5 mt-4">
                {MovieList.map((movie, index)=> {
                    const isActive = index === currentIndex;

                    return(
                         <div key={movie.id} 
                         onClick= {()=> setCurrentIndex(index)}
                         className={`relative flex-shrink-0 cursor-pointer transition-all duration-500 ease-in-out ${isActive? 'h-92 w-86 scale-120 px-8': 'h-88 w-70 opacity-55 hover:opacity-100'}`} >
                    <img src={movie.img} alt={movie.title} className="h-full w-full object-cover rounded-md" />
                    {isActive &&( 
                        <div className="absolute bottom-0 top-80 left-0 right-0  bg-opacity-70 p-3 flex items-center justify-center">
                            <div className=" bg-black rounded-4xl p-2 ">
                                <button className='bg-amber-300 hover:bg-amber-500 p-3 rounded-3xl'>
                     <FaPlay size={27}/>
                    </button>
                            </div>
                        </div>
                    )}
                </div>
                    )

                })}
               
            </div>
            {/* //MovieInformation */}
            <div className="text-white text-center mt-10">
                <h2 className="text-4xl ">{r.title}</h2>
                <p className="text-lg py-3 w-[300px ] mx-210">{r.description}</p>
                <div className="text-2xl">
                    <span>{r.year}</span>
                    <span> • </span>
                    <span>{r.movieType}</span>
                    <span> • </span>
                    <span>{r.hours}</span>
                </div>
                <div className="flex items-center justify-center gap-2 mt-4 text-2xl">
                    <button>Trailer</button>
                    <FaHeart size={30} className="ml-5 text-red-600"/>
                    <FaBookmark size={30} className="ml-5"/>
                     <button>Details</button>
                </div>
            </div>
            {/* //MovieController */}
            <div className="flex items-center justify-end gap-3">
                <button className="bg-gray-800 rounded-full p-2"> <FiChevronLeft size={35}/></button>
                <button 
                onClick={nextMovie}
                 className="bg-amber-400 rounded-full p-2"><FiChevronRight size={35}/></button>
            </div>

        </section>
    )
}
export default MovieCard