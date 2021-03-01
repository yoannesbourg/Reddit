import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from './postsSlice'

const Posts = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPosts())
    }, [dispatch])

    // const post = useSelector(state => state.post.list)

    return (
        <div>
            <h1>posts ...</h1>
        </div>
    )
}

export default Posts