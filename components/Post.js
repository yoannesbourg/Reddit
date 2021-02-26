import React from 'react'

const Post = () => {
    return (
        <div className="bg-white  flex-column  p-3 w-40 shadow mt-4 w-full rounded-lg">
            <h2 className="text-lg font-bold">This is a post</h2>
            <div className="flex justify-between">
                <p>Author</p>
                <p>Date</p>
            </div>
        </div>
    )
}

export default Post