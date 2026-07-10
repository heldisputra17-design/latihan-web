// import { useEffect, useState } from "react"

// const Counter = ({start=0}) => {
//    const [count, setCounter] = useState(start)
//    const [warna, setWarna] = useState("red") 
//    // setCounter(count+1)
//    useEffect(()=>{
//       if(count > 1){
//          setWarna("black", "blue", "red")
//       }
//       setTimeout(()=>{
//           setCounter(count+1)
//       },1000)
//    },[count])
//    return (
//       <>
//       <h1 style={{color:warna}}>Count : {count}</h1>
//       </>
//    )

// }
//  export default Counter

import { useEffect, useState } from "react"

const Counter = ({ start = 0 }) => {
   const [count, setCounter] = useState(start)
   const [warna, setWarna] = useState("black") // Warna default awal

   // Daftar warna yang ingin diganti per detik
   const daftarWarna = ["black", "blue", "red", "green", "purple"]

   useEffect(() => {
      // 1. Mengubah warna berdasarkan nilai count saat ini
      // Menggunakan % agar index selalu berputar di dalam panjang array
      const indexWarna = count % daftarWarna.length
      setWarna(daftarWarna[indexWarna])

      // 2. Set timer untuk menambah count setiap 1 detik
      const timer = setTimeout(() => {
         setCounter(count + 1)
      }, 1000)

      // 3. Fungsi CLEANUP (Penting!) untuk membersihkan timer sebelumnya
      return () => clearTimeout(timer)
      
   }, [count]) // Efek ini akan berjalan ulang setiap kali 'count' berubah

   return (
      <>
         <h1 style={{ color: warna }}>Count : {count}</h1>
      </>
   )
}

export default Counter