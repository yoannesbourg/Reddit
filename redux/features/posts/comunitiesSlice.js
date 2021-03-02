import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const getCommunities = createAsyncThunk(
    'communities/getCommunities',
    async (link) => {
        return fetch(link)
        .then(response => response.json())
        .then(json => json.data.children.map((post) => post.data))
    }
)

export const communitiesSlice = createSlice({
    name: 'communities',
    initialState: {
        list: [],
        status: null,
    },
    extraReducers: {
        
        //Top Communities
        [getCommunities.pending]: (state) => {
            state.status = 'loading'
        },
        [getCommunities.fulfilled]: (state, {payload}) => {
            state.list = payload
            state.status = 'success'
        },
        [getCommunities.rejected]: (state) => {
            state.status = 'failed'
        }
    }
})

export default communitiesSlice.reducer