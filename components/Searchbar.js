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

        <div className="bg-white  p-3 shadow ">
            <div className="flex justify-between items-center w-11/12 mx-auto">
            <img 
                src="/Reddit_Lockup_OnWhite.png" 
                className="w-24 cursor-pointer"
                
            />
            <input 
                className="border-2 border-gray-300 bg-white h-10 px-5 pr16 rounded-lg text-sm focus:outline-none"
                type="search" 
                name="search"
                placeholder="Search"
                onChange={handleInput}
                value={text}
                onKeyDown={search}
            />
            <div></div>
            </div>
        </div>
    )
}

export default Searchbar