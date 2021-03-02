import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { searchPosts } from '../redux/features/posts/postsSlice'

const Searchbar = () => {
    const [text, setText] = useState('')
    const dispatch = useDispatch()

    const handleInput = (event) => {
        setText(event.target.value)
    }

    const search = (event) => {
        
        
        if(event.keyCode === 13) {
            if (text) {
                dispatch(searchPosts(`https://www.reddit.com/search.json?q=${text}`))
                setText('')
            }
        } 
    }

    return (      

        <div className="bg-white flex justify-center p-3 shadow">
            {/* <input placeholder="Search a post" className="bg-gray-50 p-2 w-72 px-5 rrounded-lg"/> */}
            <input 
                className="border-2 border-gray-300 bg-white h-10 px-5 pr16 rounded-lg text-sm focus:outline-none"
                type="search" 
                name="search"
                placeholder="Search"
                onChange={handleInput}
                value={text}
                onKeyDown={search}
            />
        </div>
    )
}

export default Searchbar