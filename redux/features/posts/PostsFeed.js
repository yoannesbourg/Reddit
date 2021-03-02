import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from './postsSlice'
import Post from '../../../components/Post'

const PostsFeed = () => {
    const  Posts  = useSelector(state => state.posts)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPosts())
    }, [dispatch])
    
    return (
        <div>
            <h1>{Posts.list.map(item => <Post title={item.title} author={item.author}/>)}</h1>
        </div>
    )
}

export default PostsFeed