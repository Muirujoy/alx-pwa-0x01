import { useEffect, useState } from "react";
import { MovieProps } from "../interfaces";


const Movies: React.FC=()=>{
    const [movies, setMovies]=useState<MovieProps[]>([])
    useEffect(()=>{
        const fetchMovies =async()=>{
        const url = 'https://imdb-top-100-movies.p.rapidapi.com/';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '12f30f97bcmshbfa328141e1ca70p187f24jsn6035396c5c37',
		'x-rapidapi-host': 'imdb-top-100-movies.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const data = await response.json();
    setMovies(data)
	
} catch (error) {
	console.error(error);
    setMovies([])
}
        }
        fetchMovies()
    },[])
    return(
        <div>
            <div className="">
                {movies.map((movie, index)=>(
                <div key={index}className="grid grid-cols-3">
                    <img src={movie.image} alt={movie.title}/>
                    <p>Title: {movie.title}</p>
                    <p>Description: {movie.description} </p>
                    <p>Rank:  {movie.rank}</p>
                    
                </div>
            ))}
            </div>

        </div>
    )
}
export default Movies;