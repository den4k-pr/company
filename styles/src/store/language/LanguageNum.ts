import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ButtonState {
  selectedIndex: number | null;
}

const initialState: ButtonState = {
  selectedIndex: 2,
};

const buttonSlice = createSlice({
  name: 'button',
  initialState,
  reducers: {
    setSelectedIndex: (state, action: PayloadAction<number>) => {
      state.selectedIndex = action.payload;
    },
  },
});

export const { setSelectedIndex } = buttonSlice.actions;

export default buttonSlice.reducer;
