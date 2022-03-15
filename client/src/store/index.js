import { createSlice, configureStore } from '@reduxjs/toolkit';


const initialState = {
    events: [],
    categories: [],
    isLoading: true,
    searchUrl: '/api/v1/events',
    filterOptions: 'category'
}

const eventSlice = createSlice({
    name: 'event',
    initialState,
    reducers: {
        setEvents(state, action) {
            state.events = action.payload
        },

        setCategories(state, action) {
            state.categories = action.payload
        },

        setIsLoading(state, action) {
            state.isLoading = action.payload
        },

        addFilterOption(state, action) {
            state.filterOptions = action.payload.toLowerCase()
        },

    }
})


const store = configureStore({
    reducer: eventSlice.reducer
    
});

export const eventActions = eventSlice.actions


export default store