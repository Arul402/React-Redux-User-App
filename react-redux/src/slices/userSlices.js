import {createSlice} from '@reduxjs/toolkit'

const initialState ={
    users:[],
}

const userSlices=createSlice({
    name:"users",
    initialState,
    reducers:{
        addUser : (state,action)=>{
            state.users=[...state.users,action.payload]
        },
        deleteUser : (state,action)=>{
            state.users=state.users.filter((user,index)=>index!==action.payload)
        }
    }
})

export const {addUser,deleteUser}= userSlices.actions
export default userSlices.reducer;