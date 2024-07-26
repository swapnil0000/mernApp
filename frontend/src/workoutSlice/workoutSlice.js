import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const fetchWorkouts=createAsyncThunk('/workouts/fetchWorkouts',async()=>{
    const response = await fetch('/api/workouts');
    const json = await response.json();
    return json;
})

export const createWorkouts=createAsyncThunk('/workouts/createWorkouts',async (workout)=>{
    const response = await fetch('/api/workouts', {
        method: 'POST',
        body: JSON.stringify(workout),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const data = await response.json();
    return data;
})

export const deleteWorkouts=createAsyncThunk('/workouts/deleteWorkouts',async (id)=>{
    const response = await fetch('/api/workouts/'+id, {
        method: 'DELETE',
    });
    const data = await response.json();
    return id;
})
const workoutSlice=createSlice({
    name:"workout",
    initialState:{
        items:[],
        status:'idle',
        error:null
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(fetchWorkouts.pending,(state)=>{
            state.status='loading';
        })
        .addCase(fetchWorkouts.fulfilled,(state,action)=>{
            state.items=action.payload;
            state.status="succeeded"
        })
        .addCase(fetchWorkouts.rejected,(state,action)=>{
            state.status='failed';
            state.error=action.error.message;
        })
        .addCase(createWorkouts.fulfilled,(state,action)=>{
            state.items.push(action.payload)
            state.status="new workout"
        })
        .addCase(deleteWorkouts.fulfilled,(state,action)=>{
            state.items = state.items.filter(item => item._id !== action.payload);
        })
    }
})

export default workoutSlice.reducer;