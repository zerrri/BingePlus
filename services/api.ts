export const TMDB_CONFIG = {
    BASE_URL:'https://api.themoviedb.org/3',
    API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY, // Ensure you have your API key in an environment variable
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}` // Ensure you have your API token in an environment variable
    }
}

export const fetchMovies = async ({ query }:{ query: string }) => {
    const endpoint = query
    ?`${TMDB_CONFIG.BASE_URL}/search/movie?query=${encodeURIComponent(query)}&api_key=${TMDB_CONFIG.API_KEY}`
     :`${TMDB_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.desc&api_key=${TMDB_CONFIG.API_KEY}`;    
    const response = await fetch(endpoint,{
        method: 'GET',
        headers: TMDB_CONFIG.headers,
           
    });

    if (!response.ok) {
        throw new Error(`Error fetching movies: ${response.statusText}`);
    }

    const data = await response.json();
    return data.results;
}    

export const fetchMovieDetails = async (movieId: string):Promise<MovieDetails> => {
    try{
        const response = await fetch(`${TMDB_CONFIG.BASE_URL}/movie/${movieId}?api_key=${TMDB_CONFIG.API_KEY}`,{
            method: 'GET',
            headers: {
                accept: 'application/json'
            },
        });
        if (!response.ok) throw new Error(`Error fetching movie details: ${response.statusText}`);

        const data = await response.json();

        return data;

    } catch (error) {
        console.error('Error fetching movie details:', error);
        throw error; 
    }
}