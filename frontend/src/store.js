import {configureStore} from "@reduxjs/toolkit"
import workoutReducer from "./workoutSlice/workoutSlice"



const store=configureStore({
    reducer:{
        workouts:workoutReducer
    }
})

export default store;