//Example - 1


// import React from "react";


// function App(){

//   let name="Dinesh"

//   function Greet(){
//     alert(`Good Evening ${name}`)
//   }

//   return(
//     <>
//     <h2>My name is :name</h2>

//     <button onClick={Greet}>Greet</button>
    
//     </>
//   )
// }
// export default App




//Example 2 - variable vs React variable

// import React from "react";

// function App(){

//   let cnt=10
//     function IncreaseCnt(){
//       cnt=cnt+1;
//       console.log(cnt)
//     }

//   return(
//     <>
//     <h2>Like/Cart/Quantity:{cnt} </h2>
//     <button onClick={IncreaseCnt}>Increase</button>
//     </>
//   )
// }
// export default App




///Example 3 -usestate variable

// import React , {useState} from "react";

// function App(){

//   const [like,setLike]=useState[10]
//     function IncreaseLike(){
//       cnt=cnt+1;
//       console.log(like)
//     }

//   return(
//     <>
//     <h2>Like/Cart/Quantity:{like} </h2>
//     <button onClick={IncreaseLike}>Increase</button>
//     </>
//   )
// }
// export default App


// Example 4 

import React, {useState} from "react";

function App(){
  
   const [show,setShow]=useState(false)

  return(
    <>
     <input type={show ? "text":"password"} placeholder="Enter Your Password"/>
     <button onClick={()=> setShow(!show)}>Show/Hide</button>
    </>
  )
}
export default App
