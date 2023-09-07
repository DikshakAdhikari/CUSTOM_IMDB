
export const Search = ({setSearch})=> {
    return (
        <input 
        type="text"
         placeholder="Search"
          className="mr-[15px] h-[40px] self-center outline-none border-none w-[400px] rounded-[4px] pl-[5px] text-[15px] "
           onChange={(event)=> setSearch(event.target.value)} 
            />
    )
}