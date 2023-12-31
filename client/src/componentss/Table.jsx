export const Table = ({ movies }) => {

  return (
    <div className="w-[1000px] rounded-[10px] shadow-md flex flex-col overflow-hidden bg-white">
      <div className="flex items-center content-between h-[60px] text-center text-[18px] font-bold shadow-md m-[10px] bg-white rounded-[4px] ">
        <p className="text-[16px] font-600 text-black flex-1 text-left ml-[20px]">
          Title
        </p>
        <p className="text-[16px] font-600 text-black flex-1  ">Genre</p>
        <p className="text-[16px] font-600 text-black flex-1 ">Rating</p>
      </div>
      {movies.map((movie) => (
        <div
          key={movie._id}
          className="flex items-center h-[70px]  m-[50px 10px] shadow-md cursor-pointer transition-all duration-100 ease-linear bg-white rounded-[4px]    transform  hover:scale-105"
        >
          <div className="flex-1 flex items-center ">
            <img src={movie.img} alt="movie" className="w-[40px] h-[60px] object-contain m-[0 10px]" />
            <p className="text-[16px]  font-500 ">
              {movie.name} ({movie.year})
            </p>
          </div>
          <div className="flex-1 flex items-center  justify-center">
            {movie.genre.map((genre,index)=>(
                <p key={genre} className="text-[16px] font-400">
                    {genre}
                    {index !== movie.genre.length-1 && "/"}
                </p>
            ))}
          </div>
          <div className="flex-1 flex items-center justify-center">
            <img src="./images/star.png" alt="star" className="w-[25px] h-[25px] mr-[4px]" />
            <p className="text-[16px] font-400 ">{movie.rating}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
