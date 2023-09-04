import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
import { base_url } from './config/location';
import { Search } from './componentss/Search';
import { Table } from './componentss/Table';

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
    <div className='w-[100%] min-h-screen flex items-center justify-center '>
      <div className='w-[1000px] border-r-[10px] shadow-slate-400 flex flex-col overflow-hidden bg-white '>
        <div className='flex content-center h-[80px] bg-black justify-between'>
          <img src="../public/images/logo.png" alt="logo" className='w-[100px] object-contain ml-[15px]' />
          <Search setSearch={(search)=> setSearch(search)} />
        </div>
        <div className='h-[500px] flex'>
          <div className='flex-3 relative'>
            <Table movies={obj.movies?obj.movies:[]} />
          </div>
            <div className='flex-1'> </div>

            

          

        </div>

      </div>

    </div>
  )
}

export default App
