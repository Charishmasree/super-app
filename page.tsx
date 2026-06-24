"use client";

import { useState } from "react";


export default function Movies(){

const [selectedMovie,setSelectedMovie] = useState<any>(null);


const movies = [

{
name:"Avatar",
year:"2022",
image:"https://m.media-amazon.com/images/I/81J6APjwxlL._AC_UF1000,1000_QL80_.jpg"
},


{
name:"Avengers Endgame",
year:"2019",
image:"https://m.media-amazon.com/images/I/81ExhpBEbHL._AC_UF1000,1000_QL80_.jpg"
},


{
name:"Interstellar",
year:"2014",
image:"https://m.media-amazon.com/images/I/91kFYg4fX3L._AC_UF1000,1000_QL80_.jpg"
},


{
name:"Joker",
year:"2019",
image:"https://m.media-amazon.com/images/I/71K4OH9D4rL._AC_UF1000,1000_QL80_.jpg"
}


];



return(

<div
style={{
minHeight:"100vh",
padding:"30px",
background:"#eef2ff"
}}
>


<h1>
Movies 🎬
</h1>



<div
style={{
display:"grid",
gridTemplateColumns:"repeat(2,1fr)",
gap:"20px"
}}
>


{

movies.map((movie)=>(


<div

key={movie.name}

onClick={()=>setSelectedMovie(movie)}

style={{
background:"white",
padding:"15px",
borderRadius:"15px",
boxShadow:"0 5px 15px gray",
cursor:"pointer"
}}

>


<img

src={movie.image}

alt={movie.name}

style={{
width:"100%",
height:"300px",
objectFit:"cover",
borderRadius:"10px"
}}

/>



<h2>
{movie.name}
</h2>


<p>
Year: {movie.year}
</p>


</div>


))

}


</div>




{
selectedMovie &&

<div

style={{

position:"fixed",
top:0,
left:0,

width:"100%",
height:"100%",

background:"rgba(0,0,0,0.6)",

display:"flex",
justifyContent:"center",
alignItems:"center"

}}

>


<div

style={{

background:"white",
padding:"30px",
borderRadius:"15px",
textAlign:"center"

}}

>


<img

src={selectedMovie.image}

style={{
width:"200px"
}}

/>


<h1>
{selectedMovie.name}
</h1>


<p>
Movie Year: {selectedMovie.year}
</p>


<button

onClick={()=>setSelectedMovie(null)}

style={{
padding:"10px",
background:"red",
color:"white",
border:"none",
borderRadius:"8px"
}}

>
Close
</button>



</div>


</div>


}


</div>

)

}