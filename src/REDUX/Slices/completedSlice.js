import { createSlice } from "@reduxjs/toolkit"

const completedSlice = createSlice({
    name: 'completed',
    initialState: [],
    reducers: {
        complete: (state, action) => {
            state.push(action.payload)
        }

    }
})
export const { complete,  } = completedSlice.actions

export default completedSlice.reducer