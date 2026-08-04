import { useState } from "react";
import "./App.css";

function App(){

const [movie,setMovie]=useState("");
const [data,setData]=useState(null);

const API="YOUR_API_KEY";

const searchMovie=async()=>{

const res=await fetch(
`https://www.omdbapi.com/?apikey=${API}&t=${movie}`
);

const result=await res.json();

setData(result);

};

return(

<div className="container">

<h1>Movie Search</h1>

<input
placeholder="Enter Movie Name"
onChange={(e)=>setMovie(e.target.value)}
/>

<button onClick={searchMovie}>
Search
</button>

{data && data.Response==="True" && (

<div className="card">

<img src={data.Poster} alt="" />

<h2>{data.Title}</h2>

<p>{data.Year}</p>

<p>{data.Genre}</p>

<p>⭐ {data.imdbRating}</p>

<p>{data.Plot}</p>

</div>

)}

</div>

);

}

export default App;