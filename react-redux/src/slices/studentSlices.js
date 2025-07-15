import { createSlice } from "@reduxjs/toolkit";

const initialState={
    students:[],
}

const studentSlice=createSlice({
    name:"students",
    initialState,
    reducers:{
        addStudent:(state,action)=>{
            state.students=[...state.students,action.payload]
        },
        deleteStudent:(state,action)=>{
            state.students=state.students.filter((students,index)=>index!==action.payload)
        }
    }
});

export const {addStudent,deleteStudent}=studentSlice.actions;
export default studentSlice.reducer;