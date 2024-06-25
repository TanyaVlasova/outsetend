import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Toast {
  id: string;
  message: string;
  type: 'default' | 'success' | 'error';
}

type Toasts = { toasts: Toast[] };

const initialToasts: Toasts = {
  toasts: [],
};

const toastsSlice = createSlice({
  name: 'toasts',
  initialState: initialToasts,
  reducers: {
    addToast(state, action: PayloadAction<Toast>) {
      state.toasts.push(action.payload);
    },
    removeToast: (state, action) => {
      state.toasts = state.toasts.filter((toast) => toast.id !== action.payload);
    },
  },
});

export const { addToast, removeToast } = toastsSlice.actions;
export default toastsSlice.reducer;
