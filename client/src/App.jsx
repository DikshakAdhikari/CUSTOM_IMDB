import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
import { base_url } from './config/location';

function App() {
  const [obj, setobj]= useState()
  const [sort, setSort]= useState({sort:"rating",order:"desc"});
  const [filterGenre, setFilterGenre]= useState([]);
  const [page, setPage]= useState(1);
  const [search, setSearch]= useState("");

  useEffect(()=> {
    const getAllMovies= async ()=> {
      try{
        const url= `${base_url}?page=${page}&sort=${sort.sort},${sort.order}&genre=${filterGenre.toString()}&search=${search}`;

        const {data}= await axios.get(url);
        setobj(data);
        console.log(data);
      }catch(err){
        console.log(err);
      }
    };

    getAllMovies()
  },[sort,filterGenre,page,search]);

  return (
    <>
     
    </>
  )
}

export default App
