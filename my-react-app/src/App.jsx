import './App.css'
import Welcome from './components/Welcome'
import Counter from './components/Counter'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  let peserta = [
    {nama:"Rendra", kota:"Samarinda", umur:15},
    {nama:"Andra", kota:"Balikpapan", umur:16},
    {nama:"Desta", kota:"Samarinda", umur:17},
    {nama:"Daffa", kota:"Samarinda", umur:18},
    {nama:"Irti", kota:"Makassar", umur:19},
    {nama:"Yul", kota:"Malinau", umur:20}
  ]


  return  (
    <>
      <div className='container'>
        {peserta.map((item,index) => {
          return(
          <Welcome key={index} name={item.nama} city={item.kota} age={item.umur}></Welcome>    
          )
          })
        }

      </div>
              <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
        <Counter></Counter>
    </>
    
  )
}

export default App
