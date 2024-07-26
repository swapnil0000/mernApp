import { useDispatch } from "react-redux"
import { deleteWorkouts } from "../workoutSlice/workoutSlice";

const WorkoutDetails = ({ workout }) => {

  const dispatch=useDispatch();
  const handleDelete=(id)=>{
       dispatch(deleteWorkouts(id));
  }
  return (
  
      <div className="workout-details">
      <div>
        <h4>{workout.title}</h4>
        <p><strong>Load (kg): </strong>{workout.load}</p>
        <p><strong>Number of reps: </strong>{workout.reps}</p>
        <p>{workout.createdAt}</p>
      </div>

      <div>
        <i  onClick={() => handleDelete(workout._id)}         style={{cursor:'pointer'}} class="fa fa-trash" aria-hidden="true"></i>
      </div>
    </div>
  )
}

export default WorkoutDetails