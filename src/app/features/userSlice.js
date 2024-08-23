import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const AUTH_ENDPOINT = `${import.meta.env.VITE_APP_API_ENDPOINT}/auth`;

const initialState = {
  status: "",
  error: "",
  user: {
    id: "",
    first_name: "",
    last_name: "",
    email: "",
    role: "",
    token: "",
  },
};

export const registerUser = createAsyncThunk(
  "auth/register",
  async (values, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`${AUTH_ENDPOINT}/register`, {
        ...values,
      });
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/login",
  async (values, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`${AUTH_ENDPOINT}/login`, {
        ...values,
      });
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.error.message);
    }
  }
);
export const resetPassword = createAsyncThunk(
  "auth/reset",
  async (values, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`${AUTH_ENDPOINT}/reset/password`, {
        ...values,
      });
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.error.message);
    }
  }
);
export const changePassword = createAsyncThunk(
  "auth/update",
  async ({ token, values }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`${AUTH_ENDPOINT}/change/password/${token}`, {
        ...values,
      });
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.error.message);
    }
  }
);


export const logOut = createAsyncThunk(
  "auth/logout",
  async (values, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`${AUTH_ENDPOINT}/logout`, {
        ...values,
      });
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.error.message);
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      (state.status = ""),
        (state.error = ""),
        (state.user = {
          id: "",
          first_name: "",
          last_name: "",
          email: "",
          role: "",
          token: "",
        });
    },
    changeStatus: (state, action) => {
      state.status = action.payload;
    },
  },
  extraReducers (builder) {
    builder
    .addCase(registerUser.pending, (state) => {
      state.status = "loading";
    })
    .addCase(registerUser.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.user = action.payload.user;
    })
    .addCase(registerUser.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    })
    .addCase(loginUser.pending, (state) => {
      state.status = "loading";
    })
    .addCase(loginUser.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.user = action.payload.user;
    })
    .addCase(loginUser.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    })
    .addCase(logOut.pending, (state) => {
      state.status = "loading";
    })
    .addCase(logOut.fulfilled, (state) => {
      state.status = "succeeded";
      state.user = initialState.user; // Reset user state to initial state
    })
    .addCase(logOut.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    })
    .addCase(resetPassword.pending, (state) => {
      state.status = "loading";
    })
    .addCase(resetPassword.fulfilled, (state) => {
      state.status = "succeeded";
      // You might want to set a success message here
    })
    .addCase(resetPassword.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    }) .addCase(changePassword.pending, (state) => {
      state.status = "loading";
    })
    .addCase(changePassword.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.user = action.payload.user;
    })
    .addCase(changePassword.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    })
  }
});
export const { logout, changeStatus } = userSlice.actions;
export default userSlice.reducer;
