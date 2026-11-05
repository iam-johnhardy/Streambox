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

    const prevMovie = ()=> {
       setCurrentIndex((r) =>
        r === 0 ? MovieList.length -1 :
        r - 1
       )
    }

    const visibleMovies = [-2,-1,0,1,2].map((r)=>{
        const index = (currentIndex + r + MovieList.length) % MovieList.length;
    return{movie:MovieList[index], index};
    });

    return(
        <section>
            {/* //Moviecard */}
            <div className="flex gap-3 items-center justify-center p-5 mt-4">
                {visibleMovies.map(({movie, index})=> {
                    const isActive = index === currentIndex;

                    return(
                         <button
                          key={movie.id} 
                         type="button"
                         aria-label={`Select ${movie.title}`}
                         aria-pressed={isActive}
                         onClick= {()=> setCurrentIndex(index)}
                         className={`relative flex-shrink-0 cursor-pointer transition-all duration-500 ease-in-out ${isActive? 'h-75 w-65 scale-120 px-8': 'h-70 w-50 opacity-55 hover:opacity-100'}`} >
                    <img src={movie.img} alt='' className="h-full w-full object-cover rounded-md" />
                    {isActive &&( 
                        <div className="absolute bottom-0 top-65 left-0 right-0  bg-opacity-70 p-3 flex items-center justify-center">
                            <div className="border border-gray-500 z-10 -mb-3 rounded-full bg-gray-900 p-1 ">
                                <span className='flex h-10 w-10 items-center justify-center bg-amber-300  hover:bg-amber-500 p-3 rounded-3xl'>
                     <FaPlay size={27}/>
                    </span>
                            </div>
                        </div>
                    )}
                </button>
                    )

                })}
               
            </div>
            {/* //MovieInformation */}
            <div className="text-white text-center mt-10">
                <h2 className="text-4xl ">{r.title}</h2>
                <p className="text-lg py-3 w-[300px ] mx-10">{r.description}</p>
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
                <button
                onClick={prevMovie}
                 className="bg-gray-800 rounded-full p-2"> <FiChevronLeft size={35}/></button>
                <button 
                onClick={nextMovie}
                 className="bg-amber-400 rounded-full p-2"><FiChevronRight size={35}/></button>
            </div>

        </section>
    )
}
export default MovieCard