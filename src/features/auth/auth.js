import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { JSONResponse } from "../../sdk/apiFetch";
import * as auth from "../../sdk/auth";

const initialState = {
  access_token: null,
  isLogged: false,
  loading: false,
};

export const fetchLogin = createAsyncThunk("auth/fetchLogin", async (res) => {
  const response = await auth.login(res);
  const responseToJSON = await JSONResponse(response);

  if (!responseToJSON.status) {
    return Promise.reject();
  }
  return responseToJSON;
});
export const fetchRegister = createAsyncThunk(
  "auth/fetchRegister",
  async (data) => {
    const response = await auth.register(data);
    const responseToJSON = await JSONResponse(response);

    if (!responseToJSON.status) {
      return Promise.reject();
    }
    return responseToJSON;
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      return {
        ...state,
        access_token: null,
        isLogged: false,
      };
    },
    reLogUser: (state, action) => {
      return {
        ...state,
        access_token: action.payload ? action.payload : null,
        isLogged: !!action.payload,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchLogin.fulfilled, (state, action) => {
      if (action.payload.status) {
        return {
          ...state,
          access_token: action.payload.access_token,
          isLogged: true,
          loading: false,
        };
      } else {
        return fetchLogin.rejected("Auth error");
      }
    });
    builder.addCase(fetchLogin.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchLogin.rejected, (state, action) => {
      state.loading = false;
      console.error("fetch Error on login", action.error);
    });
    builder.addCase(fetchRegister.fulfilled, (state, action) => {
      state.access_token = action.payload.access_token;
      state.isLogged = true;
      state.loading = false;
    });
    builder.addCase(fetchRegister.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchRegister.rejected, (state, action) => {
      state.loading = false;
      console.error("fetch Error on register", action.error);
    });
  },
});

export const { logout, reLogUser } = authSlice.actions;

export default authSlice.reducer;
