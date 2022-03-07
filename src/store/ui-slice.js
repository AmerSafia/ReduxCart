import { createSlice } from '@reduxjs/toolkit'

const uiSlice = createSlice({
    name: 'ui',
    initialState: { cartshow: false },
    reducers: {
        toggle(state) {
            state.cartshow = !state.cartshow
        }
    }
})
export const cartAction = uiSlice.actions

export default uiSlice