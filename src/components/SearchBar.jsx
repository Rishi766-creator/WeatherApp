function SearchBar({city,setCity,onSearch}){
    const handleKeyDown=(e)=>{
        if(e.key==="Enter"){
            onSearch();
        }
    }
    return(
        <div className="flex justify-center mt-6">
            <input
                type="text"
                value={city}
                onChange={(e)=>setCity(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Enter city name"
                className="border p-2 rounded-l-md w-60 sm:w-80 focus:outline-none"
            />
            <button onClick={onSearch} className="bg-blue-600 text-white px-4 rounded-r-md hover:bg-blue-700 transition">Search</button>

        </div>
    )
}
export default SearchBar;