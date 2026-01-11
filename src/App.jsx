import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {API_KEY} from './API_KEY'
import axios from 'axios'
import NewsList from './components/NewsList'
const API_URL= `https://newsapi.org/v2/top-headlines`

function App() {
  const [articles, setArticles] = useState([])
  const[totalResults, setTotalTResults]= useState(0)
  const[page , setPage]= useState(0)   // implementing infinte scrolling 

 const fetchArticles= async()=>{
  try{
    let pageNo= page+1
    const data= await axios.get(API_URL, {params:{apiKey:API_KEY, country:"us", page:pageNo}})
    // console.log(data.data.articles)

    let result=[...articles, ...data.data.articles]
    setArticles([...result])
    setTotalTResults(data.data.totalResults)
  }
  catch(err){
    console.log(err)
  }
 }
 
  useEffect(()=>{
    fetchArticles()
  },[])

  return (
    <div className='App'>
     <h1>News App</h1>
      <NewsList articles={articles}
      fetchArticles={fetchArticles}
      totalResults={totalResults}
      />
    </div>
  )
}

export default App
