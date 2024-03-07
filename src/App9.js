
import {useState,useEffect} from "react";

// export default function App9() {

//     const [count,setCount] = useState(0);
//     console.log("component load");
//   return (
//     <>
//         <button onClick={() => setCount((prevState)=>prevState + 1)}>Click</button>
//         <span>{count}</span>
//     </>
//   )
// }


////////////////////////


// export default function App9() {
//     const [runs,setRuns] = useState(0);
//     const [wickets,setWickets] = useState(0);
//     console.log("component loaded");
//     useEffect(()=>{
//         console.log("Better Luck Next Time");
//     },[wickets]);
//   return (
//     <div>
//         <button onClick = {()=> setRuns((prevState)=> prevState + 1)} > Runs({runs})</button>
//         <button onClick={()=> setWickets((prevState)=> prevState+1)}> wickets({wickets}) </button>
//     </div>
//   )
// }


// import React from 'react'

// export default function App9() {
//   const [runs,setRuns] = useState(0);
//       const [wickets,setWickets] = useState(0);
//       console.log("component loaded");
//   useEffect(() => {
//     if (wickets > 0) console.log(`Wickets:${wickets}.Better Luck Next Time!`);
//   }, [wickets]);

//   useEffect(() => {
//     if (runs > 0) console.log(`Good Job! Score:${runs}`);
//   }, [runs]);
//   return (
  
//       <>
//       <button onClick={() => setRuns((prevState) => prevState + 1)}>
//         Runs({runs})
//       </button>
//       <button onClick={() => setWickets((prevState) => prevState + 1)}>
//         Wickets({wickets})
//       </button>
//     </>
    
//   )
// }


/////////////////



export default function App9() {
      const [student, setStudent] = useState({ name: "John", age: 34 });
      console.log(Date());
      return (
        <>
          <p>
            <input
              type="text"
              onChange={(e) =>
                setStudent((prevState) => ({
                  ...prevState,
                  ...{ name: e.target.value },
                }))
              }
              placeholder="Enter Name"
            ></input>
          </p>
          <p>
            <input
              type="text"
              onChange={(e) =>
                setStudent((prevState) => ({
                  ...prevState,
                  ...{ age: e.target.value },
                }))
              }
              placeholder="Enter Age"
            ></input>
          </p>
          <span>
            {student.name}-{student.age}
          </span>
        </>
      );
    }

