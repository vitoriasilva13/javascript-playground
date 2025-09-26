var api_key =
  getCookie("bearer") != ""
    ? getCookie("bearer")
    : ""; //key da api da sua aplicação no TMDB
var api_url_base = "https://api.themoviedb.org/3/";
var api_url_base_image = "https://image.tmdb.org/t/p/";
var api_language = "pt-BR";

if (api_key == "") {
  api_key = prompt("Enter bearer:");
  setCookie("bearer", api_key, 1);
}

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${api_key}`,
  },
};
