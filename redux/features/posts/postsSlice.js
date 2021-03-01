import { createSlice, createAsyncThunk, unwrapResult } from '@reduxjs/toolkit'

export const getPosts = createAsyncThunk(
    'posts/getPosts',
    async () => {
        return fetch('https://www.reddit.com/r/popular.json')
        .then(response => response.json())
        .then(json => json.data.children.map((post) => post.data))
    }
)

export const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        list: [],
        status: null,
    },
    extraReducers: {
        [getPosts.pending]: (state) => {
            state.status = 'loading'
        },
        [getPosts.fulfilled]: (state, {payload}) => {
            state.list = payload
            state.status = 'success'
        },
        [getPosts.rejected]: (state, action) => {
            state.status = 'failed'
        }
    }
})

export default postsSlice.reducer