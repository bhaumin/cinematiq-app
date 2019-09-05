const apiHost = "https://api.themoviedb.org/3/search/movie";
const apiKey = "50bb8cc380100c5ea082ad86e775e26b";
const language = "en-US";
const includeAdult = "true";

export default {
  async fetchMovieSearchResults(searchTerm, page = 1) {
    const urlWithQuery = `${apiHost}?api_key=${apiKey}&en-US=${language}&include_adult=${includeAdult}&page=${page}&query=${searchTerm}`;

    try {
      const response = await fetch(urlWithQuery);
      const responseJson = await response.json();
      return responseJson;
    } catch(error) {
      console.error(error);
    }
  }
};
