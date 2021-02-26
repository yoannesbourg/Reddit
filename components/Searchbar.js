import React from 'react'

const Searchbar = () => {
    return (      

        <div className="bg-white flex justify-center p-3 shadow">
            {/* <input placeholder="Search a post" className="bg-gray-50 p-2 w-72 px-5 rrounded-lg"/> */}
            <input 
                className="border-2 border-gray-300 bg-white h-10 px-5 pr16 rounded-lg text-sm focus:outline-none"
                type="search" 
                name="search"
                placeholder="Search"
            />
        </div>
    )
}

export default Searchbar