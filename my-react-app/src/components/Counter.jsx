import { useState } from "react"

const Counter = ({start=0}) => {
   const [count, setCounter] = useState(start)


   setCounter(count+1)

   return (
      <>
      <h1>Count : {count}</h1>
      </>
   )

}
 export default Counter