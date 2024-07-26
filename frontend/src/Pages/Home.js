import { useEffect, useState } from "react"
import WorkoutDetails from "../components/WorkoutDetails"
import WorkoutForm from "../components/WorkoutForm"
import { useDispatch, useSelector } from "react-redux"
import { fetchWorkouts } from "../workoutSlice/workoutSlice"

const Home = () => {
    const dispatch=useDispatch();
    const workouts=useSelector((state)=>state.workouts.items)
    const workoutStatus = useSelector((state) => state.workouts.status);

    console.log(workouts);
    // const [workouts, setWorkouts] = useState([])
    
    // useEffect(()=>{
    //     const fetchWorkouts=async ()=>{
    //         try {
    //             const response = await fetch('/api/workouts');
    //             const json = await response.json();

    //             if (response.ok) {
    //                 setWorkouts(json);
    //             } else {
    //                 console.error("Failed to fetch workouts:", json);
    //             }
    //         } catch (error) {
    //             console.error("Fetch error:", error);
    //         }
    //     }
    //     fetchWorkouts();
    // },[])

    useEffect(() => {
      if (workoutStatus === 'idle') {
          dispatch(fetchWorkouts());
      }
  }, [workoutStatus, dispatch]);
    return (
      <div className="home">
      <div className="workouts">
      {workouts && workouts.map((workout)=>(
        <WorkoutDetails workout={workout} key={workout._id}/>
      ))}
    </div>
    <div>
     <WorkoutForm/>
    </div>
      </div>
    )
  }
  
  export default Home