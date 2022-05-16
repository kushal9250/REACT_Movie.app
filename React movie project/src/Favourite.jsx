import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';

function Favourite(props){


  return (
  
    props.favourites.map((favmovie,index)=>{
      return <div class = "d-flex justify-content-start m-3 imagecontainer">
    
        <div>

       <img src = {favmovie.Poster} alt = "error" />
       <div className = 'overlay d-flex align-items-center justify-content-center back' onClick = {function (){

              props.checked(index);

       }} >
         <i> Delete from Favourite <DeleteIcon /></i>
       </div>
           
         

       </div>

      </div>
    })


  );




  




}

export default Favourite;