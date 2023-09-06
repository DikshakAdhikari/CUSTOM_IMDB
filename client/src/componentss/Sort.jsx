import React from 'react'

export const Sort = ({sort, setSort}) => {

 console.log('s0rtttttt');
        const onSelectChange = ({ currentTarget: input }) => {
            setSort({ sort: input.value, order: sort.order });
        };
    
        const onArrowChange = () => {
            if (sort.order === "asc") {
                setSort({ sort: sort.sort, order: "desc" });
            } else {
                setSort({ sort: sort.sort, order: "asc" });
            }
        };

  return (
    <div className=' h-[60px] m-[10px] flex items-center content-center shadow-md bg-white rounded-[4px]'>
        <p className=' text-[16px] font-500 '>Sort By:</p>
        <select 
        className=' w-[80px] h-[30px] ml-[4px] rounded-[4px] border-black border-solid border-[1px] outline-none cursor-pointer p-[5px]'
        onChange={onSelectChange}
         defaultValue={sort.sort} 
         >
            <option value="year">Year</option>
            <option value="rating">Rating</option>
        </select>
        <button className='flex items-center content-center h-[30px] w-[30px] outline-none border-black border-solid border-[1px] ml-[5px] rounded-[4px] bg-transparent cursor-pointer' 
        onClick={onArrowChange}
        >
        <p className=' text-[18px] font-bold text-black'>&uarr;</p>
        <p className=' text-[18px] font-bold text-black'>&darr;</p>
        </button>
 
    </div>
  )
}
