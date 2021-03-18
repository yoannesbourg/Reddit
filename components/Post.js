import React from 'react'
import Link from 'next/Link'
import moment from 'moment';

const Post = ({title, author, id, date}) => {
    return (
        <div className="bg-white  flex-column  p-3 w-40 shadow mt-4 w-full rounded-lg">
            <Link key={id} href={`/${id}`}><a><h2 className="text-lg font-bold">{title}</h2></a></Link>
            <div className="flex justify-between">
                <p>{author}</p>
                <p>{moment.unix(date).fromNow()}</p>
            </div>
        </div>
    )
}

export default Post