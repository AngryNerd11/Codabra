
  import {createSlice} from '@reduxjs/toolkit';

export const codeSlice = createSlice({
  name: 'code',
  initialState: {
    code: '',
  },
  reducers: {
    setCode: (state, action) => {
      state.code = action.payload;
    },
  },
});

export const { setCode } = codeSlice.actions;

export const selectCode = (state) => state.code.code;

export default codeSlice.reducer;
