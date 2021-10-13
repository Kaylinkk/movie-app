
import React, { useEffect, useState } from 'react';
import axios from 'axios';


function App() {
const [isLoading, setIsLoading] =useState(true);
const [movie, setMovie] = useState(0);

  useEffect(()=> {
    GetMovies();
  })

const GetMovies= async () => {
  const movies = await (await axios.get("https://yts-proxy.now.sh/list_movies.json")).data.data.movies;
  setMovie(movies);
  setIsLoading(false);
  console.log(movie);
 

}

  return (
<div>
  <div>{isLoading ? " Loading..." : "we are ready"}</div>
  
    </div>
  );
}

export default App;
