import { createSlice } from "@reduxjs/toolkit";


const gptSlice = createSlice({
    name: 'gpt',
    initialState: {
        showGptSerach: false,
    },
    reducers: {
        toggleGptSearchView: (state, action) => {
            state.showGptSerach = !state.showGptSerach;
        },
    },
});


export const { toggleGptSearchView } = gptSlice.actions;
export default gptSlice.reducer;