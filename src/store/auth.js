import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: null,
  email: null,
  password: null,
  isLoggedIn: !!JSON.parse(localStorage.getItem('currentUser')),
};

const authSlice = createSlice({
  name: 'authentication',
  initialState: initialState,
  reducers: {
    // Lưu thông tin đăng nhập xuống LocalStorage và update state.
    login(state, action) {
      localStorage.setItem(
        'currentUser',
        JSON.stringify(action.payload.userDataObj)
      );

      state.name = action.payload.userDataObj.name;
      state.email = action.payload.userDataObj.email;
      state.password = action.payload.userDataObj.password;
      state.isLoggedIn = true;
    },
    // Xóa thông tin đăng nhập trong LocalStorage và trả về state ban đầu.
    logout() {
      localStorage.removeItem('currentUser');
      return initialState;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
