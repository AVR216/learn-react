const API_KEY = '7d7d33ca';

export const searchMovies = async ({ search }) => {
  if (search == null) return;

  try {
    const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`);
    const json = await response.json();

    const movies = json.Search;

    return movies?.map(movie => ({
      id: movie.imdbID,
      title: movie.Title,
      poster: movie.Poster,
      year: movie.Year
    }));
  } catch (err) {
    console.error(err);
    throw new Error('An error has ocurred getting movies');
  }
};
