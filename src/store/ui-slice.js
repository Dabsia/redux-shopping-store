import {createSlice} from '@reduxjs/toolkit'

// Shos if the initial cartState is visiuble
// const initialCartState = {cartIsVisible: false}

// The reducers method is a set of methods that represent all the different actions we wanna handle with that reducer

// Using the reuxjstools, we dont really mutate the state even tho it looks like thats what we are doing tho
const uiSlice = createSlice({
    name: 'ui',
    initialState:  {cartIsVisible: false},
    reducers: {
        toggle(state) {
            state.cartIsVisible = !state.cartIsVisible
        }
    }

})

export const uiActions = uiSlice.actions;

export default uiSlice