
import { createSlice } from '@reduxjs/toolkit'

// Slice
const rootSlice = createSlice({
  
  name: "stepping",
  initialState: {
    edit: "edit",
    setting: "setting",
    movie: "movie"
  },

  reducers: {
    editStage: (state, action) => { state.edit = action.payload },
    settingStage: (state, action) => { state.setting = action.payload },
    movieStage: (state, action) => { state.movie = action.payload },

  }

})

// Actions
export const { editStage, settingStage, movieStage } = rootSlice.actions
export const reducer = rootSlice.reducer;