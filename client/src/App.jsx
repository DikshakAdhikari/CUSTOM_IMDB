import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
import { base_url } from './config/location';
import { Search } from './componentss/Search';
import { Table } from './componentss/Table';
import { Pagination } from './componentss/Pagination';

import { Genre } from './componentss/Genre';
import {Sort} from './componentss/Sort'



function App() {
  const [obj, setobj]= useState([])
  const [sort, setSort]= useState({sort:"rating",order:"desc"});
  const [filterGenre, setFilterGenre]= useState([]);
  const [page, setPage]= useState(1);
  const [search, setSearch]= useState("");

  useEffect(()=> {
    const getAllMovies= async ()=> {
      try{
        const url= `${base_url}?page=${page}&sort=${sort.sort},${sort.order}&genre=${filterGenre.toString()}&search=${search}`;
       console.log("giraffeee");
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
    <div className='w-[100vw] min-h-screen flex items-center justify-center '>
      <div className='w-[10000px] m-3 rounded-[10px] shadow-md flex flex-col overflow-hidden bg-white '>
        <div className='flex content-center h-[80px] bg-black justify-between'>
          <img src="./images/logo.png" alt="logo" className='w-[100px] object-contain ml-[15px]' />
          <Search setSearch={setSearch} />
        </div>
        <div className='h-[500px] flex'>
          <div className=' relative'>
            <Table movies={obj.movies?obj.movies:[]} />
            <Pagination page={page} limit={obj.limit ? obj.limit : 0} total={obj.total ? obj.total : 0} setPage={setPage} />
          </div>
            <div >
              <Sort sort={sort} setSort={(sort)=> setSort(sort)} />
              <Genre
							filterGenre={filterGenre}
							genres={obj.genres ? obj.genres : []}
							setFilterGenre={(genre) => setFilterGenre(genre)}
						/>
            </div>
        </div>

      </div>

    </div>
  )
}

export default App
