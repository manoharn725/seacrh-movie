import axios from "axios";

const searchMovies = async (term) => {
    const options = {
        method: 'GET',
        url: 'https://imdb8.p.rapidapi.com/auto-complete',
        params: {q: term},
        headers: {
          'x-rapidapi-key': 'a1e6758dd4msh946589780d7ee17p1a1c7cjsna3b70f0997e9',
          'x-rapidapi-host': 'imdb8.p.rapidapi.com'
        }
      };

  try {
    const response = await axios.request(options);
    console.log(response.data.d);
    return response.data.d;
  } catch (error) {
    console.error(error);
  }
};

export default searchMovies;
