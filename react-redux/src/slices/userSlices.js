{/* 
    reducers can be called as reducer function.
    We can't call the reducer function directly insted,
    we can do:
            dispatch(action()) this will call the particular reducer function and then the reducer function will update the state in the store.
    
*/}
import {createSlice} from '@reduxjs/toolkit'

// initialState name can be vary according to the developer but make sure that inside the createSlice for --> initialState:<developer_initialState> 
// Eg if the developer keeps the name as userStates the inside the createSlice for --> initialState:userStates
const initialState ={
    users:[],
}

const userSlices=createSlice({
    name:"users", // here the name can be vary "not the name as same as the initialState name"
    initialState,
    reducers:{  
        addUser : (state,action)=>{ // (actual state,actions) --> first param is actual state or current state , second param is dispatch(action())
            state.users=[...state.users,action.payload] // Here state refers to the total initialState's object
            // ...state.users -> spread operator for previous value adds to the array
            // action.payload -> the data that received using the dispatch(addUser(formData)) will be stored in the action.payload
        },
        deleteUser : (state,action)=>{
            state.users=state.users.filter((user,index)=>index!==action.payload)
        }
    }
})

export const {addUser,deleteUser}= userSlices.actions // to export the actions (i.e reducer functions)
export default userSlices.reducer; // to export the total reducer we have the property named reducer. to acces from the store