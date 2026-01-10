import { createSlice } from "@reduxjs/toolkit";


type OverlayState = {
    isOpen: boolean;
    overlayId: string | null;
};


const initialState: OverlayState = {
    isOpen: false,
    overlayId: null,
};

const overlaySlice = createSlice({
    name: 'overlay',
    initialState,
    reducers: {
        openOverlay_as: (state, action) => {
            console.log(state, action);
            state.isOpen = true;
        },

        closeOverlay: (state) => {
            state.isOpen = false;
            state.overlayId = null;
        }
    }
});

export const { openOverlay_as, closeOverlay } = overlaySlice.actions;
export default overlaySlice.reducer;