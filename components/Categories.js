import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCommunities } from '../redux/features/posts/comunitiesSlice'

const Categories = () => {
    const  communities  = useSelector(state => state.communities)
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getCommunities('https://www.reddit.com/subreddits.json'))
        console.log(communities)
    }, [dispatch])
    
    return (
        <div className="bg-white   p-3 w-40 shadow mt-4 w-full rounded-lg">
            <h2 className="font-bold">Today's Top Growing Communities</h2>
            <ul>
            {communities.list.map(item => <li>{item.title}</li>)}
            </ul>
        </div>
    )
}

export default Categories