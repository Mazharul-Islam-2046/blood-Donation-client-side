import { useContext } from "react";
import SearchTopBar from "./SearchTopBar";
import { AuthContext } from "../../Providers/AuthProvider";


const Search = () => {
    const {searchedUsers} = useContext(AuthContext)
    return (
        <div>
            <SearchTopBar/>
            <div className="grid grid-cols-3 gap-4 w-full mt-10 px-16 mb-16">
                {
                    searchedUsers.map((searchUser, idx) => (<div key={idx} className="bg-red-400 py-8 rounded-md">
                    <div className="flex flex-col justify-center items-center px-4 mb-6">
                      <img
                        src={searchUser?.image}
                        className="w-32 h-32 mb-3 object-cover rounded-full"
                        alt=""
                      />
                      <h2 className="text-2xl font-semibold text-center mb-2">
                        {searchUser?.name}
                      </h2>
                      <p>{searchUser?.email}</p>
                    </div>
                    <div className="px-4 text-2xl flex flex-col justify-center gap-4 pl-16">
                      <h1>
                        <span className="font-bold">Name:</span> {searchUser?.name}
                      </h1>
                      <h1>
                        <span className="font-bold">Role:</span> {searchUser?.role}
                      </h1>
                      <h1>
                        <span className="font-bold">District:</span> {searchUser?.district}
                      </h1>
                      <h1>
                        <span className="font-bold">Upazila:</span> {searchUser?.upazila}
                      </h1>
                      <h1>
                        <span className="font-bold">Blood Group:</span>{" "}
                        {searchUser?.bloodGroup}
                      </h1>
                    </div>
                  </div>))
                }
            </div>
        </div>
    );
};

export default Search;