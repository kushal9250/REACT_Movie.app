import React from "react";

function Header(props){


   function handlechange(event){

      var userInput = event.target.value;
       props.searchValue(userInput);

   }
  return (
    
    <div className = "headercontainer">

      <h1 class = "headtext"> MOVIES </h1>
      <input className = "form-control" type = "text" placeholder = "Enter the movie" onChange = {handlechange}/>
      <button class = "btn btn-dark btn-lg" type = "submit" >Search</button>


      </div>

  );
}

export default Header;