import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            const id = state.items.findIndex((item) => action.payload.card.info.id === item.card.info.id);
            if (id !== -1) {
                state.items.splice(id, 1);
            }
        },
        clearCart: (state) => {
            state.items.length = 0;
        }
    },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;