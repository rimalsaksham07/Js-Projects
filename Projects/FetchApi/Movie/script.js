api_url = "https://api.themoviedb.org/3/movie/popular?";
YOUR_API_KEY = "c0d62852f9495924dbb21700eb43337d";
async function movie() {
  const response = await fetch(api_url + `api_key=${YOUR_API_KEY}`);
//   console.log(response);
  var data = await response.json();
//   console.log(data);
  console.log([data.results])
}
movie()
