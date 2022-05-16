import React, { useEffect, useState } from "react";
import Movielist from "./Movielist";
import Header from "./Header";
import Favourite from "./Favourite";
import Favouriteheading from "./Favouriteheading";



function App(){


  const [moviess , setmovies] = useState([]);

  const [searchText,setSearch] = useState("");

 

  const [fav,setfav] = useState(getlocalstoragedata());

 
function getlocalstoragedata(){
  
  var list = localStorage.getItem('reactmovieapp');
  if(list){
    return JSON.parse(list);
  }
  

}


 
// function to call the Api 
  const getMovieRequest = async(searchText)=>{
 
    const url = `https://www.omdbapi.com/?s=${searchText}&apikey=bb7d9ccf`;

   
   const response = await fetch(url);
   const responseJson = await response.json();


    if(responseJson.Search){
      setmovies(responseJson.Search);
    }


  }

 
/*means when searchtext value changes then only this will run so that when
  we type anything in searchbar then this will run and call the getmovierequest
  function which will give the appropriate value  through API*/

  useEffect(()=>{
    getMovieRequest(searchText);
  },[searchText])


/*
This useeffect will run when fav value changes means whenver we add or delete
our favourite movies then this will run automatically and as it runs so it store
the favorite movies array in local storage that we can get it afterwards
*/ 

  useEffect(()=>{

    localStorage.setItem('reactmovieapp',JSON.stringify(fav));

  },[fav])



    
  // function to get the search value from header.jsx and set to searchtext.

function findSearchValue(userText){
  
  return setSearch(userText);
      
  
}


// fucntion to handle on click to add to favourite.

function addFavourite(movie){
  
  setfav((prev)=>{
  
     return [...prev,movie];
  })

}

  // function to delete the favourite movies on click.

function deletefavourite(index){
  setfav((prev)=>{
    return prev.filter((favmovi,ind)=>{
      return ind !== index;
    })
  })

}







   

  return (

<> 
  
    <Header searchValue = {findSearchValue} />
   <div className = "container-fluid">
    <div className = "inner">

    <Movielist movies = {moviess} checked = {addFavourite} />

     </div>
   </div>

   
<Favouriteheading favlist = {fav}/>
<div className = "container-fluid">
  <div className = "inner">

<Favourite favourites = {fav} checked = {deletefavourite}/>
</div>
</div>

</>
  );
}

export default App;