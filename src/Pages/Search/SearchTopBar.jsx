import SearchBar from "./SearchBar";


const SearchTopBar = () => {
    return (
        <div className="grid grid-cols-3 bg-red-500 text-white py-6 px-4">
            <div className="">
                <SearchBar/>
            </div>
            <div>
            <div>
                    <h2 className="text-4xl font-semibold">Welcome to Search Page</h2>
                </div>
            </div>
        </div>
    );
};

export default SearchTopBar;