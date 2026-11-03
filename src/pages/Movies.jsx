import MovieCard from "../component/MovieCard"
import  MovieList  from "../component/MovieList"

function Movies(){
  return (
    <main className="bg-black text-white h-screen">
      <MovieList/>
      <MovieCard/>
    </main>
  )
}

export default Movies