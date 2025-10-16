import React from 'react'
import './App.css'
import MovieCard from './components/MovieCard'

function App() {

  return (
    <>
       <MovieCard movie={{title: "Kik106", release_date: "2025"}} />
       <MovieCard movie={{title: "Lorik Shabani", release_date: "2025"}} />
    </>
  )
}

 export default App
