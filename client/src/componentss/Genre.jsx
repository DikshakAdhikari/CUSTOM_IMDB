import React from 'react'

export const Genre = ({genres, filterGenre, setFilterGenre}) => {
    const onChange = ({ currentTarget: input }) => {
		if (input.checked) {
			const state = [...filterGenre, input.value];
			setFilterGenre(state);
		} else {
			const state = filterGenre.filter((val) => val !== input.value);
			setFilterGenre(state);
		}
	};
  console.log(genres);
  return (
    <div className='m-[10px] items-start py-[10px] px-[20px] shadow-md bg-white rounded-[4px]'>
        <h1 className=' m-0 text-[16px] text-center '>Filter by Genre</h1>
        <div className='flex flex-row flex-wrap'>
            {genres.map((genre)=> (
                <div className=' min-w-[90px] flex items-center mx-[2px]' key={genre}>
                    <input type="checkbox" value={genre} onChange={onChange} />
                    <p className='m-0 ml-[5px]'>{genre}</p>



                </div>
            ))}

        </div>
    </div>
  )
}
