import React from "react";
import FavoriteIcon from '@material-ui/icons/Favorite';


function Movielist(props){

  
  return (

     props.movies.map((item,index)=>{
    return <div className = "d-flex justify-content-start m-3 imagecontainer">
         
         <div>
      <img src = {item.Poster} alt = "error"/>
  
      <div className='overlay d-flex align-items-center justify-content-center back' onClick = 
      {function (index){
                 props.checked(item);
       } }>
						Add to Favourites <FavoriteIcon />
					</div>

   </div>
      
      </div>



    })

 
  );
}

export default Movielist;