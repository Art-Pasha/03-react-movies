const url = 'https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YTI4MDMyOWFiNjhiZGJlYzg2MTA2MDE5ZDNlZDYwMCIsIm5iZiI6MTc4MzA3MDQ3Ny41MzIsInN1YiI6IjZhNDc3ZjBkYzM1NTBkY2FhZWEwYzI1YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mqYlRxdDxc3CgaQ41H5INCZ1Qw90279PxW9k9Vmpb-w'
  }
};

fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error(err));