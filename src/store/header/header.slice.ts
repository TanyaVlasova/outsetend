import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Header {
  height: Height;
}

type Height = number;

const initialHeader: Header = { height: 0 };

const headerSlice = createSlice({
  name: 'header',
  initialState: initialHeader,
  reducers: {
    setHeaderHeight(state, action: PayloadAction<Height>) {
      state.height = action.payload;
    },
  },
});

export const { setHeaderHeight } = headerSlice.actions;
export default headerSlice.reducer;
