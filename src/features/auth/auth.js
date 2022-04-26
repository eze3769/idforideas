import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { JSONResponse } from '../../sdk/apiFetch';
import * as auth from '../../sdk/auth';

const initialState = {
  access_token: null,
  isLogged: false,
  loading: false,
}

export const fetchLogin = createAsyncThunk(
  'auth/fetchLogin',
  async (res) => {
    const response = await auth.login(res)
    return JSONResponse(response);
  }
)
export const fetchRegister = createAsyncThunk(
  'auth/fetchRegister',
  async (data) => {
    const response = await auth.register(data)
    return JSONResponse(response);
  }
)

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(fetchLogin.fulfilled, (state, action) => {
      console.log(action.payload)
      return {
        ...state,
        access_token: action.payload.access_token,
        isLogged: true,
        loading: false,
      };
    })
    builder.addCase(fetchLogin.pending, (state) => {
      state.loading = true
    })
    builder.addCase(fetchLogin.rejected, (state, action) => {
      state.loading = false
      console.error("fetch Error on login", action.error)
    })
    builder.addCase(fetchRegister.fulfilled, (state, action) => {
      state.access_token = action.payload.access_token
      state.isLogged = true
      state.loading = false
    })
    builder.addCase(fetchRegister.pending, (state) => {
      state.loading = true
    })
    builder.addCase(fetchRegister.rejected, (state, action) => {
      state.loading = false
      console.error("fetch Error on register", action.error)
    })
  },
})


//export const {} = authSlice.actions

export default authSlice.reducer