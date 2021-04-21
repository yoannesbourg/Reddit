import { useSelector } from 'react-redux'

export const PostPage = (selectedPost) => {
    // console.log(selectedPost)
    return(
        <div>
            <h1>Post page</h1>
        </div>
    )
}

const getPostData = id => {
    const  redditStatus  = useSelector(state => state.posts)
    return redditStatus.find(element => element.id = id)
}

const getStaticPaths = () => {
    const  redditStatus  = useSelector(state => state.posts)
    const paths = redditStatus.map(post => ({
        params: {id: post.id}
    }))
}

const getStaticProps = ({params}) => {
    const selectedPost = getPostData(params.id)
    return {
        props: { selectedPost }
    }
}