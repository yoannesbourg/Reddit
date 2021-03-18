import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from './postsSlice'
import Post from '../../../components/Post'

const PostsFeed = () => {
    const  posts  = useSelector(state => state.posts)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPosts('https://www.reddit.com/r/popular.json'))
    }, [dispatch])
    console.log(posts)
    
    return (
        <div>
            {posts.list.map(item => <Post title={item.title} author={item.author} id={item.id} date={item.created_utc}/>)}
        </div>
    )
}

export default PostsFeed