import React from 'react'

const Post = ({title, author}) => {
    return (
        <div className="bg-white  flex-column  p-3 w-40 shadow mt-4 w-full rounded-lg">
            <h2 className="text-lg font-bold">{title}</h2>
            <div className="flex justify-between">
                <p>{author}</p>
                <p>Date</p>
            </div>
        </div>
    )
}

export default Post