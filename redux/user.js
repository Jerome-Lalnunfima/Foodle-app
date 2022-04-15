// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// export const logout = createAsyncThunk(
//     "user/logout",
//     async (_, { rejectWithValue }) => {
//         try {
//             auth.signOut()
//             await AsyncStorage.removeItem("user");

//             return true;
//         } catch (e) {
//             return rejectWithValue(e.response.status);
//         }
//     }
// );
// export const checkAuth = createAsyncThunk(
//     "user/checkAuth",
//     async (_, { rejectWithValue }) => {
//         try {
//             const user = await AsyncStorage.getItem("user");
//             console.log(user)

//             if (user) {
//                 return user;
//             } else {
//                 return null;
//             }
//         } catch (e) {
//             return rejectWithValue(e);
//         }
//     }
// );
// export const userSlice = createSlice({
//     name: "user",
//     initialState: {
//         user: null,
//     },
//     reducers: {
//         updateUser: (state, { payload }) => {
           
//             state.user = payload;
//         },
        
    
//     },
//     extraReducers: {
//         [checkAuth.fulfilled]:(state,{payload})=> {
//             state.user=payload
//         },
//         [checkAuth.rejected]:(state,{payload})=> {
//         },
//         [logout.fulfilled]:(state,{payload})=> {
//             state.user=null
//         },
//         [logout.rejected]:(state,{payload})=> {
//         }
//     }
// })
// export const {updateUser} = userSlice.actions;
// export default userSlice.reducer;
