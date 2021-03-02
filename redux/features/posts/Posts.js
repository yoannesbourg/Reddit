import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from './postsSlice'
import Posts from './postsSlice'
import { unwrapResult } from '@reduxjs/toolkit'
import Post from '../../../components/Post'

const PostsComponent = () => {
    const  Posts  = useSelector(state => state.posts)
    const status = useSelector(state => state.status)
    console.log(status)
    console.log({Posts})
    const dispatch = useDispatch()

    useEffect(() => {
        const resultAction = dispatch(getPosts())
        console.log(resultAction)
    }, [dispatch])


    return (
        <div>
            <h1>{Posts.list.map(item => <Post title={item.title} author={item.author}/>)}</h1>
        </div>
    )
}

export default PostsComponent