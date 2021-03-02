import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'



export const getPosts = createAsyncThunk(
    'posts/getPosts',
    async (link) => {
        return fetch(link)
        .then(response => response.json())
        .then(json => json.data.children.map((post) => post.data))
    }
)

export const searchPosts = createAsyncThunk(
    'posts/searchPosts',
    async (link) => {
        return fetch(link)
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
        //Popular
        [getPosts.pending]: (state) => {
            state.status = 'loading'
        },
        [getPosts.fulfilled]: (state, {payload}) => {
            state.list = payload
            state.status = 'success'
        },
        [getPosts.rejected]: (state) => {
            state.status = 'failed'
        },

        //Search
        [searchPosts.pending]: (state) => {
            state.status = 'loading'
        },
        [searchPosts.fulfilled]: (state, {payload}) => {
            state.list = payload
            state.status = 'success'
        },
        [searchPosts.rejected]: (state) => {
            state.status = 'failed'
        }
    }
})


export default postsSlice.reducer