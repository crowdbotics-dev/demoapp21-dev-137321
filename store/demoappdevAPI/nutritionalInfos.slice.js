import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_nutritionalinfo_list = createAsyncThunk(
  "nutritionalInfos/api_v1_nutritionalinfo_list",
  async payload => {
    const response = await apiService.api_v1_nutritionalinfo_list(payload)
    return response.data
  }
)
export const api_v1_nutritionalinfo_create = createAsyncThunk(
  "nutritionalInfos/api_v1_nutritionalinfo_create",
  async payload => {
    const response = await apiService.api_v1_nutritionalinfo_create(payload)
    return response.data
  }
)
export const api_v1_nutritionalinfo_retrieve = createAsyncThunk(
  "nutritionalInfos/api_v1_nutritionalinfo_retrieve",
  async payload => {
    const response = await apiService.api_v1_nutritionalinfo_retrieve(payload)
    return response.data
  }
)
export const api_v1_nutritionalinfo_update = createAsyncThunk(
  "nutritionalInfos/api_v1_nutritionalinfo_update",
  async payload => {
    const response = await apiService.api_v1_nutritionalinfo_update(payload)
    return response.data
  }
)
export const api_v1_nutritionalinfo_partial_update = createAsyncThunk(
  "nutritionalInfos/api_v1_nutritionalinfo_partial_update",
  async payload => {
    const response = await apiService.api_v1_nutritionalinfo_partial_update(
      payload
    )
    return response.data
  }
)
export const api_v1_nutritionalinfo_destroy = createAsyncThunk(
  "nutritionalInfos/api_v1_nutritionalinfo_destroy",
  async payload => {
    const response = await apiService.api_v1_nutritionalinfo_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const nutritionalInfosSlice = createSlice({
  name: "nutritionalInfos",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_nutritionalinfo_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_nutritionalinfo_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_nutritionalinfo_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_nutritionalinfo_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_nutritionalinfo_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_nutritionalinfo_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_nutritionalinfo_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_nutritionalinfo_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_nutritionalinfo_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_nutritionalinfo_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_nutritionalinfo_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_nutritionalinfo_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(
        api_v1_nutritionalinfo_partial_update.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        api_v1_nutritionalinfo_partial_update.fulfilled,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.entities = state.entities.map(record =>
              record.id === action.payload.id ? action.payload : record
            )
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        api_v1_nutritionalinfo_partial_update.rejected,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.api.error = action.error
            state.api.loading = "idle"
          }
        }
      )
      .addCase(api_v1_nutritionalinfo_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_nutritionalinfo_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_nutritionalinfo_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_nutritionalinfo_list,
  api_v1_nutritionalinfo_create,
  api_v1_nutritionalinfo_retrieve,
  api_v1_nutritionalinfo_update,
  api_v1_nutritionalinfo_partial_update,
  api_v1_nutritionalinfo_destroy,
  slice: nutritionalInfosSlice
}
