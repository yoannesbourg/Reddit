import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from './postsSlice'
import Posts from './postsSlice'
import { unwrapResult } from '@reduxjs/toolkit'

const PostsComponent = () => {
    const  Posts  = useSelector(state => state.posts)
    console.log({Posts})
    const dispatch = useDispatch()

    const callUseEffect = useEffect(() => {
        const resultAction = dispatch(getPosts())
        console.log(resultAction)
    }, [dispatch])


    return (
        <div>
            <h1>{Posts.list[0].author}</h1>
        </div>
    )
}

export default PostsComponent