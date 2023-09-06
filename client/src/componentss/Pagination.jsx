
export const Pagination = ({page, total, limit, setPage}) => {
    const totalPages= Math.ceil(total/limit);
console.log("paginationm");
    const onClick= (newPage)=>{
        setPage(newPage+1);
    };
  return (
    <div className=" absolute bottom-0 left-0 w-[calc(100%-20px)] mx-[10px] h-[45px] flex items-center justify-center z-100">
        {totalPages >0 && [...Array(totalPages)].map((val,index)=> (
          <button
          onClick={() => onClick(index)}
          className={`${
            page === index + 1
              ? 'bg-blue-500 text-white'
              : 'bg-white text-gray-700'
          } outline-none border-none text-sm font-semibold rounded-md w-[30px] h-[30px] flex items-center justify-center mx-[5px] shadow-md cursor-pointer`}
          key={index}
        >
          {index + 1}
        </button>
        ))}

    </div>
  )
}
