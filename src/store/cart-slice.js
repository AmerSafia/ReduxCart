import { createSlice } from "@reduxjs/toolkit"
const cartSlice = createSlice({
    name: 'ui',
    initialState: { items: [], totalQuantity: 0 },
    reducers: {
        addItemToCart(state, action) {
            const NewItem = action.payload
            const IsExistingItem = state.items.find(item => item.id === NewItem.id)
            state.totalQuantity++
            if (!IsExistingItem) {
                state.items.push({ id: NewItem.id, price: NewItem.price, quantity: 1, totalPrice: NewItem.price, name: NewItem.title })
            } else {
                IsExistingItem.quantity++
                IsExistingItem.totalPrice = IsExistingItem.totalPrice + NewItem.price

            }

        }
        , removeItemFromCart(state, action) {
            const id = action.payload
            const IsExistingItem = state.items.find(item => item.id === id)
            state.totalQuantity--
            if (IsExistingItem.quantity === 1) {
                state.items = state.items.filter(item => item.id !== id)

            } else {
                IsExistingItem.quantity--
                IsExistingItem.totalPrice = IsExistingItem.totalPrice - IsExistingItem.price

            }

        }
    }
})
export const cartAction = cartSlice.actions
export default cartSlice